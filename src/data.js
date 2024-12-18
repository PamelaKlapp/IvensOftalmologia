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
        slug: 10,
        producto: 'Biómetro Óptico',
        path: '/biometrooptico',
      },
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
      {
        slug: 11,
        producto: 'Tomógrafo de Coherencia',
        path: '/tomografo-de-coherencia',
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
    img: 'https://lh3.googleusercontent.com/d/1hpARIH1p7r0R8wyXoq-sZMR0VBcV7E88',
    imgMedium:
      'https://lh3.googleusercontent.com/d/11GrC93bas_1FMMAxX8kbwD2tW0u_D18q',
    imgSmall:
      'https://lh3.googleusercontent.com/d/1y_ippd1DcA3OCzbgGYo-joIVi3F2XoFn',
  },
  {
    id: 2,
    name: 'VUPAD',
    img: 'https://lh3.googleusercontent.com/d/1L6kIDQqEL89bZKeKus_CGeqvLqrSu54a',
    imgMedium:
      'https://lh3.googleusercontent.com/d/1lil9Vczkap3o-hLLo_-2Au7SfG43OF5a',
    imgSmall:
      'https://lh3.googleusercontent.com/d/1I2_LfexN28mzKzGohIHi_yP6u4chNaut',
    path: '/ecografos',
  },
  {
    id: 3,
    name: 'AXL WAVE',
    img: 'https://lh3.googleusercontent.com/d/1c-oDrJdyWO0-jf_9Td-jJGNt4VlUQMrl',
    imgMedium:
      'https://lh3.googleusercontent.com/d/1_-2rCp7q4XuQ_3bRqt6SOJAk_Z3pcltB',
    imgSmall:
      'https://lh3.googleusercontent.com/d/1uFxXX8Z3yz1tjAm55e-JUznUSiptyLfX',
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
    img: 'https://lh3.googleusercontent.com/d/1zESnP2xZXuOHp-EK6XJq24e2zPlVB7zH',
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
    img: 'https://lh3.googleusercontent.com/d/1ixxBPT1XiDTbkml4ol-Lh9R3IFFdGaHk',
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
    name: 'HUVITZ',
    img: 'https://lh3.googleusercontent.com/d/1e-9MsS7spAjnMSfq5xIRDPpb_kifOm3l',
  },
  {
    id: 7,
    name: 'HONGDEE',
    img: 'https://lh3.googleusercontent.com/d/1hR4fCUeaMvXkmLjA1lqGQIuNovwZmNC5',
  },
  {
    id: 8,
    name: 'ASICO',
    img: 'https://lh3.googleusercontent.com/d/1oT5s4HMfwCEJcuRPyx_RhWZCrZOgcEby',
  },
  {
    id: 9,
    name: 'CARL TEUFEL',
    img: 'https://lh3.googleusercontent.com/d/1NJ8WSFJ23AGen4spb0UNvD6l3UyAVIxd',
  },
  {
    id: 10,
    name: 'VOLK',
    img: 'https://lh3.googleusercontent.com/d/11kkwP9NZYHF6YWn6rI0Essim3rBBGiSd',
  },
  {
    id: 11,
    name: 'MEDIWORKS',
    img: 'https://lh3.googleusercontent.com/d/10GpzvM-ZypArA4TK-AJDgRcs03gcFAOu',
  },
  {
    id: 12,
    name: 'FISO',
    img: 'https://lh3.googleusercontent.com/d/1mfjrhu5jihdsywe7Cek75nxqXXAG2aPG',
  },
  {
    id: 13,
    name: 'US OPHTHALMIC',
    img: 'https://lh3.googleusercontent.com/d/1zJFdqUDnqrGafOfVvYZ5QyqJdbuD2i12',
  },
  {
    id: 14,
    name: 'MDT',
    img: 'https://lh3.googleusercontent.com/d/1JvRnUMVuvRwo1pNEpuwBJRaZIkGhQ7X2',
  },
  {
    id: 15,
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
      'https://lh3.googleusercontent.com/d/1u_kk6U7oo1VcvKbJGKNeYLw5J0IKNOIY',
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
      'https://lh3.googleusercontent.com/d/1cDr7fXF207TEss85KJ6JB0v355wHaVPN',
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
      'https://lh3.googleusercontent.com/d/1smgZ814w15AfKOqUGKU_-yQKWXVWeoxg',
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
      'https://lh3.googleusercontent.com/d/11qkwsADO9d_Tkz_tp5PG7BUpvDmi3AK7',
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
      'https://lh3.googleusercontent.com/d/1Xu28GokBSB6HSrveWROnztI-t5whOjtK',
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
      'https://lh3.googleusercontent.com/d/1qQaUUQEeU3vqMGi2Ya8ZBGmyF8CJbRUo',
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
      'https://lh3.googleusercontent.com/d/1Cg5PD5AN_Vfl2SwKbT_8xJs_Hdj8VVjq',
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
      'https://lh3.googleusercontent.com/d/1FmvKq0GNxG75DubDqUx1vRZsdX9ITt6x',
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
      'https://lh3.googleusercontent.com/d/1OtgouYYTIIfZxT8MvRFbf0viVv86qXUZ',
    catalogo:
      'https://drive.google.com/file/d/11qyLPhsEWNYTXOPBhcFOe8YnGlG1cMD_/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Vitreo Retina',
    modelo: 'SDI 4',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'Inversor diagonal estereoscópico (SDI) de OCULUS SURGICAL, USA. Su diseño extremadamente plano y su transmisión de luz hacen de este inversor un complemento indispensable para su microscopio en la observación de campo amplio del segmento posterior del ojo durante la cirugía. Disponible en versiones automática, motorizada y manual.',
    imagen:
      'https://lh3.googleusercontent.com/d/1i7tab4e6glt9i3pICikFRXKbUpDMGgSd',
    catalogo:
      'https://drive.google.com/file/d/11qyLPhsEWNYTXOPBhcFOe8YnGlG1cMD_/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Vitreo Retina',
    modelo: 'LENTE DESECHABLE PARA ZEISS RESIGHT',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El nuevo lente desechable LenZ HD de OCULUS SURGICAL ha sido diseñado para un solo uso en el ZEISS RESIGHT® y combina una visión de gran campo amplio con una alta definición de imagen. Estas características lo convierten en el lente perfecto para todas las etapas de la cirugía vitreoretiniana, incluida la visión macular con alta magnificación.',
    imagen:
      'https://lh3.googleusercontent.com/d/1a5HYV38z7r6RSPqI7J1LJqnwp6HNuT8K',
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
      'https://lh3.googleusercontent.com/d/1PzLYA-0vJZkVks2VDpg9-IhB9xdLdVHw',
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
    catalogo:
      'https://drive.google.com/file/d/1FyhGRHi6fIr5EYH0YrHDhjiURBgBMZnd/view?usp=sharing',
  },

  {
    id: 6,
    subcategoria: 'Vitreo Retina',
    modelo: 'GONIO LENS',
    fabrica: 'OCULUS SURGICAL',
    descripcion:
      'El revolucionario sistema del nuevo lente GONIO Ready® de OCULUS SURGICAL, USA, permite durante la realización de MIGS eliminar la necesidad de sostenerla con la mano. Ofrece una excepcional profundidad de campo y una visión de 180°. Además, este innovador sistema facilita a los cirujanos la conexión de la lente GONIO Ready® al microscopio quirúrgico.',
    imagen:
      'https://lh3.googleusercontent.com/d/1MsGlChZR7SnOEY7U5i0JvABqW99NG_S8',
    catalogo:
      'https://drive.google.com/file/d/1R5wuFX5QiPhExb9B2tV_S-S4vjgkr_1U/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Vitreo Retina',
    modelo: 'CBC Lens (Cohen Benner Contact Lens)',
    fabrica: 'OCULUS',
    descripcion:
      'La nueva lente Cohen Benner Contact Lens (CBC) ha sido diseñada para sujetar el borde de la córnea, marcando una diferencia respecto a todas las demás lentes de contacto quirúrgicas. La lente CBC cuenta con un diseño de dos piezas que flota libremente, asegurando que la lente óptica central siempre permanezca en contacto con la película lagrimal. Esto permite que la lente OCULUS CBC se ajuste a todas las córneas independientemente de su curvatura, proporcionando al cirujano un control y una visualización superiores.',
    imagen:
      'https://lh3.googleusercontent.com/d/1H0U8Gw98QQwgYDUnWAI5H4r90Br80azQ',
    catalogo:
      'https://drive.google.com/file/d/1XJOPQgIt-sfSSBeLmU6ahAXWLlOhaZiF/view?usp=sharing',
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
      'https://lh3.googleusercontent.com/d/122noZ7uHoHP1VBrAOJSpK8X5fhpMUJTT',
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
      'https://lh3.googleusercontent.com/d/1zo0XnHe5p4096lglhgEAyS4TiWlwT7Iy',
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
      'https://lh3.googleusercontent.com/d/1iSdrdV97K6eMAcnscsGNG4Fj9qozt5Kq',
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
      'https://lh3.googleusercontent.com/d/13BgihbckWVWqLTSp2wTUJ-1nLZU_yzCD',
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
      'https://lh3.googleusercontent.com/d/1Mp6e75S-EHdnK2F7BYccHllyAXTBzu1b',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1Cu13eQYLjK5JH4aC06KKepz0ObdzAjOh',
      'https://lh3.googleusercontent.com/d/1QkiKKgPGjX2Ds3zyp6cX7FwTc-xqMSR8',
    ],

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
      'https://lh3.googleusercontent.com/d/1kGIy7YVMwG7PxVTTuHmm50bAAZG2G_k_',
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
      'https://lh3.googleusercontent.com/d/1LDXIEsIOK1rr9Pqs8QSJtlPFlDS9wwsd',
    catalogo:
      'https://drive.google.com/file/d/1l4q-OUZotGYWiQjWid9CtvGRSCknJBrX/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Unidad de refracción',
    modelo: 'ECO PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción ECO PLUS marca MDT, con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa corredera para 2 instrumentos con regulación eléctrica de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. <br> Conexión sencilla para diferentes tipos de lámparas de hendidura LED/halógenas, panel de control práctico, cajón de accesorios de fácil acceso, poste de aluminio con iluminación LED y base para proyector de optotipos. Amplia selección de colores de tapicería sin costo adicional. Modelo de sillón COMFORT con respaldo fijo. Configuración estándar para diestros, disponible para zurdos bajo pedido.',
    imagen:
      'https://lh3.googleusercontent.com/d/1TaJfcnNdxiUoqEf4Cw6Eqqjbk0oNgLYK',
    catalogo:
      'https://drive.google.com/file/d/1jAA4hBRFqVJH_Td3MKDOzC1Kcm73Oh-7/view?usp=sharing',
  },
  {
    id: 10,
    subcategoria: 'Unidad de refracción',
    modelo: 'SMART PLUS',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción SMART PLUS marca MDT, equipado con silla COMFORT de elevación eléctrica (sistemas giratorios y reclinables opcional). Incluye mesa deslizante para 2 equipos con ajuste eléctrico de altura opcional, y posibilidad de montar un autorefqueratómetro y lámpara de hendidura. Cuenta con perillas de ajuste para iluminación de lámpara de hendidura integrada en la mesa. Conexión sencilla para diferentes tipos de lámparas de hendidura LED / halógenas. <br>Práctico panel de control y bandeja para caja de lentes de fácil acceso con brazo pivotante. Poste diagonal de aluminio con iluminación LED y repisa para proyector de optotipos. Amplia selección de colores de tapicería disponibles sin recargo. <br>Configuración solo para diestros. Sillón con respaldo fijo modelo COMFORT. Base de acero con recubrimiento en polvo.',
    imagen:
      'https://lh3.googleusercontent.com/d/1wG9IiX2WuGQBdiI1Hnpbcpj5aS0kCImE',
    catalogo:
      'https://drive.google.com/file/d/1v0300uuZPPRFMwfzdAYCLpjl_psTtLlX/view?usp=sharing',
  },
  {
    id: 11,
    subcategoria: 'Unidad de refracción',
    modelo: 'EASY',
    fabrica: 'MDT',
    descripcion:
      'Unidad de Refracción EASY marca MDT, equipado con sillón COMFORT, respaldo reclinable, con apoya brazo y apoya pies eléctricamente elevada. Mesa deslizante para 2 equipos de altura no regulable. Conexión sencilla para diferentes tipos de lámparas de hendidura; LED / halógenas. <br>Práctico panel de control con poste de aluminio e iluminación LED y adaptador universal para proyector de optotipos. Posible montar autorefqueratómetro y lámpara de hendidura. Con perillas de ajuste para una iluminación de lámpara de hendidura integrada en la mesa. <br>Amplia selección de colores de tapicería disponibles con recargo (SCURO - color gris como estándar). Fácil configuración in situ para diestros o zurdos. Base de acero con recubrimiento en polvo.',
    imagen:
      'https://lh3.googleusercontent.com/d/1_bo_3jD4Vt7pg9wkQXPZWGn4UT5P1oNp',
    catalogo:
      'https://drive.google.com/file/d/1O1eOdG0eugOgvZCtSxp5gBy6dxfXsl0-/view?usp=sharing',
  },
  {
    id: 12,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-5000',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWOKRS, con mesa diseñada para 2 equipos, abatible hasta 90° de giro y una superficie de medidas de 840 mm x 405 mm. Con sillón color negro, respaldo fijo, y regulable en altura de 410 mm a 550 mm, diseñado para soportar un peso máximo de 150 kg. El sillón incorpora apoyabrazos fijos y apoyapies plegables. La unidad está equipada con un brazo para foróptero y una lámpara de lectura, y presenta dimensiones de 1.510 mm x 1.000 mm x 2.130 mm, con un peso de 168 kg.',
    imagen:
      'https://lh3.googleusercontent.com/d/1zr-OHP6sWqCMN-3QWlCKUCiCwI-PlICS',
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
      'https://lh3.googleusercontent.com/d/1B9CZ_1fhB7ZmNZRXo1nxxKs0K0YRUdOC',
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
      'https://lh3.googleusercontent.com/d/1RGLNJxLFOyx_jXl_maq-lwQvcFmsRllU',
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
      'https://lh3.googleusercontent.com/d/1PLpRQs5SywwEOYUSPEpZUl0P690O2LGO',
    catalogo:
      'https://drive.google.com/file/d/1vZ2oY7AUEKJLj5i2C_aqrzYLDtsykBCT/view?usp=sharing',
  },
  {
    id: 16,
    subcategoria: 'Unidad de refracción',
    modelo: 'OU-7000A',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Unidad de Refracción marca MEDIWORKS, de origen chino, construida en metal, con pedestal resistente que puede soportar brazo para lámpara de hendidura, brazo para autorefractómetro, soporte para proyector de optotipos y brazo de foróptero. Incluye lámpara superior. <br>Sillón con respaldo reclinable modelo OC-3000 de material tipo cuero con apoya brazos y pies abatibles, y un apoya cabezas regulable en altura. El sillón cuenta con un sistema de ajuste de altura eléctrico controlado mediante un pedal, desde 56 cm a 71 cm y con rotación de 0° - 270°. Los apoya pies tienen una altura mínima de 8,8 cm desde el suelo, y el apoya brazo se puede ajustar en un ángulo de 80° a 180°. Máximo peso de carga 150 kg.',
    imagen:
      'https://lh3.googleusercontent.com/d/1LEwA5uzy7CwecY2mX606HVXlQcCrN5mu',
    catalogo:
      'https://drive.google.com/file/d/1N2jWlCRv4fcVDDgmbqEVJDnfPt7SuT2_/view?usp=sharing',
  },
  {
    id: 17,
    subcategoria: 'Unidad de refracción',
    modelo: 'HD-3200',
    fabrica: 'HONGDEE',
    descripcion:
      'Unidad de Refracción marca HONGDEE, de origen chino. Incluye brazo de foróptero oscilante automático, freno de emergencia por seguridad, sobremesa deslizable y grande para 2 equipos dispositivos, fácil de operar. Tamaño de su mesa 915 mm x 420 mm y su rango de deslizamiento es de 0 a 380 mm. Grados de rotación de la mesa de 0-90° en sentido antihorario. Cuenta con 2 puertos de carga uds para oftalmoscopio. <br>Su sillón cuenta con respaldo fijo y ajuste de altura. Rango de elevación de la silla entre 520-670 mm. La unidad cuenta con una lámpara superior de 9W/220V LED.',
    imagen:
      'https://lh3.googleusercontent.com/d/1HpPN6N2hzCh3G-ERlGoQtKYQPDuVGgnr',
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
      'https://lh3.googleusercontent.com/d/1OtYokQPtPTneohFelPLHY_oQUl4WmXuU',
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
      'https://lh3.googleusercontent.com/d/1iQxplPsgK8tjhm17NE_a2wKQ-WpIF5Mk',
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
      'https://lh3.googleusercontent.com/d/16-e-5H78WBYTpshnObceIiqyALMwen4o',
      'https://lh3.googleusercontent.com/d/1O86f2eplt1RkUDD8eqGonZrs3rBgvVCb',
      'https://lh3.googleusercontent.com/d/1bIH-7ou0FaUkzaZlmqUKuuNhKhvAni3Z',
      'https://lh3.googleusercontent.com/d/13xf97Muh6Jyz-nKI-JO4PtkMiY8PvErX',
      'https://lh3.googleusercontent.com/d/1U0X0bUX7m4DbuAofgT2vI1CoVdO84dSO',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1yv2p9CMeLgLqVHos2uCfbH441LvGJEbG',
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
      'Autorefractómetro/Keratómetro y Aberrómetro EZER modelo ERK-9100 basado y desarrollado para brindar una refracción rápida y precisa. Posee auto fogging , evitando así, la acomodación de paciente. Amplio rango de medición, mide distancia pupilar e iris. <br><br>Con pantalla LCD a color de 6,5". El ERK-9100  incorpora  mapa de Zernike que permite identificar y evaluar aberraciones de alto y bajo orden en el ojo del paciente. El dispositivo cuenta; con modo de retroiluminación que permite hacer mediciones en pacientes con opacidad ocular, modo catarata y medición de queratometría periférica. Impresora térmica de alta velocidad incluida en el equipo.',
    imagen:
      'https://lh3.googleusercontent.com/d/1c1MCh2PhDGk9zjhUIfPsxYTS5nHiXpNm',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1mFzt1pr10tDqs2pXnNTXuZuDCDWiXwJ9',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1khxauFlCVe24wor-ESKsmscAOlqi8osn',
      'https://lh3.googleusercontent.com/d/16tDLAxJdLyyXGb5rBiNmdOjm1nFpwtNb',
      'https://lh3.googleusercontent.com/d/1Yl5i_Kj6hEVdoq5OeTZTR0qLMn4A4P_k',
    ],
    catalogo:
      'https://drive.google.com/file/d/1X0M19ybWS1o7Mjv-0XHIWqhFII59WHc1/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'V100',
    fabrica: 'MEDIWORKS',
    descripcion: `Refractómetro y analizador visual portátil modelo V100, ideal para infantes, niños, adultos y pacientes que no cooperan. Mide la refracción en condiciones normales de visión. Permite detectar los siguientes problemas visuales:<br><br>
    <ul className="custom-list">
      <li><span>•</span><p>Miopía</p></li>
      <li><span>•</span> <p>Hipermetropía</p></li>
      <li><span>•</span> <p>Astigmatismo</p></li>
      <li><span>•</span> <p>Anisometropía</p></li>
      <li><span>•</span> <p>Aniseiconía</p></li>
      <li><span>•</span> <p>Estrabismo</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1cWAcv9vTUuZMhOZEGuo6G_yhh9YP3Ui5',
    catalogo:
      'https://drive.google.com/file/d/18CsKiW-KmbS1jFKC4UdqJKiDCI-f412T/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-200 / AR-200',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-200 y Autorefractómetro AR-200 de HONGDEE, de manejo manula y con sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla LCD TFT de alta resolución a color de 5,7". Impresora incorporada con auto corte.',
    imagen:
      'https://lh3.googleusercontent.com/d/1mMul06274czBARumWrCSzSP5hrBVzGGm',
    catalogo:
      'https://drive.google.com/file/d/1l9DpyS9sRuptpEvRjNvoDlxrpRJuxUK4/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-900',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-900 de HONGDEE de manejo semiautomático y  sistema de prisma rotativo que permite obtener información altamente confiable. Nueva pantalla táctil LCD TFT de alta resolución a color de 6,5" y plegable hasta 90°. Impresora icorporada con auto corte y Joystick motorizado. Mentonera regulable en altura eléctricamente, auto eye tracking y con auto foco y captura automática.',
    imagen: [
      'https://lh3.googleusercontent.com/d/1MsoJ839wLE29AjFA8KgJqNMJe3PGxEJP',
      'https://lh3.googleusercontent.com/d/1gbjvGmdPzToFhDKgIsCbMdnKfoCyP5oy',
    ],
    catalogo:
      'https://drive.google.com/file/d/1KYJYHdaTp260qaFjrQJFnON7B20aiDKI/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'ARK-710',
    fabrica: 'HONGDEE',
    descripcion:
      'Autorefractómetro/Keratómetro modelo ARK-710 full automático de HONGDEE con sistema de prisma rotativo que permite obtener información altamente confiable. Panel de control con pantalla táctil de 9" para una fácil operación. Medición totalmente automatizada R/L; solo un toque en la pantalla para realizar la medición completa. Panel de control giratorio de 360° apto para la instalación en diferentes configuraciones de salas de examen ocular. Con enfoque y seguimiento ocular automático (eye tracking). Medición automática y mentonera motorizada.',
    imagen:
      'https://lh3.googleusercontent.com/d/1BzRVUJulRcT1NgH0xTiUqA8u7zbSbY3N',
    catalogo:
      'https://drive.google.com/file/d/1a_yyns6z3exzfhxEK2Y3sb-bsmYWRGDK/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'HRK-1',
    fabrica: 'HUVITZ',
    descripcion: `Auto Kerato-Refractómetro HRK-1 marca HUVITZ con tecnología de control de movimiento de ensamblaje inteligente de Huvitz.
      Teniendo en cuenta el error refractivo del paciente, el anillo de medición se proyecta sobre la retina y se ajusta automáticamente mediante el sistema Smart Assembly Moving, garantizando una señal estable.
      <br><br>
      <ul className="custom-list">
      <li><span>•</span> <p>Función de punto de puntería virtual rápida: el punto de referencia guía rápidamente para encontrar fácilmente el ápice visual del paciente desde cualquier posición para una alineación rápida.</p></li>

      <li><span>•</span> <p>Modo de visualización de color inmediato.</p></li>
      <li><span>•</span> <p>Modo de retroiluminación clara.</p></li>
      <li><span>•</span> <p>Impresora de alta velocidad con cómodo cambio de papel.</p></li>
      
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1EgNX4My6MahZfzCa98AFaXWbqDwpsrvf',
      'https://lh3.googleusercontent.com/d/10mRxMbmycxAm2DUMAeX4S2gTQJQHdlHy',
      'https://lh3.googleusercontent.com/d/1fzNJYNzc8scXo_a49rnVB8goFg-Zk_Lj',
    ],
    catalogo:
      'https://drive.google.com/file/d/1PDqiwoVpbypcRorSE3ffSDL2oCfOzG43/view?usp=sharing',
  },
  {
    id: 9,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'HRK-8100A',
    fabrica: 'HUVITZ',
    descripcion: `El HRK-8100A de HUVITZ se distingue de los demás. Utilizando un sensor de frente de onda Hartmann-Shack, analiza múltiples puntos focales de un frente de onda de luz, no solo midiendo errores básicos de refracción, sino también generando un mapa de frente de onda con resolución espacial. Además de los datos convencionales, como esféricos, cilíndricos y axiales, los datos de aberración de alto orden se muestran en un mapa gráfico de Zernike, lo que proporciona una comprensión más profunda de los ojos del paciente y permite una mejor toma de decisiones clínicas. Observación de seguimiento antes y después de la cirugía de cataratas.`,
    imagen: [
      'https://lh3.googleusercontent.com/d/11ep171pb46rZRPm7XG0XytFmj1Ze763o',
      'https://lh3.googleusercontent.com/d/1bd9JecYFC7xl_ZTk8fPhJU0DD4c5yQcx',
      'https://lh3.googleusercontent.com/d/1DRRjxK0LPmQs33zPk4Wh-h5no9Gjf8kz',
    ],
    catalogo:
      'https://drive.google.com/file/d/1Mo4BatBh-LpBHxcUCn618ouoqRmQAUzU/view?usp=sharing',
  },
  {
    id: 10,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'HRK-9000A',
    fabrica: 'HUVITZ',
    descripcion: `El HRK-9000A de HUVITZ no habla de compensación, sino de perfeccionismo en la refracción compuesto por una prueba de deslumbramiento, una sensibilidad de contraste superior y TFBUT/meibografía, que se introducen por primera vez en el mundo. Un hermoso diseño curvilíneo habla de estabilidad emocional en usted. Con el HRK-9000A, disfrute de la satisfacción que nunca antes ha disfrutado.<br><br>
    
    <ul className="custom-list">
      <li><span>•</span> <p>Prueba de sensibilidad al contraste y deslumbramiento.</p></li>
      <li><span>•</span> <p>Soporte para mapas topográficos de Zernike.</p></li>
      <li><span>•</span> <p>Modo de visualización de color.</p></li>
      <li><span>•</span> <p>Medición de queratometría periférica.</p></li>
      <li><span>•</span> <p>Modo LIO: una opción de medición adicional disponible para la potencia de la LIO o la agudeza visual después de la cirugía de cataratas.</p></li>
      <li><span>•</span> <p>Pantalla a color de 7" táctil, inclinable y giratoria.</p></li>
      <li><span>•</span> <p>Seguimiento automático.</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1rLVVUr-NROZM2wkeUzI3nSHwNhgEsVnv',
      'https://lh3.googleusercontent.com/d/1OhwmoTIpTroM9TSWklvu8Ua3rIquAcOH',
      'https://lh3.googleusercontent.com/d/12QQl4UA1I7G0iqUpLvI14ajWeojpV8oI',
    ],
    catalogo:
      'https://drive.google.com/file/d/1_kpi5q5LBUwntv5fNXrRzIw2hswJseJM/view?usp=sharing',
  },
  {
    id: 11,
    subcategoria: 'Auto Kerato - Refractómetros',
    modelo: 'HTR-1A',
    fabrica: 'HUVITZ',
    descripcion: `Queratómetro, Autorefractor + Tonómetro de Aire y Paquímetro sin contacto HTR-1A de HUVITZ. Diseño compacto gracias a su tamaño reducido que permite ahorrar espacio a los usuarios. Realiza 4 mediciones desde un solo dispositivo, por lo que los pacientes no necesitan moverse, lo que también ahorra tiempo.
      <br><br>
      <ul className="custom-list">
      <li><span>•</span> <p>Seguimiento y disparo totalmente automáticos.</p></li>
      <li><span>•</span> <p>Tecnología Wavefront para alto orden.</p></li>
      <li><span>•</span> <p>Modo de vista en color para la adaptación de lentes de contacto.</p></li>
      <li><span>•</span> <p>Modo de retroiluminación: los usuarios pueden verificar la opacidad del cristalino o el daño corneal.</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1clXzvRrpJak5gFEC3RZpnNrqzIxovPCF',
      'https://lh3.googleusercontent.com/d/1uGKe_7iWNqL-T1xFWztduRk07oCAZGyG',
      'https://lh3.googleusercontent.com/d/1xtZfRtrQDUfAKDOhA2l57bIN1Z750uzQ',
      'https://lh3.googleusercontent.com/d/1ZRvQhfL5KWO8XcbMEA3SZBDzuTiPUSZe',
    ],
    catalogo:
      'https://drive.google.com/file/d/1-_MnALYiWQKJbDIyeZev9gPrJt89T9uX/view?usp=sharing',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/18EEpoLA2RDzT_51yyhZmDN8sdFqF8gYu',
      'https://lh3.googleusercontent.com/d/1w6g8pWwCeFX74pj_DVdU6lh3CTjywj__',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1ozws08PX4JOccOCPlBJbNwnlpnvlAj1J',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1XmRYDnZJzXY6j8NAn0mJCRYAOReyFA7E',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1DhL-_IyVZKV0z87_xwEJBjMxfWn2J3hA',
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
    imagen:
      'https://lh3.googleusercontent.com/d/185nYEDOayupJvZChm-7CYnyTYlHsCq6l',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1z9pTOViZLzDYcUyGuKGq1jn-TY2op_-9',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1e90naNZ5h1jLHYt5QuJAfa9djDuEIiUs',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1TtUqCGoBzyIx7zEVK9Jp-YxXvlr_eLie',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1d5943pbKEF8_WqqWisMaLRvXvdxTFEgK',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1ZVI-MThWlyYX0XJhj96NGrSvXhNaRLXK',
    catalogo:
      'https://drive.google.com/file/d/18PGiavlOABDYaRRkf1ZIC5z476QjowT1/view?usp=sharing',
  },
  {
    id: 11,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'ECP-9000',
    fabrica: 'EZER',
    descripcion: `El Proyector de Optotipos automático EZER modelo ECP-9000 es un excelente sistema de proyección con un diseño exclusivo y elegante. Utiliza una fuente de luz LED semipermanente más clara y brillante. El ECP-9000 es un proyector compacto, liviano y de última generación, óptimo para todo tipo de forma y tamaño de su práctica profesional. Con un total de 40 charts para uso en diferentes distancias, tanto en metros como en pies.`,
    imagen: [
      'https://lh3.googleusercontent.com/d/14IJ68_K5jRunHZMPr8wM1WXwCh-IF9dj',
      'https://lh3.googleusercontent.com/d/1obBSPD36zhEmJdU3FNqr6xlCwzZf7jUb',
    ],
    catalogo:
      'https://drive.google.com/file/d/11Yog5J-Yy3k654ZHnY2Bd6tzUj2Orn57/view?usp=sharing',
  },
  {
    id: 12,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'HDC-7000',
    fabrica: 'HUVITZ',
    descripcion: `Visualizador digital de optotipos modelo HDC-7000 de la marca HUVITZ, compatible con monitores LCD de 17", 19", 20", 23", 24", 25", 30", 31" y 32". Los 41 gráficos estándar incluyen gráficos de aniseikonia, de equilibrio binocular, estereopsis y fusión binocular.
      Optotipos inteligentes y cuentan con una función de visualización aleatoria que impide la memorización de los charts. 
      `,
    imagen: [
      'https://lh3.googleusercontent.com/d/14bUgaKN1WXzrwQdoq5irHKiX37shOqaE',
    ],
    catalogo:
      'https://drive.google.com/file/d/1uBi4wCdUFsnWDijURlh01aH2HihDRJye/view?usp=sharing',
  },
  {
    id: 13,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'HDC-9100',
    fabrica: 'HUVITZ',
    descripcion: `Pantalla de Optotipos HDC-9100 de HUVITZ, LED TFT a color de 24" de alta resolución (1920 x 1080 píxeles) FULL HD. Su panel polarizado permite realizar pruebas de agudeza visual más precisas.<br><br>
    <ul className="custom-list">
    <li><span>•</span> <p>Optotipos polarizados y prueba de visión estereoscópica.</p></li>
    <li><span>•</span> <p>La distancia de trabajo se puede ajustar según el entorno de prueba a conveniencia del usuario. Distancia de trabajo: 1,5 m
    a 6 m (se puede configurar en una escala de 10 cm).</p></li>
    <li><span>•</span> <p>El HDC-9100 se puede actualizar automáticamente simplemente cargando el nuevo software a la memoria USB.</p></li>
    <li><span>•</span> <p>Se puede sincronizar e integrar con el Foróptero digital HUVITZ HDR-9000.</p></li>
    <li><span>•</span> <p>Ofrece más de 100 optotipos diferentes que admiten todo tipo de pruebas de agudeza visual y funciones visuales. Los optotipos estándar incluyen pruebas de letras, números, Landolt C, Snellen E, optotipos para niños y otros optotipos especiales.</p></li>
    <li><span>•</span> <p>Proporciona enmascaramiento de letras individuales y líneas horizontales o verticales, con la imagen siempre centrada en la pantalla.</p></li>
    </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1afMnCbHTzV27ffc3Nj9vAo_F_7kK0HzK',
      'https://lh3.googleusercontent.com/d/1TppcZHbcF7b1cb04Nkf4iJ5ocVKsSuof',
    ],
    catalogo:
      'https://drive.google.com/file/d/1n79nU3izCBonN-mpnOcfsxwzNNoy18Ue/view?usp=sharing',
  },
  {
    id: 14,
    subcategoria: 'Sistema de Proyección de Optotipos',
    modelo: 'HCP-7000C',
    fabrica: 'HUVITZ',
    descripcion: `El proyector de cartas HCP-7000C-LED de HUVITZ cuenta con una fuente de luz LED y ofrece 41 gráficos, 34 máscaras, así como filtros rojo/verde y de polarización. Su diseño atractivo y aerodinámico, realzado por un indicador azul, lo convierte en un dispositivo elegante y funcional. Además, es compatible con Refractores digitales como el HDR-7000 y el HDR-9000, permitiendo una conexión mediante comunicación por cable.`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1VkQ0HIoTnuzxL0H1A_utOKPXYa38CuAM',
      'https://lh3.googleusercontent.com/d/1IgapkXCBBdHUtqAwsa-mrG8CvTgpzOjk',
      'https://lh3.googleusercontent.com/d/1KDOgHS5t30oVBFBXJxIR_VFtIj-YhxI1',
    ],
    catalogo:
      'https://drive.google.com/file/d/1HlJwEK2dzDyEgrxm9pCJ67PCILEtU6qL/view?usp=sharing',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1Y0KhUQ7H94Dt3eVvLqmUwj9TYb34RJHw',
      'https://lh3.googleusercontent.com/d/17fENfM82mlSv8wLgBxPWpFlc8rAwhAGH',
    ],
    catalogo:
      'https://drive.google.com/file/d/1Iv0TYMOxLN3FS4MiSYsA9bAXFFjpxSkM/view?usp=sharing',
  },
];

export const cajaslentes = [
  {
    id: 1,
    subcategoria: 'Cajas de Lentes',
    modelo: '',
    fabrica: 'OCULUS',
    descripcion: 'Caja de lentes y monturas de prueba',
    imagen:
      'https://lh3.googleusercontent.com/d/1aVwe2LUdvIEDq5Ro3fuI7IxJ6mupfHmt',
    catalogo:
      'https://drive.google.com/file/d/16LqDC0jo4pKsfasYIjBR3q3FUU1zRoAE/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Cajas de Lentes',
    modelo: '',
    fabrica: 'MSD by F.I.S.O.',
    descripcion: 'Caja de lentes y monturas de prueba',
    imagen:
      'https://lh3.googleusercontent.com/d/1QxnKDwZL38c5PKWo3009SOyTjR8BPRnu',
    catalogo:
      'https://drive.google.com/file/d/1IACVtC6uhydPgf_0omaEgtk1llUjJs21/view?usp=sharing',
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
    imagen:
      'https://lh3.googleusercontent.com/d/15gYaw9xtv1MwGVxruEI48b9aEVIK3NvR',
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
    imagen:
      'https://lh3.googleusercontent.com/d/15dz1YgKcAl9nvGLZ0f3TE6ccIUpGi-Xi',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1M3YYhDieTAsviJyCAaLl9DRSdZngQGjo',
    catalogo:
      'https://drive.google.com/file/d/1yDdIXCGit6JmFwOTDbQKtYXeqML_9B5y/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Monturas de Prueba',
    modelo: 'UB 6',
    fabrica: 'OCULUS',
    descripcion:
      'OCULUS se enorgullece de presentar la UB 6, fabricada con materiales de alta calidad y un innovador diseño. Con el soporte nasal y todas las posibilidades de ajuste totalmente renovado y también el soporte para las lentes, con cuatro ranuras en la parte delantera y dos en la parte posterior. El resultado es una obra maestra “made by OCULUS” creado acorde a conocimientos de última generación optimizado para la práctica diaria y basado en más de 100 años de experiencia. La UB 6 es la nueva generación en monturas de pruebas OCULUS. Cuidadosamente confeccionado a mano con una alta atención al detalle.',
    imagen:
      'https://lh3.googleusercontent.com/d/1R9idDw_DS8L7C8EMHGZw1IO98DHGJc58',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1ohbOwXyYmFfKcEoh0lojbtCIhlAVHWLd',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1uWpaqXwl7D7lW_JYZLqZ8UGiuR5m4PKc',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1hiK2l8P-j_lx1MiWxgITFry5upagVij7',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1P9hXFlNCbUFx0TIhkJZt4dQyI1Hbrho_',
    catalogo:
      'https://drive.google.com/file/d/1UNuY-LDiF9QQuHvm76DKBrjPpvfbY5ts/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Forópteros Digitales',
    modelo: 'HDR-7000',
    fabrica: 'HUVITZ',
    descripcion: `El Foróptero automatizado HDR-7000 de HUVITZ es fácil de usar e incluye 18 charts de prueba de agudeza visual y 26 charts de prueba de visión, lo que permite realizar exámenes más precisos. La lente de doble cilindro cruzado, la oclusión y convergencia automáticas, así como el ajuste de  DP monocular, funcionan en conjunto para garantizar precisión y exactitud. Además, la carga rápida de lentes, el dial de desplazamiento multifunción y una impresora ubicada de manera inteligente hacen que el HDR-7000 sea increíblemente conveniente`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1i8pkva5RgANvVqpXghfBUNvGb2FMvVhW',
      'https://lh3.googleusercontent.com/d/17DvWflXqqO9RjLQMXwMc8vFuCEy_irHr',
      'https://lh3.googleusercontent.com/d/1wTMl4h54bO6p3CE3autNw2sCJNW1uyhy',
    ],
    catalogo:
      'https://drive.google.com/file/d/1UE0w0vX_w0n2gWZ90VL6wUUEwpYbcJf7/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Forópteros Digitales',
    modelo: 'HDR-9000',
    fabrica: 'HUVITZ',
    descripcion: `El Foróptero automatizado HDR-9000 de HUVITZ, con fácil conexión Wi-Fi y un paquete de examen de 21 puntos, es totalmente personalizable. 
      La lente de cilindro cruzado doble y la lente de cilindro cruzado Jackson permiten realizar exámenes de alta precisión en el eje del astigmatismo y en la agudeza visual. <br> <br>

      <ul className="custom-list">
      <li><span>•</span> <p>Ajuste de altura monocular.</p></li>
      <li><span>•</span> <p>Cabezal inclinable.</p></li>
      <li><span>•</span> <p>Carga rápida y silenciosa de las lentes.</p></li>
      <li><span>•</span> <p>Varias tablas de visión de cerca para pruebas de daltonismo incompletas, cuadrícula de Amsler, y muchas otras pruebas, como imágenes anatómicas, lecturas de poder refractivo y guías de lentes progresivas, ayudan a los pacientes a comprender fácilmente los resultados.</p></li>
      <li><span>•</span> <p>Panel de control con pantalla LED táctil y  giratoria e impresora incorporada.</p></li>
      <li><span>•</span> <p>La comunicación inalámbrica con el HRK-9000A y el Lensómetro HLM-9000 a través de Wi-Fi permite una transmisión de datos perfecta de manera independiente. Con modelos anteriores, la conexión es posible a través de cable RS-232.</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1RBwiJ7zynkAiY3VB-f74uyCW1IxEkrRh',
      'https://lh3.googleusercontent.com/d/1WTLs_JiK0LF-3k2A0HIJR1ecZppylSUe',
    ],
    catalogo:
      'https://drive.google.com/file/d/1x6ZcsdPu0DBzOj1xuoTMO8UPq1JoIwT5/view?usp=sharing',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1KaarOQEln8WAEqhC8ePxKpM26vCH9JHC',
      'https://lh3.googleusercontent.com/d/1SVQ08Y9fYntgRiZUQLxkICpqu7oFFbzP',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1BxR0NuYEucn5lSDdvixswajgX1YqNO9S',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1NbHV9sMoIlShGCF-aY_8bYMExeH1uYss',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1a8b88lTPIVoLzjHoshn7VfA07jAHTPhh',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1GnJEKSctyX67NBapisc8-f5HteYkUs2a',
    catalogo:
      'https://drive.google.com/file/d/1AE1nk2Ww_67260m39OhFa5zP318W8eQ4/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'HLM-1',
    fabrica: 'HUVITZ',
    descripcion: `El Lensómetro Digital HUVITZ modelo HLM-1 ofrece una mayor precisión en la medición de valores, gracias a la tecnología de análisis de frente de onda del sensor Hartmann, que incluye más puntos de medición que las generaciones anteriores. Su pantalla LCD de alta resolución y color de 5,7" está equipada con un revestimiento antirreflejo que garantiza una imagen nítida, además de un recubrimiento endurecido que protege contra rayones. También cuenta con una función de brillo ajustable.
      `,
    imagen: [
      'https://lh3.googleusercontent.com/d/1y8ii3v1sNlbhjC2fSSHdYT-72H4GJlvc',
      'https://lh3.googleusercontent.com/d/1wasVQ6moI9nbaZKKlqlam6AQ1lMxWxZm',
      'https://lh3.googleusercontent.com/d/1JM0IT_8_-DIivdNmk5JryhHKzrE1wy6b',
    ],
    catalogo:
      'https://drive.google.com/file/d/1m3bnUn42W5iOQ4bhUyw0bgF3FnlU_jqj/view?usp=sharing',
  },
  {
    id: 7,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'HLM-7000',
    fabrica: 'HUVITZ',
    descripcion: `El Lensómetro automático HLM-7000 de HUVITZ utiliza un algoritmo avanzado que mejora la precisión y la velocidad de las mediciones, permitiendo medir automáticamente todos los tipos de lentes. También cuenta con un amplio rango de medición de dioptrías y dos modos de prisma independientes, así como un sensor de PD integrado. Además, ofrece una evaluación precisa del nivel de UV y la capacidad de medir incluso lentes progresivas muy pequeñas. Otras características especiales incluyen un modo para gafas de sol oscuras y una interfaz gráfica intuitiva basada en íconos.`,
    imagen: [
      'https://lh3.googleusercontent.com/d/15djTAYZds0jtwmG6PXc237XKaHX0R4Jy',
      'https://lh3.googleusercontent.com/d/1RhvACeTtpYgl3fRupD6lp_MU3-rM7LmE',
    ],
    catalogo:
      'https://drive.google.com/file/d/1KqqoCRqqTT0-allLhHVcwQk5RyaQx0Wp/view?usp=sharing',
  },
  {
    id: 8,
    subcategoria: 'Lensómetros Digitales',
    modelo: 'HLM-9000',
    fabrica: 'HUVITZ',
    descripcion: `Lensómetro Digital modelo HLM-9000 de HUVITZ, un dispositivo innovador que incorpora la tecnología de análisis de frente de onda del sensor Hartmann y un sistema de reconocimiento automático de lentes. Con el HLM-9000, experimentará un nivel de satisfacción sin precedentes. Este medidor automático de lentes, único en su categoría, evalúa los efectos nocivos de las pantallas LED gracias a su función de medición del riesgo de luz azul.`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1G3B4WfTxNKcRxG0ckbKc0nnWBSu55c-i',
      'https://lh3.googleusercontent.com/d/1VbRz68yyOSlI76cpNCrnWOfPiPdx1aOz',
    ],
    catalogo:
      'https://drive.google.com/file/d/14N0jL2dIa5Fkr1nVkAEgwzbOZZLKSnXQ/view?usp=sharing',
  },
];

export const mesasElectricas = [
  {
    id: 1,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18A',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo HD-18A de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo y con fusibles de seguridad. Incluye conexión para equipos.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Superficie de apoyo de 605 mm x 435 mm.</p></li>
      <li><span>•</span> <p>Altura regulable de 645 mm a 815 mm.</p></li>
      <li><span>•</span> <p>Con cuatro ruedas, dos con freno.</p></li>
      <li><span>•</span> <p>Peso máximo de carga 50 kg.</p></li>
      <li><span>•</span> <p>Peso 20 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1ZBSg_SrTnXVfX8xYmEf3IJt5n7B6oQTn',
    catalogo:
      'https://drive.google.com/file/d/1wUPUavUs3q1oAndP0NWIRIjHl_NTy6sH/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18C',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo HD-18C de HONGDEE, de base metálica con pedestal lateral. Diseñada para 2 equipos grandes y un pequeño espacio para guardar. Incluye conexiones para equipos.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Superficie de apoyo de 1000 mm x 550 mm.</p></li>
      <li><span>•</span> <p>Altura regulable de 685 mm a 885 mm.</p></li>
      <li><span>•</span> <p>Con cuatro ruedas, dos con freno.</p></li>
      <li><span>•</span> <p>Peso máximo de carga 50 kg.</p></li>
      <li><span>•</span> <p>Peso 42 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1kwCWOkfVWYd_PeHZDVesS35C06mErycU',
    catalogo:
      'https://drive.google.com/file/d/1fsyRlf1p7h1d0PXljxtLHLgYCQBDnyVe/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-18T',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo HD-18T de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye portacables debajo de la mesa que hace invisible las conexiones. Con fusibles de seguridad y dos conexiones para equipos.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Superficie de apoyo de 610 mm x 530 mm.</p></li>
      <li><span>•</span> <p>Altura regulable de 660 mm a 860 mm.</p></li>
      <li><span>•</span> <p>Con cuatro ruedas, dos con freno.</p></li>
      <li><span>•</span> <p>Peso máximo de carga 50 kg.</p></li>
      <li><span>•</span> <p>Peso 24 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1XzdeMkivr9FvuIzs5sHtNQ7mb1BGee3C',
    catalogo:
      'https://drive.google.com/file/d/1ttkXFRdWPUko7PIho9Q7yfYwdnPC8tVd/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'HD-40',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo HD-40 de HONGDEE, de base metálica con pedestal central. Diseñada para 2 equipos grandes y con conexiones para equipos.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Superficie de apoyo de 920 mm x 575 mm.</p></li>
      <li><span>•</span> <p>Altura regulable de 665 mm a 865 mm.</p></li>
      <li><span>•</span> <p>Con cuatro ruedas, dos con freno.</p></li>
      <li><span>•</span> <p>Peso máximo de carga 50 kg.</p></li>
      <li><span>•</span> <p>Peso 30 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/15SVVk2xxHyd2NVavq-mrmMFL_Wy43LUp',
    catalogo:
      'https://drive.google.com/file/d/1rIGz8hbpEJ4T17W4XQNJiI-E3jU7oWre/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'JACK PRO',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo JACK PRO de HONGDEE, de base metálica con pedestal central. Diseñada para 1 equipo e incluye dos conexiones para equipos y fusibles de seguridad.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Superficie de apoyo de 490 mm x 510 mm.</p></li>
      <li><span>•</span> <p>Altura regulable de 660 mm a 840 mm.</p></li>
      <li><span>•</span> <p>Con cuatro ruedas, dos con freno.</p></li>
      <li><span>•</span> <p>Peso máximo de carga 50 kg.</p></li>
      <li><span>•</span> <p>Peso 27 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1xF33GcqAfUesOkloWAMVfg3wK7qdal1G',
    catalogo:
      'https://drive.google.com/file/d/16qEAZ580JOJirec-JJ7gj4Bvqj1Ro_Sz/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Mesas Eléctricas',
    modelo: 'WCT-100',
    fabrica: 'HONGDEE',
    descripcion:
      `Mesa eléctrica modelo WCT-100 de HONGDEE, ideal para sillas de ruedas gracias a su amplio espacio para las piernas. Mesa de gran superficie, diseñada para acomodar dos o más equipo y con una base metálica que garantiza alta fiabilidad y durabilidad.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Tamaño de la mesa: 900 mm x 470 mm.</p></li>
      <li><span>•</span> <p>Capacidad de carga: 75 kg.</p></li>
      <li><span>•</span> <p>Nivel de ruido: 42db.</p></li>
      <li><span>•</span> <p>Rango de elevación: 630 mm - 800 mm.</p></li>
      <li><span>•</span> <p>Voltaje: 100V-230V.</p></li>
      <li><span>•</span> <p>Potencia: 50W</p></li>
      <li><span>•</span> <p>Peso neto: 40 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1h5ZlxnrxYTWPcZSKPGnIw7vLX5vm47NH',
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
      'https://lh3.googleusercontent.com/d/1fTeV9QhpwwOd49PdU-C6tdOpqZC1HHcv',
      'https://lh3.googleusercontent.com/d/1iOz_Jor1gcRZLcwrp_oA7CmZljISqdDD',
    ],
    catalogo:
      'https://drive.google.com/file/d/1-_Alt6h4VLMezvgZIezt9YbKKdQ9p8-u/view?usp=sharing',
  },
];

// Diagnostico

export const tomografoCoherencia = [
  {
    id: 1,
    subcategoria: 'Tomógrafo de Coherencia',
    modelo: 'HOCT-1',
    fabrica: 'HUVITZ',
    descripcion: `
    El Tomógrafo de coherencia óptica HOCT-1 de HUVITZ es un dispositivo avanzado que ofrece imágenes detalladas de la retina y otras estructuras del ojo mediante un escaneo rápido de 68,000 A-Scan por segundo. Proporciona un análisis profundo y preciso con opciones de ajuste de brillo y contraste, modos automáticos y semi-automáticos para captura de imágenes y una amplia cobertura de escaneo de 12 mm x 9 mm. Además, incluye módulos opcionales como angiografía y topografía corneal, facilitando el diagnóstico y tratamiento de enfermedades oculares como degeneración macular y glaucoma. Su diseño compacto y sistema de navegación web lo hacen accesible y fácil de usar en cualquier entorno clínico.
  `,
    imagen: [
      'https://lh3.googleusercontent.com/d/1eTaqcqJKSZ3WAbZFCEoIBFJZu_xn62PE',
      'https://lh3.googleusercontent.com/d/1BiMnlEFCdmhqBhyTz1sAe4iCTHCeX3bu',
      'https://lh3.googleusercontent.com/d/1fs2lEFjOPHUNKE3yO_kc_1OS__Y2DXNg',
      'https://lh3.googleusercontent.com/d/1oBuZ-grOZh2pHGQ3HuR7m4AAg_sWHYsC',
    ],
    catalogo:
      'https://drive.google.com/file/d/1ztX8ZT4Gm4F3joW_xEGznwUB27DWxLRE/view?usp=sharing',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1tMxVrdPDCUXcXWqsJixOA-npHPuwaIj1',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1MrhNrjhFhxsvSYmJQGre6pSihygQKtSN',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1Im5F4FE3U87EIX42UWOR3d59lcqinnv4',
    catalogo:
      'https://drive.google.com/file/d/17YFry5eGQgwMHpFDj8ej4pavEaLSilhn/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'FC162',
    fabrica: 'Mediworks',
    descripcion:
      `Cámara no midriática capaz de capturar imágenes binoculares en 30 seg. del fondo de ojo de forma totalmente automática (alineación automática, enfoque automático, interacción de voz automática). Genere un informe de diagnóstico de IA (respaldado por un sistema de detección de casos de terceros).
      <ul className="custom-list">
      <li><span>•</span> <p>Campo Visual de 50°</p></li>
      <li><span>•</span> <p>Escanea el código QR</p></li>
      <li><span>•</span> <p>El sistema alineará la pupila y comenzará la captura</p></li>
      <li><span>•</span> <p>Tecnología de enfoque dividido 15 mpx</p></li>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1mo-f4fzVTiBhSqLpXNkvskGH7ijsmS44',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1kVT67Z_sSBwJ3AsIFCxgbCeKTSj4iXJV',
    catalogo:
      'https://drive.google.com/file/d/1wU4JAI1pZHQNQqfVLYaMeFkEw2gaZ2Zf/view?usp=sharing',
  },
  {
    id: 6,
    subcategoria: 'Cámaras No Midriáticas',
    modelo: 'HFC-1',
    fabrica: 'HUVITZ',
    descripcion: `Cámara No Midriática HUVITZ modelo HFC-1, equipada con una pantalla táctil de 12,1" y un PC integrado con 1 TB de capacidad. La cámara de fondo de ojo permite una visualización y análisis rápidos.<br><br>
    <ul className="custom-list">
      <li><span>•</span> <p>Objetivo de fijación: Al ajustar la posición del objetivo de fijación en la pantalla, los usuarios pueden obtener resultados de
      medición más precisos.</p></li>
      <li><span>•</span> <p>Función Panorama: La función proporciona información importante para la evaluación general de los ojos.</p></li>
      <li><span>•</span> <p>Seguimiento y disparo automático.</p></li>
      <li><span>•</span> <p>Cámara de 20 megapíxeles de alto rendimiento y definición.</p></li>
      <li><span>•</span> <p>Una variedad de modos de imagen:</p></li>
      <ul className="custom-list-sub-list">
      <li><span>∘</span> <p>Color: imágenes brillantes y de espectro completo.</p></li>
      <li><span>∘</span> <p>Azul: capa de la capa de la RNFL, arrugas, edema, membrana celular.</p></li>
      <li><span>∘</span> <p>Rojo: anomalías pigmentarias, ruptura coroidea, marca de nacimiento, melanoma</p></li>
      <li><span>∘</span> <p>Libre de rojo: glaucoma, retinopatía diabética.</p></li>
      <li><span>∘</span> <p>Cobalto: capa de la RNFL.</p></li>
      </ul>

      <li><span>•</span> <p>Pantalla táctil LCD de 12,1".</p></li>
      <li><span>•</span> <p>Sistema de navegación web sin instalación de software.</p></li>
      
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1spQehhbYlFtiE-z--bkrUng2xjrBz_tE',
    catalogo:
      'https://drive.google.com/file/d/1VCnNxKdKkPuVzt_GXYcrSY5HW2Mmxx3O/view?usp=sharing',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1St3dYpNx3jk03lna5dByO3Ym_SnUzrWu',
    catalogo:
      'https://drive.google.com/file/d/1LdfQ9o1uRW4NXUT17r8VevoumVkgL0Q5/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Tonómetros',
    modelo: 'TONOCARE',
    fabrica: 'KEELER',
    descripcion:
      `Tonómetro de aire portátil, con posibilidad de conexión IR inalámbrica a la impresora en el soporte del equipo. Transmisión de datos instantánea y opción de salida de datos por USB a una computadora. Incluye cargador de sobremesa.<br><br>
      Especificaciones:
      <ul className="custom-list">
      <li><span>•</span> <p>Rango medida 5a 50 mmHg.</p></li>
      <li><span>•</span> <p>Distancia medida 11 mm del ojo.</p></li>
      <li><span>•</span> <p>Peso 1 kg.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1BRld9LXZ6ZiCrF_-KqG8M71TGe6HOKPE',
    catalogo:
      'https://drive.google.com/file/d/1f6tGZ1zsl5e6NxHKJdU4hqLceB9O02rW/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Tonómetros',
    modelo: 'TONÓMETRO APLANÁTICO',
    fabrica: 'KOWA',
    descripcion:
      `Tonómetro de aplanación portátil con prisma de aplanación; rango de escala 0 - 60 mm Hg (división de 1 mm Hg).<br><br> 
      Iluminación:
      <ul className="custom-list">
      <li><span>•</span> <p>Encendido / Apagado: A través de rueda de ajuste.</p></li>
      <li><span>•</span> <p>Bombilla: 2,5 V, 0,25 A intercambiable</p></li>
      <li><span>•</span> <p>Batería usada: 1,5 V, 2 piezas intercambiables.</p></li>
     </ul><br>
     Ocular:
     <ul className="custom-list">
      <li><span>•</span> <p>Magnificación: 6x.</p></li>
      <li><span>•</span> <p>Reposacabezas: Movible.</p></li>
      <li><span>•</span> <p>Peso: 240grs.</p></li>
      <li><span>•</span> <p>Largo: 290mm.</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1JO2n7Hi8DsA-91z_9HyJEq3xnruyGyNg',
      'https://lh3.googleusercontent.com/d/1UjJAs7ZrchwRfFTpEUHMXZpKKL42bgWt',
    ],
    catalogo:
      'https://drive.google.com/file/d/1SoU4ROb0Djb7sO8UNoJTlahe6VpfaZF0/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Tonómetros',
    modelo: 'HNT-1 / HNT-1P',
    fabrica: 'HUVITZ',
    descripcion: `Tonómetro sin contacto HUVITZ HNT-1, con control de soplo inteligente autoajustable para la presión intraocular, pantalla de guía de seguimiento automático y enfoque 3D automáticos. Con pantalla táctil a color de 7" de alta resolución LCD TFT. Función de tope de seguridad más precisa. Al presionar el botón de seguridad, evita que la boquilla de aire entre en contacto con el ojo del paciente mediante la adopción de un sensor automático.<br><br>
    <ul className="custom-list">
      <li><span>•</span> <p>Mentonera Motorizada.</p></li>
      <li><span>•</span> <p>Impresora interna de alta velocidad.</p></li>
      <li><span>•</span> <p>Envía los datos medidos a una computadora externa mediante un cable de interfaz RS-232C (compatible con EMR).</p></li>
      <li><span>•</span> <p>Compensación precisa del espesor corneal gracias al paquímetro incorporado, que permite mostrar de inmediato el valor compensado de la presión intraocular (PIO) al medirla (modelo HNT-1P).</p></li>
      <li><span>•</span> <p>La medición del espesor central de la córnea (CCT) se realiza con precisión utilizando el método Scheimpflug (modelo HNT-1P).</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1e-w95z99Dg3wrb1RcT5VOz8aBGDJOPe3',
      'https://lh3.googleusercontent.com/d/1klliEo6BjKsB2J_4-BSKAgr7eEBFMT4B',
      'https://lh3.googleusercontent.com/d/18RcrirBnUsbRI9ksSnqVU4_tkzd-CL1Y',
    ],
    catalogo:
      'https://drive.google.com/file/d/1vQA28R-v3GxWTHV6OzzxEt6kcPY4ibHC/view?usp=sharing',
  },
  {
    id: 5,
    subcategoria: 'Tonómetros',
    modelo: 'TN-100',
    fabrica: 'FREY',
    descripcion: `Tonómetro sin contacto FREY TN-100, equipado con un soplo de aire suave y un funcionamiento silencioso. Ofrece mediciones altamente precisas (precisión de 0.5 mmHg).<br><br>
    <ul className="custom-list">
      <li><span>•</span> <p>Alineación y disparo automático.</p></li>
      <li><span>•</span> <p>PIO corregida según el espesor de la córnea.</p></li>
      <li><span>•</span> <p>Base de datos de pacientes integrada con capacidad para almacenar datos y valores de medición de hasta 4000 pacientes.</p></li>
      <li><span>•</span> <p>Tarjeta SD se puede utilizar para realizar copias de seguridad de los resultados de los pacientes y transferir los datos a la computadora.</p></li>
      <li><span>•</span> <p>Se pueden imprimir los resultados de varias pruebas de pacientes a la vez.</p></li>
      <li><span>•</span> <p>Cabezal de medición y mentonera accionados eléctricamente.</p></li>
       </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/161io8kz0YBcX9lR6g6j-mrBKSZxRUIT6',
      'https://lh3.googleusercontent.com/d/1Tw9Huy7eeKTHcrzL6wbjgGVgqUMpn5qB',
      'https://lh3.googleusercontent.com/d/1ao4RblJhetRUmG7eFfhivHs_rImWQNQy',
      'https://lh3.googleusercontent.com/d/1LjRfqmvkhQ2e7NRAbwApiK8PPpmC3lBn',
      'https://lh3.googleusercontent.com/d/1vonqdGl04vFgrbPZSn13rAq7TMsdM2-T',
    ],
    catalogo:
      'https://drive.google.com/file/d/1RQZEc7gl6hDaAqHo9e4dNpS2nte9RMXj/view?usp=sharing',
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
      'https://lh3.googleusercontent.com/d/1fGKnFH_X102UUvlJxCu5LfFKicijTIxK',
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
      'https://lh3.googleusercontent.com/d/1ako83k8-y9Gw1cU72trpIhXmUyTMoyfb',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1afFkPlRdJ3K1ltHNsyk_bJcMImtVav13',
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
    imagen:
      'https://lh3.googleusercontent.com/d/11yq_b1ddR3Mf1cSYsjNJVxEVRzwj9R1-',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1Ge0ztLXCAs-ep6_ePp0O6Bi36TrAL9N9',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1-r-UEP8-cty48Za-oWGa18gAez8CBeOx',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1BoIZZYe6YtNPdpZPRPfjrlLfPt5aO_Uv',
      'https://lh3.googleusercontent.com/d/1ZK07iQyEiD6jGzcv_obyOWqS6ZkF2nQa',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1t5wgOBCb8UKvfl1iJsFmRiMJMtRK5R7w',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1Ptk8R01r-6TjvDpkDp8b_KQsF8OO2xf0',
      'https://lh3.googleusercontent.com/d/1zDqjnRpJDpPOi4KtURwJWN6z1lZizHrQ',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1g8jLkkOa5TjZutLuA_0aswWyaRLbMfaj',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1mFnGMiM-JDwC6zWc0E9K9qy5RISNBIJk',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1YrMd2U5EoEDIsCEQdmNzsBcsYwmtevwI',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1ojErskqScAYKWqU9TxCfx182omqGCkru',
    catalogo:
      'https://drive.google.com/file/d/1jsUlnnrYceAf9K6R84FT80sX_LWtuGvD/view?usp=sharing',
  },
  {
    id: 12,
    subcategoria: 'Lámparas de Hendiduras',
    modelo: 'S390L (Firefly WDR+)',
    fabrica: 'MEDIWORKS',
    descripcion:
      'Biomicroscopio tipo Haag-Streit o iluminación superior modelo S390L (Firefly WDR+) de luz LED y óptica HD con posibilidad de explorar glándulas de meibomio y con clasificación automática. Con óptica de Galileo.',
    imagen:
      'https://lh3.googleusercontent.com/d/10wWcOH9auydHZOsBiJC-_VES1Ez7h52S',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1xKPitHvvNVn37hs5zgsXUBt1gEKRmLq5',
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
      'Paquímetro manual portátil para la medición de la córnea central con batería integrada.<br>Aparato simple de usar, solo brinda la medición obtenida. Punta integrada de 20 MHz, con pantalla que indica resultado y estatus de la batería recargable.',
    imagen:
      'https://lh3.googleusercontent.com/d/117jGRZfZnyTMBXboemuBc9nir_nptS6T',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1F-USXy3cayZuVEpRgL6hvnuGrv-Ppra8',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1TJB-giD2hhR3t3PxTmr2iQg5ndkm7vhb',
    catalogo:
      'https://drive.google.com/file/d/1Sz8JYWwJAryMBS6M5V1CAE90Rt1dGZEL/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Campímetros',
    modelo: 'EASYFIELD',
    fabrica: 'OCULUS',
    descripcion:
      'Perímetro computarizado de OCULUS de rendimiento estándar en la perimetría. De campo visual central hasta 30° con tamaños de estímulos Glodmann III. Ha sido diseñado para combinar screening de campo visual y perímetro. Incorpora una cuadrícula de LED con 135 puntos de prueba fija y color del estímulo blanco. Aparato compacto, ligero y portable.',
    imagen:
      'https://lh3.googleusercontent.com/d/1Gbe9HxTusxg9SqgpvQWX6BYb7t3nTOZM',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1RXjEOaF_utx-V6zSh83gzRT0AXwg19xN',
      'https://lh3.googleusercontent.com/d/13oxG93cPPf3dNK7xo7HjTpKzJzYlgpCP',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1auFajRZF8VLN7X015KLKWP1aqvf-rYX6',
    catalogo:
      'https://drive.google.com/file/d/13IvgaeyrtoQNDZJ7IUAEczST5iatiSAD/view?usp=sharing',
  },
];

export const tomografoOcular = [
  {
    id: 1,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL WAVE',
    fabrica: 'OCULUS',
    descripcion:
      'Nueva cámara Pentacam AXL WAVE, primer equipo que combina la tecnología Scheimpflug con la de un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano. Incluye además, aberrometría de frente de ondas total, refracción objetiva y retroiluminación. Trae por defecto los siguientes Software: paquete catarata, paquete refractivos, Holladay report, Belin Ambrosio, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen:
      'https://lh3.googleusercontent.com/d/13B0Eb0jx2qf1JzpVx11CVIL96OHhD4hO',
    catalogo:
      'https://drive.google.com/file/d/1SQe1jmd92uSIw15a4YZH0gUtK6VJL3_j/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM AXL',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam AXL para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Pentacam AXL combina las características conocidas de Pentacam HR con un biómetro óptico, basados en la tecnología de interferometría de coherencia parcial (PCI) para medir la longitud axial del ojo humano.',
    imagen:
      'https://lh3.googleusercontent.com/d/1edem__4tHB6P6w5B9NER6cJWAOEeMtaC',
    catalogo:
      'https://drive.google.com/file/d/1-ZkC908iWY8eUJsIiCLWhnepTDxzijOP/view?usp=sharing',
  },

  {
    id: 3,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM HR',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam HR para obtención de imágenes digitales de la córnea completa y de la cámara anterior. Puede tomar hasta 100 diferentes imágenes en 2 segundos, entregando 500 valores de elevación, produciendo 50.000 puntos de medición e imágenes completas a 360°, con opción de configuración: paquete refractivo, paquete catarata, Belin Ambrosio, Holladay report, adaptación lentes esclerales (CSP) y calculador de LIOs.',
    imagen:
      'https://lh3.googleusercontent.com/d/1XSrTaJMN-YzRJSb63HmlkI_kRJV5YlJQ',
    catalogo:
      'https://drive.google.com/file/d/1WnHU32MNlYJ3j_AWlAAAhYLuvP_BcCgA/view?usp=sharing',
  },
  {
    id: 4,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM STANDARD',
    fabrica: 'OCULUS',
    descripcion:
      'Cámara Pentacam Standard para obtención de imágenes digitales de la córnea completa y de la cámara anterior, hasta 50 diferentes posiciones concéntricas, produciendo 25.000 puntos de medición e imágenes completas a 360°. Opciones de configuración: paquete refractivo, paquete catarata, Belin Ambrosio, Holladay report, adaptación lentes esclerales (CSP).',
    imagen:
      'https://lh3.googleusercontent.com/d/1s6dAIEppWDwnL_18UJIjCKek1NwKXTDX',
    catalogo:
      'https://drive.google.com/file/d/1WnHU32MNlYJ3j_AWlAAAhYLuvP_BcCgA/view?usp=sharing',
  },

  {
    id: 5,
    subcategoria: 'Tomógrafo Ocular',
    modelo: 'PENTACAM CORNEA OCT',
    fabrica: 'OCULUS',
    descripcion: 
    `Este dispositivo permite la detección de diversas afecciones, por ejemplo: Irregularidades corneales como queratocono, trasplantes de córnea, procedimientos de cirugía posrefractiva, distrofias corneales, lesiones corneales, cicatrices, etc. También resulta muy útil para la educación del paciente.<br><br>
    <ul className="custom-list">
      <li><span>•</span> <p>Imágenes de dominio espectral de ultraalta resolución.</p></li>
      <li><span>•</span> <p>Resolución de escaneo de 1,9 µm axialmente y 10 µm transversalmente. La alta resolución axial garantiza imágenes detalladas de las estructuras corneales, como las subcapas.</p></li>
      <li><span>•</span> <p>“Biopsia óptica”: Visibilidad sin precedentes de las anomalías corneales.</p></li>
      <li><span>•</span> <p>Combinación de tecnología OCT y Scheimpflug, capturando imágenes desde el mismo eje de medición, lo que garantiza la consistencia y la precisión para diagnósticos avanzados.</p></li>
      <li><span>•</span> <p>Escaneo pericéntrico de gran ángulo: garantiza imágenes de alta resolución en toda la córnea, lo que proporciona una visualización detallada incluso en la periferia, gracias a la geometría de escaneo paralelo.</p></li>
      <li><span>•</span> <p>Tecnología Pentacam® Scheimpflug probada con 276.000 puntos de medición y software, base de estudio de cientos de estudios. Software establecido y validado con datos normativos. ¡Piense en Pentacam HR!</p></li>
      <li><span>•</span> <p>Tiempo de examen rápido: el escaneo combinado que utiliza tecnología Scheimpflug y OCT se completa en solo 1 segundo, 25 escaneos radiales.</p></li>
      <li><span>•</span> <p>Amplia cobertura: Epi-map hasta 12 mm, Scheimpflug: 22 mm, OCT: 15 mm.</p></li>
      <li><span>•</span> <p>Mediciones manuales dentro de imágenes OCT, por ejemplo mediciones de voult para lentes esclerales.</p></li>
      </ul>`,
    imagen:
      'https://lh3.googleusercontent.com/d/1QwYTu08APYzdfC-bRcZdb9_M6SGz9rpw',
    catalogo:
      'https://drive.google.com/file/d/1M2n4SjcPpRtib6PkHvOaSqf54UhlvRn9/view?usp=sharing',
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
    imagen: [
      'https://lh3.googleusercontent.com/d/1A5I3kSNoW-3nTe0m23H2sOuMEa3dejwA',
      'https://lh3.googleusercontent.com/d/19gCf1QUkWEPNO2xkQ8fsXSJc95DBsKJk',
    ],
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
    imagen:
      'https://lh3.googleusercontent.com/d/1lNNTp4tKXORROIGzvuk1lwLFOm6M2pWQ',
    catalogo:
      'https://drive.google.com/file/d/1cZ5JSkXRtfUTjotmAdmJbXNu0NmCDEMf/view?usp=sharing',
  },
  {
    id: 2,
    subcategoria: 'Ecógrafos',
    modelo: 'VUMAX HD',
    fabrica: 'SONOMED',
    descripcion:
      'Sistema de ultrasonido de multi-frecuencia que combina modo A/B y UBM. Su plataforma incluye una unidad base, pantalla LCD de 22 pulgadas, sonda modo B de 12Mhz o 20Mhz,sonda modo A de 10Mhz y sonda UBM de 35Mhz o 50Mhz.',
    imagen:
      'https://lh3.googleusercontent.com/d/1La4fToUEysC3GqUCb-RsEBTrnnMSXRB4',
    catalogo:
      'https://drive.google.com/file/d/1_9nrIbq4ahr98V9cXYmcxUcKfGBhOp08/view?usp=sharing',
  },
  {
    id: 3,
    subcategoria: 'Ecógrafos',
    modelo: 'MASTERVU 4500 A SCAN / MASTERVU 5600 B SCAN',
    fabrica: 'SONOMED',
    descripcion:
      'Sonda para modo B-Scan o A-Scan de SONOMED. Sonda o transductor portátil con conexión USB a cualquier PC o Laptop.',
    imagen:
      'https://lh3.googleusercontent.com/d/19uvsXf_d0duxvZNIr_eed-Nm3eoB8-Ot',
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
    imagen:
      'https://lh3.googleusercontent.com/d/1LMfGT3lsp94uEPamCZFEXT1u2YRHkJO1',
    catalogo:
      'https://drive.google.com/file/d/1DAurTknU_S5XD5yHayUe3inC0y-H5ZL4/view?usp=sharing',
  },
];

export const biometroOptico = [
  {
    id: 1,
    subcategoria: 'Biómetro Óptico',
    modelo: 'HBM-1',
    fabrica: 'HUVITZ',
    descripcion: 
    `El biómetro óptico HBM-1 de HUVITZ es un dispositivo de última generación diseñado para realizar mediciones biométricas precisas de las estructuras oculares. Opera con el sistema operativo Windows 10 y es compatible con fórmulas ampliamente reconocidas en el campo, como Holladay 1, Haigis, Hoffer Q, SRK/T, SRK II, Camellin-Calossi y Shammas No history.<br><br>
    <ul className="custom-list">
      <li><span>•</span> <p>10 métodos de medición de datos: Longitud axial (AL), Profundidad de la cámara anterior (ACD), Grosor corneal central (CCT), Grosor del cristalino (LT), Queratometría, Topografía, Queratocono, Coeficientes de Zernike, Pupilometría, Blanco a blanco.</p></li>
      <li><span>•</span> <p>Fórmula instalada: Barrett (Universal II, Universal II Toric, True-K, True-K Toric, Rx), Holladay, SRK2, SRK/T, HofferQ, Haigis, Camellin Calossi, Shammas sin historial.</p></li>
      <li><span>•</span> <p>DCM (modo de catarata densa) para la medición de catarata densa.</p></li>
      <li><span>•</span> <p>Funciones de gestión de la miopía integrada: seguimiento de datos históricos, comparación de cambios antes y después del uso de lentes Ortho-K y verificación de anisometropía.</p></li>
      </ul>`,
    imagen: [
      'https://lh3.googleusercontent.com/d/1Wucf9WwePB6bYH4D076x3R9J69wzbKqM',
      'https://lh3.googleusercontent.com/d/1Q8NIXRV7mc04Kq22DEXTpYkUKeToIUZD',
      'https://lh3.googleusercontent.com/d/1l3cgBpG6F7sGNMp2PxbUrLVJFGHwkuT1',
      'https://lh3.googleusercontent.com/d/1OgUTYcu8ADjeEYMt8SHeVrl52wKC4_zI',
      'https://lh3.googleusercontent.com/d/1kNywSsBtqns4LDCSRuW59GmxfrlCWh2H',
      'https://lh3.googleusercontent.com/d/1QNee1j5IfSPITFhscbtuEifvwaoau69k',
    ],
    catalogo:
      'https://drive.google.com/file/d/1GJjj4lzBY7lHXXE6HiDUnWKmmt4N2D8A/view?usp=sharing',
  },
];
