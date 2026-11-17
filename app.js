// Estado de la aplicación en memoria (NO se guarda en localStorage ni cookies para cumplir con el bucle limpio)
let gameState = {
  player1: "Pololo Chileno 🇨🇱",
  player2: "Polola Chilena-Peruana 🇵🇪",
  currentQIndex: 0,
  scoreP1: 0, // Puntos de acierto cuando P1 adivinó sobre P2
  scoreP2: 0, // Puntos de acierto cuando P2 adivinó sobre P1
  currentStep: "setup", // 'setup' | 'answer' | 'pass' | 'guess' | 'reveal' | 'results'
  currentAnswer: null, // Opción elegida por el que responde (ej: "B")
  currentGuess: null   // Opción elegida por el que adivina (ej: "B")
};

// Efecto de sonido sintético opcional con Web Audio API (100% nativo)
function playTone(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'hit') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'miss') {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else if (type === 'pop') {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    }
  } catch (e) {
    // Audio no soportado o bloqueado por el navegador
  }
}

// Disparar confeti al acertar o al final
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

function triggerBigConfetti() {
  if (typeof confetti === 'function') {
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }
}

// Determinar quién responde y quién adivina en cada pregunta (alternando)
function getTurnInfo() {
  const isP1Responder = gameState.currentQIndex % 2 === 0;
  return {
    responder: isP1Responder ? gameState.player1 : gameState.player2,
    guesser: isP1Responder ? gameState.player2 : gameState.player1,
    responderIsP1: isP1Responder
  };
}

// Iniciar juego desde pantalla de bienvenida
function startGame() {
  const p1Input = document.getElementById('inputP1').value.trim();
  const p2Input = document.getElementById('inputP2').value.trim();

  if (p1Input) gameState.player1 = p1Input;
  if (p2Input) gameState.player2 = p2Input;

  gameState.currentQIndex = 0;
  gameState.scoreP1 = 0;
  gameState.scoreP2 = 0;
  gameState.currentStep = "answer";
  playTone('pop');
  render();
}

// Seleccionar la respuesta honesta (Fase 1)
function handleAnswerSelect(optionId) {
  gameState.currentAnswer = optionId;
  gameState.currentStep = "pass";
  playTone('pop');
  render();
}

// Pasar el dispositivo a la pareja (Fase 2)
function proceedToGuess() {
  gameState.currentStep = "guess";
  playTone('pop');
  render();
}

// Seleccionar la adivinanza (Fase 3)
function handleGuessSelect(optionId) {
  gameState.currentGuess = optionId;
  gameState.currentStep = "reveal";
  if (gameState.currentAnswer === gameState.currentGuess) {
    playTone('hit');
    triggerConfetti();
  } else {
    playTone('miss');
  }
  render();
}

// Confirmar si acertó o no
function submitScore(acerto) {
  const { responderIsP1 } = getTurnInfo();
  // Si P1 fue el que respondió, la persona que adivinaba era P2
  if (acerto) {
    if (responderIsP1) {
      gameState.scoreP2 += 1;
    } else {
      gameState.scoreP1 += 1;
    }
    playTone('hit');
    triggerConfetti();
  } else {
    playTone('miss');
  }

  // Avanzar a la siguiente pregunta o a resultados
  if (gameState.currentQIndex + 1 < QUESTIONS.length) {
    gameState.currentQIndex += 1;
    gameState.currentAnswer = null;
    gameState.currentGuess = null;
    gameState.currentStep = "answer";
  } else {
    gameState.currentStep = "results";
    triggerBigConfetti();
  }
  render();
}

// Reiniciar juego en bucle nuevo (sin persistencia)
function resetGameLoop() {
  gameState.currentQIndex = 0;
  gameState.scoreP1 = 0;
  gameState.scoreP2 = 0;
  gameState.currentAnswer = null;
  gameState.currentGuess = null;
  gameState.currentStep = "answer";
  playTone('pop');
  render();
}

// Renderizador principal del DOM
function render() {
  const appRoot = document.getElementById('app');
  const turn = getTurnInfo();
  const currentQ = QUESTIONS[gameState.currentQIndex];

  if (gameState.currentStep === 'setup') {
    appRoot.innerHTML = `
      <div class="setup-view">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
          ¿Cuánto sabes de tu pareja? 🇨🇱❤️🇵🇪
        </h2>
        <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 20px;">
          25 preguntas con toda la chispa chileno-peruana. Uno responde su verdad en secreto, el otro adivina qué puso, y luego se revela todo en vivo.
        </p>

        <div class="input-group">
          <label class="input-label">🇨🇱 Nombre del Pololo Chileno:</label>
          <input type="text" id="inputP1" class="text-input" value="${gameState.player1}" placeholder="Ej. Seba">
        </div>

        <div class="input-group">
          <label class="input-label">🇵🇪🇨🇱 Nombre de la Polola Chilena-Peruana:</label>
          <input type="text" id="inputP2" class="text-input" value="${gameState.player2}" placeholder="Ej. Vale">
        </div>

        <div class="feature-pill-list">
          <span class="feature-pill">🎯 25 Preguntas</span>
          <span class="feature-pill">🤫 Respuestas secretas</span>
          <span class="feature-pill">⚡ Revelación dinámica</span>
          <span class="feature-pill">🔄 Bucle nuevo sin guardado</span>
        </div>

        <button class="btn btn-primary" style="width: 100%; margin-top: 10px;" onclick="startGame()">
          ¡Comenzar el juego! 🚀
        </button>
      </div>
    `;
    return;
  }

  if (gameState.currentStep === 'results') {
    const totalPossibleGuessesP1 = Math.floor(QUESTIONS.length / 2);
    const totalPossibleGuessesP2 = Math.ceil(QUESTIONS.length / 2);
    const totalScore = gameState.scoreP1 + gameState.scoreP2;
    const percentage = Math.round((totalScore / QUESTIONS.length) * 100);

    let badge = "🏆";
    let titleVerdict = "";
    let descVerdict = "";

    if (percentage >= 80) {
      badge = "💖🇨🇱🇵🇪";
      titleVerdict = "¡FUSIÓN LEGENDARIA MARRAQUETA CON LOMO SALTADO!";
      descVerdict = "¡Se conocen de memoria! No hay bajón, maña ni expresión que se les escape. Tienen una conexión a prueba de cualquier terremoto o debate culinario.";
    } else if (percentage >= 60) {
      badge = "✨🥂";
      titleVerdict = "¡TREMENDA COMPLICIDAD Y AMOR!";
      descVerdict = "¡Se cachan muy bien! Saben casi todo del otro y se complementan con mucha risa y cariño. ¡Son una dupla de oro!";
    } else if (percentage >= 40) {
      badge = "🥟☕";
      titleVerdict = "¡BUEN INTENTO, FALTA AFINAR EL RADAR!";
      descVerdict = "Tienen harto cariño, pero aún quedan secretitos por descubrir. ¡La excusa perfecta para invitarse un ceviche o un completo y ponerse al día!";
    } else {
      badge = "🚨👀";
      titleVerdict = "¡URGENTE CITA DOBLE PARA CONOCERSE MÁS!";
      descVerdict = "¡Jajaja! Parece que viven en realidades paralelas o se hicieron los misteriosos. ¡Toca maratón de preguntas con piscola y pisco sour!";
    }

    appRoot.innerHTML = `
      <div class="results-view">
        <div class="trophy-badge">${badge}</div>
        <div class="result-verdict">${titleVerdict}</div>
        <p class="result-desc">${descVerdict}</p>

        <div class="final-scores">
          <div class="final-card">
            <div class="final-who">${gameState.player1}</div>
            <div class="final-num">${gameState.scoreP1}</div>
            <div style="font-size: 0.75rem; color: #64748b;">aciertos adivinando</div>
          </div>
          <div class="final-card">
            <div class="final-who">${gameState.player2}</div>
            <div class="final-num">${gameState.scoreP2}</div>
            <div style="font-size: 0.75rem; color: #64748b;">aciertos adivinando</div>
          </div>
        </div>

        <div style="background: #fdf2f8; border-radius: 12px; padding: 14px; margin-bottom: 24px; font-weight: 700; color: #be185d;">
          Compatibilidad Total de la Pareja: ${percentage}% (${totalScore} de ${QUESTIONS.length} aciertos)
        </div>

        <button class="btn btn-primary" style="width: 100%;" onclick="resetGameLoop()">
          🔄 Jugar de nuevo (Bucle nuevo)
        </button>
      </div>
    `;
    return;
  }

  // Vistas activas del juego (Answer, Pass, Guess, Reveal)
  const progressPercent = ((gameState.currentQIndex + 1) / QUESTIONS.length) * 100;

  let contentHtml = '';

  // 1. FASE DE RESPUESTA SECRETA
  if (gameState.currentStep === 'answer') {
    contentHtml = `
      <div class="step-banner step-answer">
        <span>🤫</span>
        <span><b>${turn.responder}</b>: responde con tu verdad (¡que tu pareja no mire!)</span>
      </div>

      <div class="question-tag">Pregunta ${gameState.currentQIndex + 1} de ${QUESTIONS.length} • ${currentQ.title}</div>
      <div class="question-text">${currentQ.question}</div>
      <div class="question-hint">💡 Pista interior: ${currentQ.hint}</div>

      <div class="options-grid">
        ${currentQ.options.map(opt => `
          <button class="option-btn" onclick="handleAnswerSelect('${opt.id}')">
            <span class="opt-badge">${opt.id}</span>
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  // 2. FASE DE PASAR EL DISPOSITIVO
  else if (gameState.currentStep === 'pass') {
    contentHtml = `
      <div class="privacy-overlay">
        <div class="privacy-icon">📱🔒</div>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: #1e293b; margin-bottom: 8px;">
          ¡Respuesta guardada en secreto!
        </h3>
        <p style="font-size: 0.9rem; color: #64748b; line-height: 1.5; margin-bottom: 24px;">
          Pasa el teléfono a <b>${turn.guesser}</b> para que intente adivinar qué respondiste.
        </p>
        <button class="btn btn-primary" style="width: 100%;" onclick="proceedToGuess()">
          Soy ${turn.guesser}, ¡estoy listo/a para adivinar! 👉
        </button>
      </div>
    `;
  }

  // 3. FASE DE ADIVINAR
  else if (gameState.currentStep === 'guess') {
    contentHtml = `
      <div class="step-banner step-guess">
        <span>🕵️‍♀️</span>
        <span><b>${turn.guesser}</b>: ¿Qué crees que respondió <b>${turn.responder}</b>?</span>
      </div>

      <div class="question-tag">Pregunta ${gameState.currentQIndex + 1} de ${QUESTIONS.length} • ${currentQ.title}</div>
      <div class="question-text">${currentQ.question}</div>
      <div class="question-hint">💭 Piensa bien: ¿cuál de estas eligió tu pareja?</div>

      <div class="options-grid">
        ${currentQ.options.map(opt => `
          <button class="option-btn" onclick="handleGuessSelect('${opt.id}')">
            <span class="opt-badge">${opt.id}</span>
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
    `;
  }

  // 4. FASE DE REVELACIÓN EN VIVO Y VALIDACIÓN DE PUNTAJE
  else if (gameState.currentStep === 'reveal') {
    const truthOpt = currentQ.options.find(o => o.id === gameState.currentAnswer);
    const guessOpt = currentQ.options.find(o => o.id === gameState.currentGuess);
    const isHit = gameState.currentAnswer === gameState.currentGuess;

    contentHtml = `
      <div class="step-banner step-reveal">
        <span>⚡</span>
        <span><b>¡Momento de la verdad!</b> Revelación de respuestas</span>
      </div>

      <div class="question-tag">Pregunta ${gameState.currentQIndex + 1} de ${QUESTIONS.length}</div>
      <div class="question-text">${currentQ.question}</div>

      <div class="reveal-box">
        <div class="match-status ${isHit ? 'hit' : 'miss'}">
          ${isHit ? '🎉 ¡LE ACHUNTASTE / ACERTASTE! 🎉' : '😅 ¡NO COINCIDIERON!'}
        </div>

        <div class="comparison-grid">
          <div class="compare-card truth">
            <div class="compare-label">Lo que respondió ${turn.responder}:</div>
            <div class="compare-val">
              <b>Opción ${truthOpt.id}:</b> ${truthOpt.text}
            </div>
          </div>

          <div class="compare-card guess">
            <div class="compare-label">Lo que adivinó ${turn.guesser}:</div>
            <div class="compare-val">
              <b>Opción ${guessOpt.id}:</b> ${guessOpt.text}
            </div>
          </div>
        </div>

        <p style="font-size: 0.88rem; font-weight: 600; color: #475569; margin: 16px 0 10px;">
          ¿Acertaste? Confirma el puntaje para ${turn.guesser}:
        </p>

        <div class="actions-row">
          <button class="btn btn-success" onclick="submitScore(true)">
            ✅ ¡Sí, acertó! (+1)
          </button>
          <button class="btn btn-danger" onclick="submitScore(false)">
            ❌ No acertó (0)
          </button>
        </div>
      </div>
    `;
  }

  // Render envolvente con Marcador en vivo y barra de progreso
  appRoot.innerHTML = `
    <!-- Marcador en Vivo -->
    <div class="scoreboard">
      <div class="player-score ${turn.guesser === gameState.player1 ? 'active' : ''}">
        <span class="score-name">🇨🇱 ${gameState.player1}</span>
        <span class="score-val">${gameState.scoreP1}</span>
      </div>
      <div class="score-vs">VS</div>
      <div class="player-score ${turn.guesser === gameState.player2 ? 'active' : ''}">
        <span class="score-name">🇵🇪 ${gameState.player2}</span>
        <span class="score-val">${gameState.scoreP2}</span>
      </div>
    </div>

    <!-- Progreso -->
    <div class="progress-wrap">
      <div class="progress-info">
        <span>Pregunta ${gameState.currentQIndex + 1} de ${QUESTIONS.length}</span>
        <span>${Math.round(progressPercent)}% completado</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
    </div>

    <!-- Contenido dinámico del paso actual -->
    ${contentHtml}
  `;
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  render();
});
