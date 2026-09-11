export type RetratoProject = {
  category:
    | "familiar-pareja"
    | "embarazo"
    | "playa"
    | "naturaleza"
    | "lugares-especiales"
    | "urbano"
    | "bebes"
    | "colaboraciones";
  title: string;
  description: string;
  href: string;
  image: string;
};

export const retratosProjects: RetratoProject[] = [
  // =========================================================
  // FAMILIAR Y PAREJA
  // =========================================================

  {
    category: "familiar-pareja",
    title: "Andrea y Laura",
    description:
      "Una sesión entre amigas con un estilo urbano y desenfadado.",
    href: "/retratos/familiar-pareja/andrea-laura",
    image: "/assets/images/retratos/familiar-pareja/andrea-laura/1.jpg",
  },
  {
    category: "familiar-pareja",
    title: "Andrea, Lidia y Laura",
    description:
      "Una sesión entre amigas combinando naturaleza y un estilo más urbano.",
    href: "/retratos/familiar-pareja/andrea-lidia-laura",
    image:
      "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/1.jpg",
  },
  {
    category: "familiar-pareja",
    title: "Andrea, Natalia y Lidia",
    description:
      "Una sesión entre amigas jugando con los tonos cálidos de la naturaleza.",
    href: "/retratos/familiar-pareja/andrea-natalia-lidia",
    image:
      "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/1.jpg",
  },
  {
    category: "familiar-pareja",
    title: "Mire y Patri",
    description:
      "Dos hermanas gemelas y una sesión marcada por los tonos cálidos del otoño.",
    href: "/retratos/familiar-pareja/mire-patri",
    image: "/assets/images/retratos/familiar-pareja/mire-patri/1.jpg",
  },
  {
    category: "familiar-pareja",
    title: "Senay, Yaiza y Juan Carlos",
    description:
      "Una sesión familiar llena de momentos naturales, luz y complicidad.",
    href: "/retratos/familiar-pareja/senay-yaiza-juan-carlos",
    image:
      "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/1.jpg",
  },
  {
    category: "familiar-pareja",
    title: "Sofi e Itzi",
    description:
      "Dos amigas, naturaleza, mar y diferentes ambientes en una misma sesión.",
    href: "/retratos/familiar-pareja/sofi-itzi",
    image: "/assets/images/retratos/familiar-pareja/sofi-itzi/1.jpg",
  },

  // =========================================================
  // EMBARAZO
  // =========================================================

  {
    category: "embarazo",
    title: "Lidia y Emiliyan",
    description:
      "Una sesión íntima en la que las sombras y la luz fueron protagonistas.",
    href: "/retratos/embarazo/lidia-emiliyan-leo",
    image:
      "/assets/images/retratos/embarazo/lidia-emiliyan-leo/1.jpg",
  },
  {
    category: "embarazo",
    title: "Lidia y Emiliyan",
    description:
      "Una segunda mirada a la espera de Leo, esta vez rodeados de naturaleza y luz.",
    href: "/retratos/embarazo/lidia-emiliyan-miradores",
    image:
      "/assets/images/retratos/embarazo/lidia-emiliyan-miradores/1.jpg",
  },
  {
    category: "embarazo",
    title: "Verónica",
    description:
      "Una sesión al atardecer para recordar la última etapa antes de la llegada de Indara.",
    href: "/retratos/embarazo/veronica-pareja-indara",
    image:
      "/assets/images/retratos/embarazo/veronica-pareja-indara/1.jpg",
  },
  {
    category: "embarazo",
    title: "Yaiza y Juan Carlos",
    description:
      "Una sesión de embarazo junto al mar, a pocas semanas de conocer al pequeño.",
    href: "/retratos/embarazo/yaiza-juan-carlos",
    image:
      "/assets/images/retratos/embarazo/yaiza-juan-carlos/1.jpg",
  },

  // =========================================================
  // PLAYA
  // =========================================================

  {
    category: "playa",
    title: "Itzi",
    description:
      "Mar, naturaleza y diferentes escenarios en una sesión llena de contrastes.",
    href: "/retratos/playa/itzi",
    image: "/assets/images/retratos/playa/itzi/1.jpg",
  },
  {
    category: "playa",
    title: "Kelly",
    description:
      "Una sesión donde los tonos azules del mar y los verdes de la naturaleza se funden a la perfección.",
    href: "/retratos/playa/kelly",
    image: "/assets/images/retratos/playa/kelly/1.jpg",
  },
  {
    category: "playa",
    title: "Lidia",
    description:
      "Una sesión junto al mar aprovechando la luz y los tonos naturales.",
    href: "/retratos/playa/lidia-playa",
    image: "/assets/images/retratos/playa/lidia-playa/1.jpg",
  },
  {
    category: "playa",
    title: "Nadia",
    description:
      "Una sesión al atardecer aprovechando los últimos rayos de sol.",
    href: "/retratos/playa/nadia",
    image: "/assets/images/retratos/playa/nadia/1.jpg",
  },
  {
    category: "playa",
    title: "Olga",
    description:
      "Una sesión 100% veraniega, natural y luminosa.",
    href: "/retratos/playa/olga-verano",
    image: "/assets/images/retratos/playa/olga-verano/1.jpg",
  },
  {
    category: "playa",
    title: "Paola",
    description:
      "Una sesión junto al mar jugando con el azul y el verde del entorno.",
    href: "/retratos/playa/paola",
    image: "/assets/images/retratos/playa/paola/1.jpg",
  },
  {
    category: "playa",
    title: "Rocío",
    description:
      "Una playa diferente, texturas naturales y una estética muy especial.",
    href: "/retratos/playa/rocio",
    image: "/assets/images/retratos/playa/rocio/1.jpg",
  },

  // =========================================================
  // NATURALEZA
  // =========================================================

  {
    category: "naturaleza",
    title: "Adri",
    description:
      "Una sesión llena de elegancia entre naturaleza y paisajes.",
    href: "/retratos/naturaleza/adri-pueblo-mirador",
    image:
      "/assets/images/retratos/naturaleza/adri-pueblo-mirador/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Andrea",
    description:
      "El verde del bosque combinado con el rojo de su vestimenta.",
    href: "/retratos/naturaleza/andrea-bosque",
    image: "/assets/images/retratos/naturaleza/andrea-bosque/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Andrea",
    description:
      "Tonos marrones, naturaleza y diferentes texturas para una sesión muy cálida.",
    href: "/retratos/naturaleza/andrea-naturaleza",
    image:
      "/assets/images/retratos/naturaleza/andrea-naturaleza/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Andrea",
    description:
      "Una sesión natural aprovechando la vegetación, la luz y el entorno.",
    href: "/retratos/naturaleza/andrea-parque",
    image:
      "/assets/images/retratos/naturaleza/andrea-parque/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Andrea",
    description:
      "Naturaleza, estructuras abandonadas y una estética muy cinematográfica.",
    href: "/retratos/naturaleza/andrea-vias",
    image:
      "/assets/images/retratos/naturaleza/andrea-vias/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Esther",
    description:
      "Luz, madera y mar en una sesión con unas vistas espectaculares.",
    href: "/retratos/naturaleza/esther",
    image: "/assets/images/retratos/naturaleza/esther/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Lidia",
    description:
      "Tonos rojizos, naturaleza y unas vistas que hacen especial cada fotografía.",
    href: "/retratos/naturaleza/lidia-ermita",
    image: "/assets/images/retratos/naturaleza/lidia-ermita/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Lidia",
    description:
      "Un escenario abandonado rodeado de naturaleza, perfecto para una sesión diferente.",
    href: "/retratos/naturaleza/lidia-vias",
    image: "/assets/images/retratos/naturaleza/lidia-vias/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Lucía",
    description:
      "Tonos verdes y luz natural para una sesión llena de calma.",
    href: "/retratos/naturaleza/lucia-naturaleza",
    image:
      "/assets/images/retratos/naturaleza/lucia-naturaleza/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Marina",
    description:
      "Una sesión rodeada de jardines, vegetación y agua.",
    href: "/retratos/naturaleza/marina-jardines",
    image:
      "/assets/images/retratos/naturaleza/marina-jardines/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Marina",
    description:
      "Naturaleza, jardines y un lago como escenario.",
    href: "/retratos/naturaleza/marina-lago",
    image:
      "/assets/images/retratos/naturaleza/marina-lago/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Noa",
    description:
      "Una sesión rodeada de naturaleza y arquitectura, con una estética tranquila y especial.",
    href: "/retratos/naturaleza/noa-ermita",
    image:
      "/assets/images/retratos/naturaleza/noa-ermita/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Olga",
    description:
      "Una sesión junto al mar jugando con los tonos naturales del entorno.",
    href: "/retratos/naturaleza/olga-playa",
    image:
      "/assets/images/retratos/naturaleza/olga-playa/1.jpg",
  },
  {
    category: "naturaleza",
    title: "Olga",
    description:
      "Un escenario lleno de posibilidades donde la naturaleza se mezcla con elementos abandonados.",
    href: "/retratos/naturaleza/olga-vias",
    image:
      "/assets/images/retratos/naturaleza/olga-vias/1.jpg",
  },

  // =========================================================
  // LUGARES ESPECIALES
  // =========================================================

  {
    category: "lugares-especiales",
    title: "Adri",
    description:
      "Piedra, historia y elegancia en una sesión con mucho carácter.",
    href: "/retratos/lugares-especiales/adri-castillo",
    image:
      "/assets/images/retratos/lugares-especiales/adri-castillo/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Ana",
    description:
      "Una sesión junto al mar con una estética natural y luminosa.",
    href: "/retratos/lugares-especiales/ana",
    image: "/assets/images/retratos/lugares-especiales/ana/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Ari",
    description:
      "Una sesión en un entorno histórico con una estética muy especial.",
    href: "/retratos/lugares-especiales/ari-patrimonio",
    image:
      "/assets/images/retratos/lugares-especiales/ari-patrimonio/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Lucía",
    description:
      "Una sesión en un entorno natural único, donde el agua y la vegetación son protagonistas.",
    href: "/retratos/lugares-especiales/lucia-delta",
    image:
      "/assets/images/retratos/lugares-especiales/lucia-delta/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Lucía",
    description:
      "Historia, naturaleza y una arquitectura con un carácter único.",
    href: "/retratos/lugares-especiales/lucia-patrimonio",
    image:
      "/assets/images/retratos/lugares-especiales/lucia-patrimonio/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Lucía",
    description:
      "Un escenario que mezcla vías abandonadas, bosque, túnel y elementos abandonados.",
    href: "/retratos/lugares-especiales/lucia-vias",
    image:
      "/assets/images/retratos/lugares-especiales/lucia-vias/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Olga",
    description:
      "Una sesión con una estética más salvaje, jugando con piedra, montaña y naturaleza.",
    href: "/retratos/lugares-especiales/olga-cantera",
    image:
      "/assets/images/retratos/lugares-especiales/olga-cantera/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Olga",
    description:
      "Una sesión en un pueblo blanco junto al mar, combinando arquitectura, mar y una estética natural.",
    href: "/retratos/lugares-especiales/olga-urbana",
    image:
      "/assets/images/retratos/lugares-especiales/olga-urbana/1.jpg",
  },
  {
    category: "lugares-especiales",
    title: "Sofi",
    description:
      "Un entorno natural donde conviven mar, bosque y diferentes escenarios.",
    href: "/retratos/lugares-especiales/sofi",
    image:
      "/assets/images/retratos/lugares-especiales/sofi/1.jpg",
  },

  // =========================================================
  // URBANO
  // =========================================================

  {
    category: "urbano",
    title: "Adri",
    description:
      "Una sesión urbana donde la elegancia es la protagonista.",
    href: "/retratos/urbano/adri-urbano",
    image: "/assets/images/retratos/urbano/adri-urbano/1.jpg",
  },
  {
    category: "urbano",
    title: "Andrea",
    description:
      "De las calles al ambiente industrial, una sesión con diferentes estilos.",
    href: "/retratos/urbano/andrea-poligono",
    image:
      "/assets/images/retratos/urbano/andrea-poligono/1.jpg",
  },
  {
    category: "urbano",
    title: "Andrea",
    description:
      "Un escenario industrial con mucho carácter y una estética urbana.",
    href: "/retratos/urbano/andrea-urbana",
    image:
      "/assets/images/retratos/urbano/andrea-urbana/1.jpg",
  },
  {
    category: "urbano",
    title: "Laia",
    description:
      "Una sesión urbana que comienza entre edificios y termina en un entorno industrial.",
    href: "/retratos/urbano/laia-urbana",
    image: "/assets/images/retratos/urbano/laia-urbana/1.jpg",
  },
  {
    category: "urbano",
    title: "Laura",
    description:
      "Una sesión urbana y desenfadada donde la actitud lo es todo.",
    href: "/retratos/urbano/laura-ciudad",
    image:
      "/assets/images/retratos/urbano/laura-ciudad/1.jpg",
  },
  {
    category: "urbano",
    title: "Laura",
    description:
      "Una sesión urbana y desenfadada en un escenario industrial.",
    href: "/retratos/urbano/laura-industrial",
    image:
      "/assets/images/retratos/urbano/laura-industrial/1.jpg",
  },
  {
    category: "urbano",
    title: "Lucía",
    description:
      "Aprovechando los últimos rayos de sol para una sesión muy natural.",
    href: "/retratos/urbano/lucia-parque",
    image:
      "/assets/images/retratos/urbano/lucia-parque/1.jpg",
  },
  {
    category: "urbano",
    title: "Olga",
    description:
      "Una sudadera, una carretera y los últimos rayos de sol. A veces no hace falta más.",
    href: "/retratos/urbano/olga-atardecer",
    image:
      "/assets/images/retratos/urbano/olga-atardecer/1.jpg",
  },
  {
    category: "urbano",
    title: "Olga",
    description:
      "Una estética urbana demostrando que cualquier calle puede convertirse en un escenario.",
    href: "/retratos/urbano/olga-urbana",
    image:
      "/assets/images/retratos/urbano/olga-urbana/1.jpg",
  },

  // =========================================================
  // BEBÉS
  // =========================================================

  {
    category: "bebes",
    title: "Leo — 3 meses",
    description:
      "Una sesión llena de ternura para recordar sus primeros meses de vida.",
    href: "/retratos/bebes/leo-3-meses",
    image: "/assets/images/retratos/bebes/leo-3-meses/1.jpg",
  },

  // =========================================================
  // COLABORACIONES
  // =========================================================

  {
    category: "colaboraciones",
    title: "Adri × Kia",
    description:
      "Una sesión personal vinculada a una colaboración especial con Kia España.",
    href: "/retratos/colaboraciones/adri-kia",
    image: "/assets/images/retratos/colaboraciones/adri-kia/1.jpg",
  },
  {
    category: "colaboraciones",
    title: "Paula × Peugeot",
    description:
      "Una sesión donde la personalidad y el automóvil se convierten en protagonistas.",
    href: "/retratos/colaboraciones/paula-peugeot",
    image:
      "/assets/images/retratos/colaboraciones/paula-peugeot/1.jpg",
  },
];
