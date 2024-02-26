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
    name: 'Contacto',
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
    img: 'https://lh3.googleusercontent.com/d/1T2owEPCSSf4RlB8r6iJibYj6IvLo6dE5',
    imgMedium: 'https://lh3.googleusercontent.com/d/1i_2j-rh8re6QCTYCrTUsgRSp0-OSMMQh',
    imgSmall: 'https://lh3.googleusercontent.com/d/1Q1q9WuN77ngm6tHR08MRNGnAXyeNr7jC',
  },
  {
    id: 2,
    name: 'VUPAD',
    img: 'https://lh3.googleusercontent.com/d/1rp40aAkOb1VNkJLI0vw_iUQxuhHaXqDn',
    imgMedium: 'https://lh3.googleusercontent.com/d/1E6Z75tbPsjssubdPGMYBX0gqhaMKlOuK',
    imgSmall: 'https://lh3.googleusercontent.com/d/18JXFYF5Xr2Sd3MprXsEp7-G3TaO0XE93',
    path: '/ecografos',
  },
  {
    id: 3,
    name: 'AXL WAVE',
    img: 'https://lh3.googleusercontent.com/d/1K_osa8JX3oCER7YuBqMQ-p9pX4BRHPBh',
    imgMedium: 'https://lh3.googleusercontent.com/d/1iPbig5tkly-OWdJuZ8qXrByg8E_WB3dI',
    imgSmall: 'https://lh3.googleusercontent.com/d/12itaYt94GP9cSHrqvAnWhbEi4c7sPQs9',
    path: '/tomografoocular',
  },
];

export const marcasRep = [
  {
    id: 1,
    name: 'primerasFab',
    img: 'https://lh3.googleusercontent.com/d/1RyeX8y568Nh-qhhfm_tyOeml9OX2iLpl',
  },
  {
    id: 2,
    name: 'segundasFab',
    img: 'https://lh3.googleusercontent.com/d/1SDnPAoIpr-bWfx-2akpFbqIWfAJtuF-Q',
  },
  {
    id: 3,
    name: 'tercerasFab',
    img: 'https://lh3.googleusercontent.com/d/16bX0rA7IFENB1lz7uDZUatlcX_EJMbCV',
  },
];

export const marcasRepMedium = [
  {
    id: 1,
    name: 'primerasFab',
    img: 'https://lh3.googleusercontent.com/d/1W708Zk-r_SnRM7x0hN3lr47B_06XIWZj',
  },
  {
    id: 2,
    name: 'segundasFab',
    img: 'https://lh3.googleusercontent.com/d/1sArGfwdDO8GqcQrz40gXEaqRm6U6VkmX',
  },
  {
    id: 3,
    name: 'tercerasFab',
    img: 'https://lh3.googleusercontent.com/d/1ehKfGIEnOjFPXGa-3mhNr8tsqdz95Oyo',
  },
  {
    id: 4,
    name: 'cuartoFab',
    img: 'https://lh3.googleusercontent.com/d/10ORZaabmsidVF_r6LgPXciVejR6fVxHH',
  },
];

export const marcasRepSmall = [
  {
    id: 1,
    name: 'EVO ICL',
    img: 'https://lh3.googleusercontent.com/d/1PteOCDcWmP_SCvXGWQaBuAxO0gpLT9aQ',
  },
  {
    id: 2,
    name: 'OCULUS',
    img: 'https://lh3.googleusercontent.com/d/1eVCE4jPn-RFVpDtN_XDrz04x2Y9XiWJa',
  },
  {
    id: 3,
    name: 'OCULUS SURGICAL',
    img: 'https://lh3.googleusercontent.com/d/1p0KGWrG7--w-EzeqF5fTkbphwx4OcvNk',
  },
  {
    id: 4,
    name: 'ARC LASER',
    img: 'https://lh3.googleusercontent.com/d/1JvZ0JTyQWIYRxisGtqwsCzqRsmPHS1uC',
  },
  {
    id: 5,
    name: 'SONOMED ESCALON',
    img: 'https://lh3.googleusercontent.com/d/1YJn0iGdI4JH7ogjQlat0NcgWDJWqN9oc',
  },
  {
    id: 6,
    name: 'HONGDEE',
    img: 'https://lh3.googleusercontent.com/d/1hR4fCUeaMvXkmLjA1lqGQIuNovwZmNC5',
  },
  {
    id: 7,
    name: 'ASICO',
    img: 'https://lh3.googleusercontent.com/d/1oT5s4HMfwCEJcuRPyx_RhWZCrZOgcEby',
  },
  {
    id: 8,
    name: 'CARL TEUFEL',
    img: 'https://lh3.googleusercontent.com/d/1NJ8WSFJ23AGen4spb0UNvD6l3UyAVIxd',
  },
  {
    id: 9,
    name: 'VOLK',
    img: 'https://lh3.googleusercontent.com/d/11kkwP9NZYHF6YWn6rI0Essim3rBBGiSd',
  },
  {
    id: 10,
    name: 'MEDIWORKS',
    img: 'https://lh3.googleusercontent.com/d/10GpzvM-ZypArA4TK-AJDgRcs03gcFAOu',
  },
  {
    id: 11,
    name: 'FISO',
    img: 'https://lh3.googleusercontent.com/d/1mfjrhu5jihdsywe7Cek75nxqXXAG2aPG',
  },
  {
    id: 12,
    name: 'US OPHTHALMIC',
    img: 'https://lh3.googleusercontent.com/d/1zJFdqUDnqrGafOfVvYZ5QyqJdbuD2i12',
  },
  {
    id: 13,
    name: 'MDT',
    img: 'https://lh3.googleusercontent.com/d/1JvRnUMVuvRwo1pNEpuwBJRaZIkGhQ7X2',
  },
  {
    id: 14,
    name: 'CRYSTALVUE',
    img: 'https://lh3.googleusercontent.com/d/1Dxco_kLmFKOBuTMMqHHEX3Y9WpsZdX3q',
  },
];

export const lentesEvo = [
  {
    id: 1,
    name: 'Biocompatibilidad',
    img: 'https://lh3.googleusercontent.com/d/1S7_UO8eueImvMXADAg1LOAq-pgCvy1Eg',
    descr:
      'El colámero es un material exclusivo que contiene colágeno; esto significa que la lente se ha diseñado para estar en armonía con el ojo.',
  },
  {
    id: 2,
    name: 'Ausencia del síndrome del ojo seco',
    img: 'https://lh3.googleusercontent.com/d/1abZiJ4vvit2tB581tfpvQomFBEjpz6Qc',
    descr:
      'Al no remover ni remodelar el tejido corneal, la intervención de colocación de las EVO ICL no provoca síndrome del ojo seco.',
  },
  {
    id: 3,
    name: 'Removible',
    img: 'https://lh3.googleusercontent.com/d/1FFkvlHpo4FRSJKinbtH4evDQeqt91a9R',
    descr:
      'Si se producen cambios de graduación importantes o surgen nuevas opciones para la corrección de defectos refractivos, las EVO ICL pueden extraerse por completo.',
  },
  {
    id: 4,
    name: 'Protección contra los rayos UV',
    img: 'https://lh3.googleusercontent.com/d/1jyTR_YxUQLsdChXp_jp3tvjIHuYFNPof',
    descr:
      'El colámero, un material exclusivo de Staar Surgical, proporciona protección contra los rayos UV.',
  },
  {
    id: 5,
    name: 'Intervención y recuperación rápida',
    img: 'https://lh3.googleusercontent.com/d/1lctioo4a5wrifNvbY-RwkHb_VEr04uUh',
    descr:
      'Se trata de una intervención de unos 20-30 minutos y la mayor parte de los pacientes retoman sus actividades diarias transcurridos unos días.',
  },
  {
    id: 6,
    name: 'Visión nocturna',
    img: 'https://lh3.googleusercontent.com/d/16cvGQd-wGbcaYtwMTrKz8TfUlPbEkE78',
    descr:
      'Los resultados de un ensayo clínico señalan la excelente visión nocturna que ofrecen las EVO ICL.',
  },
  {
    id: 7,
    name: 'Blandas y flexibles',
    img: 'https://lh3.googleusercontent.com/d/1pdSmzUqiHr1TURlbxVbKQLo8EocxE6xB',
    descr:
      'La colocación de las EVO ICL es muy sencilla, gracias a su estructura, que es blanda y flexible.',
  },
];

export const categorias = [
  {
    id: 1,
    nombre: 'Lentes EVO ICL',
    img: 'https://lh3.googleusercontent.com/d/1tdov753VAJaAwvpKcXd1iIrZztwZ5bCK',
    path: '/lentes-evo-icl',
  },
  {
    id: 2,
    style: '.even',
    nombre: 'Diagnóstico',
    img: 'https://lh3.googleusercontent.com/d/1ILQXG-Zjw6x5G04Tow6uzZRjyg-voMxN',
    path: '/productos/diagnosticos',
  },
  {
    id: 3,
    nombre: 'Refracción',
    img: 'https://lh3.googleusercontent.com/d/1bOva7KHFGMLP0DSQE1fib2-MfDvd90ge',
    path: '/productos/refraccion',
  },
  {
    id: 4,
    style: '.even',
    nombre: 'Unidad Refracción',
    img: 'https://lh3.googleusercontent.com/d/1iynHbm_QOq65wYdynhjnV_nuzNoCbelh',
    path: '/productos/unidadesrefraccion',
  },
  {
    id: 5,
    nombre: 'Cirugía',
    img: 'https://lh3.googleusercontent.com/d/1bMBO9dRRrybDFX8z8ZzWbM_ERTNKz4uR',
    path: '/productos/cirugia',
  },
];

/* PRODUCTOS CIRUGIA */

export const laseroftalmologico = [
  {
    id: 1,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'CLASSIC 532nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotocoagulador de ARC, Alemania, verde de 532nm, adaptado en lámpara de hendidura de 5 aumentos ARC. Con opción de endosondas  y oftalmoscopio indirecto.',
    imagen:
      'https://lh3.googleusercontent.com/d/1ZLrFvhRXOyw1ZzDvlNvmH2rGR-CxXBnw',
    catalogo:
      'https://drive.google.com/file/d/1bthh0mKytvyMPmcE76-pBCCzCsubW0at/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'CLASSIC 514nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotocoagulador de ARC, Alemania, verde «PURO» de 514nm, con micropulso y adaptado en lámpara de hendidura de 5 aumentos de la marca ARC.',
    imagen:
      'https://lh3.googleusercontent.com/d/1yu9K9piNFWvwM7oRr0l2Ih10te56e1HO',
    catalogo:
      'https://drive.google.com/file/d/1tymNGK0ut1hGV3OIA1awizWLdQXqoYTW/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'FOX III 810nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Láser de ARC, Alemania, de 810nm, para endofotocoagulación, ciclofotocoagulación transescleral (TCP), ciclofotocoagulación micropulso (CPC), tratamiento en retinopatía del prematuro y dacrio. Consola liviana de solo 1,2 kg, fácilmente transportable.',
    imagen:
      'https://lh3.googleusercontent.com/d/1-MYpvGzodBZzb0fWUxC1vQCpJgZ624d1',
    catalogo:
      'https://drive.google.com/file/d/1d8H-wIEDNWSJNU-sH0Go1ECrVk19nhxi/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'FOX III 514nm',
    fabrica: 'ARC LASER',
    descripcion:
      'Láser verde «»PURO»» 514nm de ARC, Alemania, diseñado para tratamientos de endofotocoagulación y retinopatía del prematuro con oftalmoscopio indirecto, con pulsos de microsegundos, liviano de solo 1,2 kg. Muy transportable.',
    imagen:
      'https://lh3.googleusercontent.com/d/1hw5odBYcmLvQ2QhCfcasuCy6bwVKBsDE',
    catalogo:
      'https://drive.google.com/file/d/1Y-NHIDkTZGpg-aRc01htI8dv3YLnTfQe/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG Q-LAS',
    fabrica: 'ARC LASER',
    descripcion:
      'Unidad láser fotodisruptor de ARC, Alemania, Nd:YAG de 1064nm adaptado en lámpara de hendidura ARC de 5 aumentos.',
    imagen:
      'https://lh3.googleusercontent.com/d/1nbxHPZzhvHCnwRxOY0qnlgN6ID7Fn8rj',
    catalogo:
      'https://drive.google.com/file/d/1KxEQelfe6vCBrKVY7Cq2Q2UywSg4Yezm/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG/SLT',
    fabrica: 'ARC LASER',
    descripcion:
      'VARIO es la combinación de dos tipos de láser: el modelo Classic 514nm con el láser YAG o el Cobra (SLT/YAG), en una sola mesa eléctrica.',
    imagen:
      'https://lh3.googleusercontent.com/d/1Ipd7IsxlAvHVHArkPN5BfsDDBCVjYuSK',
    catalogo:
      'https://drive.google.com/file/d/1zdxMMmtG9MdXRRgqLkpCqegrfcWCAcWG/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'YAG/CLASSIC 532',
    fabrica: 'ARC LASER',
    descripcion:
      'Combo de ARC, Alemania: combina láser YAG modelo Q-LAS con láser verde 532 nm modelo Classic, todo en una lámpara de hendidura en una sola mesa eléctrica',
    imagen:
      'https://lh3.googleusercontent.com/d/1XgQ8yPmXIx9vyUxCzWU5jjzqI3FxpDcN',
    catalogo:
      'https://drive.google.com/file/d/1dknqHteypv2CYIbVe5nW8G-7gWqEEo06/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Láser Oftalmológicos',
    modelo: 'COBRA',
    fabrica: 'ARC LASER',
    descripcion:
      'Láser modelo COBRA , que combina láser SLT modelo CITO de 532nm con láser YAG modelo Q-Las, todo en uno. Con lámpara de hendidura modelo PCL5 ZL, de tipo Zeiss y 5 aumentos, en mesa eléctrica doble, ideal para silla de ruedas.',
    imagen:
      'https://lh3.googleusercontent.com/d/1mG4sB3Lb8ZZKyZWsZnpWhsbRiqNkSqBU',
    catalogo:
      'https://drive.google.com/file/d/1P3x2eth7YYQHiwojIDh65uPinN0eTBhA/view?usp=sharing',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1XYV_d41AwmWrpK19hASJPfJ_tD6sTF60',
    catalogo:
      'https://drive.google.com/file/d/1mqwfWZYasMoNi8E__kK90GXt5gxSUGDI/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Vitreo Retina',
    modelo: 'SDI 4',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'Inversor diagonal estereoscópico (SDI) de OCULUS SURGICAL, USA. Su diseño extremadamente plano y su transmisión de luz hacen de este inversor un complemento indispensable para su microscopio en la observación de campo amplio del segmento posterior del ojo durante la cirugía. Disponible en versiones automática, motorizada y manual',
    imagen:
      'https://lh3.googleusercontent.com/d/1i7tab4e6glt9i3pICikFRXKbUpDMGgSd',
    catalogo:
      'https://drive.google.com/file/d/1mqwfWZYasMoNi8E__kK90GXt5gxSUGDI/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Vitreo Retina',
    modelo: 'LENTE DESECHABLE PARA ZEISS RESIGHT',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El nuevo lente desechable LenZ HD de OCULUS SURGICAL ha sido diseñado para un solo uso en el ZEISS RESIGHT® y combina una visión de gran campo amplio con una alta definición de imagen. Estas características lo convierten en el lente perfecto para todas las etapas de la cirugía vitreoretiniana, incluida la visión macular con alta magnificación.',
    imagen:
      'https://lh3.googleusercontent.com/d/1Jx1V-8K9UzwGZornwxGurVrMxD3ozKFy',
    catalogo:
      'https://drive.google.com/file/d/1Jxyi6VzQZEP-zQBpOnIyEFzW0JpPu0ol/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Vitreo Retina',
    modelo: 'BIOM READY',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'Sistema visual desechable de no contacto de OCULUS SURGICAL, USA,  de amplio campo visual, que provee excelente profundidad y mejor estereopsis. Incluye un lente desechable de amplio campo visual de 130°.',
    imagen:
      'https://lh3.googleusercontent.com/d/1DvzPCatwcxln0AEN-2Jk-XlQP8v-luDg',
    catalogo:
      'https://drive.google.com/file/d/1gLEPKBpJIamoa5xIlKfStp1JVq8upt03/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Vitreo Retina',
    modelo: 'LENTES DESECHABLES PARA BIOM',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El nuevo set óptico de lente desechable OCULUS SURGICAL BIOM® HD combina un gran campo de visión con una alta resolución. Ideal para todas las cirugías de vitreoretina, incluyendo visión de mácula con alta magnificación.',
    imagen:
      'https://lh3.googleusercontent.com/d/1fz7cerTAC6ft9z7rzNXYL0RvFRl2WScf',
  },
  {
    id: 6,
    subcategoria: 'Vitreo Retina',
    modelo: 'GONIO LENS',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El revolucionario sistema del nuevo lente GONIO Ready® de OCULUS SURGICAL, USA, permite durante la realización de MIGS eliminar la necesidad de sostenerla con la mano. Ofrece una excepcional profundidad de campo y una visión de 180°. Además, este innovador sistema facilita a los cirujanos la conexión de la lente GONIO Ready® al microscopio quirúrgico.',
    imagen:
      'https://lh3.googleusercontent.com/d/1-zxcl21h0iX8Sy6iHx3iwaNHxbeTMXGY',
    catalogo:
      'https://drive.google.com/file/d/1SjbgaXXS7bjgfqq3UzmApzqFsMOf7l_n/view?usp=sharing',
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
    imagen:
      'https://lh3.googleusercontent.com/d/18ZSGhQhw75pJjqFlrBRMuzhNUX9jWOaf',
    catalogo:
      'https://drive.google.com/file/d/1Z8qohb4XFJBNYVqPn0KEScV7c7fifV1m/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Instrumental Quirúrgico',
    modelo: '',
    fabrica: 'ASICO ',
    descripcion:
      'Instrumental quirúrgico oftalmológico fabricados en Estados Unidos que brindan mayor precisión y calidad para las diversas cirugías oculares.',
    imagen:
      'https://lh3.googleusercontent.com/d/14o30pVpuFL1cIAKymF-dL7fL-jE0bNZ4',
    catalogo:
      'https://drive.google.com/file/d/1lu-ykOAG_35W5nSRABqF7MmCCBiaxVWs/view?usp=sharing',
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
      imagen:
      'https://lh3.googleusercontent.com/d/1gsny2pnrPBYagQV5h5Uxc0iOe3N2RURJ',
    catalogo:
      'https://drive.google.com/file/d/13-K1C1cZS81_fDQDskeTQr68ItfFaZIC/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS RONDO',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen italiano, de base color gris claro y construida en metal. Incluye una mesa abatible y deslizable diseñada para 2 instrumentos. Además, cuenta con un panel de control adjunto a la mesa para equipos y sillón, y bloqueo magnético de la mesa. Disponible en varios colores y ofrece la opción de sillón con respaldo fijo o reclinable.',
      imagen:
      'https://lh3.googleusercontent.com/d/1BSomQLBrHAP44gfqXcidda0qfEjTYsFa',
    catalogo:
      'https://drive.google.com/file/d/10-egyqwpQ98BCAtTpmdFEz63c6L3DVc5/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS RONDO COMPACT',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen italiano, de solo 105 cm de ancho, ideal para espacios reducidos. Con base color gris claro y de construcción metálica, cuenta con una mesa abatible y deslizable para 2 instrumentos. Incluye panel de control adjunto a la mesa para instrumentos y sillón, y bloqueo magnético de la mesa.Con opción a diferentes colores, altura de mesa regulable en altura, brazo para foróptero y sillón con respaldo fijo o reclinable.',
      imagen:
      'https://lh3.googleusercontent.com/d/14uts1G3Gyd0X4dCbdP6UV5kvAgHuqC9Q',
    catalogo:
      'https://drive.google.com/file/d/1kPoJf1dYGLYUKzaUVWVjRXHW8j_ZZM8q/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS MOON LENS',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O, de origen italiano, con base color gris claro y de construcción metálica y madera. Incluye mueble curvo con 4 cajoneras y doble mesa abatibles y deslizables, con porta lentes de caja de prueba, para 2 instrumentos. Además, incluye panel de control adjunto a la mesa curva y bloqueo magnético de la mesa. Disponible en diferentes colores, con altura de mesa regulable, brazo para foróptero y sillón con respaldo fijo o reclinable.  ',
      imagen:
      'https://lh3.googleusercontent.com/d/1uY5DzZHj2_4FWfgkUadG33zLJc8xD9Vx',
    catalogo:
      'https://drive.google.com/file/d/1JBE7eZ4-y9KgbCHIWfFUjydytSWofp7n/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS TRIO',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca FISO, de origen italiano, en color gris. Construida en metal y base tapizada en madera, con sillón respaldo fijo. Cuenta con mesa giratoria y regulable en altura apta para 3 equipos. Disponible en diferentes colores y con respaldo fijo o reclinable.',
      imagen:
      'https://lh3.googleusercontent.com/d/14S_54LR221eDuqRorpjHSttRt9iL7BiQ',
    catalogo:
      'https://drive.google.com/file/d/1XSsg-cTk0sL3ofViBAJciZBC-hmB91ag/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS HERCULES',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. de origen italiano, incluye una mesa giratoria para 1 equipo, con una elevación eléctrica de 20 cm y una fuente de poder integrada en la parte superior.Con base independiente con pilar para brazo de foróptero, provisto con un brazo para soporte de proyector de optotipos y lámpara spot de cabecera con luz halógena. Disponible en diferentes colores y sillón con respaldo fijo o reclinable. Este producto es ideal para realizar exámenes a pacientes que se encuentran en silla de ruedas.',
      imagen:
      'https://lh3.googleusercontent.com/d/1x_9DEYPBwM0ISVO34a_y0VldjX8Tm8hi',
    catalogo:
      'https://drive.google.com/file/d/1fTRbZVcrQJVe1CNQPOBCgLZJbu98Q4dV/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS AUGE',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O. origen Italia, de solo 105 cm de ancho, ideal para espacios reducidoses. De color base gris claro y construida en metal, cuenta con una mesa abatible y deslizable diseñada para 2 instrumentos. Incluye panel de control adjunto a la mesa para instrumentos y sillón, y bloqueo magnético de la mesa. Con opción a diferentes colores, altura de la mesa regulable, brazo para foróptero y sillón con respaldo fijo o reclinable.',
      imagen:
      'https://lh3.googleusercontent.com/d/1qwL03Mdc-skTfVkJmV1OS9LsOO8HcLZB',
    catalogo:
      'https://drive.google.com/file/d/14Un2RWYP-ShkpJbMDPOhkM0y5Baq-_O2/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Unidad de refracción',
    modelo: 'PANVISUS ONETTE',
    fabrica: 'F.I.S.O.',
    descripcion:
      'Unidad de Refracción marca F.I.S.O Italia, con color base gris claro y construcción metálica. Dispone de una mesa abatible con seguro manual y diseñada para 1 equipo. La instalación de esta unidad requiere únicamente un ancho de 100 cm.',
      imagen:
      'https://lh3.googleusercontent.com/d/1JQO6jq3E3m306DwfIEfGK4-9FNy-_Aa5',
    catalogo:
      'https://drive.google.com/file/d/1l4q-OUZotGYWiQjWid9CtvGRSCknJBrX/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Unidad de refracción',
    modelo: 'ECO PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción ECO PLUS marca MDT, con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa corredera para 2 instrumentos con regulación eléctrica de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. \nConexión sencilla para diferentes tipos de lámparas de hendidura LED/halógenas, panel de control práctico, cajón de accesorios de fácil acceso, poste de aluminio con iluminación LED y base para proyector de optotipos. Amplia selección de colores de tapicería sin costo adicional. Modelo de sillón COMFORT con respaldo fijo. Configuración estándar para diestros, disponible para zurdos bajo pedido.',
      imagen:
      'https://lh3.googleusercontent.com/d/1fo-E86RD0JO0BaG_NR0oZGufOPfsdBCf',
    catalogo:
      'https://drive.google.com/file/d/1ZUFB3SkYzWPzoqRRpYFTNTTy91Frhizb/view?usp=sharing',
  },
  {
    id: 10,
    subcategoria: 'Unidad de refracción',
    modelo: 'SMART PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción SMART PLUS marca MDT, equipado con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa deslizante para 2 equipos con ajuste eléctrico de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Cuenta con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. Conexión sencilla para diferentes tipos de lámparas de hendidura LED / halógenas. \nPráctico panel de control y bandeja para caja de lentes de fácil acceso con brazo pivotante. Poste diagonal de aluminio con iluminación LED y repisa para proyector de optotipos. Amplia selección de colores de tapicería disponibles sin recargo. \nConfiguración solo para diestros. Sillón con respaldo fijo modelo COMFORT. Base de acero con recubrimiento en polvo.',
      imagen:
      'https://lh3.googleusercontent.com/d/1j_SyArWexP9EqrL2pQmShwIRRZGxpEGi',
    catalogo:
      'https://drive.google.com/file/d/1KViV4q7_5eeKobxbf-hG6CVvWJyQPk-i/view?usp=sharing',
  },
  {
    id: 11,
    subcategoria: 'Unidad de refracción',
    modelo: 'EASY',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción EASY marca MDT, equipado con sillón COMFORT, respaldo reclinable, con apoya brazo y apoya pies eléctricamente elevada. Mesa deslizante para 2 equipos de altura no regulable. Conexión sencilla para diferentes tipos de lámparas de hendidura; LED / halógenas. \nPráctico panel de control con poste de aluminio e iluminación LED y adaptador universal para proyector de optotipos. Posible montar autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para una iluminación de lámpara de hendidura integrada en la mesa. \nAmplia selección de colores de tapicería disponibles con recargo (SCURO - color gris como estándar). Fácil configuración in situ para diestros o zurdos. Base de acero con recubrimiento en polvo.',
      imagen:
      'https://lh3.googleusercontent.com/d/1vrXxwNONyleujOw5ojaT3L0O6m0A8vJF',
    catalogo:
      'https://drive.google.com/file/d/1yWgl0Iye1OO5iJ5ZTyh5spZmUgRZSGZ1/view?usp=sharing',
  },
  {
    id: 12,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5000',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWOKRS, con mesa diseñada para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 840 mm x 405 mm. Con sillón color negro, respaldo fijo, y regulable en altura de 410 mm a 550 mm, diseñado para soportar un peso máximo de 150 kg. El sillón incorpora apoyabrazos fijos y apoyapies plegables. La unidad está equipada con un brazo para foróptero y una lámpara de lectura, y presenta dimensiones de 1.510 mm x 1.000 mm x 2.130 mm, con un peso de 168 kg.',
      imagen:
      'https://lh3.googleusercontent.com/d/1M4ypcUxkbXhVjaFBM23_ILE0jE-x8QTX',
    catalogo:
      'https://drive.google.com/file/d/1t-XfxmeVf0nlxXc7K8QGOYCL3hRUopBB/view?usp=sharing',
  },
  {
    id: 13,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5100',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWORKS con mesa diseñada para 2 equipos,  abatible hasta 90°de giro y una superficie de medidas de 840 mm x 405 mm. Con sillón color negro, respaldo fijo, y regulable en altura de 450 mm a 590 mm, diseñado para soportar un peso máximo de 150 kg. Sus apoya brazos y pies son rebatibles. Incluye brazo para foróptero con movimiento vertical de hasta 30° y una lámpara de lectura. Dimensiones de la unidad 1.590 mm x 1.150 mm x 1.990 mm con un peso de 150 kg.',
      imagen:
      'https://lh3.googleusercontent.com/d/1_T2k-QI4GPPw7Lvdq7ynBGOqF3fue3Y9',
    catalogo:
      'https://drive.google.com/file/d/1cNqAbAk286ImfnkASmAWW8UyYucjCCmb/view?usp=sharing',
  },
  {
    id: 14,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5200B',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción MEDIWORKS, con mesa para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 670 mm x 405 mm. Con sillón color negro,  respaldo fijo, y  ajustable en altura de 450 mm hasta 590 mm. Sillón para peso máximo de 150 kg, con apoya brazos y pies rebatibles.Unidad ideal para consultas pequeñas por sus dimensiones; 1.190mm x 1.150mm x 1.990 mm y peso de 150 kg. Incluye brazo para foróptero con movimientos vertical de hasta 30° y una lámpara de lectura.',
      imagen:
      'https://lh3.googleusercontent.com/d/11c4Db4rDgXf8Z_CliTF_uF5B8eDfUG5z',
    catalogo:
      'https://drive.google.com/file/d/1RTPeB8Tiahp0QV5nqp0MjATysRsMjLFW/view?usp=sharing',
  },
  {
    id: 15,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5000A',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción MEDIWORKS, con mesa para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 805 mm x 405 mm.  Sillón de color negro con respaldo fijo y ajustable en altura de 460 mm a 600 mm, capaz de soportar un peso máximo de 150 kg. Con apoya brazos y pies rebatibles. \nDimensiones de la unidad 1.510 mm x 1.000 mm x 2.130 mm y peso de 168 kg. Incluye brazo para foróptero con movimientos vertical de hasta 30° y lámpara de lectura.',
      imagen:
      'https://lh3.googleusercontent.com/d/1cLh0B4u3qi7gYes8oGFBvau6FNDZSkAt',
    catalogo:
      'https://drive.google.com/file/d/1vZ2oY7AUEKJLj5i2C_aqrzYLDtsykBCT/view?usp=sharing',
  },
  {
    id: 16,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-7000A',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWORKS, de origen chino, construida en metal, con pedestal resistente que puede soportar brazo para lámpara de hendidura, brazo para autorefractómetro, soporte para proyector de optotipos y brazo de foróptero. Incluye lámpara superior. \nSillón con respaldo reclinable modelo OC-3000 de material tipo cuero con apoya brazos y pies abatibles, y un apoya cabezas regulable en altura. El sillón cuenta con un sistema de ajuste de altura eléctrico controlado mediante un pedal, desde 56 cm a 71 cm y con rotación de 0° - 270°. Los apoya pies tienen una altura mínima de 8,8 cm desde el suelo, y el apoya brazo se puede ajustar en un ángulo de 80° a 180°. Máximo peso de carga 150 kg.',
      imagen:
      'https://lh3.googleusercontent.com/d/1YzeG8pN0n5k5olr2SKCd0NzDZqCRCAg5',
    catalogo:
      'https://drive.google.com/file/d/1N2jWlCRv4fcVDDgmbqEVJDnfPt7SuT2_/view?usp=sharing',
  },
  {
    id: 17,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-3200',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino. Incluye brazo de foróptero oscilante automático, freno de emergencia por seguridad, sobremesa deslizable y grande para 2 equipos dispositivos, fácil de operar. Tamaño de su mesa 915 mm x 420 mm y su rango de deslizamiento es de 0 a 380 mm. Grados de rotación de la mesa de 0-90° en sentido antihorario. Cuenta con 2 puertos de carga uds para oftalmoscopio. \nSu sillón cuenta con respaldo fijo y ajuste de altura. Rango de elevación de la silla entre 520-670 mm. La unidad cuenta con una lámpara superior de 9W/220V LED.',
      imagen:
      'https://lh3.googleusercontent.com/d/1rlc0zjK20Ky0q1WOv5GTGOmcfsozywlt',
    catalogo:
      'https://drive.google.com/file/d/1DqbkvxGUwdp0sXHW5QrCIFxFtT6Id6ix/view?usp=sharing',
  },
  {
    id: 18,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino. La unidad incluye lámpara R/L de lectura con control de luminosidad, room light LED que está incluida en el poste principal contraolada desde el panel control, brazo autobalanceado para foróptero y soporte para proyector de optotipos. Su sillón gris cuenta con un respaldo reclinable y ajuste eléctrico de altura que se controla desde la consola de la unidad. Además, dispone de apoya pies y apoya brazos para mayor comodidad. También incluye un control auxiliar para el proyector y otro para otros equipos.',
      imagen:
      'https://lh3.googleusercontent.com/d/1ccXREiev1wmR-DjQMcyzkBcUSE7njfmr',
    catalogo:
      'https://drive.google.com/file/d/13ST7qmmgszQAXfHk0Wht_nAwNlptPFfj/view?usp=sharing',
  },
  {
    id: 19,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-700A',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino, construida en metal, y con un pedestal capaz de soportar brazo para lámpara de hendidura, brazo para autorefractómetro, soporte para proyector de optotipos y brazo de foróptero. Incluye lámpara superior para lectura con 7 niveles de ajuste de luminocidad y posee 3 puertos para aparatos de carga. Sillón con respaldo reclinable hasta 90° y 360° de rotación, con pernos de anclaje disponibles para sillón y unidad para mayor estabilidad.',
      imagen:
      'https://lh3.googleusercontent.com/d/1CUTPFUOqWpAnQ0R_5WKRyM8Wud-lVuxB',
    catalogo:
      'https://drive.google.com/file/d/1arrYXRVFEEwdqNQU7bHJRVd9SFxOJYq2/view?usp=sharing',
  },
  {
    id: 20,
    subcategoria: 'Unidad de refracción',
    modelo: 'VISIONARE',
    fabrica: 'US OPHTHALMIC',
    descripcion:
      'Nueva línea exclusiva de Unidades de Refracción US OPHTHALMIC de alta gama, diseñadas con madera y acero de excelente calidad. La colección cuenta con una amplia variedad de modelos y una gama de colores seleccionables, adaptándose a las necesidades individuales de cada usuario.',
    imagen: [
      
      'https://lh3.googleusercontent.com/d/1nwBXIVXbyjwoTpxZC3WDGiPiqge0SbXJ',
      'https://lh3.googleusercontent.com/d/12aU7n_FMWH_-7BgYg-sl42AMOzkttp2a',
      'https://lh3.googleusercontent.com/d/1UbnNkoN7pe4i6xp0WXITRKudZh9-fL7G',
      'https://lh3.googleusercontent.com/d/12dgk-hpcZH8WTmX7h4G0r7D7uP0pqF9H',
      'https://lh3.googleusercontent.com/d/123Lvu5JE2oAd8l3k0UeHcdus4JnEc8Gh',
    ],
    catalogo:
      'https://drive.google.com/file/d/1eIDglxYvhZaLsjIMCKZZhlUy6QXkOxDs/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1PMT6mOs8SEMv41OpR2lfeyThI056ae0Q",
    catalogo:
      'https://drive.google.com/file/d/1GCDh8kwvJfPBE3Iqc9U0W-QyivMRQAY7/view?usp=sharing',
  },
];

export const autokeratoref = [
  {
    id: 1,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ERK-9100',
    fabrica: 'EZER',
    descripcion:
      'Autorefractómetro/Keratómetro y Aberrómetro EZER modelo ERK-9100 basado y desarrollado para brindar una refracción rápida y precisa. Posee auto fogging , evitando así, la acomodación de paciente. Amplio rango de medición, mide distancia pupilar e iris. \nCon pantalla LCD a color de 6,5". El ERK-9100  incorpora  mapa de Zernike que permite identificar y evaluar aberraciones de alto y bajo orden en el ojo del paciente. El dispositivo cuenta; con modo de retroiluminación que permite hacer mediciones en pacientes con opacidad ocular, modo catarata y medición de queratometría periférica. Impresora térmica de alta velocidad incluida en el equipo.',
    imagen: "https://lh3.googleusercontent.com/d/1SuQz1A9dgO2beqvZh4riQBX2SlgieUNF",
    catalogo:
      'https://drive.google.com/file/d/1vK5qtrh0xIKypDZKIN3hebRkpeFvITz_/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ERK-BH',
    fabrica: 'EZER',
    descripcion:
      'Autorefractómetro- Keratómetro automático modelo ERK-BH marca EZER con pantalla LCD móvil que brinda un acceso más conveniente al ojo del paciente. Este dispositivo cuenta con una mentonera motorizada, así como capacidades para medir la queratometría periférica y comparar la visión. El modo CF (Comparación de la Función de Visión) permite al paciente experimentar la visión corregida mediante la aplicación de graduaciones adicionales. También proporciona mediciones del diámetro de la córnea, evaluación de cataratas con el modo ILLUM, retro-iluminación y simulación de visión cercana.',
    imagen: "https://lh3.googleusercontent.com/d/1CvdhBcQaqMdhev3_GObCVxPs60l_rK8k",
    catalogo:
      'https://drive.google.com/file/d/1tHZmDEEo1AdmZCPhit4KQSYvdd8YSIs3/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ERK-9200',
    fabrica: 'EZER',
    descripcion:
      'Auto Kerato Refractómetro marca EZER modelo ERK-9200. Escanee, mida y determine los valores de refracción y queratometría automáticamente, todo sin tener que alinear manualmente el ojo, gracias a la tecnología de alineación automática 3D. Una pantalla táctil pivotante permite flexibilidad al posicionar y evaluar a los pacientes, proporcionando un espacio de trabajo ordenado y una fácil navegación por el menú. Con el uso de una interfaz Bluetooth puede disfrutar de la flexibilidad de la conectividad remota con toda la línea EZER Digital Practice. Posee modo de retroiluminación, pudiendo comprobar cristalinos anormales, cataratas y raspaduras de córneas. Mentonera motorizada.',
    imagen: "https://lh3.googleusercontent.com/d/1qPbw2F5wtnqQpp6rqy2KNvr-_H4rbpCw",
    catalogo:
      'https://drive.google.com/file/d/1X0M19ybWS1o7Mjv-0XHIWqhFII59WHc1/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'LRK-7000',
    fabrica: 'LUXVISION',
    descripcion:
      'Autorefractómetro/Keratómetro LUXVISION modelo LRK-7000, con una velocidad de medición rápida y precisa. El sofisticado prisma giratorio es inteligente como para tener en cuenta los errores de refracción. Proyecta un anillo de medición en la retina para obtener una medición precisa. Pantalla TFT LCD color táctil de 7". Con conectividad en red e impresora térmica de alta velocidad incluida en el equipo.',
    imagen: "https://lh3.googleusercontent.com/d/1yj16JudRSXScM-eNwJaX-06F5oGOkg4j",
    catalogo:
      'https://drive.google.com/file/d/1jTc_jtw7Z908LUYZmJHCLqFOp4E5EkEu/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'LRK-7800',
    fabrica: 'LUXVISION',
    descripcion:
      'Autorefractómetro/Keratómetro LUXVISION modelo LRK-7800, con una velocidad de medición rápida y precisa. El sofisticado prisma giratorio es inteligente como para tener en cuenta los errores de refracción. Modo de retroiluminación para observar cristalino, cataratas y córnea. Posee filtro amarillo para la medición que brinda iluminación y claridad. Con cámara CCD a todo color incorporada y fuente de Luz LED blanca y azul. Pantalla TFT LCD color táctil de 7", conectividad en red e impresora térmica de alta velocidad incluida en el equipo.',
    imagen: "https://lh3.googleusercontent.com/d/1plHvpZYDldVUg5xcENc1YLsPOYPTXla6",
    catalogo:
      'https://drive.google.com/file/d/1jTc_jtw7Z908LUYZmJHCLqFOp4E5EkEu/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1e-hEO4TEzlVEXsFJ65nnOgguRlGZ9U1S",
    catalogo:
      'https://drive.google.com/file/d/18CsKiW-KmbS1jFKC4UdqJKiDCI-f412T/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-200 / AR-200',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-200 y Autorefractómetro AR-200 de HONGDEE, de manejo manula y con sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla LCD TFT de alta resolución a color de 5,7". Impresora incorporada con auto corte.',
    imagen: "https://lh3.googleusercontent.com/d/1R9AlJnSoigfk4csTQd1gHc6Gj55BHTpl",
    catalogo:
      'https://drive.google.com/file/d/1l9DpyS9sRuptpEvRjNvoDlxrpRJuxUK4/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-900',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-900 de HONGDEE de manejo semiautomático y  sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla táctil LCD TFT de alta resolución a color de 6,5" y plegable hasta 90°. Impresora icorporada con auto corte y Joystick motorizado. Mentonera regulable en altura eléctricamente, auto eye tracking y con auto foco y captura automática.',
    imagen: "https://lh3.googleusercontent.com/d/1eaHtXF7V41dwHPU3RfnoiTo9WB-npVpb",
    catalogo:
      'https://drive.google.com/file/d/1KYJYHdaTp260qaFjrQJFnON7B20aiDKI/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-710',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-710 full automático de HONGDEE con sistema de prisma rotativo que permite obtener información altamente confiable. Panel de control con pantalla táctil de 9" para una fácil operación. Medición totalmente automatizada R/L; solo un toque en la pantalla para realizar la medición completa. Panel de control giratorio de 360° apto para la instalación en diferentes configuraciones de salas de examen ocular. Con enfoque y seguimiento ocular automático (eye tracking). Medición automática y mentonera motorizada.',
    imagen: "https://lh3.googleusercontent.com/d/1rBlG34VxsE-Zd9KXwHZsGE_xkskPfyoL",
    catalogo:
      'https://drive.google.com/file/d/1a_yyns6z3exzfhxEK2Y3sb-bsmYWRGDK/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1lDClb5Lm1N9FKH4sp4d7ATScfy9Cv3w-",
    catalogo:
      'https://drive.google.com/file/d/1XTKNZOpyKpy9O-KoDlAU6DQmB4-zDXe_/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'EDC-2600',
    fabrica: 'EZER',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos EZER modelo EDC-2600, una moderna pantalla de 24” con características sorprendentes que proporciona lo necesario para la medición de la agudeza visual e imágenes para explicaciones adicionales. Puede ser calibrada automáticamente a la distancia de trabajo. ',
    imagen: "https://lh3.googleusercontent.com/d/11w-ZQwRbR8kdj0YH_hUU7_HMJ57cq3Hl",
    catalogo:
      'https://drive.google.com/file/d/1sNzB9NS9tgHvdaWM8599tGcwVONnJjS7/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'LDC-2600',
    fabrica: 'LUXVISION ',
    descripcion:
      'La LDC-2600 de LUXVISION es un moderno sistema de agudeza visual con una pantalla LCD de 21” y características sorprendentes. Las funciones de enmascaramiento y un diagrama visual explicativo son características que usted y sus pacientes apreciarán. La distancia de trabajo es variable y con calibración automática de gráficos. El software LDC-2600 se basa en una tarjeta SD, lo que permite que la carga de imágenes sea extremadamente rápida. La LDC-2600 simplifica la educación del paciente con un diagrama de ojos integrado.',
    imagen: "https://lh3.googleusercontent.com/d/1_qbqC1CXSymC0ZM2DTLNrMdtDC-nGFFj",
    catalogo:
      'https://drive.google.com/file/d/1xfy75Z1EG1wVAmXgu73GzUXm1Cu9QUbM/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'CP-1900C',
    fabrica: 'HONGDEE',
    descripcion:
      'Pantalla de optotipos LCD modelo de origen chino, de 23" que incorpora una amplia serie de optotipos: E, C de Landolt, letras y números y optotipos para niños, inclusive test Schober, test sensibilidad contraste, optotipo en V, test Worth, ETDRS, Stereo test, test astigmatismo, test de puntos de fijación, test de Ishihara, Snellen, cilindros cruzados, panel rojo /verde aplicable a todos los test, además test Cyclo Torsión, Estere test con triángulo con fusión de video y audio disponible.',
    imagen: "https://lh3.googleusercontent.com/d/1GDpWKAcNhjA7mt7LxZYq2zxxk9bfHnJS",
    catalogo:
      'https://drive.google.com/file/d/1mYCTvzmFvs4tc2arVIcAKMV30aFWCLV5/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'C9003',
    fabrica: 'DONGWU',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos DONGWU, todo en uno. Medición de agudeza visual representada en una pantalla de 23” con control remoto e iluminación LED. Esta unidad es una ayuda independiente al examen convencional e incorpora una amplia serie de optotipos. Con soporte para mural.',
    imagen: "https://lh3.googleusercontent.com/d/1IOwbF1jdsjQ1g9rsSI-PqGv8rsKbI-Wb",
    catalogo:
      'https://drive.google.com/file/d/1U_0AvBxZJdXLpScATNvjSJxo-57DBoR_/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'ESSENCE',
    fabrica: 'HONGDEE',
    descripcion:
      'Pantalla plana LCD de proyección de optotipos de HONGDEE, todo en uno. Medición de agudeza visual representada en una pantalla de 17” y control remoto infrarrojo. Distancia de proyección de 2 a 7 mts. y con función de video y audio disponible. Esta unidad es una ayuda independiente al examen convencional e incorpora una amplia serie de optotipos: E, C de Landolt, letras y números y optotipos para niños, inclusive test Schober, optotipo en V, test Worth, ETDRS, stereo test, test astigmatismo, test de puntos de fijación, test de Ishihara, Snellen, cilindros cruzados, panel rojo /verde aplicable a todos los test, además test de sencibilidad al contraste.',
    imagen: "https://lh3.googleusercontent.com/d/1_eacDXMhp3mCkuV8PlWbFhx6Ia9-AvzS",
    catalogo:
      'https://drive.google.com/file/d/11R6PeeQtPDeughAPX5RFkA0gcCZ2ulzx/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'LCP-7800',
    fabrica: 'LUXVISION ',
    descripcion:
      'Proyector de optotipos LUXVISION modelo LCP-7800 con distancia de proyección de 1.5 a 6 mts. Iluminación LED y control remoto con posibilidad de programar 1 secuencia de optotipos según requerimiento del usuario. Incluye 41 optotipos diferentes (pediátricos, letras, números e iletrados). Equipo básico incluye sujeción de sobremesa.',
    imagen: "https://lh3.googleusercontent.com/d/1t5LN6O4G73R_7LLZvS1TcfQSs1dJxBGa",
    catalogo:
      'https://drive.google.com/file/d/1Aj7Qt8fWIbA8mg4lTpZTj00AaZ_8c1oS/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'TW660LA ',
    fabrica: 'DONGWU',
    descripcion:
      'Proyector de optotipos marca DONGWU modelo TW-660A con luz halógena y TW-660LA con Iluminación LED. Su distancia de proyección es de 1,5 a 6 mts. Con control remoto y  posibilidad de programar 1 secuencia de optotipos según requerimiento del usuario. Incluye 30 optotipos diferentes (pediátricos, letras, números e iletrados) con posibilidad de enmascaramiento de los optotipos en forma vertical, horizontal e independientes (uno a uno). Equipo básico incluye sujeción de sobremesa.',
    imagen: "https://lh3.googleusercontent.com/d/13rTXXoLsjtgRfy1_Dj3nQAFzUL9dOQsq",
    catalogo:
      'https://drive.google.com/file/d/1dpLnlsOvEw90Py9SnylTUVtPeOQjn_e-/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'CP-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Proyector de optotipos modelo CP-100 de HONGDEE con ampliación de proyección 30x (a 5m). Tamaño de proyección 330 mm (ancho) x 270 mm (alto) (a 5m) e incluye 30 chart o patrones diferentes. Su velocidad de conversión de gráficos es uno por 0,03 s. Enmascaramiento: 1 abierto, 5 líneas horizontales, 8 líneas verticales, 21 letras sueltas, 1 rojo/verde.',
    imagen: "https://lh3.googleusercontent.com/d/1hz-_drbrnU_Mxsa4C-4FeobX_9sOTCOm",
    catalogo:
      'https://drive.google.com/file/d/1ZzUXLtIKB63kZ6z9Mh_UlztkcEazUtyw/view?usp=sharing',
  },
  {
    id: 10,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'ELITE',
    fabrica: 'HONGDEE',
    descripcion:
      'La  tabla de agudeza visual digital  ELITE es una idea totalmente innovadora que ofrece la marca HONGDEE. Todo el software está integrado en un dispositivo USB que puede ser conectado a cualquier monitor a través de un cable HDMI. AL conectarlo obtendrá un cuadro de agudeza visual completamente funcional adaptado al tamaño del monitor de acuerdo a su demanda. El control remoto está diseñado para ser fácil y cómodo de usar. ',
    imagen: "https://lh3.googleusercontent.com/d/17f6LTjtHk1fBCwqnM0Td0Z5aqBrpacSS",
    catalogo:
      'https://drive.google.com/file/d/18PGiavlOABDYaRRkf1ZIC5z476QjowT1/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1taIghSqp_4tRi5flI2eAAgpxcaTFxq8Z",
    catalogo:
      'https://drive.google.com/file/d/1Iv0TYMOxLN3FS4MiSYsA9bAXFFjpxSkM/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1NoL29nTR8fgMhwUznTUHVwR65to1r_IS",
    catalogo:
      'https://drive.google.com/file/d/1JuyAG6O-iXqt7DmEKK3cQUqqIyBRN_QV/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK-2',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de lentes OCULUS modelo BK-2 para apoyo de sobremesa, con maleta de madera para transporte y con 130 lentes. Diámetro del lente de 38 mm. Para uso con las monturas de prueba UB 3, UB 4 y montura de niños.',
    imagen: "https://lh3.googleusercontent.com/d/1hicHAy4Nhq30aMS2JfnFMMWkTErz3gXB",
    catalogo:
      'https://drive.google.com/file/d/1JuyAG6O-iXqt7DmEKK3cQUqqIyBRN_QV/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK-S3',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de lentes OCULUS modelo BK-S3 para apoyo de sobremesa, con maleta de madera para transporte y con 220 lentes. Diámetro del lente de 28 mm. Para uso con montura de prueba UB 5.',
    imagen: "https://lh3.googleusercontent.com/d/1e7pilHDK1CbSOO3Dx0aV5AZUK-p80a2N",
    catalogo:
      'https://drive.google.com/file/d/1JuyAG6O-iXqt7DmEKK3cQUqqIyBRN_QV/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Cajas de Lentes',
    modelo: 'BK',
    fabrica: 'OCULUS',
    descripcion:
      'Caja de Lentes OCULUS de prismas para apoyo de sobremesa, con maleta de madera para transporte y con 72 lentes, todas con antireflejos. Diámetro del lente de 38 mm para uso con las monturas de prueba UB 3, UB 4, UB 4, UB 6 y montura de niños.',
    imagen: "https://lh3.googleusercontent.com/d/1antbRzjuxfuPEC3BCWiyTOAPosTAzAE2",
    catalogo:
      'https://drive.google.com/file/d/1JuyAG6O-iXqt7DmEKK3cQUqqIyBRN_QV/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1t5mjiSI7cx7sACTJh5HjbmmscHkhW-l8",
    catalogo:
      'https://drive.google.com/file/d/1ph_faVF4jtrH_TneZiND9yCN1FUGw95k/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 4',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS, blanca y ligera de plástico con espacio para un total de 10 lentes de prueba de 38 mm de diámetro.',
    imagen: "https://lh3.googleusercontent.com/d/1Pno3W1Q8zLRVrw0gsYGixxVvGyWb2eGg",
    catalogo:
      'https://drive.google.com/file/d/12nRhqXm-UUEk6FSpwa7oNv1fidHWYDwe/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 5',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS blanca y ligera con espacio para un total de 10 lentes de prueba de 28 mm de diámetro. Elementos coloreados opcionales.',
    imagen: "https://lh3.googleusercontent.com/d/1XsglhKDzwKr-iI00lUS6E5l2FqRZEqUh",
    catalogo:
      'https://drive.google.com/file/d/15P0395CMEn2EcSJAt97NGrcdYnLDUqby/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 6',
    fabrica: 'OCULUS',
    descripcion:
      'OCULUS se enorgullece de presentar la UB 6, fabricada con materiales de alta calidad y un innovador diseño. Con el soporte nasal y todas las posibilidades de ajuste totalmente renovado y también el soporte para las lentes, con cuatro ranuras en la parte delantera y dos en la parte posterior. El resultado es una obra maestra “made by OCULUS” creado acorde a conocimientos de última generación optimizado para la práctica diaria y basado en más de 100 años de experiencia. La UB 6 es la nueva generación en monturas de pruebas OCULUS. Cuidadosamente confeccionado a mano con una alta atención al detalle.',
    imagen: "https://lh3.googleusercontent.com/d/1g8hNMG6GxALB1HmcIV2uxl0KvbUrN6YK",
    catalogo:
      'https://drive.google.com/file/d/11t-eIeoxD6XjeSAW9VXSoINXCs1KQdCZ/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Monturas de Prueba',
    modelo: 'PARA NIÑOS',
    fabrica: 'OCULUS',
    descripcion:
      'Montura OCULUS para niños, para 3 pares de lentes ø 38 mm, con puente fijo o sin puente. Fabricado en metal ligero y plástico.',
    imagen: "https://lh3.googleusercontent.com/d/1Dug5LC9i729M4IWNtnweX38KzvJAn5zw",
    catalogo:
      'https://drive.google.com/file/d/12nRhqXm-UUEk6FSpwa7oNv1fidHWYDwe/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1m_0GFzupkr-bD4Pd8feUQ-toG6FkEkAK",
    catalogo:
      'https://drive.google.com/file/d/1iTPAIrkbYrNWjMhE1qN3gSVOd5PdYZtI/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Forópteros Digitales',
    modelo: 'CV-7600',
    fabrica: 'HONGDEE',
    descripcion:
      'Foróptero digital computarizado modelo CV-7600 de HONGDEE, con conexion Bluetooth para conectar con Auto Kerato Refractómetro y pantalla de optotipos LCD de la misma marca. Comando de control por tablet (incluida) y con impresora termal comunicada por Bluetooth. Tablet : Android 5,0.',
    imagen: "https://lh3.googleusercontent.com/d/182RP8sJHQeExUfi8DWEid6EqmLhu6Yu-",
    catalogo:
      'https://drive.google.com/file/d/1foZO6xdI2MlyjsUT_b5kW0Pd52MwFrcw/view?usp=sharing',
  },

  {
    id: 3,
    subcategoria: 'Forópteros Digitales',
    modelo: 'TW-7100',
    fabrica: 'DONGWU',
    descripcion:
      'Foróptero digital DONGWU modelo TW-7100, con conexión inalámbrica para conectar con Auto Kerato Refractómetro y pantalla de optotipos LCD de la misma marca y con algunos equipos Topcon. Comando de control por tablet incluido y con impresora termal comunicada por Bluetooth. Tablet: Android 5,0 / resolución de 2560 x 1600.',
    imagen: "https://lh3.googleusercontent.com/d/10JURwk7lNci2fc80vOv4ejkZrLO8-K0F",
    catalogo:
      'https://drive.google.com/file/d/1UNuY-LDiF9QQuHvm76DKBrjPpvfbY5ts/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1NFDbEIX9ZYQFqVviOO02QSBl5r5_pfEQ",
    catalogo:
      'https://drive.google.com/file/d/1FXMommRvyqM6TR0ZHTOve2luXuqN_NZO/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'ELM-9200',
    fabrica: 'EZER',
    descripcion:
      'Lensómetro digital EZER modelo ELM-9200, haga más en menos tiempo. Con el uso de su interfaz Bluetooth (se vende por separado) disfrute de la flexibilidad de la conectividad remota con toda la línea de práctica digital de Ezer. Cuenta con medición de lente progresiva, medición de luz ultravioleta y azul. La intuitiva pantalla táctil LCD de gráficos completos guía a los operadores a través del proceso.',
    imagen: "https://lh3.googleusercontent.com/d/1TUfGEclKfxNog_3fOw00hDazVCE6mCAF",
    catalogo:
      'https://drive.google.com/file/d/1AhpUdKC68sEHbB76VWsKhlxhFJF9v66J/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'TW-8090 / 8090A',
    fabrica: 'DONGWU',
    descripcion:
      'Lensómetro computarizado DONGWU modelo TW-8090 con lectura por medio de pantalla a color TFT LCD de 5,6" y TFT LED de 7,0" para TW-8090A, que varía su inlcinación para mejor apreciación según posición del usuario. Activación de funciones a través de botones en panel frontal. Capacidad de medición de lentes de contacto rígido, lentes bifocales y multifocales. Incluye maleta metálica de transporte.',
    imagen: "https://lh3.googleusercontent.com/d/1-5wqHU40tKFfjm5sQUHHnJm6eAhBDW8y",
    catalogo:
      'https://drive.google.com/file/d/1uqOV6Vgle84Xufhiu8rQO2s4s7V3fSVb/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'PINGUI PRO',
    fabrica: 'HONGDEE',
    descripcion:
      'Lensómetro digital modelo PINGUI PRO de HONGDEE con pantalla gráfica vertical de 5,6” de fácil operación y visibilidad. Amplia gama de medidas para lentes esféricos desde -40D--+25D. Medición de la transmitancia de luz visible, rayos azules y UV disponible. El color de la pantalla se puede cambiar a modo color de alto contraste, blanco o negro para una mayor visibilidad, muy útil para medir la lente de color oscuro. Sensor Hartmann equipado para poder medir una amplia variedad de lentes. El programa de calibración automática incorporado puede calibrar automáticamente los errores finos durante la medición. El Bluetooth disponible permite ver los datos y las lecturas a través del teléfono inteligente.',
    imagen: "https://lh3.googleusercontent.com/d/1nmK7KCzIes0zMW2B0z_RI8XmDTGxlco0",
    catalogo:
      'https://drive.google.com/file/d/1gMrCdMh5sV9omaltLiGTR_fxpaxcFdRI/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'KOALA',
    fabrica: 'HONGDEE',
    descripcion:
      'Lensómetro digital modelo KOALA de HONGDEE, con pantalla LCD táctil de 5,7” que permite una operación fácil y sencilla. Adoptando la alta velocidad de la CPU puede medir cualquier tipo de lente inmediatamente, incluso las lentes de escaneo más pequeñas como +0.12D y +0.25D. La medición de rayos UV y azules está disponible. También puede medir las gafas de sol polarizadas oscuras, incluso con una tasa de transmisión de luz del 5% con precisión. La aplicación Mobile también está disponible. Las lecturas se pueden ver en su Smartphone a través de Bluetooth. Fácil y conveniente de actualizar a través del puerto USB integrado. La personalización está disponible, idioma, pantalla de inicio, etiquetado privado, etc.',
    imagen: "https://lh3.googleusercontent.com/d/117dsvouR4UOqTCJlDLoOWVDlvEGFVT7p",
    catalogo:
      'https://drive.google.com/file/d/1AE1nk2Ww_67260m39OhFa5zP318W8eQ4/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/11vFuG6z3RirSt1LPRSGq8eIkhjhPJtQb",
    catalogo:
      'https://drive.google.com/file/d/1wUPUavUs3q1oAndP0NWIRIjHl_NTy6sH/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18C',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-18C de HONGDEE, de base metálica con pedestal lateral. Diseñada para 2 equipos grandes y un pequeño espacio para guardar. Incluye conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 1000 mm x 550 mm\n• Altura regulable de 685 mm a 885 mm\n• Con cuatro ruedas, dos con freno\n• Peso máximo de carga 50 kg\n• Peso 42 kg',
    imagen: "https://lh3.googleusercontent.com/d/1zPAUT1oedgXLP6Rqnfb2hG84A-UBwPXw",
    catalogo:
      'https://drive.google.com/file/d/1fsyRlf1p7h1d0PXljxtLHLgYCQBDnyVe/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18T',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-18T de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye portacables debajo de la mesa que hace invisible las conexiones. Con fusibles de seguridad y dos conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 610 mm x 530 mm\n• Altura regulable de 660 mm a 860 mm\n• Con cuatro ruedas, dos con freno • Peso máximo de carga 50 kg\n• Peso 24 kg',
    imagen: "https://lh3.googleusercontent.com/d/1XBpdutdgjmJ41lLi_tFEtU__NSa1qvA4",
    catalogo:
      'https://drive.google.com/file/d/1ttkXFRdWPUko7PIho9Q7yfYwdnPC8tVd/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-40',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo HD-40 de HONGDEE, de base metálica con pedestal central. Diseñada para 2 equipos grandes y con conexiones para equipos.\nEspecificaciones:\n• Superficie de apoyo de 920 mm x 575 mm\n• Altura regulable de 665 mm a 865 mm\n• Con cuatro ruedas, dos con freno\n• Peso máximo de carga 50 kg\n• Peso 30 kg',
    imagen: "https://lh3.googleusercontent.com/d/1rfPnfb-zntlbL8JiL3XD2nEQrd3hg3pm",
    catalogo:
      'https://drive.google.com/file/d/1rIGz8hbpEJ4T17W4XQNJiI-E3jU7oWre/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'JACKPRO',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo JACK PRO de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye dos conexiones para equipos y fusibles de seguridad.\nEspecificaciones:\n• Superficie de apoyo de 490 mm x 510 mm\n• Altura regulable de 660 mm a 840 mm\n• Con cuatro ruedas, dos con freno. • Peso máximo de carga 50 kg.\n• Peso 27 kg',
    imagen: "https://lh3.googleusercontent.com/d/1xUO1qlwiX7fyh-I_TZFJMocR2CAJLrjo",
    catalogo:
      'https://drive.google.com/file/d/16qEAZ580JOJirec-JJ7gj4Bvqj1Ro_Sz/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'WCT-100',
    fabrica: 'HONGDEE',
    descripcion:
      'Mesa eléctrica modelo WCT-100 de HONGDEE, ideal para sillas de ruedas gracias a su amplio espacio para las piernas. Mesa de gran superficie, diseñada para acomodar dos o más equipo y con una base metálica que garantiza alta fiabilidad y durabilidad.\nEspecificaciones:\n• Tamaño de la mesa: 900 mm x 470 mm\n• Capacidad de carga: 75 kg\n• Nivel de ruido: 42db\n• Rango de elevación: 630 mm - 800 mm • Voltaje: 100V-230V\n• Potencia: 50W\n• Peso neto: 40 kg',
    imagen: "https://lh3.googleusercontent.com/d/1R6YQLEPk2-e_4kVsnnrhRaiW76DH3jih",
    catalogo:
      'https://drive.google.com/file/d/16S2HyUmdY51bogzI25O-h0JiNkQsCmBk/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'MD-2 y MD-3',
    fabrica: 'MDT',
    descripcion:
      'Diseñadas para la instalación de diversos dispositivos oftálmicos, como lámparas de hendidura, autorrefqueratómetros, tonómetros sin contacto, perímetros, etc. Las mesas MDT permiten examinar de manera rápida y cómoda a los pacientes en sillas de ruedas y están equipadas con una columna telescópica eléctrica multivoltaje (100-240V AC) de aluminio anodizado, tablero de MDF (densidad media, tableros de fibras) barnizados con revestimientos de poliuretano de alta calidad y resistentes al desgaste. Además, cuenta con una base de acero con recubrimiento en polvo y 4 ruedas bloqueables de Ø75 mm (serie MD) ó 2 ruedas de Ø50 mm y 2 patas atornilladas (COMBO-1, COMBO-2).',
    imagen: [
      "https://lh3.googleusercontent.com/d/1lDrllXUYSd5rV4gqNlGGr-vv2VMCrojw",
      "https://lh3.googleusercontent.com/d/10Irk0KAUO2q2ZM9INYwQYEWWqljjJ6F4",
    ],
    catalogo:
      'https://drive.google.com/file/d/1-_Alt6h4VLMezvgZIezt9YbKKdQ9p8-u/view?usp=sharing',
  },
];

// Diagnostico

export const camarasNoMidr = [
  {
    id: 1,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'NFC-600',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, desmontable y full automática para foco y disparo (no usa joystick). La NFC-600 cuenta con seguimiento y enfoque 3D automático y se puede conectar fácilmente a cualquier PC o portátil con Windows mediante una conexión USB. Su diseño compacto permite que sea fácil de transportar y configurar.',
    imagen: "https://lh3.googleusercontent.com/d/1BhJJ32cqZ7ADT_wfMeaafMyuF4DE2Oqt",
    catalogo:
      'https://drive.google.com/file/d/15etFbbKI2fgP9krQfsI7stV8D79SjwaT/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'NFC-700',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, full automática para foco y disparo (no usa joystick) con sistema 3D tracking. La NFC-700 está equipada con sistema operativo Windows 10 que permite a los usuarios ver, editar y grabar toda la información sin la necesidad de conectar otro dispositivo externo. Con una resolución de 12 mpx, la captura de imágenes son de alta callidad.',
    imagen: "https://lh3.googleusercontent.com/d/16RKPabLaKEfQBuIA9rfY2Gt8O8ApGdtO",
    catalogo:
      'https://drive.google.com/file/d/1NDusPlRtT97Atr58Anbf6qLtWBAef_ZL/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FUNDUSVUE',
    fabrica: 'Crystalvue',
    descripcion:
      'Cámara retinal no midriática, de diseño compacto y liviano (2 kg). Se opera a través de joystick para el control de movimientos y no necesita múltiples controles y configuraciones. Las luces de fijación internas y el software autoguiado lo ayudarán a capturar la imagen.',
    imagen: "https://lh3.googleusercontent.com/d/1ZG5ubtI_PegqMkQYZgJb9NtDYrgkdcz3",
    catalogo:
      'https://drive.google.com/file/d/17YFry5eGQgwMHpFDj8ej4pavEaLSilhn/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FC162',
    fabrica: 'Mediworks',
    descripcion:
      'Cámara no midriática capaz de capturar imágenes binoculares en 30 seg. del fondo de ojo de forma totalmente automática (alineación automática, enfoque automático, interacción de voz automática). Genere un informe de diagnóstico de IA (respaldado por un sistema de detección de casos de terceros). • Campo Visual de 50°\n• Escanea el código QR\n• El sistema alineará la pupila y comenzará la captura\n• Tecnología de enfoque dividido 15 mpx.',
    imagen: "https://lh3.googleusercontent.com/d/1c0FoDTkEW-DZTVbUFefJqJIXbqizzdpk",
    catalogo:
      'https://drive.google.com/file/d/18m4dpl3hUXAON6JOgX90Vh3vLJhqvrjw/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FC161',
    fabrica: 'Mediworks',
    descripcion:
      'Cámara no midriática portátil con pantalla touch de 4,3 pulgadas. Incluye 9 puntos de fijación interna que asisten al paciente para un alineamiento correcto. La FC 161 cuenta con un campo visual de 45° y una resolución de cámara de 12 mpx. Dispone de iluminación LED blanca y LED infrarrojo, memoria de 32 GB mediante tarjeta micro SD, y una batería de litio de 3,7 V que permite hasta 6 horas de trabajo continuo. Su peso es de 800 gramos.',
    imagen: "https://lh3.googleusercontent.com/d/1cdvkt526-8bqpgJ9wIadSiLbKBTlY8DE",
    catalogo:
      'https://drive.google.com/file/d/1wU4JAI1pZHQNQqfVLYaMeFkEw2gaZ2Zf/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1A8X0i2mLmAJ5VEtPyjab7AIACjlZ4isU",
    catalogo:
      'https://drive.google.com/file/d/1LdfQ9o1uRW4NXUT17r8VevoumVkgL0Q5/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Tonómetros',
    modelo: 'TONOCARE',
    fabrica: 'KEELER',
    descripcion:
      'Tonómetro de aire portátil, con posibilidad de conexión IR inalámbrica a la impresora en el soporte del equipo. Transmisión de datos instantánea y opción de salida de datos por USB a una computadora. Incluye cargador de sobremesa.\nEspecificaciones:\n• Rango medida 5a 50 mmHg\n• Distancia medida 11 mm del ojo\n• Peso 1 kg.',
    imagen: "https://lh3.googleusercontent.com/d/1pxKqox0wux7c4xAhFCyrdrBgXn3y1qka",
    catalogo:
      'https://drive.google.com/file/d/1f6tGZ1zsl5e6NxHKJdU4hqLceB9O02rW/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Tonómetros',
    modelo: 'TONÓMETRO APLANÁTICO',
    fabrica: 'KOWA',
    descripcion:
      'Tonómetro de aplanación portátil con prisma de aplanación; rango de escala 0 - 60 mm Hg (división de 1 mm Hg). Iluminación:\n• Encendido / Apagado: A través de rueda de ajuste\n• Bombilla: 2,5 V, 0,25 A intercambiable\n• Batería usada: 1,5 V, 2 piezas intercambiables.\nOcular:\n• Magnificación: 6x\n• Reposacabezas: Movible\n• Peso: 240grs.\n• Largo: 290mm.',
    imagen: "https://lh3.googleusercontent.com/d/1mykjukD669HhgDJ_ge4mpajMWKR_WayT",
    catalogo:
      'https://drive.google.com/file/d/1SoU4ROb0Djb7sO8UNoJTlahe6VpfaZF0/view?usp=sharing',
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

    imagen:
      'https://lh3.googleusercontent.com/d/1EO6RmjJeCRqDOBZUNv7TH4ncVrRKsPYc',
    catalogo:
      'https://drive.google.com/file/d/1BOozgCjXo8eAykEcmcKNwAwAXiMxP_AR/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Topógrafos Corneales',
    modelo: 'KERATOGRAPH 4M',
    fabrica: 'OCULUS',
    descripcion:
      'Topógrafo corneal basado en anillos de plácido con 22.000 puntos de medición y posibilidad de realizar fluogramas en formato de video en tiempo real, además de realizar queratometrías.',
    imagen:
      'https://lh3.googleusercontent.com/d/1xD5Qf7oASCe3v67Nsg7iJAAjhFuQJ5d6',
    catalogo:
      'https://drive.google.com/file/d/1uOxQzD4MzbSQlI_Of6k3TjIBflO42SBf/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1I6RStfz628ASBOlMQWn11XqYRKNhx8lB",
    catalogo:
      'https://drive.google.com/file/d/1Ctd1dQTNq13Vnnd4ennIM-RhOgBgrmcp/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'PCL5 ZD',
    fabrica: 'ARC LASER',
    descripcion:
      'Biomicroscopio con sistema de iluminación lateral y lámpara LED de 14V/5W con regulación de intensidad luminosa. Permite cambiar los niveles de aumento a través de un sistema revólver de 5 posiciones (6,3x, 10x, 16x, 25x y 40x). La PCL5 ZD puede ser instalada en mesas eléctricas y unidades de refracción.',
    imagen: "https://lh3.googleusercontent.com/d/1l7oJymTzTQ4eXCc_5YHiz-dGu30NuNCh",
    catalogo:
      'https://drive.google.com/file/d/1EJ-Sdj88XQsigkO-icg3x7LWuGs9r0kt/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-IC5/IC5D',
    fabrica: 'OCULUS',
    descripcion:
      'Biomicroscopio OCULUS con sistema de iluminación vertical tipo Haag-Streit e iluminación LED con regulación de intensidad luminosa a través de un sistema de revólver de 5 posiciones (6x,10x,16x,25x y 40x). Con opción para sistema de video y foto (IC5D). La SL-IC5/IC5D puede ser instalada en mesas eléctricas y unidades de refracción.',
    imagen: "https://lh3.googleusercontent.com/d/1Te2nXsB8aGP56luMowQ5lhKdxTuOjTSn",
    catalogo:
      'https://drive.google.com/file/d/1loC4v-lgp-LCW_l_3QLnmDHSdwxR9aHy/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-IC4/IC4D',
    fabrica: 'OCULUS',
    descripcion:
      'Biomicroscopio OCULUS con sistema de iluminación tipo Zeiss e iluminación LED con regulación de intensidad luminosa a través de un sistema de revólver de 5 posiciones (6x,10x,16x,25x y 40x). Con opción para sistema de video y foto (IC4D).',
    imagen: "https://lh3.googleusercontent.com/d/13mFQtIxCAXV3r9ecC-qVFONDa0sSY3A2",
    catalogo:
      'https://drive.google.com/file/d/1loC4v-lgp-LCW_l_3QLnmDHSdwxR9aHy/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'IMAGE CAM 3',
    fabrica: 'OCULUS',
    descripcion:
      'Uno de los sistemas de documentación de imágenes más pequeños del mundo que se puede adaptar a casi todas las lámparas de hendidura disponibles en el mercado. Captura de imágenes en alta resolución, grabación de videos y control de la captura con pedal o en las versiones digitales de las lámparas de hendidura OCULUS, usando el joystick.',
    imagen: "https://lh3.googleusercontent.com/d/1bdqhlFCS5DdYmN-a3hvCxp-FwSPDJ5Ny",
    catalogo:
      'https://drive.google.com/file/d/10KdSmYWxa07ZCZR7BWJca2s4j8Gdzc7R/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-1400',
    fabrica: 'LUXVISION',
    descripcion:
      'Lámpara de hendidura de alta gama y con iluminación de torre. Cuenta con un avanzado sistema óptico de Galileo y 5 aumentos (6x, 10x, 16x, 25x y 40x) que se pueden cambiar fácilmente utilizando el práctico dial de selección de aumento de la unidad. Con iluminación halógena.',
    imagen: "https://lh3.googleusercontent.com/d/1b7G1kXHrEyiMnfz8iQg0K_5IFOOlJqLc",
    catalogo:
      'https://drive.google.com/file/d/1MnPRQBn6d7mWz6_P1K03QN32D-gHKpkH/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'SL-700',
    fabrica: 'LUXVISION',
    descripcion:
      'Lámpara de hendidura con microscopio estereoscopio convergente. La SL-700 ofrece una gran cantidad de funciones a un precio rentable. Dos aumento finales de 10x (Ø18 mm) y 16x (Ø14,5 mm) con el ocular de 10x. También acepta tonómetros de aplanación estándar. Incluye 3 filtros incorporados y un lente de difusión.',
    imagen: "https://lh3.googleusercontent.com/d/15716aWsdR-bZwtfspBApaGKuEJJnYdJn",
    catalogo:
      'https://drive.google.com/file/d/16D8gY3Vaja4ITRjTsI-joU1kWldxnjWp/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'ESL-1800',
    fabrica: 'EZER',
    descripcion:
      'Lámpara de hendidura con un sistema de iluminación estilo Carl Zeiss y un avanzado sistema óptico convergente galileano. Con su sistema de revolver de 5 aumentos, ofrece una de las mejores relaciones de zoom de su clase; 6x, 10x, 16x, 25x y 40x utilizando el ocular de 12,5x.',
    imagen: "https://lh3.googleusercontent.com/d/10nmqGfc4mEL-iy6cZp3kgtXBoh_m_G7y",
    catalogo:
      'https://drive.google.com/file/d/1cLrHS8wfC8UGvnzK08cIxXYz2sd7SRzj/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'ESL-7800',
    fabrica: 'EZER',
    descripcion:
      'El microscopio de la lámpara de hendidura ESL-7800 es la de más alta calidad de la serie EZER. Diseñado en la configuración de estilo de torre tradicional, la ESL-7800 ofrece ópticas especializadas, mayores niveles de aumento y un amplio campo de visión. Cuenta con un avanzado sistema óptico galileano y un tambor giratorio de 5 aumentos.',
    imagen: "https://lh3.googleusercontent.com/d/1ErTnAksKHhAkmhANJqrc5wxITmxu_0xj",
    catalogo:
      'https://drive.google.com/file/d/1HZZcXv6kQ3Eqyv16Bih_WNMXvVi07qd6/view?usp=sharing',
  },
  {
    id: 10,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S260S / S260',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Zeiss con microscopio Galileo y oculares de 12,5x. Con cambio de aumento mediante sistema revólver de 3 posiciones (10x, 16x y 25x) para modelo S260S y de 5 posiciones (6x, 10x, 16x y 25x, 40x) para el modelo S260. Con iluminación LED.',
    imagen: "https://lh3.googleusercontent.com/d/1Jk_mLgOJ8USPCJjnVElyHJ8d2v-ju8Ap",
    catalogo:
      'https://drive.google.com/file/d/1UVShIHeOe4fPhkr6WsfmZjsOLz3WQvml/view?usp=sharing',
  },
  {
    id: 11,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S360S / S360',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Haig-Streit o iluminación superior con óptica Haag-Streit y tipo microscopio Galileo. Oculares de 12,5x y cambio de aumento mediante sistema revólver de 3 posiciones (10x, 16x y 25x) para modelo S360S y de 5 posiciones (6x, 10x, 16x , 25x, 40x) para el modelo S360. Con Iluminación LED.',
    imagen: "https://lh3.googleusercontent.com/d/17JqrhiHm6XAX_vhsRBKeiLcpisBtwxfZ",
    catalogo:
      'https://drive.google.com/file/d/1jsUlnnrYceAf9K6R84FT80sX_LWtuGvD/view?usp=sharing',
  },
  {
    id: 12,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S390L (Firefly WDR+)',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Haag-Streit o iluminación superior modelo S390L (Firefly WDR) de luz LED y óptica HD con posibilidad de explorar glándulas de meibomio y con clasificación automática. Con óptica de Galileo.',
    imagen: "https://lh3.googleusercontent.com/d/1A8vVoo9vjMUe-5CkuCcziLvQutcVzhWv",
    catalogo:
      'https://drive.google.com/file/d/1STKeOaDRVwgXBqooVeFzuOEbS2qJuLkS/view?usp=sharing',
  },
  {
    id: 13,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S290',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Zeiss o iluminación lateral modelo S290 de luz LED y óptica HD. Con posibilidad de explorar glándulas de meibomio y con clasificación automática. Con óptica de Galileo.',
    imagen: "https://lh3.googleusercontent.com/d/1ESCSiOMCRBRVtXeuA3q2iEX9ujkeu0An",
    catalogo:
      'https://drive.google.com/file/d/1ax2Xjq7trAtSgCDlf_K97QnivrLnwF1y/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/117jGRZfZnyTMBXboemuBc9nir_nptS6T",
    catalogo:
      'https://drive.google.com/file/d/13hUvao_LJY_R2HtYwE8v4U_lzFHap0Dd/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Paquímetros',
    modelo: 'PACSCAN PLUS',
    fabrica: 'SONOMED',
    descripcion:
      'Biómetro con paquímetro en unidad compacta y portátil para modo A-Scan. Con medición precisa de espesor de la córnea, ACD, espesor de la lente, y longitud axial y para paquimetría central y periférica.',
    imagen: "https://lh3.googleusercontent.com/d/1SPVQpJPsWLWDAkOJocHfL9UrMWTh8F8r",
    catalogo:
      'https://drive.google.com/file/d/1_E0ypPw2ZrpbIu2u4I_BCfnQwovlLI-_/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1WAdFAHYHr5WAbzTvwRqGWk26U5F3xBUy",
    catalogo:
      'https://drive.google.com/file/d/1Sz8JYWwJAryMBS6M5V1CAE90Rt1dGZEL/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Campímetros',
    modelo: 'EASYFIELD',
    fabrica: 'OCULUS',
    descripcion:
      'Perímetro computarizado de OCULUS de rendimiento estándar en la perimetría. De campo visual central hasta 30° con tamaños de estímulos Glodmann III. Ha sido diseñado para combinar screening de campo visual y perímetro. Incorpora una cuadrícula de LED con 135 puntos de prueba fija y color del estímulo blanco. Aparato compacto, ligero y portable',
    imagen: "https://lh3.googleusercontent.com/d/1kyQE2HPZElXchYS75-oPEYhUOnN7X9LN",
    catalogo:
      'https://drive.google.com/file/d/1zWKKeLgz0TB4D5BX7IEeIwTBIua5Q8Kt/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Campímetros',
    modelo: 'CENTERFIELD 2',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva dimensión en medición de campo visual de OCULUS. Campímetro de proyección esférica para perimetría estática y cinética, posibilidad de examen hasta 70º, con desviación de fijación y parámetros de medición según Goldmann. Color del estímulo; blanco / azul. Equipo portátil.',
    imagen: "https://lh3.googleusercontent.com/d/1heR6FdJnOYB5EP8-bStOTab6x9Z77l8j",
    catalogo:
      'https://drive.google.com/file/d/1ckqWWpJKj2pcYdkYoKDcdTc_o17-9VeK/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Campímetros',
    modelo: 'TWINFIELD 2',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva dimensión en medición de campo visual, el perímetro Twinfield® 2, de proyección esférica para perimétrica estática y cinética con cúpula de proyección de 30 cm de radio para 90°de examen. Color del estímulo; blanco / azul / rojo. Padrón según la Sociedad de Oftalmología Alemana (DOG).',
    imagen: "https://lh3.googleusercontent.com/d/1jAtEPJiH99RCucBXP7UE5DZpRKt8ZPR7",
    catalogo:
      'https://drive.google.com/file/d/13IvgaeyrtoQNDZJ7IUAEczST5iatiSAD/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1ERV1iIH_j4KgGLOWnuUXE1CYSppsHVTb",
    catalogo:
      'https://drive.google.com/file/d/1WnHU32MNlYJ3j_AWlAAAhYLuvP_BcCgA/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM HR',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam HR para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Puede tomar hasta 100 diferentes imágenes en 2 segundos, entregando 500 valores de elevación, produciendo 50.000 puntos de medición e imágenes completas a 360°, con opción de configuración: paquete refractivo, paquete catarata, Belin Ambrosio, Holladay report, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen: "https://lh3.googleusercontent.com/d/1gHunFstLUsI498QCZhBcF1bQTQN4nzda",
    catalogo:
      'https://drive.google.com/file/d/1WnHU32MNlYJ3j_AWlAAAhYLuvP_BcCgA/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam AXL para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Pentacam AXL combina las características conocidas de Pentacam HR con un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano.',
    imagen: "https://lh3.googleusercontent.com/d/1ucPOuNTkBdXtryleLW548FH53ELNHJfr",
    catalogo:
      'https://drive.google.com/file/d/1-ZkC908iWY8eUJsIiCLWhnepTDxzijOP/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL WAVE',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva cámara Pentacam AXL WAVE, primer equipo que combina la tecnología Scheimpflug con la de un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano. Incluye además, aberrometría de frente de ondas total, refracción objetiva y retroiluminación. Trae por defecto los siguientes Software: paquete catarata, paquete refractivos, Holladay report, Belin Ambrosio, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen: "https://lh3.googleusercontent.com/d/1_npgY2FZV2rHQ5ikcXMsQY-ZobX89X3u",
    catalogo:
      'https://drive.google.com/file/d/1SQe1jmd92uSIw15a4YZH0gUtK6VJL3_j/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1AiN-0oMDRaWl7tIuKkYEKAMwmDm07xV1",
    catalogo:
      'https://drive.google.com/file/d/1HImDcCgw8-J-54TeyAUG4n0YT_5u_GM6/view?usp=sharing',
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
    imagen: "https://lh3.googleusercontent.com/d/1yEOeWOZwPN_Gpa3J0l9M6-ikjAWTduaU",
    catalogo:
      'https://drive.google.com/file/d/18pcnLOuGogy0B_F0vdi4KI5ZVVVUBwjA/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Ecógrafos',
    modelo: 'VUMAX HD',
    fabrica: 'SONOMED',
    descripcion:
      'Sistema de ultrasonido de multi-frecuencia que combina modo A/B y UBM. Su plataforma incluye una unidad base, pantalla LCD de 22 pulgadas, sonda modo B de 12Mhz o 20Mhz,sonda modo A de 10Mhz y sonda UBM de 35Mhz o 50Mhz.',
    imagen: "https://lh3.googleusercontent.com/d/1ok2vNp6OF34PYnrNjAet1VKDEVYL2ZZp",
    catalogo:
      'https://drive.google.com/file/d/1OV3Y0iHKFRFoBeFOpvBJT78OT-de-mAr/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Ecógrafos',
    modelo: 'MASTERVU 4500 A SCAN / MASTERVU 5600 B SCAN',
    fabrica: 'SONOMED',
    descripcion:
      'Sonda para modo B-Scan o A-Scan de SONOMED. Sonda o transductor portátil con conexión USB a cuaqluier PC o Laptop.',
    imagen: "https://lh3.googleusercontent.com/d/10GnFZWYOWAFcma9dnR4incZ9K2oVgSuh",
    catalogo:
      'https://drive.google.com/file/d/1VNvQKkHn8kH2oKFI9NxB_5PTm5yO959v/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Ecógrafos',
    modelo: 'PACSCAN',
    fabrica: 'SONOMED',
    descripcion:
      'Biómetro A- Scan, con opción de paquimetría, compacto y portátil para contacto o inmersión. Una combinación de alta frecuencia, sondas de bajo ruido y propietario de algoritmos que permiten capturas de exploración inmediatamente después del aplanamiento a lo largo del eje visual. Con medición precisa de espesor de la córnea, ACD, espesor de la lente, y longitud axial.',
    imagen: "https://lh3.googleusercontent.com/d/1-3DDgY_KQLtFL6bt5Xqs7ewTCakZ0CIG",
    catalogo:
      'https://drive.google.com/file/d/1DAurTknU_S5XD5yHayUe3inC0y-H5ZL4/view?usp=sharing',
  },
];
