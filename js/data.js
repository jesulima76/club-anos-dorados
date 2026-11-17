/* =========================================================
   Base de datos – Club de Los Años Dorados
   76 actividades del pliego "Propuesta 1"
   ========================================================= */

const CATEGORIAS = {
  recreativas:  { nombre: "Recreativas y Entretenimiento", emoji: "🎉" },
  memoria:      { nombre: "Memoria y Mente Activa",        emoji: "🧠" },
  espirituales: { nombre: "Espirituales y Crecimiento Interior", emoji: "🕊️" },
  desarrollo:   { nombre: "Desarrollo Personal y Autoestima", emoji: "🌟" },
  artisticas:   { nombre: "Artísticas y Manualidades",     emoji: "🎨" },
  movimiento:   { nombre: "Movimiento Suave y Bienestar",  emoji: "🧘" }
};

const ACTIVIDADES = [

  /* ============ 1. RECREATIVAS (1–12) ============ */
  {
    id: 1, cat: "recreativas",
    titulo: "El karaoke de nuestros recuerdos",
    icono: "🎤",
    metodo: "Cada participante elige una canción de su juventud. Se reproducen canciones conocidas de los años 50, 60, 70, 80 y 90. Se canta individualmente o en grupo. Nadie está obligado a cantar; también puede participar escuchando.",
    materiales: "Teléfono celular, parlante, letras impresas opcionales."
  },
  {
    id: 2, cat: "recreativas",
    titulo: "Adivina la canción",
    icono: "🎵",
    metodo: "El recreador reproduce entre 5 y 10 segundos de una canción. Los participantes deben adivinar su nombre, cantante o época. Se pueden formar equipos.",
    materiales: "Celular, parlante, lista de canciones."
  },
  {
    id: 3, cat: "recreativas",
    titulo: "La caja de las sorpresas",
    icono: "🎁",
    metodo: "Se introduce en una caja una serie de objetos cotidianos. Un participante toma uno sin mirar y, mediante el tacto, debe adivinar qué es. También puede contar para qué lo utilizaba antiguamente.",
    materiales: "Caja de cartón, pañuelo y objetos seguros como peine, cuchara, llave grande, pelota o taza."
  },
  {
    id: 4, cat: "recreativas",
    titulo: "El bingo de las canciones",
    icono: "🎶",
    metodo: "En lugar de números, cada cartón contiene títulos de canciones o nombres de cantantes. Se reproducen las canciones y los participantes marcan las que reconocen.",
    materiales: "Cartones elaborados a mano, lápices, celular y parlante."
  },
  {
    id: 5, cat: "recreativas",
    titulo: "Tarde de talentos",
    icono: "🌟",
    metodo: "Cada integrante puede mostrar algo que sabe hacer: cantar, recitar, contar chistes, bailar sentado, narrar historias, dibujar o realizar una manualidad. No es un concurso.",
    materiales: "Los que requiera cada talento; generalmente ninguno."
  },
  {
    id: 6, cat: "recreativas",
    titulo: "El concurso de refranes",
    icono: "📜",
    metodo: "El coordinador comienza un refrán y los participantes deben completarlo. También pueden explicar su significado o contar una anécdota relacionada.",
    materiales: "Tarjetas con refranes escritos."
  },
  {
    id: 7, cat: "recreativas",
    titulo: "¿Quién soy?",
    icono: "🎭",
    metodo: "Se coloca una tarjeta en la frente de cada participante con el nombre de un personaje famoso, cantante, artista o figura histórica. Mediante preguntas de sí o no, debe descubrir quién es.",
    materiales: "Papel, cinta adhesiva y lápices."
  },
  {
    id: 8, cat: "recreativas",
    titulo: "La hora de los chistes",
    icono: "😂",
    metodo: "Cada persona comparte un chiste, una anécdota humorística o una situación graciosa que haya vivido. Se puede elegir al 'contador de chistes del día'.",
    materiales: "Ninguno."
  },
  {
    id: 9, cat: "recreativas",
    titulo: "Juegos de mesa rotativos",
    icono: "🎲",
    metodo: "Se organizan mesas de dominó, cartas, ludo, damas, ajedrez o bingo. Cada 30 minutos, quien desee puede cambiar de mesa y conocer nuevos compañeros.",
    materiales: "Juegos que ya posee el club."
  },
  {
    id: 10, cat: "recreativas",
    titulo: "El teléfono descompuesto",
    icono: "📞",
    metodo: "El coordinador susurra una frase al oído de la primera persona. Esta la transmite a la siguiente y así sucesivamente. Al final se compara la frase original con la que llegó.",
    materiales: "Ninguno."
  },
  {
    id: 11, cat: "recreativas",
    titulo: "Tarde de cine y conversación",
    icono: "🎬",
    metodo: "Se proyecta una película antigua, comedia, documental o película con valores humanos. Al terminar, se conversa sobre lo que más gustó y las enseñanzas.",
    materiales: "Televisor o computadora, película, sillas."
  },
  {
    id: 12, cat: "recreativas",
    titulo: "La fiesta de una época",
    icono: "🎉",
    metodo: "Una vez al mes se organiza una tarde temática: años 60, años 70, música venezolana, boleros, gaitas, cumpleaños del mes o carnaval. Los asistentes pueden vestirse con algún accesorio alusivo.",
    materiales: "Música, adornos reciclados, accesorios prestados."
  },

  /* ============ 2. MEMORIA (13–32) ============ */
  {
    id: 13, cat: "memoria",
    titulo: "El baúl de los recuerdos",
    icono: "📦",
    metodo: "Cada participante lleva, si lo desea, una fotografía, objeto antiguo o recuerdo personal. Cuenta su historia y lo que representa en su vida.",
    materiales: "Fotografías, objetos personales y una mesa."
  },
  {
    id: 14, cat: "memoria",
    titulo: "¿Qué había sobre la mesa?",
    icono: "🔍",
    metodo: "Se colocan 10 objetos sobre una mesa. Todos los observan durante un minuto. Luego se cubren y los participantes intentan recordar la mayor cantidad posible.",
    materiales: "Pañuelo o tela y objetos cotidianos."
  },
  {
    id: 15, cat: "memoria",
    titulo: "Palabras encadenadas",
    icono: "🔗",
    metodo: "Una persona dice una palabra y la siguiente debe mencionar otra que comience con la última letra de la anterior. Por ejemplo: casa → avión → naranja.",
    materiales: "Ninguno."
  },
  {
    id: 16, cat: "memoria",
    titulo: "El abecedario de los recuerdos",
    icono: "🔤",
    metodo: "Se escoge una letra. Cada persona menciona un nombre, lugar, alimento, canción o recuerdo que comience con esa letra.",
    materiales: "Papel y lápiz opcionales."
  },
  {
    id: 17, cat: "memoria",
    titulo: "Trivia de nuestra juventud",
    icono: "❓",
    metodo: "Se preparan preguntas sobre historia, cultura popular, música, deportes, acontecimientos y costumbres de las décadas que vivieron los participantes.",
    materiales: "Preguntas impresas o escritas en tarjetas."
  },
  {
    id: 18, cat: "memoria",
    titulo: "Completa la historia",
    icono: "📖",
    metodo: "El coordinador comienza una historia con una frase. Cada participante agrega una oración para continuarla. Al final se obtiene un relato colectivo divertido.",
    materiales: "Ninguno; papel para escribir la historia final si se desea."
  },
  {
    id: 19, cat: "memoria",
    titulo: "Crucigramas colectivos",
    icono: "✏️",
    metodo: "Se coloca un crucigrama grande en una pizarra o papel. Todos colaboran para resolverlo.",
    materiales: "Crucigramas impresos, lápices o pizarra."
  },
  {
    id: 20, cat: "memoria",
    titulo: "Sopa de letras temática",
    icono: "🔠",
    metodo: "Se realizan sopas de letras con temas como Venezuela, frutas, animales, religión, música o profesiones.",
    materiales: "Hojas impresas y lápices."
  },
  {
    id: 21, cat: "memoria",
    titulo: "El juego de las diferencias",
    icono: "🖼️",
    metodo: "Se presentan dos imágenes similares y los asistentes deben identificar las diferencias.",
    materiales: "Imágenes impresas."
  },
  {
    id: 22, cat: "memoria",
    titulo: "¿Qué objeto ha cambiado?",
    icono: "🔎",
    metodo: "Se colocan objetos sobre una mesa. Los participantes los observan. Luego se cambia la posición de uno o se retira un objeto y deben identificar el cambio.",
    materiales: "8 a 12 objetos pequeños y una mesa."
  },
  {
    id: 23, cat: "memoria",
    titulo: "La palabra prohibida",
    icono: "🚫",
    metodo: "Conversar sobre un tema sin mencionar una palabra determinada. Por ejemplo, hablar de frutas sin decir 'manzana'.",
    materiales: "Tarjetas con palabras."
  },
  {
    id: 24, cat: "memoria",
    titulo: "Recordando nuestra ciudad",
    icono: "🏙️",
    metodo: "Nombrar lugares, plazas, comercios, calles, personajes y costumbres del lugar donde vivieron.",
    materiales: "Fotografías antiguas opcionales."
  },
  {
    id: 25, cat: "memoria",
    titulo: "La receta de mi familia",
    icono: "🍲",
    metodo: "Cada integrante describe una receta que preparaba su madre, abuela o familia. Se crea un recetario colectivo.",
    materiales: "Cuaderno, lápices y hojas."
  },
  {
    id: 26, cat: "memoria",
    titulo: "Ordenando la historia",
    icono: "📋",
    metodo: "Se entregan tarjetas con acontecimientos de una historia o proceso cotidiano desordenados. El grupo debe ponerlos en secuencia.",
    materiales: "Tarjetas de papel."
  },
  {
    id: 27, cat: "memoria",
    titulo: "El desafío matemático cotidiano",
    icono: "🧮",
    metodo: "Resolver problemas sencillos de compras, cambio de dinero, medidas, cantidades o cálculo mental.",
    materiales: "Pizarra, papel y lápices."
  },
  {
    id: 28, cat: "memoria",
    titulo: "Adivinanzas populares",
    icono: "🎯",
    metodo: "Se leen adivinanzas tradicionales y se invita a resolverlas colectivamente.",
    materiales: "Tarjetas o lista de adivinanzas."
  },
  {
    id: 29, cat: "memoria",
    titulo: "El diccionario de palabras antiguas",
    icono: "📚",
    metodo: "Cada participante propone palabras que se usaban antiguamente y explica su significado. Se crea un pequeño diccionario de expresiones tradicionales.",
    materiales: "Cuaderno."
  },
  {
    id: 30, cat: "memoria",
    titulo: "Conversación sobre una fotografía",
    icono: "📷",
    metodo: "Se muestra una imagen antigua de una boda, escuela, plaza o familia. Los asistentes describen lo que observan e imaginan cómo era aquella época.",
    materiales: "Fotografías impresas."
  },
  {
    id: 31, cat: "memoria",
    titulo: "El juego de las categorías",
    icono: "🗂️",
    metodo: "Se elige una categoría (animales, ciudades, alimentos, profesiones). Cada persona dice un elemento diferente sin repetir los anteriores.",
    materiales: "Ninguno."
  },
  {
    id: 32, cat: "memoria",
    titulo: "Pictionary de la tercera edad",
    icono: "🎨",
    metodo: "Un participante dibuja un objeto, una profesión o una acción y los demás intentan adivinar.",
    materiales: "Papel, lápices o pizarra."
  },

  /* ============ 3. ESPIRITUALES (33–44) ============ */
  {
    id: 33, cat: "espirituales",
    titulo: "El círculo de la gratitud",
    icono: "🙏",
    metodo: "Cada persona comparte algo por lo que se siente agradecida ese día: la familia, la amistad, la salud, un alimento, una conversación o la vida.",
    materiales: "Ninguno."
  },
  {
    id: 34, cat: "espirituales",
    titulo: "Lectura y reflexión del Evangelio",
    icono: "📖",
    metodo: "Se lee un pasaje breve del Evangelio. Después, los asistentes comparten qué enseñanza les deja y cómo pueden aplicarla en su vida cotidiana.",
    materiales: "Biblia impresa o digital."
  },
  {
    id: 35, cat: "espirituales",
    titulo: "Rosario comunitario",
    icono: "📿",
    metodo: "Se organiza un momento de oración del Santo Rosario, por las familias, los enfermos, los fallecidos y las necesidades de la comunidad.",
    materiales: "Rosarios; opcionalmente, una imagen religiosa."
  },
  {
    id: 36, cat: "espirituales",
    titulo: "El árbol de las bendiciones",
    icono: "🌳",
    metodo: "Cada participante escribe en una hoja de papel una bendición recibida o un mensaje positivo. Las hojas se colocan en un árbol simbólico elaborado con cartón.",
    materiales: "Cartón, papel de colores, lápices, pegamento."
  },
  {
    id: 37, cat: "espirituales",
    titulo: "Oración por nuestros seres queridos",
    icono: "🕯️",
    metodo: "Se dedica un momento a recordar y orar por familiares, amigos y miembros del club que atraviesan dificultades, siempre con autorización para mencionar sus nombres.",
    materiales: "Lista voluntaria de intenciones."
  },
  {
    id: 38, cat: "espirituales",
    titulo: "Meditación de la paz",
    icono: "🧘",
    metodo: "Se invita a los asistentes a sentarse cómodamente, respirar suavemente y permanecer en silencio durante 5 a 10 minutos. Se puede acompañar con música instrumental tranquila o una reflexión breve.",
    materiales: "Sillas y música opcional."
  },
  {
    id: 39, cat: "espirituales",
    titulo: "Testimonios de fe y esperanza",
    icono: "💫",
    metodo: "Cada persona que lo desee cuenta una experiencia en la que la fe, la esperanza o el apoyo de otras personas le ayudaron a superar una dificultad.",
    materiales: "Ninguno."
  },
  {
    id: 40, cat: "espirituales",
    titulo: "Lectura de salmos",
    icono: "📜",
    metodo: "Se seleccionan salmos relacionados con la paz, la alegría, la confianza o la gratitud. Se leen en voz alta y se comentan brevemente.",
    materiales: "Biblia."
  },
  {
    id: 41, cat: "espirituales",
    titulo: "El mensaje positivo del día",
    icono: "☀️",
    metodo: "Cada reunión comienza con una frase inspiradora. Los asistentes comentan qué significa para ellos.",
    materiales: "Tarjetas con frases."
  },
  {
    id: 42, cat: "espirituales",
    titulo: "Taller de valores humanos",
    icono: "❤️",
    metodo: "Cada semana se aborda un valor: respeto, paciencia, solidaridad, humildad, perdón, amistad o generosidad. Se comparten ejemplos de la vida real.",
    materiales: "Tarjetas con valores y preguntas de reflexión."
  },
  {
    id: 43, cat: "espirituales",
    titulo: "El legado de nuestras vidas",
    icono: "🌱",
    metodo: "Cada integrante comparte una enseñanza que quisiera dejar a sus hijos, nietos, familiares o jóvenes de la comunidad.",
    materiales: "Cuaderno para recopilar las enseñanzas."
  },
  {
    id: 44, cat: "espirituales",
    titulo: "Celebración de cumpleaños y acción de gracias",
    icono: "🎂",
    metodo: "Una vez al mes se celebran los cumpleaños del período con canciones, mensajes, una oración opcional y una merienda compartida.",
    materiales: "Cartulina, música y alimentos aportados voluntariamente."
  },
  /* ============ 4. DESARROLLO PERSONAL (45–54) ============ */
  {
    id: 45, cat: "desarrollo",
    titulo: "Mi historia de vida",
    icono: "📔",
    metodo: "Cada participante relata los momentos más importantes de su vida: infancia, trabajo, familia, logros, aprendizajes y experiencias. Se puede dividir en varias sesiones.",
    materiales: "Cuaderno, lápices y fotografías opcionales."
  },
  {
    id: 46, cat: "desarrollo",
    titulo: "Descubriendo mis talentos",
    icono: "💡",
    metodo: "Se realiza una conversación para identificar habilidades que cada integrante posee: reparación, costura, jardinería, cocina, música, enseñanza, organización o artesanía. Se crea un registro de talentos del club.",
    materiales: "Papel y lápices."
  },
  {
    id: 47, cat: "desarrollo",
    titulo: "Mi mejor consejo",
    icono: "🗣️",
    metodo: "Cada integrante comparte un consejo de vida que considera importante para las nuevas generaciones. Se recopilan en un mural o cuaderno.",
    materiales: "Cartulina y marcadores."
  },
  {
    id: 48, cat: "desarrollo",
    titulo: "Taller de autoestima y valoración personal",
    icono: "💖",
    metodo: "Se proponen preguntas como: ¿Qué me hace una persona valiosa? ¿Qué cosas he logrado? ¿Qué cualidades tengo? Los participantes comparten voluntariamente.",
    materiales: "Tarjetas con preguntas."
  },
  {
    id: 49, cat: "desarrollo",
    titulo: "Aprendiendo algo nuevo",
    icono: "🧑‍🏫",
    metodo: "Cada semana un integrante enseña algo que conoce. Puede ser un truco doméstico, una reparación sencilla, un juego, una habilidad artesanal o una receta.",
    materiales: "Los que requiera la enseñanza."
  },
  {
    id: 50, cat: "desarrollo",
    titulo: "Taller de uso del teléfono celular",
    icono: "📱",
    metodo: "Se enseña a utilizar WhatsApp, enviar fotografías, realizar videollamadas, escuchar música, tomar fotografías o identificar mensajes sospechosos.",
    materiales: "Teléfonos celulares de los participantes."
  },
  {
    id: 51, cat: "desarrollo",
    titulo: "Club de lectura",
    icono: "📚",
    metodo: "Se lee un cuento, una reflexión, un capítulo breve o un texto espiritual. Luego se comentan las ideas principales.",
    materiales: "Libros prestados, hojas impresas o textos digitales."
  },
  {
    id: 52, cat: "desarrollo",
    titulo: "Conversatorio: jubilación con propósito",
    icono: "☕",
    metodo: "Se conversa sobre cómo aprovechar el tiempo libre, mantener amistades, descubrir nuevas aficiones y sentirse útiles en esta etapa de la vida.",
    materiales: "Preguntas preparadas en tarjetas."
  },
  {
    id: 53, cat: "desarrollo",
    titulo: "Taller de comunicación y convivencia",
    icono: "🤝",
    metodo: "Se presentan situaciones comunes entre vecinos y se reflexiona sobre cómo resolver desacuerdos con respeto, escucha y diálogo.",
    materiales: "Tarjetas con situaciones hipotéticas."
  },
  {
    id: 54, cat: "desarrollo",
    titulo: "Mi proyecto personal",
    icono: "🎯",
    metodo: "Cada persona identifica una pequeña meta que desea cumplir en el próximo mes: aprender una canción, terminar una manualidad, leer un libro, llamar a un familiar o enseñar algo al club.",
    materiales: "Hojas y lápices."
  },

  /* ============ 5. ARTÍSTICAS (55–66) ============ */
  {
    id: 55, cat: "artisticas",
    titulo: "Taller de tarjetas de felicitación",
    icono: "💌",
    metodo: "Se elaboran tarjetas para cumpleaños, Navidad, Día de las Madres, Día de los Padres o mensajes de amistad.",
    materiales: "Cartón usado, revistas, tijeras de punta segura, pegamento, lápices."
  },
  {
    id: 56, cat: "artisticas",
    titulo: "Pintura y dibujo libre",
    icono: "🖌️",
    metodo: "Los participantes dibujan paisajes, flores, recuerdos o imágenes religiosas. No se evalúa la calidad artística.",
    materiales: "Hojas recicladas, lápices, colores o pinturas económicas."
  },
  {
    id: 57, cat: "artisticas",
    titulo: "Flores de papel",
    icono: "🌷",
    metodo: "Se confeccionan flores decorativas utilizando papel reciclado o papel de colores.",
    materiales: "Papel, tijeras, pegamento y palitos reutilizados."
  },
  {
    id: 58, cat: "artisticas",
    titulo: "Decoración de botellas y frascos",
    icono: "🫙",
    metodo: "Se transforman frascos de vidrio o botellas en adornos, portalápices o pequeños floreros.",
    materiales: "Frascos limpios, retazos, papel, pegamento. Evitar cortes y bordes filosos."
  },
  {
    id: 59, cat: "artisticas",
    titulo: "Collage de sueños y recuerdos",
    icono: "🖼️",
    metodo: "Cada participante crea un collage con imágenes que representen su familia, sus sueños, sus aficiones o las cosas que le gustan.",
    materiales: "Revistas viejas, cartón, pegamento y tijeras."
  },
  {
    id: 60, cat: "artisticas",
    titulo: "Tejido y costura solidaria",
    icono: "🧶",
    metodo: "Quienes tengan conocimientos pueden enseñar a tejer, bordar, coser botones o reparar prendas.",
    materiales: "Agujas, hilos, lana y retazos aportados por los participantes."
  },
  {
    id: 61, cat: "artisticas",
    titulo: "Elaboración de adornos navideños",
    icono: "🎄",
    metodo: "Se confeccionan decoraciones para el club, los hogares o las áreas comunes del conjunto residencial.",
    materiales: "Cartón, papel, retazos y elementos reciclados."
  },
  {
    id: 62, cat: "artisticas",
    titulo: "Mural de la amistad",
    icono: "🌻",
    metodo: "Se elabora un mural con mensajes positivos, fotografías autorizadas, dibujos y nombres de los integrantes.",
    materiales: "Cartulina grande, papel, pegamento y marcadores."
  },
  {
    id: 63, cat: "artisticas",
    titulo: "Creación de instrumentos musicales reciclados",
    icono: "🥁",
    metodo: "Se fabrican maracas con recipientes resistentes y semillas, o instrumentos de percusión sencillos. Después se acompaña una canción.",
    materiales: "Envases seguros, semillas, cinta adhesiva."
  },
  {
    id: 64, cat: "artisticas",
    titulo: "Taller de origami sencillo",
    icono: "🦢",
    metodo: "Se enseña a doblar papel para crear figuras simples, como flores, corazones o sobres.",
    materiales: "Hojas de papel."
  },
  {
    id: 65, cat: "artisticas",
    titulo: "Decoración del espacio del club",
    icono: "🏡",
    metodo: "Los integrantes diseñan y elaboran adornos para mejorar el ambiente del lugar donde se reúnen.",
    materiales: "Cartón, papel, materiales reutilizados."
  },
  {
    id: 66, cat: "artisticas",
    titulo: "Exposición de artes y oficios",
    icono: "🏛️",
    metodo: "Se organiza una pequeña exposición para mostrar manualidades, pinturas, tejidos o trabajos realizados por los integrantes.",
    materiales: "Mesas, carteles y los trabajos elaborados."
  },

  /* ============ 6. MOVIMIENTO (67–76) ============ */
  {
    id: 67, cat: "movimiento",
    titulo: "Gimnasia recreativa en silla",
    icono: "🪑",
    metodo: "Se realizan movimientos suaves de brazos, hombros, manos, tobillos y piernas, permaneciendo sentados. Cada persona se mueve hasta donde le resulte cómodo.",
    materiales: "Sillas firmes y música opcional."
  },
  {
    id: 68, cat: "movimiento",
    titulo: "Bailoterapia de bajo impacto",
    icono: "💃",
    metodo: "Se seleccionan canciones alegres y se realizan movimientos sencillos. Se puede bailar sentado o de pie con apoyo.",
    materiales: "Celular, parlante y sillas."
  },
  {
    id: 69, cat: "movimiento",
    titulo: "Caminata de convivencia",
    icono: "🚶",
    metodo: "Se organiza una caminata corta por áreas seguras del conjunto residencial, con descansos y acompañamiento.",
    materiales: "Agua, calzado adecuado y apoyo de acompañantes."
  },
  {
    id: 70, cat: "movimiento",
    titulo: "La pelota viajera",
    icono: "⚽",
    metodo: "Sentados en círculo, los participantes se pasan una pelota suave. Al recibirla, cada persona puede decir su nombre, una palabra positiva o responder una pregunta sencilla.",
    materiales: "Pelota ligera."
  },
  {
    id: 71, cat: "movimiento",
    titulo: "Coordinación con las manos",
    icono: "👏",
    metodo: "Se realizan movimientos sencillos al ritmo de la música: palmadas suaves, levantar una mano, tocar los dedos o seguir secuencias.",
    materiales: "Música opcional."
  },
  {
    id: 72, cat: "movimiento",
    titulo: "Yoga o estiramientos adaptados",
    icono: "🧘‍♀️",
    metodo: "Se realizan estiramientos suaves, principalmente sentados, dirigidos por alguien con conocimientos adecuados para adultos mayores.",
    materiales: "Sillas y espacio despejado."
  },
  {
    id: 73, cat: "movimiento",
    titulo: "Relajación con música",
    icono: "🎧",
    metodo: "Se escucha música instrumental o sonidos de naturaleza durante unos minutos. Se invita a respirar suavemente y descansar.",
    materiales: "Celular, parlante."
  },
  {
    id: 74, cat: "movimiento",
    titulo: "Juegos de lanzamiento",
    icono: "🎯",
    metodo: "Se lanzan saquitos de tela rellenos de arroz o una pelota suave hacia un recipiente colocado a corta distancia. Puede hacerse sentado.",
    materiales: "Saquitos, recipientes y cinta para marcar distancias."
  },
  {
    id: 75, cat: "movimiento",
    titulo: "Circuito recreativo sencillo",
    icono: "🔁",
    metodo: "Se organizan estaciones adaptadas: lanzar una pelota, encestar, mover objetos livianos, identificar imágenes o realizar movimientos suaves.",
    materiales: "Pelotas, cajas, objetos livianos y sillas."
  },
  {
    id: 76, cat: "movimiento",
    titulo: "El baile de los recuerdos",
    icono: "🕺",
    metodo: "Se reproduce música de épocas conocidas. Los asistentes pueden recordar bailes de su juventud y realizar movimientos sentados o de pie según sus capacidades.",
    materiales: "Música y parlante."
  }

];