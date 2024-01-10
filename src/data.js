import { RiArrowDropDownLine } from 'react-icons/ri';

export const navlinks = [
  {
    name: 'Inicio',
    path: '/',
  },
  {
    name: 'Productos',
    path: '/productos',
    icon: <RiArrowDropDownLine />,
  },
  {
    name: 'Lentes EVO ICL',
    path: '/lentes-evo-icl',
  },
  {
    name: 'Servicio Técnico',
    path: '/servicio-tecnico',
  },
  {
    name: 'Contáctenos',
    path: '/contacto',
  },
];

export const productlinks = [
  {
    id: 1,
    categoria: 'Diagnóstico',
    path: '/productos/diagnosticos',
    productos: [
      { slug: 1, producto: 'Biomecánica Corneal', path: '/biomecanicacorneal' },
      {
        slug: 2,
        producto: 'Cámaras No Midriáticas',
        path: '/camarasnomidiraticas',
      },
      { slug: 3, producto: 'Campímetros', path: '/campimetros' },
      { slug: 4, producto: 'Ecógrafos', path: '/ecografos' },
      {
        slug: 5,
        producto: 'Lámparas de Hendiduras',
        path: '/lamparasdehendidura',
      },
      { slug: 6, producto: 'Paquímetros', path: '/paquimetros' },
      { slug: 7, producto: 'Tomógrafo Ocular', path: '/tomografoocular' },
      { slug: 8, producto: 'Tonómetros', path: '/tonometros' },
      {
        slug: 9,
        producto: 'Topógrafos Corneales',
        path: '/topografoscorneales',
      },
    ],
  },
  {
    id: 2,
    categoria: 'Refracción',
    path: '/productos/refraccion',
    productos: [
      {
        slug: 11,
        producto: 'Auto Kerato - Refractómetros',
        path: '/autokerato',
      },
      { slug: 12, producto: 'Cajas de Lentes', path: '/cajaslentes' },
      { slug: 13, producto: 'Estudio de la Miopía', path: '/estudiomiopia' },
      { slug: 14, producto: 'Forópteros Digitales', path: '/foropteros' },
      { slug: 15, producto: 'Lensómetros Digitales', path: '/lensometros' },
      { slug: 16, producto: 'Mesas Eléctricas', path: '/mesaselectricas' },
      { slug: 17, producto: 'Monturas de Prueba', path: '/monturasprueba' },
      {
        slug: 18,
        producto: 'Sistema de Proyección de Optotipos',
        path: '/optotipos',
      },
      { slug: 19, producto: 'Test de Visión', path: '/testdevision' },
    ],
  },
  {
    id: 3,
    categoria: 'Cirugía',
    path: '/productos/cirugia',
    productos: [
      {
        slug: 21,
        producto: 'Instrumental Quirúrgico',
        path: '/instrumentalquirurgico',
      },
      {
        slug: 22,
        producto: 'Láser Oftalmológicos',
        path: '/laseroftalmologico',
      },
      { slug: 23, producto: 'Vitreo Retina', path: '/vitreoretina' },
    ],
  },
  {
    id: 4,
    categoria: 'Unidades de Refracción',
    path: '/productos/unidadesrefraccion',
    productos: [
      {
        slug: 31,
        producto: 'Unidades de Refracción',
        path: '/unidadesrefraccion',
      },
    ],
  },
];

export const bannerMainHeader = [
  {
    id: 1,
    name: 'ARC LASER',
    img: require('./assets/Banner/FOX 810.png'),
    imgMedium: require('./assets/Banner/FOX 810Medium.png'),
    imgSmall: require('./assets/Banner/FOX 810Small.png'),
    path: '/laseroftalmologico',
  },
  {
    id: 2,
    name: 'VUPAD',
    img: require('./assets/Banner/VUPAD.png'),
    imgMedium: require('./assets/Banner/VUPADMedium.png'),
    imgSmall: require('./assets/Banner/VUPADSmall.png'),
    path: '/ecografos',
  },
  {
    id: 3,
    name: 'AXL WAVE',
    img: require('./assets/Banner/PENTACAM AXL WAVE.png'),
    imgMedium: require('./assets/Banner/PENTACAM AXL WAVEMedium.png'),
    imgSmall: require('./assets/Banner/PENTACAM AXL WAVESmall.png'),
    path: '/tomografoocular',
  },
];

export const marcasRep = [
  {
    id: 1,
    name: 'primerasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 1.png'),
  },
  {
    id: 2,
    name: 'segundasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 2.png'),
  },
  {
    id: 3,
    name: 'tercerasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 3.png'),
  },
];

export const marcasRepMedium = [
  {
    id: 1,
    name: 'primerasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 1Medium.png'),
  },
  {
    id: 2,
    name: 'segundasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 2Medium.png'),
  },
  {
    id: 3,
    name: 'tercerasFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 3Medium.png'),
  },
  {
    id: 4,
    name: 'cuartoFab',
    img: require('./assets/MarcasRepre/BANNER LOGOS FÁBRICA 4Medium.png'),
  },
];

export const marcasRepSmall = [
  {
    id: 1,
    name: 'EVO ICL',
    img: require('./assets/MarcasRepre/1. EVO ICL.png'),
  },
  {
    id: 2,
    name: 'OCULUS',
    img: require('./assets/MarcasRepre/2. OCULUS.png'),
  },
  {
    id: 3,
    name: 'OCULUS SURGICAL',
    img: require('./assets/MarcasRepre/3. OCULUS SURGICAL.png'),
  },
  {
    id: 4,
    name: 'ARC LASER',
    img: require('./assets/MarcasRepre/4. ARC LASER.png'),
  },
  {
    id: 5,
    name: 'SONOMED ESCALON',
    img: require('./assets/MarcasRepre/6. SONOMED ESCALON.png'),
  },
  {
    id: 6,
    name: 'HONGDEE',
    img: require('./assets/MarcasRepre/5. HONGDEE.png'),
  },
  {
    id: 7,
    name: 'ASICO',
    img: require('./assets/MarcasRepre/7. ASICO.png'),
  },
  {
    id: 8,
    name: 'CARL TEUFEL',
    img: require('./assets/MarcasRepre/8. CARL TEUFEL.png'),
  },
  {
    id: 9,
    name: 'VOLK',
    img: require('./assets/MarcasRepre/9. VOLK.png'),
  },
  {
    id: 10,
    name: 'MEDIWORKS',
    img: require('./assets/MarcasRepre/11. MEDIWORKS.png'),
  },
  {
    id: 11,
    name: 'FISO',
    img: require('./assets/MarcasRepre/12. FISO.png'),
  },
  {
    id: 12,
    name: 'US OPHTHALMIC',
    img: require('./assets/MarcasRepre/13. US OPHTHALMIC.png'),
  },
  {
    id: 13,
    name: 'MDT',
    img: require('./assets/MarcasRepre/14. MDT.png'),
  },
  {
    id: 14,
    name: 'CRYSTALVUE',
    img: require('./assets/MarcasRepre/10. CRYSTALVUE.png'),
  },
];

export const lentesEvo = [
  {
    id: 1,
    name: 'Biocompatibilidad',
    img: require('./assets/LentesEvo/1. biocompatible.png'),
    descr:
      'El colámero es un material exclusivo que contiene colágeno; esto significa que la lente se ha diseñado para estar en armonía con el ojo.',
  },
  {
    id: 2,
    name: 'Ausencia del síndrome del ojo seco',
    img: require('./assets/LentesEvo/2. ausencia del síndrome del ojo secos.png'),
    descr:
      'Al no remover ni remodelar el tejido corneal, la intervención de colocación de las EVO ICL no provoca síndrome del ojo seco.',
  },
  {
    id: 3,
    name: 'Removible',
    img: require('./assets/LentesEvo/3. son removibles.png'),
    descr:
      'Si se producen cambios de graduación importantes o surgen nuevas opciones para la corrección de defectos refractivos, las EVO ICL pueden extraerse por completo.',
  },
  {
    id: 4,
    name: 'Protección contra los rayos UV',
    img: require('./assets/LentesEvo/4. prtección rayos uv.png'),
    descr:
      'El colámero, un material exclusivo de Staar Surgical, proporciona protección contra los rayos UV.',
  },
  {
    id: 5,
    name: 'Intervención y recuperación rápida',
    img: require('./assets/LentesEvo/5. intervención y recuperación rápidas.png'),
    descr:
      'Se trata de una intervención de unos 20-30 minutos y la mayor parte de los pacientes retoman sus actividades diarias transcurridos unos días.',
  },
  {
    id: 6,
    name: 'Visión nocturna',
    img: require('./assets/LentesEvo/6. vision nocturna.png'),
    descr:
      'Los resultados de un ensayo clínico señalan la excelente visión nocturna que ofrecen las EVO ICL.',
  },
  {
    id: 7,
    name: 'Blandas y flexibles',
    img: require('./assets/LentesEvo/7. blandas y flexibles.png'),
    descr:
      'La colocación de las EVO ICL es muy sencilla, gracias a su estructura, que es blanda y flexible.',
  },
];

export const categorias = [
  {
    id: 1,
    nombre: 'Lentes EVO ICL',
    img: require('./assets/Categorias/Iconolentesrefractivos.png'),
    path: '/lentes-evo-icl',
  },
  {
    id: 2,
    style: '.even',
    nombre: 'Diagnóstico',
    img: require('./assets/Categorias/Iconodiagnóstico.png'),
    path: '/productos/diagnosticos',
  },
  {
    id: 3,
    nombre: 'Refracción',
    img: require('./assets/Categorias/Iconorefracción.png'),
    path: '/productos/refraccion',
  },
  {
    id: 4,
    style: '.even',
    nombre: 'Unidad Refracción',
    img: require('./assets/Categorias/Iconounidadrefracción.png'),
    path: '/productos/unidadesrefraccion',
  },
  {
    id: 5,
    nombre: 'Cirugía',
    img: require('./assets/Categorias/Iconocirugía.png'),
    path: '/productos/cirugia',
  },
];

/* PRODUCTOS CIRUGIA */

export const laseroftalmologico = [
  {
    id: 1,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'NANO LÁSER CETUS',
    fabrica: 'ARC LASER',
    descripcion:
      'Primer nano-láser del mercado para cirugía de catarata modelo CETUS de ARC, Alemania. La tecnología utilizada es un Nd:YAG láser Q-Switch que es transferida a la pieza de mano quirúrgica (desechable) mediante una fibra óptica de cuarzo y se focaliza en una placa de titanio dentro de la pieza de mano. Por medio de la onda de choque del láser, se logra fotofragmentar el núcleo de cristalino.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/CETUS.png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/CATÁLOGO CLASSIC-514_6s_EN.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'CLASSIC 532nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotocoagulador de ARC, Alemania, verde de 532nm, adaptado en lámpara de hendidura de 5 aumentos ARC. Con opción de endosondas  y oftalmoscopio indirecto.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/CLASSIC 532 NM.png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/CATALOGO CLASIC-532.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'CLASSIC 514nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotocoagulador de ARC, Alemania, verde «PURO» de 514nm, con micropulso y adaptado en lámpara de hendidura de 5 aumentos de la marca ARC.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/CLASSIC 514 NM (1).png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/2020_Combo Q-LAS_CLASSIC_ES Catálogo.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'FOX 810nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Consola láser fotocoagulador de ARC, Alemania, de 810nm, para  endofotocoagulación, retinopexia transescleral, tratamientos en mácula, ciclofotocoagulación transescleral (TCP), ciclofotocoagulación micropulso (CPC), tratamiento en retinopatía del prematuro y dacrio. Consola liviana de solo 1,2 kg, fácilmente transportable.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/FOX 810 NM (1).png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/FOX-514 Catálogo.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'FOX 514nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Láser fotocoagulador verde «»PURO»» 514nm de ARC, Alemania, diseñado para tratamientos de endofotocoagulación y retinopatía del prematuro.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/FOX 514 NM (1).png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/FOX-810 CATÁLOGO.pdf'),
  },
  {
    id: 6,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG Q-LAS',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotodisruptor de ARC, Alemania, Nd:YAG de 1064nm adaptado en lámpara de hendidura ARC de 5 aumentos.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/YAG Q-LAS (2).png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/Catálogo NANO-LASER.pdf'),
  },
  {
    id: 7,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG/SLT',
    fabrica: 'ARC LASER',
    descripcion:
      'VARIO es la combinación de dos tipos de láser: el modelo Classic 514nm con el láser YAG o el Cobra (SLT/YAG), en una sola mesa eléctrica.',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/VARIO (2).png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/VARIO CATÁLOGO.pdf'),
  },
  {
    id: 8,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG/CLASSIC 532',
    fabrica: 'ARC LASER',
    descripcion:
      'Combo de ARC, Alemania: combina láser YAG modelo Q-LAS con láser verde 532 nm modelo Classic, todo en una lámpara de hendidura en una sola mesa eléctrica',
    imagen: require('./assets/Products/Cirugia/LaserOftalmologico/Images/COMBO 2.png'),
    catalogo: require('./assets/Products/Cirugia/LaserOftalmologico/Catalogo/CATÁLOGO YAG Q-LAS.pdf'),
  },
];

export const vitreoretinal = [
  {
    id: 1,
    subcategoria: 'Vitreo Retina',
    modelo: 'BIOM 5',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El oftalmoscopio binocular indirecto BIOM® 5 de OCULUS SURGICAL, USA, es el complemento ideal del SDI® (Stereoscopic Digital Inverter) que permite la observación de un campo amplio del fondo durante la cirugía del vítreo. La unidad de observación del BIOM® se puede montar en cuestión de segundos y acoplarse al eje óptico cuando sea necesario. Está disponible en versiones de enfoque mecánico y electrónico, con una amplia gama de lentes reutilizables.',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/BIOM 5.png'),
    catalogo: require('./assets/Products/Cirugia/VitreoRetina/Catalogos/SDI-4-BIOM-5-Nuevo-Catalogo.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Vitreo Retina',
    modelo: 'SDI 4',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'Inversor diagonal estereoscópico (SDI) de OCULUS SURGICAL, USA. Su diseño extremadamente plano y su transmisión de luz hacen de este inversor un complemento indispensable para su microscopio en la observación de campo amplio del segmento posterior del ojo durante la cirugía. Disponible en versiones automática, motorizada y manual',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/SDI 4C.png'),
    catalogo: require('./assets/Products/Cirugia/VitreoRetina/Catalogos/SDI-4-BIOM-5-Nuevo-Catalogo.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Vitreo Retina',
    modelo: 'LENTE DESECHABLE PARA ZEISS RESIGHT',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El nuevo lente desechable LenZ HD de OCULUS SURGICAL ha sido diseñado para un solo uso en el ZEISS RESIGHT® y combina una visión de gran campo amplio con una alta definición de imagen. Estas características lo convierten en el lente perfecto para todas las etapas de la cirugía vitreoretiniana, incluida la visión macular con alta magnificación.',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/LENTES ZEISS RESIGHT.png'),
    catalogo: require('./assets/Products/Cirugia/VitreoRetina/Catalogos/Catálogo Lente LENZ.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Vitreo Retina',
    modelo: 'BIOM READY',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'Sistema visual desechable de no contacto de OCULUS SURGICAL, USA,  de amplio campo visual, que provee excelente profundidad y mejor estereopsis. Incluye un lente desechable de amplio campo visual de 130°.',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/BIOM READY (OCULUS SURGICAL).png'),
    catalogo: require('./assets/Products/Cirugia/VitreoRetina/Catalogos/Catalogo Biom Ready Ingles _0120_.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Vitreo Retina',
    modelo: 'LENTES DESECHABLES PARA BIOM',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El nuevo set óptico de lente desechable OCULUS SURGICAL BIOM® HD combina un gran campo de visión con una alta resolución. Ideal para todas las cirugías de vitreoretina, incluyendo visión de mácula con alta magnificación.',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/Lente Desechable BIOM 1.png'),
  },
  {
    id: 6,
    subcategoria: 'Vitreo Retina',
    modelo: 'GONIO LENS',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El revolucionario sistema del nuevo lente GONIO Ready® de OCULUS SURGICAL, USA, permite durante la realización de MIGS eliminar la necesidad de sostenerla con la mano. Ofrece una excepcional profundidad de campo y una visión de 180°. Además, este innovador sistema facilita a los cirujanos la conexión de la lente GONIO Ready® al microscopio quirúrgico.',
    imagen: require('./assets/Products/Cirugia/VitreoRetina/Imagenes/GONIO READY LENS.png'),
    catalogo: require('./assets/Products/Cirugia/VitreoRetina/Catalogos/Catalogo Gonio_Ready_en_2304_versand.pdf'),
  },
];

export const instrumentalquirurgico = [
  {
    id: 1,
    subcategoria: 'Instrumental Quirúrgico',
    modelo: '',
    fabrica: 'CARL TEUFEL',
    descripcion:
      'Instrumental quirúrgico oftalmológico CARL TEUFEL, 100% fabricación Alemana, que ofrecen una óptima función, manejo ergonómico y larga vida útil.',
    imagen: require('./assets/Products/Cirugia/InstrumentalQuirurgico/Imagenes/Carl Teufel.png'),
    catalogo: require('./assets/Products/Cirugia/InstrumentalQuirurgico/Catalogos/Catalogo TEUFEL Inst. Quirurgico 2021.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Instrumental Quirúrgico',
    modelo: '',
    fabrica: 'ASICO ',
    descripcion:
      'Instrumental quirúrgico oftalmológico fabricados en Estados Unidos que brindan mayor precisión y calidad para las diversas cirugías oculares.',
    imagen: require('./assets/Products/Cirugia/InstrumentalQuirurgico/Imagenes/ASICO.png'),
    catalogo: require('./assets/Products/Cirugia/InstrumentalQuirurgico/Catalogos/Asico-Catalog.pdf'),
  },
];

/* PRODUCTOS UNIDAD DE REFRACCION */

export const unidadesrefraccion = [
  {
    id: 1,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS REPLY',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción F.I.S.O. origen italiano, con base color gris claro, de construcción metálica y con mesa para 2 instrumentos.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/UNIDAD REFRACCIÓN PANVISUS REPLY.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catalogo Panvisus Reply.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS RONDO',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen italiano, de base color gris claro y construida en metal. Incluye una mesa abatible y deslizable diseñada para 2 instrumentos. Además, cuenta con un panel de control adjunto a la mesa para equipos y sillón, y bloqueo magnético de la mesa. Disponible en varios colores y ofrece la opción de sillón con respaldo fijo o reclinable.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS RONDO.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catalogo Unidad Rondo.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS RONDO COMPACT',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen italiano, de solo 105 cm de ancho, ideal para espacios reducidos. Con base color gris claro y de construcción metálica, cuenta con una mesa abatible y deslizable para 2 instrumentos. Incluye panel de control adjunto a la mesa para instrumentos y sillón, y bloqueo magnético de la mesa.Con opción a diferentes colores, altura de mesa regulable en altura, brazo para foróptero y sillón con respaldo fijo o reclinable.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS RONDO COMPACT.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Panvisus Compact.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS MOON LENS',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O, de origen italiano, con base color gris claro y de construcción metálica y madera. Incluye mueble curvo con 4 cajoneras y doble mesa abatibles y deslizables, con porta lentes de caja de prueba, para 2 instrumentos. Además, incluye panel de control adjunto a la mesa curva y bloqueo magnético de la mesa. Disponible en diferentes colores, con altura de mesa regulable, brazo para foróptero y sillón con respaldo fijo o reclinable.  ',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS MOON LENS.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Moon Lens.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS TRIO',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca FISO, de origen italiano, en color gris. Construida en metal y base tapizada en madera, con sillón respaldo fijo. Cuenta con mesa giratoria y regulable en altura apta para 3 equipos. Disponible en diferentes colores y con respaldo fijo o reclinable.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS TRIO.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Trio.pdf'),
  },
  {
    id: 6,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS HERCULES',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. de origen italiano, incluye una mesa giratoria para 1 equipo, con una elevación eléctrica de 20 cm y una fuente de poder integrada en la parte superior.Con base independiente con pilar para brazo de foróptero, provisto con un brazo para soporte de proyector de optotipos y lámpara spot de cabecera con luz halógena. Disponible en diferentes colores y sillón con respaldo fijo o reclinable. Este producto es ideal para realizar exámenes a pacientes que se encuentran en silla de ruedas.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS HERCULES.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Panvisus Hercules.pdf'),
  },
  {
    id: 7,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS AUGE',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen Italia, de solo 105 cm de ancho, ideal para espacios reducidoses. De color base gris claro y construida en metal, cuenta con una mesa abatible y deslizable diseñada para 2 instrumentos. Incluye panel de control adjunto a la mesa para instrumentos y sillón, y bloqueo magnético de la mesa. Con opción a diferentes colores, altura de la mesa regulable, brazo para foróptero y sillón con respaldo fijo o reclinable.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS AUGE.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/auge-f.pdf'),
  },
  {
    id: 8,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS ONETTE',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O Italia, con color base gris claro y construcción metálica. Dispone de una mesa abatible con seguro manual y diseñada para 1 equipo. La instalación de esta unidad requiere únicamente un ancho de 100 cm.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/PANVISUS ONETTE.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo.pdf'),
  },
  {
    id: 9,
    subcategoria: 'Unidad de refracción',
    modelo: 'ECO PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción ECO PLUS marca MDT, con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa corredera para 2 instrumentos con regulación eléctrica de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. \nConexión sencilla para diferentes tipos de lámparas de hendidura LED/halógenas, panel de control práctico, cajón de accesorios de fácil acceso, poste de aluminio con iluminación LED y base para proyector de optotipos. Amplia selección de colores de tapicería sin costo adicional. Modelo de sillón COMFORT con respaldo fijo. Configuración estándar para diestros, disponible para zurdos bajo pedido.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/ECO PLUS (FONDO TRANSPARENTE).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catalogo.pdf'),
  },
  {
    id: 10,
    subcategoria: 'Unidad de refracción',
    modelo: 'SMART PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción SMART PLUS marca MDT, equipado con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa deslizante para 2 equipos con ajuste eléctrico de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Cuenta con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. Conexión sencilla para diferentes tipos de lámparas de hendidura LED / halógenas. \nPráctico panel de control y bandeja para caja de lentes de fácil acceso con brazo pivotante. Poste diagonal de aluminio con iluminación LED y repisa para proyector de optotipos. Amplia selección de colores de tapicería disponibles sin recargo. \nConfiguración solo para diestros. Sillón con respaldo fijo modelo COMFORT. Base de acero con recubrimiento en polvo.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/SMART PLUS (FONDO TRANSPARENTE).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Unidades Refraccion MDT.pdf'),
  },
  {
    id: 11,
    subcategoria: 'Unidad de refracción',
    modelo: 'EASY',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción EASY marca MDT, equipado con sillón COMFORT, respaldo reclinable, con apoya brazo y apoya pies eléctricamente elevada. Mesa deslizante para 2 equipos de altura no regulable. Conexión sencilla para diferentes tipos de lámparas de hendidura; LED / halógenas. \nPráctico panel de control con poste de aluminio e iluminación LED y adaptador universal para proyector de optotipos. Posible montar autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para una iluminación de lámpara de hendidura integrada en la mesa. \nAmplia selección de colores de tapicería disponibles con recargo (SCURO - color gris como estándar). Fácil configuración in situ para diestros o zurdos. Base de acero con recubrimiento en polvo.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/EASY (FONDO TRANSPARENTE).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Unidades Refraccion MDT2.pdf'),
  },
  {
    id: 12,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5000',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWOKRS, con mesa diseñada para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 840 mm x 405 mm. Con sillón color negro, respaldo fijo, y regulable en altura de 410 mm a 550 mm, diseñado para soportar un peso máximo de 150 kg. El sillón incorpora apoyabrazos fijos y apoyapies plegables. La unidad está equipada con un brazo para foróptero y una lámpara de lectura, y presenta dimensiones de 1.510 mm x 1.000 mm x 2.130 mm, con un peso de 168 kg.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/OU 5000 (Fondo Transparente).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo3.pdf'),
  },
  {
    id: 13,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5100',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWORKS con mesa diseñada para 2 equipos,  abatible hasta 90°de giro y una superficie de medidas de 840 mm x 405 mm. Con sillón color negro, respaldo fijo, y regulable en altura de 450 mm a 590 mm, diseñado para soportar un peso máximo de 150 kg. Sus apoya brazos y pies son rebatibles. Incluye brazo para foróptero con movimiento vertical de hasta 30° y una lámpara de lectura. Dimensiones de la unidad 1.590 mm x 1.150 mm x 1.990 mm con un peso de 150 kg.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/OU-5100-Fondo Transparente.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/unidades MEDIWORKS_removed.pdf'),
  },
  {
    id: 14,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5200B',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción MEDIWORKS, con mesa para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 670 mm x 405 mm. Con sillón color negro,  respaldo fijo, y  ajustable en altura de 450 mm hasta 590 mm. Sillón para peso máximo de 150 kg, con apoya brazos y pies rebatibles.Unidad ideal para consultas pequeñas por sus dimensiones; 1.190mm x 1.150mm x 1.990 mm y peso de 150 kg. Incluye brazo para foróptero con movimientos vertical de hasta 30° y una lámpara de lectura.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/OU-5200B (Fondo Transparente).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/unidades MEDIWORKS_removed2.pdf'),
  },
  {
    id: 15,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5000A',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción MEDIWORKS, con mesa para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 805 mm x 405 mm.  Sillón de color negro con respaldo fijo y ajustable en altura de 460 mm a 600 mm, capaz de soportar un peso máximo de 150 kg. Con apoya brazos y pies rebatibles. \nDimensiones de la unidad 1.510 mm x 1.000 mm x 2.130 mm y peso de 168 kg. Incluye brazo para foróptero con movimientos vertical de hasta 30° y lámpara de lectura.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/OU-5000A (Fondo Transparente).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Unidad OU-5000A.pdf'),
  },
  {
    id: 16,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-7000A',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWORKS, de origen chino, construida en metal, con pedestal resistente que puede soportar brazo para lámpara de hendidura, brazo para autorefractómetro, soporte para proyector de optotipos y brazo de foróptero. Incluye lámpara superior. \nSillón con respaldo reclinable modelo OC-3000 de material tipo cuero con apoya brazos y pies abatibles, y un apoya cabezas regulable en altura. El sillón cuenta con un sistema de ajuste de altura eléctrico controlado mediante un pedal, desde 56 cm a 71 cm y con rotación de 0° - 270°. Los apoya pies tienen una altura mínima de 8,8 cm desde el suelo, y el apoya brazo se puede ajustar en un ángulo de 80° a 180°. Máximo peso de carga 150 kg.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/OU 7000A (PNG).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Unidad OU-7000A con Sillon OC-3000.pdf'),
  },
  {
    id: 17,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-3200',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino. Incluye brazo de foróptero oscilante automático, freno de emergencia por seguridad, sobremesa deslizable y grande para 2 equipos dispositivos, fácil de operar. Tamaño de su mesa 915 mm x 420 mm y su rango de deslizamiento es de 0 a 380 mm. Grados de rotación de la mesa de 0-90° en sentido antihorario. Cuenta con 2 puertos de carga uds para oftalmoscopio. \nSu sillón cuenta con respaldo fijo y ajuste de altura. Rango de elevación de la silla entre 520-670 mm. La unidad cuenta con una lámpara superior de 9W/220V LED.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/HD-3200 (Fondo Transparente).png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/CatálogoHD-3200.pdf'),
  },
  {
    id: 18,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino. La unidad incluye lámpara R/L de lectura con control de luminosidad, room light LED que está incluida en el poste principal contraolada desde el panel control, brazo autobalanceado para foróptero y soporte para proyector de optotipos. Su sillón gris cuenta con un respaldo reclinable y ajuste eléctrico de altura que se controla desde la consola de la unidad. Además, dispone de apoya pies y apoya brazos para mayor comodidad. También incluye un control auxiliar para el proyector y otro para otros equipos.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/HD-100-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Unidad Refraccion HD-100 (1).pdf'),
  },
  {
    id: 19,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-700A',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino, construida en metal, y con un pedestal capaz de soportar brazo para lámpara de hendidura, brazo para autorefractómetro, soporte para proyector de optotipos y brazo de foróptero. Incluye lámpara superior para lectura con 7 niveles de ajuste de luminocidad y posee 3 puertos para aparatos de carga. Sillón con respaldo reclinable hasta 90° y 360° de rotación, con pernos de anclaje disponibles para sillón y unidad para mayor estabilidad.',
    imagen: require('./assets/Products/UnidadesRefraccion/Imagenes/HD-700A PNG.png'),
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Catálogo Unidad Refraccion HD-700A brochure.pdf'),
  },
  {
    id: 20,
    subcategoria: 'Unidad de refracción',
    modelo: 'VISIONARE',
    fabrica: 'US OPHTHALMIC',
    descripcion:
      'Nueva línea exclusiva de Unidades de Refracción US OPHTHALMIC de alta gama, diseñadas con madera y acero de excelente calidad. La colección cuenta con una amplia variedad de modelos y una gama de colores seleccionables, adaptándose a las necesidades individuales de cada usuario.',
    imagen: [
      require('./assets/Products/UnidadesRefraccion/Imagenes/Firenze.png'),
      require('./assets/Products/UnidadesRefraccion/Imagenes/Verona.png'),
      require('./assets/Products/UnidadesRefraccion/Imagenes/Verona Suprema.png'),
      require('./assets/Products/UnidadesRefraccion/Imagenes/Venezia.png'),
      require('./assets/Products/UnidadesRefraccion/Imagenes/Capri.png'),
    ],
    catalogo: require('./assets/Products/UnidadesRefraccion/Catalogos/Visionare-Brochure 2023.pdf'),
  },
];

/* PRODUCTOS  REFRACCION */

export const estudiomiopia = [
  {
    id: 1,
    subcategoria: 'Estudio de la Miopía',
    modelo: 'MYOPIA MASTER',
    fabrica: 'OCULUS',
    descripcion:
      'El nuevo Myopia Master® es el primer dispositivo que combina los parámetros de medición más importantes para que el estudio y manejo de la miopía sea más fácil y fiable que nunca: refracción, longitud axial y queratometría central de la córnea.',
    imagen: require('./assets/Products/Refraccion/EstudioMiopia/Imagenes/myopiamaster_68100_201811_02.png'),
    catalogo: require('./assets/Products/Refraccion/EstudioMiopia/Catalogos/Catalogo Myopia_master_Español_0120.pdf'),
  },
];

export const autokeratoref = [
  {
    id: 1,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'EKR-9100',
    fabrica: 'EZER',
    descripcion:
      'Autorefractómetro/Keratómetro y Aberrómetro EZER modelo ERK-9100 basado y desarrollado para brindar una refracción rápida y precisa. Posee auto fogging , evitando así, la acomodación de paciente. Amplio rango de medición, mide distancia pupilar e iris. \nCon pantalla LCD a color de 6,5". El ERK-9100  incorpora  mapa de Zernike que permite identificar y evaluar aberraciones de alto y bajo orden en el ojo del paciente. El dispositivo cuenta; con modo de retroiluminación que permite hacer mediciones en pacientes con opacidad ocular, modo catarata y medición de queratometría periférica. Impresora térmica de alta velocidad incluida en el equipo.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/ERK-9100-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/Auto Kerato Ref. ERK-9100.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ERK-BH',
    fabrica: 'EZER',
    descripcion:
      'Autorefractómetro- Keratómetro automático modelo ERK-BH marca EZER con pantalla LCD móvil que brinda un acceso más conveniente al ojo del paciente. Este dispositivo cuenta con una mentonera motorizada, así como capacidades para medir la queratometría periférica y comparar la visión. El modo CF (Comparación de la Función de Visión) permite al paciente experimentar la visión corregida mediante la aplicación de graduaciones adicionales. También proporciona mediciones del diámetro de la córnea, evaluación de cataratas con el modo ILLUM, retro-iluminación y simulación de visión cercana.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/ERK-BH-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/Auto Kertao Ref EZER ERK_BH.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ERK-9200',
    fabrica: 'EZER',
    descripcion:
      'Auto Kerato Refractómetro marca EZER modelo ERK-9200. Escanee, mida y determine los valores de refracción y queratometría automáticamente, todo sin tener que alinear manualmente el ojo, gracias a la tecnología de alineación automática 3D. Una pantalla táctil pivotante permite flexibilidad al posicionar y evaluar a los pacientes, proporcionando un espacio de trabajo ordenado y una fácil navegación por el menú. Con el uso de una interfaz Bluetooth puede disfrutar de la flexibilidad de la conectividad remota con toda la línea EZER Digital Practice. Posee modo de retroiluminación, pudiendo comprobar cristalinos anormales, cataratas y raspaduras de córneas. Mentonera motorizada.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/ERK-9200 (2)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/EZER Catalogo General (versión PDF).pdf'),
  },
  {
    id: 4,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'LRK-7000',
    fabrica: 'LUXVISION',
    descripcion:
      'Autorefractómetro/Keratómetro LUXVISION modelo LRK-7000, con una velocidad de medición rápida y precisa. El sofisticado prisma giratorio es inteligente como para tener en cuenta los errores de refracción. Proyecta un anillo de medición en la retina para obtener una medición precisa. Pantalla TFT LCD color táctil de 7". Con conectividad en red e impresora térmica de alta velocidad incluida en el equipo.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/LRK-7000.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/Catalogo LRK-7000 - LRK-7800.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'LRK-7800',
    fabrica: 'LUXVISION',
    descripcion:
      'Autorefractómetro/Keratómetro LUXVISION modelo LRK-7800, con una velocidad de medición rápida y precisa. El sofisticado prisma giratorio es inteligente como para tener en cuenta los errores de refracción. Modo de retroiluminación para observar cristalino, cataratas y córnea. Posee filtro amarillo para la medición que brinda iluminación y claridad. Con cámara CCD a todo color incorporada y fuente de Luz LED blanca y azul. Pantalla TFT LCD color táctil de 7", conectividad en red e impresora térmica de alta velocidad incluida en el equipo.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/LRK 7800 (2)-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/Catalogo LRK-7000 - LRK-7800.pdf'),
  },
  {
    id: 6,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'V100',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Refractómetro y analizador visual portátil modelo V100, ideal para infantes, niños, adultos y pacientes que no cooperan. Mide la refracción en condiciones normales de visión. Permite detectar los siguientes problemas visuales:\n' +
      '• Miopía\n' +
      '• Hipermetropía\n' +
      '• Astigmatismo\n' +
      '• Anisometropía\n' +
      '• Aniseiconía\n' +
      '• Estrabismo',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/V100-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/Vision Screener V100.pdf'),
  },
  {
    id: 7,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-200 / AR-200',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-200 y Autorefractómetro AR-200 de HONGDEE, de manejo manula y con sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla LCD TFT de alta resolución a color de 5,7". Impresora incorporada con auto corte.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/Auto Kerato ARK-200 (Fondo Transparente).png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/AR-200ARK-200 Catalogue-1.pdf'),
  },
  {
    id: 8,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-900',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-900 de HONGDEE de manejo semiautomático y  sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla táctil LCD TFT de alta resolución a color de 6,5" y plegable hasta 90°. Impresora icorporada con auto corte y Joystick motorizado. Mentonera regulable en altura eléctricamente, auto eye tracking y con auto foco y captura automática.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/ARK-900.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/ARK-900.pdf'),
  },
  {
    id: 9,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-710',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-710 full automático de HONGDEE con sistema de prisma rotativo que permite obtener información altamente confiable. Panel de control con pantalla táctil de 9" para una fácil operación. Medición totalmente automatizada R/L; solo un toque en la pantalla para realizar la medición completa. Panel de control giratorio de 360° apto para la instalación en diferentes configuraciones de salas de examen ocular. Con enfoque y seguimiento ocular automático (eye tracking). Medición automática y mentonera motorizada.',
    imagen: require('./assets/Products/Refraccion/AutoKeratoRefrac/Imagenes/ARK-710.png'),
    catalogo: require('./assets/Products/Refraccion/AutoKeratoRefrac/Catalogos/ARK-710.pdf'),
  },
];

export const optotipos = [
  {
    id: 1,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'C901',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos modelo C901, todo en uno.  Medición de agudeza visual representada en una pantalla de 17” y control remoto e Iluminación LED. Esta unidad es una ayuda independiente al  examen convencional. Incorpora una amplia serie de optotipos y con función de video y audio disponible.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/C901.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Vision Chart C901.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'EDC-2600',
    fabrica: 'EZER',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos EZER modelo EDC-2600, una moderna pantalla de 24” con características sorprendentes que proporciona lo necesario para la medición de la agudeza visual e imágenes para explicaciones adicionales. Puede ser calibrada automáticamente a la distancia de trabajo. ',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/EDC-2600.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/EDC-2600 CATÁLOGO.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'LDC-2600',
    fabrica: 'LUXVISION ',
    descripcion:
      'La LDC-2600 de LUXVISION es un moderno sistema de agudeza visual con una pantalla LCD de 21” y características sorprendentes. Las funciones de enmascaramiento y un diagrama visual explicativo son características que usted y sus pacientes apreciarán. La distancia de trabajo es variable y con calibración automática de gráficos. El software LDC-2600 se basa en una tarjeta SD, lo que permite que la carga de imágenes sea extremadamente rápida. La LDC-2600 simplifica la educación del paciente con un diagrama de ojos integrado.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/LDC-2600.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Pantalla Opto. LCD-2600.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'CP-1900C',
    fabrica: 'HONGDEE',
    descripcion:
      'Pantalla de optotipos LCD modelo de origen chino, de 23" que incorpora una amplia serie de optotipos: E, C de Landolt, letras y números y optotipos para niños, inclusive test Schober, test sensibilidad contraste, optotipo en V, test Worth, ETDRS, Stereo test, test astigmatismo, test de puntos de fijación, test de Ishihara, Snellen, cilindros cruzados, panel rojo /verde aplicable a todos los test, además test Cyclo Torsión, Estere test con triángulo con fusión de video y audio disponible.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/CP-1900C-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Pantalla Optotipos CP-1900C brochure.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'C9003',
    fabrica: 'DONGWU',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos DONGWU, todo en uno. Medición de agudeza visual representada en una pantalla de 23” con control remoto e iluminación LED. Esta unidad es una ayuda independiente al examen convencional e incorpora una amplia serie de optotipos. Con soporte para mural.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/C9003-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Pantalla Opt. LCD C9003.jpg'),
  },
  {
    id: 6,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'ESSENCE',
    fabrica: 'HONGDEE',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos de HONGDEE, todo en uno. Medición de agudeza visual representada en una pantalla de 17” y control remoto infrarrojo. Distancia de proyección de 2 a 7 mts. y con función de video y audio disponible. Esta unidad es una ayuda independiente al examen convencional e incorpora una amplia serie de optotipos: E, C de Landolt, letras y números y optotipos para niños, inclusive test Schober, optotipo en V, test Worth, ETDRS, stereo test, test astigmatismo, test de puntos de fijación, test de Ishihara, Snellen, cilindros cruzados, panel rojo /verde aplicable a todos los test, además test de sencibilidad al contraste.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/Patalla Optotipos ESSENCE (HONGDEE)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/2020 Hongdee products catalogue_removed.pdf'),
  },
  {
    id: 7,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'LCP-7800',
    fabrica: 'LUXVISION ',
    descripcion:
      'Proyector de optotipos LUXVISION modelo LCP-7800 con distancia de proyección de 1.5 a 6 mts. Iluminación LED y control remoto con posibilidad de programar 1 secuencia de optotipos según requerimiento del usuario. Incluye 41 optotipos diferentes (pediátricos, letras, números e iletrados). Equipo básico incluye sujeción de sobremesa.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/Proyector Optotipos LCP-7800 con luz (LUXVISION)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Proyector Opt. LCP-7800 Catalogo.pdf'),
  },
  {
    id: 8,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'TW660LA ',
    fabrica: 'DONGWU',
    descripcion:
      'Proyector de optotipos marca DONGWU modelo TW-660A con luz halógena y TW-660LA con Iluminación LED. Su distancia de proyección es de 1,5 a 6 mts. Con control remoto y  posibilidad de programar 1 secuencia de optotipos según requerimiento del usuario. Incluye 30 optotipos diferentes (pediátricos, letras, números e iletrados) con posibilidad de enmascaramiento de los optotipos en forma vertical, horizontal e independientes (uno a uno). Equipo básico incluye sujeción de sobremesa.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/Proyecto Optotipo TW-660A -LA (DONGWU) - copia-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Proyector TW-660LA LED .jpg'),
  },
  {
    id: 9,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'CP-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Proyector de optotipos modelo CP-100 de HONGDEE con ampliación de proyección 30x (a 5m). Tamaño de proyección 330 mm (ancho) x 270 mm (alto) (a 5m) e incluye 30 chart o patrones diferentes. Su velocidad de conversión de gráficos es uno por 0,03 s. Enmascaramiento: 1 abierto, 5 líneas horizontales, 8 líneas verticales, 21 letras sueltas, 1 rojo/verde.',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/chart-projector-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/Proyector Optotipos CP-100 brochure.pdf'),
  },
  {
    id: 10,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'ELITE',
    fabrica: 'HONGDEE',
    descripcion:
      'La  tabla de agudeza visual digital  ELITE es una idea totalmente innovadora que ofrece la marca HONGDEE. Todo el software está integrado en un dispositivo USB que puede ser conectado a cualquier monitor a través de un cable HDMI. AL conectarlo obtendrá un cuadro de agudeza visual completamente funcional adaptado al tamaño del monitor de acuerdo a su demanda. El control remoto está diseñado para ser fácil y cómodo de usar. ',
    imagen: require('./assets/Products/Refraccion/Optotipos/Imagenes/ELITE.png'),
    catalogo: require('./assets/Products/Refraccion/Optotipos/Catalogos/2020 Hongdee products.pdf'),
  },
];

export const testvision = [
  {
    id: 1,
    subcategoria: 'Test de Visión',
    modelo: 'BINOPTOMETER 4P ',
    fabrica: 'OCULUS',
    descripcion:
      'Es un instrumento de proyección profesional para probar todas las funciones visuales relevantes. La tecnología utilizada orientada al futuro, permite una representación casi ilimitada de varios exámenes de la visión. El Binoptometer® 4P es un instrumento de detección de visión con pruebas de sensibilidad al contraste y visión mesópica opcional y prueba de la sensibilidad del deslumbramiento.',
    imagen: require('./assets/Products/Refraccion/TestVision/Imagenes/binoptometer_4p_59862_20013_02.png'),
    catalogo: require('./assets/Products/Refraccion/TestVision/Catalogos/Binoptometer 4P_EN.pdf'),
  },
];

export const cajaslentes = [
  {
    id: 1,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK-1T /BK-1W',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de lentes OCULUS modelo BK-1/T para apoyo de sobremesa y modelo BK-1/W para sujeción mural, ambas de 232 lentes en caja de madera con cierre tipo cortina. Diámetro del lente de 38 mm. Para uso con las monturas de prueba UB 3, UB 4, UB 4 , UB 6 y en montura de niños.',
    imagen: require('./assets/Products/Refraccion/CajasLentes/Imagenes/BK-1T - BK-1W.png'),
  },
  {
    id: 2,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK-2',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de lentes OCULUS modelo BK-2 para apoyo de sobremesa, con maleta de madera para transporte y con 130 lentes. Diámetro del lente de 38 mm. Para uso con las monturas de prueba UB 3, UB 4 y montura de niños.',
    imagen: require('./assets/Products/Refraccion/CajasLentes/Imagenes/BK-2.png'),
  },
  {
    id: 3,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK-S3',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de lentes OCULUS modelo BK-S3 para apoyo de sobremesa, con maleta de madera para transporte y con 220 lentes. Diámetro del lente de 28 mm. Para uso con montura de prueba UB 5.',
    imagen: require('./assets/Products/Refraccion/CajasLentes/Imagenes/BK-S3.png'),
  },
  {
    id: 4,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de Lentes OCULUS de prismas para apoyo de sobremesa, con maleta de madera para transporte y con 72 lentes, todas con antireflejos. Diámetro del lente de 38 mm para uso con las monturas de prueba UB 3, UB 4, UB 4, UB 6 y montura de niños.',
    imagen: require('./assets/Products/Refraccion/CajasLentes/Imagenes/BK.png'),
  },
];

export const monturasPruebas = [
  {
    id: 1,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 3+',
    fabrica: 'OCULUS',
    descripcion:
      'Montura universal OCULUS negra y ligera de metal/plástico para 5 pares de lentes.Puente ajustable en altura e inclinación. Gracias a la colocación baja de las bisagras, las lentes se pueden insertar en los soportes de la parte trasera. Lentes de 38 mm.',
    imagen: require('./assets/Products/Refraccion/MonturasPruebas/Imagenes/UB3+.png'),
    catalogo: require('./assets/Products/Refraccion/MonturasPruebas/Catalogos/Montura Adulto UB3+_en_.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 4',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS, blanca y ligera de plástico con espacio para un total de 10 lentes de prueba de 38 mm de diámetro.',
    imagen: require('./assets/Products/Refraccion/MonturasPruebas/Imagenes/UB 4 (1).png'),
    catalogo: require('./assets/Products/Refraccion/MonturasPruebas/Catalogos/Catalogo Caja Lentes y Monturas .pdf'),
  },
  {
    id: 3,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 5',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS blanca y ligera con espacio para un total de 10 lentes de prueba de 28 mm de diámetro. Elementos coloreados opcionales.',
    imagen: require('./assets/Products/Refraccion/MonturasPruebas/Imagenes/UB 5.png'),
    catalogo: require('./assets/Products/Refraccion/MonturasPruebas/Catalogos/Montura UB-5 con Caja Lentes _0917_versand.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 6',
    fabrica: 'OCULUS',
    descripcion:
      'OCULUS se enorgullece de presentar la UB 6, fabricada con materiales de alta calidad y un innovador diseño. Con el soporte nasal y todas las posibilidades de ajuste totalmente renovado y también el soporte para las lentes, con cuatro ranuras en la parte delantera y dos en la parte posterior. El resultado es una obra maestra “made by OCULUS” creado acorde a conocimientos de última generación optimizado para la práctica diaria y basado en más de 100 años de experiencia. La UB 6 es la nueva generación en monturas de pruebas OCULUS. Cuidadosamente confeccionado a mano con una alta atención al detalle.',
    imagen: require('./assets/Products/Refraccion/MonturasPruebas/Imagenes/UB 6 (1).png'),
    catalogo: require('./assets/Products/Refraccion/MonturasPruebas/Catalogos/montura UB6.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Monturas de Prueba',
    modelo: 'PARA NIÑOS',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS para niños, para 3 pares de lentes ø 38 mm, con puente fijo o sin puente. Fabricado en metal ligero y plástico.',
    imagen: require('./assets/Products/Refraccion/MonturasPruebas/Imagenes/SEMI GAFAS DE PRUEBA.png'),
    catalogo: require('./assets/Products/Refraccion/MonturasPruebas/Catalogos/Catalogo Caja Lentes y Monturas .pdf'),
  },
];

export const foropterosDigitales = [
  {
    id: 1,
    subcategoria: 'Forópteros Digitales',
    modelo: 'EDR-9000',
    fabrica: 'EZER',
    descripcion:
      'Foróptero digital EZER modelo EDR-9000 cuenta con una pantalla LCD táctil de alta resolución. Recientemente rediseñado para conectarse en red con una plataforma de práctica digital completa. El diseño avanzado del EDR-9000 incorpora motores silenciosos, reinicio rápido y diseño delgado y compacto que elimina cualquier efecto potencial de visión de túnel que algunos pacientes perciben con cabezas ópticas más profundas. Con panel de control táctil LCD de 8”, inclinación e inversión de pantalla y una impresora incorporada. Un cilindro cruzado doble (prisma dividido) permite al paciente ver simultáneamente la lente del cilindro cruzado positivo y negativo. El EDR-9000 ofrece 6 modos de prueba que le permiten comparar directamente los resultados de la prueba objetiva con el resultado de la prueba subjetiva.',
    imagen: require('./assets/Products/Refraccion/Foropteros/Imagenes/EDR-9000.png'),
    catalogo: require('./assets/Products/Refraccion/Foropteros/Catalogos/Foroptero Digital EDR-9000.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Forópteros Digitales',
    modelo: 'CV-7600',
    fabrica: 'HONGDEE',
    descripcion:
      'Foróptero digital computarizado modelo CV-7600 de HONGDEE, con conexion Bluetooth para conectar con Auto Kerato Refractómetro y pantalla de optotipos LCD de la misma marca. Comando de control por tablet (incluida) y con impresora termal comunicada por Bluetooth. Tablet : Android 5,0.',
    imagen: require('./assets/Products/Refraccion/Foropteros/Imagenes/CV-7600.png'),
    catalogo: require('./assets/Products/Refraccion/Foropteros/Catalogos/Foroptero Digital CV-7600 (DAP-100) (1).pdf'),
  },

  {
    id: 3,
    subcategoria: 'Forópteros Digitales',
    modelo: 'TW-7100',
    fabrica: 'DONGWU',
    descripcion:
      'Foróptero digital DONGWU modelo TW-7100, con conexión inalámbrica para conectar con Auto Kerato Refractómetro y pantalla de optotipos LCD de la misma marca y con algunos equipos Topcon. Comando de control por tablet incluido y con impresora termal comunicada por Bluetooth. Tablet: Android 5,0 / resolución de 2560 x 1600.',
    imagen: require('./assets/Products/Refraccion/Foropteros/Imagenes/Foróptero Digital TW-7100 (DONGWU).png'),
    catalogo: require('./assets/Products/Refraccion/Foropteros/Catalogos/Catálogo TW-7100.pdf'),
  },
];

export const lensometrosDigitales = [
  {
    id: 1,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'LM-7800',
    fabrica: 'LUXVISION',
    descripcion:
      'Lensómetro digital computarizado LUXVISION modelo LM-7800 con lectura por medio de pantalla TFT-LCD 5,7". Posibilidad de medición de radiación UV.',
    imagen: require('./assets/Products/Refraccion/Lensometros/Imagenes/Lensómetro LM-7800 (Fondo Transparente) 2.png'),
    catalogo: require('./assets/Products/Refraccion/Lensometros/Catalogos/Lensometro Digital LM-7800 Imagen.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'ELM-9200',
    fabrica: 'EZER',
    descripcion:
      'Lensómetro digital EZER modelo ELM-9200, haga más en menos tiempo. Con el uso de su interfaz Bluetooth (se vende por separado) disfrute de la flexibilidad de la conectividad remota con toda la línea de práctica digital de Ezer. Cuenta con medición de lente progresiva, medición de luz ultravioleta y azul. La intuitiva pantalla táctil LCD de gráficos completos guía a los operadores a través del proceso.',
    imagen: require('./assets/Products/Refraccion/Lensometros/Imagenes/Lensómetro ELM-9200 (4) (Fondo Transparente).png'),
    catalogo: require('./assets/Products/Refraccion/Lensometros/Catalogos/Lensometro Digital ELM-9200.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'TW-8090 / 8090A',
    fabrica: 'DONGWU',
    descripcion:
      'Lensómetro computarizado DONGWU modelo TW-8090 con lectura por medio de pantalla a color TFT LCD de 5,6" y TFT LED de 7,0" para TW-8090A, que varía su inlcinación para mejor apreciación según posición del usuario. Activación de funciones a través de botones en panel frontal. Capacidad de medición de lentes de contacto rígido, lentes bifocales y multifocales. Incluye maleta metálica de transporte.',
    imagen: require('./assets/Products/Refraccion/Lensometros/Imagenes/TW-8090.png'),
    catalogo: require('./assets/Products/Refraccion/Lensometros/Catalogos/Lensometro TW-8090 y TW-8090A.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'PINGUI PRO',
    fabrica: 'HONGDEE',
    descripcion:
      'Lensómetro digital modelo PINGUI PRO de HONGDEE con pantalla gráfica vertical de 5,6” de fácil operación y visibilidad. Amplia gama de medidas para lentes esféricos desde -40D--+25D. Medición de la transmitancia de luz visible, rayos azules y UV disponible. El color de la pantalla se puede cambiar a modo color de alto contraste, blanco o negro para una mayor visibilidad, muy útil para medir la lente de color oscuro. Sensor Hartmann equipado para poder medir una amplia variedad de lentes. El programa de calibración automática incorporado puede calibrar automáticamente los errores finos durante la medición. El Bluetooth disponible permite ver los datos y las lecturas a través del teléfono inteligente.',
    imagen: require('./assets/Products/Refraccion/Lensometros/Imagenes/Pingui Pro.png'),
    catalogo: require('./assets/Products/Refraccion/Lensometros/Catalogos/Lensometro Digital Penguin pro brochure.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'KOALA',
    fabrica: 'HONGDEE',
    descripcion:
      'Lensómetro digital modelo KOALA de HONGDEE, con pantalla LCD táctil de 5,7” que permite una operación fácil y sencilla. Adoptando la alta velocidad de la CPU puede medir cualquier tipo de lente inmediatamente, incluso las lentes de escaneo más pequeñas como +0.12D y +0.25D. La medición de rayos UV y azules está disponible. También puede medir las gafas de sol polarizadas oscuras, incluso con una tasa de transmisión de luz del 5% con precisión. La aplicación Mobile también está disponible. Las lecturas se pueden ver en su Smartphone a través de Bluetooth. Fácil y conveniente de actualizar a través del puerto USB integrado. La personalización está disponible, idioma, pantalla de inicio, etiquetado privado, etc.',
    imagen: require('./assets/Products/Refraccion/Lensometros/Imagenes/Kolala.png'),
    catalogo: require('./assets/Products/Refraccion/Lensometros/Catalogos/Lensometro Digital Koala.pdf'),
  },
];

export const mesasElectricas = [
  {
    id: 1,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18A',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-18A de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo y con fusibles de seguridad. Incluye conexión para equipos.\nEspecificaciones:\n• Superficie de apoyo de 605 mm x 435 mm\n• Altura regulable de 645 mm a 815 mm\n• Con cuatro ruedas, dos con freno • Peso máximo de carga 50 kg\n• Peso 20 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/HD 18A-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/Catálogo Mesa HD-18A.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18C',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-18C de HONGDEE, de base metálica con pedestal lateral. Diseñada para 2 equipos grandes y un pequeño espacio para guardar. Incluye conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 1000 mm x 550 mm\n• Altura regulable de 685 mm a 885 mm\n• Con cuatro ruedas, dos con freno\n• Peso máximo de carga 50 kg\n• Peso 42 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/Mesa HD-18C (HONGDEE).png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/Catálogo Mesa HD-18C.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18T',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-18T de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye portacables debajo de la mesa que hace invisible las conexiones. Con fusibles de seguridad y dos conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 610 mm x 530 mm\n• Altura regulable de 660 mm a 860 mm\n• Con cuatro ruedas, dos con freno • Peso máximo de carga 50 kg\n• Peso 24 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/Mesa HD-18T (HONGDEE).png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/Catálogo Mesa HD-18T.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-40',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-40 de HONGDEE, de base metálica con pedestal central. Diseñada para 2 equipos grandes y con conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 920 mm x 575 mm\n• Altura regulable de 665 mm a 865 mm\n• Con cuatro ruedas, dos con freno\n• Peso máximo de carga 50 kg\n• Peso 30 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/Mesa HD-40 (HONGDEE).png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/Catálogo Mesa HD-40.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'JACKPRO',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo JACK PRO de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye dos conexiones para equipos y fusibles de seguridad.\nEspecificaciones:\n• Superficie de apoyo de 490 mm x 510 mm\n• Altura regulable de 660 mm a 840 mm\n• Con cuatro ruedas, dos con freno. • Peso máximo de carga 50 kg.\n• Peso 27 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/Mesa JACKPRO.png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/Catálogo.pdf'),
  },
  {
    id: 6,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'WCT-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo WCT-100 de HONGDEE, ideal para sillas de ruedas gracias a su amplio espacio para las piernas. Mesa de gran superficie, diseñada para acomodar dos o más equipo y con una base metálica que garantiza alta fiabilidad y durabilidad.\nEspecificaciones:\n• Tamaño de la mesa: 900 mm x 470 mm\n• Capacidad de carga: 75 kg\n• Nivel de ruido: 42db\n• Rango de elevación: 630 mm - 800 mm • Voltaje: 100V-230V\n• Potencia: 50W\n• Peso neto: 40 kg',
    imagen: require('./assets/Products/Refraccion/MesasElec/Imagenes/Mesa WCT-100 (HONGDEE).png'),
    catalogo: require('./assets/Products/Refraccion/MesasElec/Catalogos/WCT-100 Wheel chair accessible table.pdf'),
  },
];

export const camarasNoMidr = [
  {
    id: 1,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'NFC-600',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, desmontable y full automática para foco y disparo (no usa joystick). La NFC-600 cuenta con seguimiento y enfoque 3D automático y se puede conectar fácilmente a cualquier PC o portátil con Windows mediante una conexión USB. Su diseño compacto permite que sea fácil de transportar y configurar.',
    imagen: require('./assets/Products/Diagnostico/CamarasNoMidr/Imagenes/NFC-600 (CRYSTALVUE) Costado.png'),
    catalogo: require('./assets/Products/Diagnostico/CamarasNoMidr/Catalogos/NFC-600-Brochure.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'NFC-700',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, full automática para foco y disparo (no usa joystick) con sistema 3D tracking. La NFC-700 está equipada con sistema operativo Windows 10 que permite a los usuarios ver, editar y grabar toda la información sin la necesidad de conectar otro dispositivo externo. Con una resolución de 12 mpx, la captura de imágenes son de alta callidad.',
    imagen: require('./assets/Products/Diagnostico/CamarasNoMidr/Imagenes/NFC-700 (CRYSTALVUE).png'),
    catalogo: require('./assets/Products/Diagnostico/CamarasNoMidr/Catalogos/NFC-700 Brochure.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FUNDUSVUE',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, de diseño compacto y liviano (2 kg). Se opera a través de joystick para el control de movimientos y no necesita múltiples controles y configuraciones. Las luces de fijación internas y el software autoguiado lo ayudarán a capturar la imagen.',
    imagen: require('./assets/Products/Diagnostico/CamarasNoMidr/Imagenes/FundusVue.png'),
    catalogo: require('./assets/Products/Diagnostico/CamarasNoMidr/Catalogos/FundusVue Brochure.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FC162',
    fabrica: 'Mediworks',
    descripcion:
      'Cámara no midriática capaz de capturar imágenes binoculares en 30 seg. del fondo de ojo de forma totalmente automática (alineación automática, enfoque automático, interacción de voz automática). Genere un informe de diagnóstico de IA (respaldado por un sistema de detección de casos de terceros). • Campo Visual de 50°\n• Escanea el código QR\n• El sistema alineará la pupila y comenzará la captura\n• Tecnología de enfoque dividido 15 mpx.',
    imagen: require('./assets/Products/Diagnostico/CamarasNoMidr/Imagenes/FC 162 (sin fondo).png'),
    catalogo: require('./assets/Products/Diagnostico/CamarasNoMidr/Catalogos/FC162 Automatic Fundus Camera.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FC161',
    fabrica: 'Mediworks',
    descripcion:
      'Cámara no midriática portátil con pantalla touch de 4,3 pulgadas. Incluye 9 puntos de fijación interna que asisten al paciente para un alineamiento correcto. La FC 161 cuenta con un campo visual de 45° y una resolución de cámara de 12 mpx. Dispone de iluminación LED blanca y LED infrarrojo, memoria de 32 GB mediante tarjeta micro SD, y una batería de litio de 3,7 V que permite hasta 6 horas de trabajo continuo. Su peso es de 800 gramos.',
    imagen: require('./assets/Products/Diagnostico/CamarasNoMidr/Imagenes/FC161 (MEDIWORKS).png'),
    catalogo: require('./assets/Products/Diagnostico/CamarasNoMidr/Catalogos/FC161 Hand-held Fundus Camera.pdf'),
  },
];
export const tonometros = [
  {
    id: 1,
    subcategoria: 'Tonómetros',
    modelo: 'TONO VUE/P',
    fabrica: 'Crystalvue',
    descripcion:
      'Tonómetro de no contacto (aire), full automático, con tecnología 3D tracking y con opción de taquimetría (TonoVue/P). Inlcuye software de gestión de pacientes (base de datos) y proporciona valores IOP compensados al ingresar los valores CCT. Las fórmulas de IOP compensadas se pueden personalizar para el usuario.',
    imagen: require('./assets/Products/Diagnostico/Tonometros/Imagenes/TonoVUE-P (CRYSTALVUE).png'),
    catalogo: require('./assets/Products/Diagnostico/Tonometros/Catalogos/TonoVue-P Brochure.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Tonómetros',
    modelo: 'TONOCARE',
    fabrica: 'KEELER',
    descripcion:
      'Tonómetro de aire portátil, con posibilidad de conexión IR inalámbrica a la impresora en el soporte del equipo. Transmisión de datos instantánea y opción de salida de datos por USB a una computadora. Incluye cargador de sobremesa.\nEspecificaciones:\n• Rango medida 5a 50 mmHg\n• Distancia medida 11 mm del ojo\n• Peso 1 kg.',
    imagen: require('./assets/Products/Diagnostico/Tonometros/Imagenes/TonoCare-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/Tonometros/Catalogos/TonoCare Catálogo.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Tonómetros',
    modelo: 'TONÓMETRO APLANÁTICO',
    fabrica: 'KOWA',
    descripcion:
      'Tonómetro de aplanación portátil con prisma de aplanación; rango de escala 0 - 60 mm Hg (división de 1 mm Hg). Iluminación:\n• Encendido / Apagado: A través de rueda de ajuste\n• Bombilla: 2,5 V, 0,25 A intercambiable\n• Batería usada: 1,5 V, 2 piezas intercambiables.\nOcular:\n• Magnificación: 6x\n• Reposacabezas: Movible\n• Peso: 240grs.\n• Largo: 290mm.',
    imagen: require('./assets/Products/Diagnostico/Tonometros/Imagenes/HA-2.png'),
    catalogo: require('./assets/Products/Diagnostico/Tonometros/Catalogos/Catálogo.pdf'),
  },
];

export const topografosCorneal = [
  {
    id: 1,
    subcategoria: 'Topógrafos Corneales',
    modelo: 'KERATOGRAPH 5M',
    fabrica: 'OCULUS',
    descripcion:
      'Topógrafo corneal basado en anillos de plácido con 22.000 puntos de medición. El Keratograph 5M puede realizar fluogramas en tiempo real en formato de video, además de queratometrías. Incluye opciones de exámenes para estudio de ojo seco con reporte de JENVIS.',
    imagen: require('./assets/Products/Diagnostico/TopografosCorneal/Imagenes/oculus_keratograph_5m_77000_201112_37.png'),
    catalogo: require('./assets/Products/Diagnostico/TopografosCorneal/Catalogos/Catalogo keratograph_5m_español.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Topógrafos Corneales',
    modelo: 'KERATOGRAPH 4M',
    fabrica: 'OCULUS',
    descripcion:
      'Topógrafo corneal basado en anillos de plácido con 22.000 puntos de medición y posibilidad de realizar fluogramas en formato de video en tiempo real, además de realizar queratometrías.',
    imagen: require('./assets/Products/Diagnostico/TopografosCorneal/Imagenes/Keratograph 4 (OCULUS).png'),
    catalogo: require('./assets/Products/Diagnostico/TopografosCorneal/Catalogos/keratograph_4_en_1121_versand.pdf'),
  },
];

export const lamparashen = [
  {
    id: 1,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'PCL5 SHD',
    fabrica: 'ARC LASER',
    descripcion:
      'Biomicroscopio calidad alemana, con sistema de iluminación vertical y lámpara LED de 14V/5W con regulación de intensidad luminosa. La PCL5 SHD tiene la opción de cambio de aumentos mediante sistema revolver de 5 posiciones (6,3x,10x,16x, 25x y 40x). Puede ser instalada en mesas eléctricas y unidades de refracción.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/PCL5 SHD (ARC LASER).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/PCL5-SHD_star_print_E.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'PCL5 ZD',
    fabrica: 'ARC LASER',
    descripcion:
      'Biomicroscopio con sistema de iluminación lateral y lámpara LED de 14V/5W con regulación de intensidad luminosa. Permite cambiar los niveles de aumento a través de un sistema revólver de 5 posiciones (6,3x, 10x, 16x, 25x y 40x). La PCL5 ZD puede ser instalada en mesas eléctricas y unidades de refracción.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/PCL5 ZD (ARC LASER).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/PCL5-ZD_star_print_E.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-IC5/IC5D',
    fabrica: 'OCULUS',
    descripcion:
      'Biomicroscopio OCULUS con sistema de iluminación vertical tipo Haag-Streit e iluminación LED con regulación de intensidad luminosa a través de un sistema de revólver de 5 posiciones (6x,10x,16x,25x y 40x). Con opción para sistema de video y foto (IC5D). La SL-IC5/IC5D puede ser instalada en mesas eléctricas y unidades de refracción.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/SL-IC5 (OCULUS).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/Lamp. Hendidura SL-IC4 , SL-IC5_en_1118_versand.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-IC4/IC4D',
    fabrica: 'OCULUS',
    descripcion:
      'Biomicroscopio OCULUS con sistema de iluminación tipo Zeiss e iluminación LED con regulación de intensidad luminosa a través de un sistema de revólver de 5 posiciones (6x,10x,16x,25x y 40x). Con opción para sistema de video y foto (IC4D).',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/SL-IC4IC4D  (OCULUS).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/Lamp. Hendidura SL-IC4 , SL-IC5_en_1118_versand.pdf'),
  },
  {
    id: 5,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'IMAGE CAM 3',
    fabrica: 'OCULUS',
    descripcion:
      'Uno de los sistemas de documentación de imágenes más pequeños del mundo que se puede adaptar a casi todas las lámparas de hendidura disponibles en el mercado. Captura de imágenes en alta resolución, grabación de videos y control de la captura con pedal o en las versiones digitales de las lámparas de hendidura OCULUS, usando el joystick.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/IMAGE CAM 3 (3).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/IMAGE CAM 3 CATÁLOGO.pdf'),
  },
  {
    id: 6,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-1400',
    fabrica: 'LUXVISION',
    descripcion:
      'Lámpara de hendidura de alta gama y con iluminación de torre. Cuenta con un avanzado sistema óptico de Galileo y 5 aumentos (6x, 10x, 16x, 25x y 40x) que se pueden cambiar fácilmente utilizando el práctico dial de selección de aumento de la unidad. Con iluminación halógena.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/Lámapara Hendidura CJ-SL-1400 (LUXVISION)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/LH SL-1400 Catalogo.pdf'),
  },
  {
    id: 7,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-700',
    fabrica: 'LUXVISION',
    descripcion:
      'Lámpara de hendidura con microscopio estereoscopio convergente. La SL-700 ofrece una gran cantidad de funciones a un precio rentable. Dos aumento finales de 10x (Ø18 mm) y 16x (Ø14,5 mm) con el ocular de 10x. También acepta tonómetros de aplanación estándar. Incluye 3 filtros incorporados y un lente de difusión.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/SL-700 (2).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/SL-700 Catálogo.pdf'),
  },
  {
    id: 8,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'ESL-1800',
    fabrica: 'EZER',
    descripcion:
      'Lámpara de hendidura con un sistema de iluminación estilo Carl Zeiss y un avanzado sistema óptico convergente galileano. Con su sistema de revolver de 5 aumentos, ofrece una de las mejores relaciones de zoom de su clase; 6x, 10x, 16x, 25x y 40x utilizando el ocular de 12,5x.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/Lámpara Hendidura ESL-1800 (EZER)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/EZER Catalogo General-15.pdf'),
  },
  {
    id: 9,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'ESL-7800',
    fabrica: 'EZER',
    descripcion:
      'El microscopio de la lámpara de hendidura ESL-7800 es la de más alta calidad de la serie EZER. Diseñado en la configuración de estilo de torre tradicional, la ESL-7800 ofrece ópticas especializadas, mayores niveles de aumento y un amplio campo de visión. Cuenta con un avanzado sistema óptico galileano y un tambor giratorio de 5 aumentos.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/Lámpara Hendidura ESL-7800 (EZER)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/EZER Catalogo General Catálogo.pdf'),
  },
  {
    id: 10,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S260S / S260',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Zeiss con microscopio Galileo y oculares de 12,5x. Con cambio de aumento mediante sistema revólver de 3 posiciones (10x, 16x y 25x) para modelo S260S y de 5 posiciones (6x, 10x, 16x y 25x, 40x) para el modelo S260. Con iluminación LED.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/S260S - S260.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/Slit Lamp Microscope S260_S260S.pdf'),
  },
  {
    id: 11,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S360S / S360',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Haig-Streit o iluminación superior con óptica Haag-Streit y tipo microscopio Galileo. Oculares de 12,5x y cambio de aumento mediante sistema revólver de 3 posiciones (10x, 16x y 25x) para modelo S360S y de 5 posiciones (6x, 10x, 16x , 25x, 40x) para el modelo S360. Con Iluminación LED.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/S360S - S360 (sin fondo).png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/Slit Lamp Microscope S360_S360S.pdf'),
  },
  {
    id: 12,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S390L (Firefly WDR+)',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Haag-Streit o iluminación superior modelo S390L (Firefly WDR) de luz LED y óptica HD con posibilidad de explorar glándulas de meibomio y con clasificación automática. Con óptica de Galileo.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/S390L (Firefly WDR+)-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/S390L (Firefly WDR).pdf'),
  },
  {
    id: 13,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S290',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Zeiss o iluminación lateral modelo S290 de luz LED y óptica HD. Con posibilidad de explorar glándulas de meibomio y con clasificación automática. Con óptica de Galileo.',
    imagen: require('./assets/Products/Diagnostico/LamparasHen/Imagenes/S290-PhotoRoom.png-PhotoRoom.png'),
    catalogo: require('./assets/Products/Diagnostico/LamparasHen/Catalogos/Lampara Hendidura S290.pdf'),
  },
];

export const paquimetros = [
  {
    id: 1,
    subcategoria: 'Paquímetros',
    modelo: 'GOVU',
    fabrica: 'SONOMED',
    descripcion:
      'Paquímetro manual portátil para la medición de la córnea central con batería integrada.\nAparato simple de usar, solo brinda la medición obtenida. Punta integrada de 20 MHz, con pantalla que indica resultado y estatus de la batería recargable.',
    imagen: require('./assets/Products/Diagnostico/Paquimetros/Imagenes/GoVu (2) Fondo Transparente.png'),
    catalogo: require('./assets/Products/Diagnostico/Paquimetros/Catalogos/Catálogo Paquimetro GoVu Brochure 2014-1008.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Paquímetros',
    modelo: 'PACSCAN PLUS',
    fabrica: 'SONOMED',
    descripcion:
      'Biómetro con paquímetro en unidad compacta y portátil para modo A-Scan. Con medición precisa de espesor de la córnea, ACD, espesor de la lente, y longitud axial y para paquimetría central y periférica.',
    imagen: require('./assets/Products/Diagnostico/Paquimetros/Imagenes/PacScan PLUS.png'),
    catalogo: require('./assets/Products/Diagnostico/Paquimetros/Catalogos/Catálogo.pdf'),
  },
];

export const campimetros = [
  {
    id: 1,
    subcategoria: 'Campímetros',
    modelo: 'SMARTFIELD',
    fabrica: 'OCULUS',
    descripcion:
      'Perimetría con pantalla LCD de OCULUS de hasta 60°con cambio/ajuste de fijación. Tamaño del estímulo: Goldmann.',
    imagen: require('./assets/Products/Diagnostico/Campimetros/Imagenes/SMARTFIELD COSTADO.png'),
    catalogo: require('./assets/Products/Diagnostico/Campimetros/Catalogos/Catálogo Smartfield_español.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Campímetros',
    modelo: 'EASYFIELD',
    fabrica: 'OCULUS',
    descripcion:
      'Perímetro computarizado de OCULUS de rendimiento estándar en la perimetría. De campo visual central hasta 30° con tamaños de estímulos Glodmann III. Ha sido diseñado para combinar screening de campo visual y perímetro. Incorpora una cuadrícula de LED con 135 puntos de prueba fija y color del estímulo blanco. Aparato compacto, ligero y portable',
    imagen: require('./assets/Products/Diagnostico/Campimetros/Imagenes/Easyfield (OCULUS).png'),
    catalogo: require('./assets/Products/Diagnostico/Campimetros/Catalogos/Catálogo Easyfield_español.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Campímetros',
    modelo: 'CENTERFIELD 2',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva dimensión en medición de campo visual de OCULUS. Campímetro de proyección esférica para perimetría estática y cinética, posibilidad de examen hasta 70º, con desviación de fijación y parámetros de medición según Goldmann. Color del estímulo; blanco / azul. Equipo portátil.',
    imagen: require('./assets/Products/Diagnostico/Campimetros/Imagenes/Centerfield II (OCULUS) 2.png'),
    catalogo: require('./assets/Products/Diagnostico/Campimetros/Catalogos/oc_centerfield_es Catálogo.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Campímetros',
    modelo: 'TWINFIELD 2',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva dimensión en medición de campo visual, el perímetro Twinfield® 2, de proyección esférica para perimétrica estática y cinética con cúpula de proyección de 30 cm de radio para 90°de examen. Color del estímulo; blanco / azul / rojo. Padrón según la Sociedad de Oftalmología Alemana (DOG).',
    imagen: require('./assets/Products/Diagnostico/Campimetros/Imagenes/Twinfield (OCULUS) Opción 1.png'),
    catalogo: require('./assets/Products/Diagnostico/Campimetros/Catalogos/Catálogo Twinfield 2 , Español.pdf'),
  },
];

export const tomografoOcular = [
  {
    id: 1,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM STANDARD',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam Standard para obtención de imágenes digitales de la córnea completa y de la cámara anterior, hasta 50 diferentes posiciones concéntricas, produciendo 25.000 puntos de medición e imágenes completas a 360°. Opciones de configuración: paquete refractivo, paquete catarata, Belin Ambrosio, Holladay report, adaptación lentes esclerales (CSP).',
    imagen: require('./assets/Products/Diagnostico/TomografoOcular/Imagenes/PENTACAM STANDARD.png'),
    catalogo: require('./assets/Products/Diagnostico/TomografoOcular/Catalogos/Catalogo STD - HR esp.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM HR',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam HR para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Puede tomar hasta 100 diferentes imágenes en 2 segundos, entregando 500 valores de elevación, produciendo 50.000 puntos de medición e imágenes completas a 360°, con opción de configuración: paquete refractivo, paquete catarata, Belin Ambrosio, Holladay report, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen: require('./assets/Products/Diagnostico/TomografoOcular/Imagenes/PENTACAM HR (OCULUS).png'),
    catalogo: require('./assets/Products/Diagnostico/TomografoOcular/Catalogos/Catalogo STD - HR esp.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam AXL para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Pentacam AXL combina las características conocidas de Pentacam HR con un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano.',
    imagen: require('./assets/Products/Diagnostico/TomografoOcular/Imagenes/PENTACAM AXL.png'),
    catalogo: require('./assets/Products/Diagnostico/TomografoOcular/Catalogos/Catalogo Pentacam_AXL_español_0919.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL WAVE',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva cámara Pentacam AXL WAVE, primer equipo que combina la tecnología Scheimpflug con la de un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano. Incluye además, aberrometría de frente de ondas total, refracción objetiva y retroiluminación. Trae por defecto los siguientes Software: paquete catarata, paquete refractivos, Holladay report, Belin Ambrosio, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen: require('./assets/Products/Diagnostico/TomografoOcular/Imagenes/PENTACAM AXL WAVE.png'),
    catalogo: require('./assets/Products/Diagnostico/TomografoOcular/Catalogos/Catalogo Pentacam AXL WAVE español_0120_.pdf'),
  },
];

export const biomecanicaCorneal = [
  {
    id: 1,
    subcategoria: 'Biomecánica Corneal',
    modelo: 'CORVIS ST',
    fabrica: 'OCULUS',
    descripcion:
      'Equipo que combina el análisis de la biomecánica corneal con tonómetro de no contacto con paquímetro óptico. Cuenta con una cámara de ultra velocidad capaz de capturar 4330 cuadros por segundo para evaluar la biomecánica corneal. El Corvis® ST permite visualizar y medir la respuesta de la deformación corneal.',
    imagen: require('./assets/Products/Diagnostico/Biomecanica/Imagenes/Corvis ST (Costado).png'),
    catalogo: require('./assets/Products/Diagnostico/Biomecanica/Catalogos/Catálogo Corvis ST.pdf'),
  },
];

export const ecografos = [
  {
    id: 1,
    subcategoria: 'Ecógrafos',
    modelo: 'VUPAD',
    fabrica: 'SONOMED',
    descripcion:
      'Ecobiómetro portátil para modo B (bidimensional) / modo A-B/ modo UBM (ultrabiomicroscopía ) / modo B-UBM y modo A/B/UBM. Con pantalla touch e inspirado en un Smartphone. Ofrece una calidad de imagen excepcional en un paquete ergonómico tipo tablet.',
    imagen: require('./assets/Products/Diagnostico/Ecografos/Imagenes/VuPAD (SONOMED) Costado.png'),
    catalogo: require('./assets/Products/Diagnostico/Ecografos/Catalogos/Catálogo VuPad.pdf'),
  },
  {
    id: 2,
    subcategoria: 'Ecógrafos',
    modelo: 'VUMAX HD',
    fabrica: 'SONOMED',
    descripcion:
      'Sistema de ultrasonido de multi-frecuencia que combina modo A/B y UBM. Su plataforma incluye una unidad base, pantalla LCD de 22 pulgadas, sonda modo B de 12Mhz, sonda modo A de 10Mhz y sonda UBM de 35Mhz.',
    imagen: require('./assets/Products/Diagnostico/Ecografos/Imagenes/VuMAX HD (2).png'),
    catalogo: require('./assets/Products/Diagnostico/Ecografos/Catalogos/VuMAX_HD_Brochure.pdf'),
  },
  {
    id: 3,
    subcategoria: 'Ecógrafos',
    modelo: 'MASTERVU 4500 A SCAN / MASTERVU 5600 B SCAN',
    fabrica: 'SONOMED',
    descripcion:
      'Sonda para modo B-Scan o A-Scan de SONOMED. Sonda o transductor portátil con conexión USB a cuaqluier PC o Laptop.',
    imagen: require('./assets/Products/Diagnostico/Ecografos/Imagenes/Master-Vu B Product Photo.png'),
    catalogo: require('./assets/Products/Diagnostico/Ecografos/Catalogos/Catálogo.pdf'),
  },
  {
    id: 4,
    subcategoria: 'Ecógrafos',
    modelo: 'PACSCAN',
    fabrica: 'SONOMED',
    descripcion:
      'Biómetro A- Scan, compacto y portátil para contacto o inmersión. Una combinación de alta frecuencia, sondas de bajo ruido y propietario de algoritmos que permiten capturas de exploración inmediatamente después del aplanamiento a lo largo del eje visual. Con medición precisa de espesor de la córnea, ACD, espesor de la lente, y longitud axial.',
    imagen: require('./assets/Products/Diagnostico/Ecografos/Imagenes/PacScan PLUS.png'),
    catalogo: require('./assets/Products/Diagnostico/Ecografos/Catalogos/Catálogo1.pdf'),
  },
];
