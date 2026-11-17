// 25 Preguntas especialmente diseñadas para pareja Chilena-Peruana 🇨🇱🇵🇪
// Mezcla de costumbres, comidas, modismos, convivencia y dinámicas de pareja

const QUESTIONS = [
  {
    id: 1,
    title: "El eterno dilema culinario",
    question: "Si tuviéramos que elegir un solo plato para comer el resto de la vida juntos, ¿cuál elegiría yo?",
    options: [
      { id: "A", text: "Lomo saltado jugosito con arroz y papas fritas" },
      { id: "B", text: "Pastel de choclo casero bien dorado" },
      { id: "C", text: "Ceviche mixto con su chanchita y camote" },
      { id: "D", text: "Un completo italiano gigante en marraqueta" }
    ],
    hint: "Piensa en cuál pide siempre que tiene hambre de verdad."
  },
  {
    id: 2,
    title: "La hora del picoteo / bajón",
    question: "¿Cuál es mi bajón nocturno o antojo infalible?",
    options: [
      { id: "A", text: "Salchipapa con todas las cremas (tártara, golf, ají)" },
      { id: "B", text: "Un tocomple o churrasco palta-mayo" },
      { id: "C", text: "Empanada de pino recién horneada o frita de queso" },
      { id: "D", text: "Un postre dulce (suspiro limeño o torta milhojas)" }
    ],
    hint: "El que salva cualquier noche de series."
  },
  {
    id: 3,
    title: "El gran debate del Pisco",
    question: "Sinceramente, cuando preparamos un trago en casa, ¿qué prefiero tomar?",
    options: [
      { id: "A", text: "Piscola bien cabezona con hielito y limón" },
      { id: "B", text: "Pisco Sour estilo peruano (con clara de huevo y amargo de angostura)" },
      { id: "C", text: "Chilcano bien refrescante con ginger ale" },
      { id: "D", text: "Cerveza helada o jugo natural, sin polémicas" }
    ],
    hint: "Cuidado con la diplomacia internacional."
  },
  {
    id: 4,
    title: "El desayuno perfecto de domingo",
    question: "¿Cómo es mi desayuno soñado para regalonear un fin de semana?",
    options: [
      { id: "A", text: "Pan con chicharrón, camote frito y salsa criolla" },
      { id: "B", text: "Marraqueta tostada con harta palta y huevo revuelto" },
      { id: "C", text: "Tamalito con su café pasado caliente" },
      { id: "D", text: "Pancakes dulces con manjar / dulce de leche y frutas" }
    ],
    hint: "El que me hace despertar con una sonrisa."
  },
  {
    id: 5,
    title: "Bebida de cabecera",
    question: "Si estamos almorzando, ¿qué bebida elijo a ojos cerrados?",
    options: [
      { id: "A", text: "Inca Kola bien helada (la de oro)" },
      { id: "B", text: "Chicha morada casera con su toque de limón y manzana" },
      { id: "C", text: "Bebida clásica (Coca-Cola / Sprite / Fanta)" },
      { id: "D", text: "Agüita mineral o jugo de maracuyá" }
    ],
    hint: "¿Amarilla, morada o con gas?"
  },
  {
    id: 6,
    title: "La reacción al estrés o enojo",
    question: "Cuando algo me da mucha rabia o frustración, ¿cuál es mi expresión más típica?",
    options: [
      { id: "A", text: "Soltar un '¡Puta la hueá!' o '¡Chucha!' con toda el alma" },
      { id: "B", text: "Decir '¡Asu mare!', '¡Qué palta!' o '¡Ptm!' bien indignado/a" },
      { id: "C", text: "Quedarme en silencio total y poner cara seria hasta que pase" },
      { id: "D", text: "Reírme de los nervios y quejarme con detalles" }
    ],
    hint: "Lo primero que sale de mi boca."
  },
  {
    id: 7,
    title: "La salida a comer ideal",
    question: "Si hoy yo elijo el restaurante para salir en cita, ¿a dónde vamos?",
    options: [
      { id: "A", text: "A un Chifa a pedir chaufa especial y wantanes fritos" },
      { id: "B", text: "A una sanguchería clásica (fuente de soda chilena)" },
      { id: "C", text: "A una cevichería marina con su jalea mixta" },
      { id: "D", text: "A comer sushi o hamburguesas gourmet bien chancho" }
    ],
    hint: "La opción que nunca rechazo."
  },
  {
    id: 8,
    title: "Próximo viaje soñado juntos",
    question: "Si nos regalan pasajes ahora mismo para viajar en pareja, ¿dónde quiero ir?",
    options: [
      { id: "A", text: "Cusco, Valle Sagrado y Machu Picchu" },
      { id: "B", text: "San Pedro de Atacama o Carretera Austral en el sur de Chile" },
      { id: "C", text: "Playa y sol (Máncora / Punta Sal)" },
      { id: "D", text: "Un destino internacional nuevo fuera de Sudamérica" }
    ],
    hint: "¿Naturaleza mística, paisajes del sur o playita relax?"
  },
  {
    id: 9,
    title: "El picor y el ají",
    question: "¿Cómo me gusta el picante en la comida?",
    options: [
      { id: "A", text: "¡Sin miedo al éxito! Con rocoto, ají limo o ají verde generoso" },
      { id: "B", text: "Un toque moderado para darle sabor sin que arda el alma" },
      { id: "C", text: "Solo pebre chileno suavecito o crema de huacaína" },
      { id: "D", text: "Cero picante, sufro con una sola gota" }
    ],
    hint: "Acuérdate de cómo reacciono cuando la salsa pica de verdad."
  },
  {
    id: 10,
    title: "Rutina matutina y sueño",
    question: "En las mañanas, ¿cómo soy realmente?",
    options: [
      { id: "A", text: "Cinco minutos más... apago 6 alarmas antes de pararme" },
      { id: "B", text: "Me levanto al tiro con energía y listo/a para el día" },
      { id: "C", text: "Zombie total hasta que no me tomo mi primer café o té" },
      { id: "D", text: "Me quedo pegado/a mirando el celular media hora en la cama" }
    ],
    hint: "Tú me ves despertar todos los días."
  },
  {
    id: 11,
    title: "¿Quién se demora más en arreglarse?",
    question: "Cuando tenemos una fiesta o salida elegante, ¿quién suele demorarse más?",
    options: [
      { id: "A", text: "Yo, porque pruebo 3 tenidas distintas antes de convencerme" },
      { id: "B", text: "Tú, yo siempre estoy listo/a 20 minutos antes esperándote" },
      { id: "C", text: "Empate técnico, los dos nos demoramos un siglo" },
      { id: "D", text: "Ninguno, somos modo flash y salimos rápido" }
    ],
    hint: "Sé sincero/a con la verdad de los hechos."
  },
  {
    id: 12,
    title: "Termostato de la cama",
    question: "¿Cómo soy con la temperatura a la hora de dormir?",
    options: [
      { id: "A", text: "Friolento/a extremo/a: tapado/a hasta las orejas y con patas heladas" },
      { id: "B", text: "Un horno andante: paso calor y duermo con un pie afuera" },
      { id: "C", text: "Equilibrado/a, pero siempre te robo el plumón o la frazada" },
      { id: "D", text: "Depende del día, pero siempre buscando cucharita" }
    ],
    hint: "Acuérdate de cómo te toco los pies en invierno."
  },
  {
    id: 13,
    title: "La música en los viajes / aseo de la casa",
    question: "Si me toca poner música para limpiar o en un viaje en auto, ¿qué suena primero?",
    options: [
      { id: "A", text: "Cumbia clásica o chicha (Armonía 10, Grupo 5, Chico Trujillo)" },
      { id: "B", text: "Reggaetón viejito / nuevo para perrear mientras barro" },
      { id: "C", text: "Rock latino (Los Prisioneros, Soda, Pedro Suárez-Vértiz, etc.)" },
      { id: "D", text: "Baladas románticas o pop para cantar a todo pulmón" }
    ],
    hint: "La playlist que me sé de memoria."
  },
  {
    id: 14,
    title: "Después de una discusión tonta",
    question: "Cuando tenemos un desacuerdo o nos picamos, ¿qué suelo hacer?",
    options: [
      { id: "A", text: "Hacer caras o bromas tontas a los 10 minutos para romper el hielo" },
      { id: "B", text: "Necesito mi espacio un rato a solas antes de hablar tranquilos" },
      { id: "C", text: "Pedir perdón rápido porque odio estar distanciados" },
      { id: "D", text: "Ofrecer comida rica o regalonear como señal de paz" }
    ],
    hint: "Nuestra dinámica de reconciliación."
  },
  {
    id: 15,
    title: "El plan de viernes por la noche",
    question: "¿Cuál es mi panorama ideal un viernes después de una semana pesada?",
    options: [
      { id: "A", text: "Quedarnos en pijama, pedir delivery rico y maratonear serie/pelis" },
      { id: "B", text: "Salir a un bar o restaurant bonito a tomar algo y conversar" },
      { id: "C", text: "Carrete con amigos hasta tarde" },
      { id: "D", text: "Cocinar algo rico juntos en casa con musiquita de fondo" }
    ],
    hint: "¿Batería social cargada o modo capullo?"
  },
  {
    id: 16,
    title: "Celos y territorialidad tierna",
    question: "En una escala de celos entre pareja, ¿dónde me ubicarías?",
    options: [
      { id: "A", text: "Cero celoso/a, confío a ojos cerrados y soy relajado/a" },
      { id: "B", text: "Tengo mi radar discreto bien activo aunque me haga el/la loco/a" },
      { id: "C", text: "Pucherito tierno y drama chistoso si alguien te mira mucho" },
      { id: "D", text: "Cuidado con lo mío, marco territorio como león/leona" }
    ],
    hint: "Acuérdate de alguna miradita sospechosa."
  },
  {
    id: 17,
    title: "La maña al comer",
    question: "¿Cuál es mi maña o cosa que NO soporto en la comida?",
    options: [
      { id: "A", text: "Las verduras amargas / cebolla cruda si no está bien lavada" },
      { id: "B", text: "La comida tibia o fría (tiene que estar hirviendo o fresca)" },
      { id: "C", text: "Que los sabores se mezclen raro en el plato" },
      { id: "D", text: "¡Ninguna! Soy un basurero feliz y como de todo sin quejarme" }
    ],
    hint: "Lo que siempre saco a la orilla del plato o comento."
  },
  {
    id: 18,
    title: "Lenguaje de amor dominante",
    question: "¿De qué forma siento y demuestro más mi cariño hacia ti?",
    options: [
      { id: "A", text: "Contacto físico (abrazos, besitos de la nada, regaloneo)" },
      { id: "B", text: "Actos de servicio (cocinarte, traerte algo rico, ayudarte)" },
      { id: "C", text: "Palabras de afirmación ('te amo', piropos, agradecimientos)" },
      { id: "D", text: "Tiempo de calidad exclusivo (charlar sin pantallas, pasear)" }
    ],
    hint: "Lo que más hago cuando estoy enamorado/a."
  },
  {
    id: 19,
    title: "La compras en el supermercado",
    question: "Cuando vamos de compras juntos, ¿cuál es mi tentación fija?",
    options: [
      { id: "A", text: "Chucherías/golosinas dulces (chocolates, galletitas)" },
      { id: "B", text: "Snacks salados (papas fritas, chifles, frutos secos, quesitos)" },
      { id: "C", text: "Cosas para la casa o cocina que no estaban en la lista" },
      { id: "D", text: "Voy estricto/a con la lista y no dejo que eches tonteras al carro" }
    ],
    hint: "Lo que aparece mágicamente en la caja."
  },
  {
    id: 20,
    title: "El apodo o forma de llamarte",
    question: "Cuando te llamo con cariño sincero en la intimidad, ¿qué suelo decir más?",
    options: [
      { id: "A", text: "'Mi amor' o 'Amorcito'" },
      { id: "B", text: "'Gordi', 'Chanchi' o 'Bebé'" },
      { id: "C", text: "'Mi vida' o 'Cariño'" },
      { id: "D", text: "Un apodo inventado super específico y ridículo que solo entendemos nosotros" }
    ],
    hint: "El que suena todos los días por la casa."
  },
  {
    id: 21,
    title: "Películas y series juntos",
    question: "A la hora de elegir qué ver en la tele, ¿qué pasa casi siempre?",
    options: [
      { id: "A", text: "Nos pasamos 40 minutos buscando en Netflix y terminamos viendo lo de siempre" },
      { id: "B", text: "Yo siempre tengo una lista lista de cosas buenas para ver" },
      { id: "C", text: "A los 15 minutos de empezar la película ya me estoy quedando dormido/a" },
      { id: "D", text: "Pongo pausa a cada rato para comentar la trama o hacer preguntas" }
    ],
    hint: "El clásico de nuestras noches de streaming."
  },
  {
    id: 22,
    title: "El rol en las fiestas y reuniones familiares",
    question: "En un cumpleaños o almuerzo con la familia chilena o peruana, ¿cómo me comporto?",
    options: [
      { id: "A", text: "El alma de la fiesta: conversando con las tías, sirviendo y bromeando" },
      { id: "B", text: "Al lado tuyo casi todo el tiempo, piola y en confianza" },
      { id: "C", text: "Pegado/a a la mesa donde está la comida rica repitiendo plato" },
      { id: "D", text: "Echando la talla con los primos o jugando con los niños/perritos" }
    ],
    hint: "Dónde me encuentras después de 1 hora de evento."
  },
  {
    id: 23,
    title: "¿Quién es más gastador/a?",
    question: "Con la platita y las finanzas, ¿quién suele antojarse más?",
    options: [
      { id: "A", text: "Yo, me tiento rápido con cosas bonitas o delivery" },
      { id: "B", text: "Tú, vives diciendo 'para eso trabajo' y te compras cosas" },
      { id: "C", text: "Los dos somos ahorrativos y cuidamos cada peso/sol" },
      { id: "D", text: "Los dos somos un peligro juntos con la tarjeta en el mall" }
    ],
    hint: "¿Quién dice más seguido 'nos merecemos un gustito'?"
  },
  {
    id: 24,
    title: "El detalle que más amo de nuestra relación",
    question: "¿Qué es lo que más atesoro de nuestra mezcla Chilena-Peruana?",
    options: [
      { id: "A", text: "La comida increíble: fusionamos lo mejor de ambos países a diario" },
      { id: "B", text: "Las risas con los modismos cruzados ('weón', 'causa', 'al tiro', 'ya pe')" },
      { id: "C", text: "La calidez y el cariño incondicional con el que nos cuidamos" },
      { id: "D", text: "Que somos el mejor equipo y nos complementamos a la perfección" }
    ],
    hint: "La magia de tener dos culturas en un solo corazón."
  },
  {
    id: 25,
    title: "Veredicto final de amor",
    question: "Si tuvieras que definirnos en una sola frase:",
    options: [
      { id: "A", text: "La mejor coincidencia de nuestras vidas 💖" },
      { id: "B", text: "Un lomo a lo pobre con ají criollo: sabrosos y únicos ✨" },
      { id: "C", text: "Compañeros de vida para todas las batallas y viajes 🚀" },
      { id: "D", text: "Todas las anteriores y mucho más 🥰" }
    ],
    hint: "La respuesta que sale directo del corazón."
  }
];
