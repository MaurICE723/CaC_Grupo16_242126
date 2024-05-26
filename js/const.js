// Constantes que se utilizaran.

//listado de parques
const parks = [
  {
    id: 0,
    name: "República de los Niños",
    description:
      "La República de los Niños es un parque abierto a la comunidad que mantiene a través de los años una valiosa relevancia histórica, enmarcado por un bosque natural de 53 hectáreas preserva un cuantioso acervo paisajístico favoreciendo el bienestar común tendiente a mejorar la calidad de vida de las personas a través del esparcimiento, la educación y la diversidad sociocultural.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7073878055994!2d-58.022830207248404!3d-34.88869344623971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dded89c33c53%3A0x3bbaa42c765db4d4!2sRep%C3%BAblica%20de%20los%20Ni%C3%B1os!5e0!3m2!1sen!2sar!4v1712638287705!5m2!1sen!2sar",
    images: [
      "https://www.lanacion.com.ar/resizer/v2/varias-generaciones-pasearon-por-estas-calles-de-SZOWRC43AJEELBFXC3SFRBZSLA.JPG?auth=f0e6209511f621d5377eb9a53565c07dbc14a05bc1e11181ced64b29a4356a1b&width=880&height=586&quality=70&smart=true",
      "https://republica.laplata.gob.ar/site/wp-content/uploads/2019/02/juegos-4.jpg",
      "https://republica.laplata.gob.ar/site/wp-content/uploads/2021/05/Fanfarria-1.jpg",
    ],
    installations: [
      "Juegos",
      "Bancos",
      "Calesita",
      "Fuente",
      "Accessos para discapacitados",
    ],
    type: "parque",
  },
  {
    id: 1,
    name: "Parque Indoamericano",
    description:
      "Es un espacio verde de 120 hectáreas, compuesto por terrenos antiguamente anegadizos utilizados como basurales e inutilizables. Luego del relleno de las tierras, y el abandono del proyecto Interama, permanecieron sin uso durante décadas, hasta que en el marco de la inauguración del Parque Indoamericano en los 70 se lo forestó con unos 4.000 árboles de diferentes tipos.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9281.979954590246!2d-58.470674785571205!3d-34.66289759145483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbe221cace7f%3A0xbd5ed689ede56280!2sParque%20Indoamericano!5e0!3m2!1sen!2sar!4v1712617303614!5m2!1sen!2sar",
    images: [
      "https://www.clarin.com/img/2011/12/21/rJWI1bOCXx_1256x620.jpg",
      "https://cauchocolor.com.ar/wp-content/uploads/2013/08/IMG637.jpg",
      "https://www.buenosaires123.com.ar/img/parque-indoamericano.jpg",
    ],
    installations: ["Juegos", "Bancos", "Calesita"],
    type: "parque",
  },
  {
    id: 2,
    name: "Parque de la ciudad",
    description:
      "Es un espacio verde de carácter público de uso recreativo. Posee 68,2 hectáreas de superficie, incluidas las playas de estacionamiento. Abierto Sábados, Domingos y Feriados de 10.00 a 18.00hs. Se cierra por lluvia sin previo aviso.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6562.534353826447!2d-58.449274349580804!3d-34.67320575245422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf0fc1dd0e9%3A0x565d4c2fcbf1d5e0!2sCity%20Park!5e0!3m2!1sen!2sar!4v1712616307187!5m2!1sen!2sar",

    images: [
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/torre_parque_de_la_ciudad_1200.jpg",
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/styles/img_filtro_interna/public/parque-centenario-2023-1500x610.jpg?itok=B7IWTVZy",
      "https://www.infobae.com/new-resizer/fOKH645u4z-v2D5fN_903NlvFQU=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/U6ORUH7ZORBR3KIJ6F6YKLZETI.jpg",
    ],
    installations: ["Juegos", "Bancos", "Fuente"],
    type: "parque",
  },
  {
    id: 3,
    name: "Parque Avellaneda",
    description:
      'Cuenta con varias obras de arte, dos de las más importantes son: la estatua "La Tejedora", del escultor Luis Perlotti. Fue realizada en piedra marmórea, representa a una mujer anciana que, simbolizando a una vieja india, es la "Madre de América". En el año 1988, se instaló en el Parque Avellaneda, de Buenos Aires, una valiosa escultura que antes se hallaba en la Plaza del Congreso, se trata de la estatua llamada "El Perdón", que data del año 1896, y está ubicada en un jardín de estilo italiano sobre la calle Lacarra.',
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13128.916919493195!2d-58.480457760891795!3d-34.64891340342138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc99e9073e7d1%3A0xb1f7ebd8f90c9d57!2sParque%20Avellaneda!5e0!3m2!1sen!2sar!4v1712617885140!5m2!1sen!2sar",
    images: [
      "https://buenosaires.gob.ar/sites/default/files/media/image/2014/07/09/eb2ca0cc2270b8ee8813a93f16559498c6202051.jpg",
    ],
    installations: ["Juegos"],
    type: "parque",
  },
  {
    id: 4,
    name: "Parque la Isla de la Paternal",
    description:
      "Se denomina así por encontrarse en el barrio del mismo nombre y por las características aisladas de este lugar, donde desde la década del 50 se encontraba una construcción que originalmente habia sido proyectada para ser un hospital de niños, suspendiéndose dicha obra y siendo ocupado por familias carenciadas paso a conocerse como el Albergue Warnes, el cuál ante un público de 50000 personas fue demolido mediante implosiones controladas un 16 de marzo de 1991, previo traslado de las 650 familias que habitaban dicho albergue.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11047.605145656482!2d-58.47491697874303!3d-34.59220759457196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6101cb54f93%3A0x2575f33c8c13fd35!2sParque%20la%20Isla%20de%20la%20Paternal!5e0!3m2!1sen!2sar!4v1712637323410!5m2!1sen!2sar",
    images: [
      "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2014/07/09/3a908bedeae89eab349941c278c58c4631d7ee17.jpg?itok=j1Pr_tJI",
      "https://plazasdebuenosaires.com/ev/LA-ISLA-05.jpg",
    ],
    installations: ["Juegos"],
    type: "parque",
  },
  {
    id: 5,
    name: "Parque Sarmiento",
    description:
      "Ubicado en el barrio de Saavedra, este parque fue inaugurado en 1981. Ocupa una superficie de 70 hectáreas y se destaca por sus importantes instalaciones deportivas, tales como 4 canchas de fútbol profesional, 2 canchas de fútbol reducido, 2 canchas de pelota paleta, 2 piscinas olímpicas, 2 canchas de handball, 12 canchas de tenis (cemento), cancha de beach volley, cancha de softbol, pista de atletismo, pista de patín roller y pista de BMX freestyle. El parque también posee una bicisenda de 3.000 metros y un circuito aeróbico.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.3653314847!2d-58.500729187793745!3d-34.561927079702414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6e5b3eef73d%3A0xd3c3514dbd8403ef!2sPARQUE%20SARMIENTO!5e0!3m2!1sen!2sar!4v1712637493340!5m2!1sen!2sar",
    images: [
      "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/2023-03/DSC_0685.jpg?itok=ZBaRJAIm",
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/parque_sarmiento_1200.jpg",
    ],
    installations: ["Juegos"],
    type: "parque",
  },
  {
    id: 6,
    name: "Paseo El Rosedal",
    description:
      "El Rosedal, alberga 93 especies diferentes de rosas que crecen dentro de un jardín diseñado por el paisajista y agrónomo Benito Carrasco.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.286807707891!2d-58.42159801539903!3d-34.57072567253963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59e37604cd7%3A0xe1f378f0dcf68992!2sPaseo%20El%20Rosedal%20Garden!5e0!3m2!1sen!2sar!4v1712637554026!5m2!1sen!2sar",
    images: [
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/rosedal1500x610-2023.jpg",
      "https://buenosaires.gob.ar/sites/default/files/media/image/2014/07/28/67483b4a7f42d271d340dd6e3a8f8744cd410387.jpg",
      "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2014/07/28/84b7132865e2c34d877622cb5fad66eaec1ef683.jpg",
    ],
    installations: ["Juegos", "Lago", "Espacios verdes"],
    type: "parque",
  },
  {
    id: 7,
    name: "Jardín Japonés",
    description:
      "El Jardín Japonés fue inaugurado el 17 de mayo de 1967, proyectado y construido por la colectividad japonesa, para luego ser donado por intermedio de la Embajada del Japón, a la Municipalidad de Buenos Aires, en agradecimiento al pueblo argentino por ser el país que le abrió sus brazos en tiempos de inmigración.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.44900561363!2d-58.416147766680766!3d-34.57602614763075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57a4147c5c7%3A0xfc930bf72fdf871f!2zSmFyZMOtbiBKYXBvbsOpcw!5e0!3m2!1sen!2sar!4v1712637605560!5m2!1sen!2sar",
    images: [
      "https://jardinjapones.org.ar/images/slides/48_BgEJGJhiy76x1utV.jpg",
      "https://jardinjapones.org.ar/img/mapa-jardin-japones.jpg",
      "https://jardinjapones.org.ar/images/notes/55_E1tphnYP1J0iEaM9.jpg"
    ],
    installations: ["Lago", "Espacios verdes"],
    type: "parque",
  },
  {
    id: 8,
    name: "Parque Las Heras",
    description:
      "El parque Las Heras es un parque público ubicado en el barrio de Palermo en sus lindes con Barrio Norte y Recoleta, todos de la Ciudad de Buenos Aires, Argentina.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15624.662235746222!2d-58.40812614227433!3d-34.58694712023303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57dbce045cd%3A0x2704541ae686099a!2sLas%20Heras%20Park!5e0!3m2!1sen!2sar!4v1712637670483!5m2!1sen!2sar",
    images: [
      "https://buenosaires.gob.ar/sites/default/files/media/image/2017/11/16/03f50b82b0036e11bb84ea10468346d5305419bf.jpg",
    ],
    installations: ["Juegos", "Espacios verdes"],
    type: "parque",
  },
  {
    id: 9,
    name: "Plaza General San Martín",
    description:
      "La Plaza General San Martín es el principal espacio verde en el barrio de Retiro, en Buenos Aires. Inaugurada en 1862, donde antes había existido una plaza de toros, fue declarada Lugar Histórico Nacional en 1942.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.549284031851!2d-58.38056482356354!3d-34.59721606405175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab595993163%3A0xb5d975299fbe9750!2sPlaza%20General%20San%20Mart%C3%ADn!5e0!3m2!1sen!2sar!4v1712637707497!5m2!1sen!2sar",
    images: [
      "https://www.argentina.gob.ar/sites/default/files/plaza_general_san_martin_azul.jpg",
    ],
    installations: ["Espacios verdes"],
    type: "plaza",
  },
  {
    id: 10,
    name: "Plaza del Congreso",
    description:
      "La Plaza del Congreso es una plaza ubicada en la Ciudad de Buenos Aires, delimitada por las avenidas Entre Ríos, Rivadavia, Hipólito Yrigoyen y la calle Virrey Cevallos. Mal llamada Plaza de los Dos Congresos, la confusión se debe a que el monumento que se halla en ella se llama De los Dos Congresos, en honor a la Asamblea del año XIII y al Congreso de Tucumán.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.8967963023886!2d-58.39010190821788!3d-34.60938055993273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac336a09c01%3A0xc702e3bd05a794d3!2sPlaza%20del%20Congreso!5e0!3m2!1sen!2sar!4v1712637762313!5m2!1sen!2sar",
    images: [
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/monumento%20dos%20congresos_0.jpg",
    ],
    installations: [],
    type: "plaza",
  },
  {
    id: 11,
    name: "Parque Lezama",
    description:
      "El Parque Lezama es uno de los muchos paseos tradicionales de la Ciudad de Buenos Aires, ubicado en el barrio de San Telmo, y sede del Museo Histórico Nacional. Algunos historiadores creen que en este lugar fue realizada la primera fundación de la ciudad por Pedro de Mendoza en 1536, abandonada un año después por la hambruna, las enfermedades y la hostilidad de las tribus querandíes.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8037.380931015002!2d-58.3778278440949!3d-34.62690683829563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334ccee26fc95%3A0x2edeeb69361bc460!2sParque%20Lezama!5e0!3m2!1sen!2sar!4v1712638003338!5m2!1sen!2sar",
    images: [
      "https://turismo.buenosaires.gob.ar/sites/turismo/files/field/image/parque_lezama_1200.jpg",
    ],
    installations: ["Juegos", "Espacios verdes"],
    type: "parque",
  },
  {
    id: 12,
    name: "Parque Chacabuco",
    description:
      'Nacido en lo que fue el antiguo partido de San José de Flores, este barrio se originó alrededor de la vieja Fábrica Nacional de Pólvora o "polvorín de Flores", que se encontraba en la parte sur del actual parque. En 1902 la Municipalidad gestionó ante el gobierno nacional la cesión de esos terrenos, originándose de esa forma el actual Parque Chacabuco, rodeado por entonces de numerosos baldíos y quintas.',
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.678071089596!2d-58.44379287307491!3d-34.632714407513035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca35a8919007%3A0x2ed862297298f160!2sParque%20Chacabuco!5e0!3m2!1sen!2sar!4v1712638069802!5m2!1sen!2sar",
    images: [
      "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/media/image/2015/08/06/abafd2206e1b8b69b33c8ffe72b56bce192a357c.jpg?itok=j9px8HDe",
    ],
    installations: ["Juegos", "Espacios verdes", "Fuente"],
    type: "parque",
  },
  {
    id: 13,
    name: "Plaza Catedral",
    description:
      "El Centro Cívico Bariloche es un conjunto edilicio ubicado en la ciudad de San Carlos de Bariloche, Argentina. El proyecto, que es obra del arquitecto Ernesto de Estrada, fue inaugurado el 17 de marzo de 1940. El conjunto fue declarado monumento histórico nacional en el año 1987.",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.1035560722274!2d-71.302136621262!3d-41.13297076734445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b71c9818515%3A0x2b829da720972fe9!2sPlaza%20Catedral!5e0!3m2!1sen!2sar!4v1712638174932!5m2!1sen!2sar",
    images: [
      "https://es.gopatagonic.com/wp-content/uploads/2019/10/0015-Centro-Civico-1024x576.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Centro_civico_bariloche.jpg"
    ],
    installations: ["Bancos"],
    type: "plaza",
  },
];

//Listado de integrantes
const members = [
  {
    id: 0,
    name: "Mauricio",
    picture:
      "https://media.licdn.com/dms/image/C4E03AQFDfAGnsXt40w/profile-displayphoto-shrink_400_400/0/1655838584770?e=1721865600&v=beta&t=WUZWYrQEGGP53NCNgFIBWKs8n59w67lkBaBygrbKIX4",
    description:
      'El último en pié, alguien tenía que hacer el trabajo y era el único "voluntario". Responsable del diseño, maquetado, codificacoin y QA',
    perks: [
      "Desarrollador",
      "Padre",
      "Degustador de videojuego",
      "Lector de Mangas y comics",
    ],
  },
  {
    id: 1,
    name: null,
    picture: null,
    description: null,
    perks: [],
  },
  {
    id: 2,
    name: null,
    picture: null,
    description: null,
    perks: [],
  },
  {
    id: 3,
    name: null,
    picture: null,
    description: null,
    perks: [],
  },
];

//Listado de tipos de instalaciones de los parques
const parkInstallationsCheckboxs = [
  {
    name: "juegos",
    label: "Juegos",
  },
  {
    name: "bancos",
    label: "Bancos",
  },
  {
    name: "bebederos",
    label: "Bebederos",
  },
  {
    name: "areaEntrenamientoFisico",
    label: "Area de entrenamiento físico",
  },
  {
    name: "areaDeRehabilitación",
    label: "Area de rehabilitación",
  },
  {
    name: "canil",
    label: "Canil",
  },
  {
    name: "fuente",
    label: "Fuente",
  },
  {
    name: "pistaDePatinaje",
    label: "Pista de patinaje",
  },
  {
    name: "calesita",
    label: "Calesita",
  },
  {
    name: "accessosDiscapacitados",
    label: "Accessos para discapacitados",
  },
  {
    name: "espaciosVerdes",
    label: "Espacios verdes",
  },
  {
    name: "lago",
    label: "Lago",
  },
];

export { parks, members, parkInstallationsCheckboxs };
