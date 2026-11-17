# 🇨🇱❤️🇵🇪 El Test de Pareja: Edición Chile-Perú

Una aplicación web interactiva y romántica de **25 preguntas** diseñada especialmente para parejas biculturales (Pololo Chileno y Polola Chilena-Peruana). 

Está optimizada para jugarse en el celular o computador, lista para alojarse gratis en **GitHub Pages** y funciona con un **bucle limpio en memoria** (no guarda datos en el navegador, para que siempre puedan empezar partidas frescas desde cero).

---

## 🎮 ¿Cómo funciona la dinámica de juego?

Cada una de las 25 preguntas alterna quién responde y quién adivina:

1. **🤫 Turno 1 (Respuesta Secreta):**  
   Uno de los dos (ej. el pololo) selecciona honestamente su respuesta sin que la pareja mire.
2. **📱🔒 Pantalla de Paso:**  
   Una cortina protege la respuesta y pide pasar el teléfono a la pareja.
3. **🕵️‍♀️ Turno 2 (La Adivinanza):**  
   La pareja (ej. ella) intenta adivinar qué respondió él.
4. **⚡ Revelación en Vivo:**  
   La pantalla muestra en paralelo:
   - *"Él respondió la B: Pastel de choclo casero..."*
   - *"Ella adivinó la B"*
   - Indica si hubo coincidencia exacta con efectos de sonido y confeti 🎉.
5. **✅ ¿Acertaste?:**  
   Permite confirmar con un clic (*¡Sí, acertó!* o *No acertó*) para sumar el punto al marcador en vivo.
6. **🏆 Veredicto Final de Compatibilidad:**  
   Al llegar a la pregunta 25, muestra el porcentaje de aciertos, el marcador individual de cada uno y un diagnóstico divertido de la pareja (¡desde "Fusión Marraqueta con Lomo Saltado" hasta "Urgente cita para conocerse más"!).
7. **🔄 Bucle Nuevo:**  
   El botón *Jugar de nuevo* reinicia todo el estado a cero al instante.

---

## 📁 Estructura del Proyecto

```
juego-pareja-chile-peru/
├── index.html       # Estructura principal, fuentes y canvas-confetti
├── style.css        # Diseño moderno, responsivo y colores Chile-Perú
├── questions.js     # Las 25 preguntas culturales y de pareja
├── app.js           # Lógica del juego, turnos dinámicos, puntaje y audio
└── README.md        # Documentación e instrucciones de publicación
```

---

## 🚀 Cómo publicarlo gratis en GitHub Pages

1. **Crea un nuevo repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new).
   - Nómbralo por ejemplo: `test-pareja-chile-peru`.
   - Déjalo en **Público (Public)**.

2. **Sube los archivos a GitHub:**
   Abre una terminal en esta carpeta y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Inicializar juego de pareja Chile-Perú"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/test-pareja-chile-peru.git
   git push -u origin main
   ```

3. **Activar GitHub Pages:**
   - En tu repositorio de GitHub, haz clic en **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
   - En **Source** (Origen), selecciona:
     - Branch: `main`
     - Folder: `/ (root)`
   - Haz clic en **Save** (Guardar).
   - En 1-2 minutos, GitHub te dará el enlace público:  
     `https://TU_USUARIO.github.io/test-pareja-chile-peru/`

¡Listo! Ya pueden abrir el link desde cualquier celular y jugar juntos. 💕
