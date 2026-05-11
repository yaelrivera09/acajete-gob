// lib/data.ts
// Datos centralizados del Ayuntamiento de Acajete.
// Para actualizar información, edita este archivo y todo el sitio se actualiza.

export const siteConfig = {
  name: "H. Ayuntamiento de Acajete",
  state: "Veracruz",
  period: "2026 — 2029",
  tagline: "Gobierno cercano, trabajo transparente",
  email: "hayuntamientodeacajeteveracruz@gmail.com",
  phone: "228 318 1096",
  whatsapp: "2311089253", // Número que recibe los mensajes del formulario
  address: "Palacio Municipal, Centro, Acajete, Veracruz, México",
  facebook: "https://www.facebook.com/profile.php?id=61585844913895",
  instagram: "#", // sin Instagram por ahora
  horario: {
    semana: "Lunes a viernes · 9:00 a 16:00 hrs",
    sabado: "Sábados · 9:00 a 13:00 hrs",
  },
};

// ======== NAVEGACIÓN PRINCIPAL ========
export const mainNav = [
  { label: "Inicio", href: "/" },
  { label: "Gobierno", href: "/gobierno" },
  { label: "Directorio", href: "/directorio" },
  { label: "Trámites", href: "/tramites" },
  { label: "Obras Públicas", href: "/obras-publicas" },
  { label: "Turismo", href: "/turismo" },
  { label: "Transparencia", href: "/transparencia" },
  { label: "Contacto", href: "/contacto" },
];

// ======== CABILDO ========
export const cabildo = [
  {
    cargo: "Presidenta Municipal",
    nombre: "C. María Claudia Nava Santos",
    imagen: "/images/cabildo/presidenta.jpg",
  },
  {
    cargo: "Síndico",
    nombre: "C. José Luis Martínez Rivera",
    imagen: "/images/cabildo/sindico.jpg",
  },
  {
    cargo: "Regidora",
    nombre: "Lic. Rosa Isela Hernández Soto",
    imagen: "/images/cabildo/regidora.jpg",
  },
  {
    cargo: "Secretario del Ayuntamiento",
    nombre: "Lic. Gaspar Pérez Álvarez",
    imagen: "/images/cabildo/secretario.jpg",
  },
];

// ======== DIRECTORES DE ÁREA ========
export const directores = [
  { area: "DIF Municipal", titular: "Directora del DIF Municipal", nombre: "C. Amairani Hernández Parra", imagen: "/images/directores/dif.jpg" },
  { area: "Contraloría Interna", titular: "Contralor Interno", nombre: "L.C. Levit Hernández Jiménez", imagen: "/images/directores/contraloria.jpg" },
  { area: "Tesorería Municipal", titular: "Tesorera Municipal", nombre: "L.C. Mariela Cortes Hernández", imagen: null },
  { area: "Instituto Municipal de las Mujeres", titular: "Directora", nombre: "C. Diana Laura Hernández Suárez", imagen: "/images/directores/imm.jpg" },
  { area: "Dirección Jurídica", titular: "Director Jurídico", nombre: "Lic. David Gustavo Grau González", imagen: "/images/directores/juridico.jpg" },
  { area: "Catastro", titular: "Director de Catastro", nombre: "C. José Manuel Hernández Hernández", imagen: "/images/directores/catastro.jpg" },
  { area: "Protección Civil", titular: "Director de Protección Civil", nombre: "Ing. Paulo César Hernández Rodríguez", imagen: "/images/directores/proteccion-civil.jpg" },
  { area: "Seguridad Pública", titular: "Director de Seguridad Pública", nombre: "Lic. Cristóbal González Vizcarra", imagen: null },
  { area: "Registro Civil", titular: "Director de Registro Civil", nombre: "Lic. Gustavo Miguel Armenta Luna", imagen: "/images/directores/registro-civil.jpg" },
  { area: "Obras Públicas", titular: "Director de Obras Públicas", nombre: "Ing. Esteban Cutberto Alarcón Hernández", imagen: "/images/directores/obras-publicas.jpg" },
  { area: "Archivo y Biblioteca", titular: "Director", nombre: "Lic. Jorge Luis Castro Hernández", imagen: "/images/directores/archivo.jpg" },
  { area: "Desarrollo Urbano", titular: "Director de Desarrollo Urbano", nombre: "Ing. Carlos Adrián Miranda Melchor", imagen: "/images/directores/desarrollo-urbano.jpg" },
  { area: "Oficialía Mayor", titular: "Oficial Mayor", nombre: "Juan Jorge Ortega Morales", imagen: "/images/directores/oficialía.jpg" },
  { area: "Transparencia", titular: "Titular de Transparencia", nombre: "Lic. Blanca Estela Carmona García", imagen: "/images/directores/transparencia.jpg" },
  { area: "Fomento Deportivo", titular: "Director de Fomento Deportivo", nombre: "Óscar García Falfán", imagen: "/images/directores/deportivo.jpg" },
  { area: "Fomento Agropecuario", titular: "Director de Fomento Agropecuario", nombre: "C. Rubén Alarcón Martínez", imagen: "/images/directores/agropecuario.jpg" },
  { area: "Parques y Jardines", titular: "Director de Parques y Jardines", nombre: "C. Alejandro Martínez García", imagen: "/images/directores/parques.jpg" },
];

// ======== TRÁMITES DE REGISTRO CIVIL ========
export const tramitesRegistroCivil = [
  {
    id: "nacimiento",
    titulo: "Registro de Nacimiento",
    costo: "Gratuito",
    esGratuito: true,
    requisitos: [
      "Solicitud de registro (se proporciona en la Oficialía del Registro Civil).",
      "Certificado de nacimiento original y 2 copias.",
      "Copia certificada y simple del acta de nacimiento de los progenitores.",
      "CURP de los progenitores.",
      "Identificación oficial vigente de los progenitores.",
      "2 testigos con identificación oficial vigente.",
      "En caso de estar casados, presentar acta de matrimonio.",
      "Si un progenitor (o ambos) es menor de edad, deberá comparecer con su progenitor, quien ejerza la patria potestad o tutor.",
    ],
  },
  {
    id: "matrimonio",
    titulo: "Registro de Matrimonio",
    costo: "$450.00",
    lugarPago: "Oficina o domicilio, según indicación de Tesorería.",
    requisitos: [
      "Solicitud de registro de matrimonio.",
      "Copias certificadas de las actas de nacimiento de los contrayentes.",
      "Identificación oficial vigente con fotografía de los contrayentes.",
      "CURP de los contrayentes.",
      "4 testigos con identificación oficial vigente, fotografía y CURP.",
      "Comprobante de domicilio.",
      "Análisis clínicos prenupciales expedidos por la institución del sector salud estatal (RH, VDRL, salud física y mental), o en su defecto escrito libre firmado por ambos contrayentes manifestando su voluntad de no realizarse dichos análisis.",
      "Certificado de no inscripción RNOA.",
    ],
  },
  {
    id: "divorcio-administrativo-sin-hijos",
    titulo: "Divorcio Administrativo (sin hijos y sin bienes)",
    costo: "$1,600.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Escrito libre dirigido al Oficial del Registro Civil, solicitando el divorcio con fundamento en el Artículo 151 del Código Civil vigente en el estado, firmado por los interesados.",
      "Comprobante de domicilio.",
      "Copia certificada del acta de matrimonio y del acta de nacimiento de los interesados.",
      "CURP de los interesados.",
      "Identificación oficial vigente con fotografía de los interesados.",
      "2 testigos con identificación oficial vigente, fotografía y CURP.",
      "Poder notarial con cláusula especial en caso de no poder acudir personalmente a solicitar el divorcio.",
    ],
  },
  {
    id: "divorcio-administrativo-con-hijos-mayores",
    titulo: "Divorcio Administrativo (con hijos mayores de edad, sin bienes)",
    costo: "$1,600.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Escrito libre dirigido al Oficial del Registro Civil, solicitando el divorcio con fundamento en el Artículo 151 del Código Civil vigente en el estado, firmado por los interesados.",
      "Comprobante de domicilio.",
      "Copia certificada del acta de matrimonio y del acta de nacimiento de los interesados.",
      "CURP de los interesados.",
      "Identificación oficial vigente con fotografía de los interesados.",
      "2 testigos con identificación oficial vigente, fotografía y CURP.",
      "Copia certificada de las actas de nacimiento de los hijos mayores de edad y sin necesidad de alimentos, en su caso.",
      "Poder notarial con cláusula especial en caso de no poder acudir personalmente a solicitar el divorcio.",
    ],
  },
  {
    id: "divorcio-judicial",
    titulo: "Registro de Divorcio Judicial",
    costo: "$1,600.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Oficio dirigido al encargado del Registro Civil, girado por el Juez de Primera Instancia.",
      "Resolución judicial que declare la disolución del vínculo matrimonial.",
      "Auto en que cause estado la sentencia.",
      "Acta de matrimonio.",
    ],
  },
  {
    id: "reconocimiento-hijos",
    titulo: "Reconocimiento de Hijos",
    costo: "Gratuito",
    esGratuito: true,
    requisitos: [
      "Copia certificada del que se va a reconocer.",
      "Copia certificada del padre o madre que reconocerá.",
      "Copia certificada de la persona que otorga el reconocimiento, en caso de que el reconocido sea menor de edad.",
      "CURP de los 3 involucrados.",
      "Identificación oficial de los 3 (en caso de ser mayor de edad el que va a ser reconocido).",
      "2 testigos con identificación oficial.",
    ],
  },
  {
    id: "cambio-nombre",
    titulo: "Cambio de Nombre",
    costo: "$1,100.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Oficio dirigido al encargado del Registro Civil, girado por el Juez de Primera Instancia.",
      "Resolución judicial.",
      "Copia del acta de nacimiento.",
      "Auto en que cause estado la sentencia.",
    ],
  },
  {
    id: "cancelacion-acta",
    titulo: "Cancelación o Nulidad de Acta",
    costo: "Gratuito",
    esGratuito: true,
    requisitos: [
      "Oficio dirigido al encargado del Registro Civil, girado por el Juez de Primera Instancia.",
      "Resolución judicial.",
      "Copia del acta de nacimiento.",
      "Auto en que cause estado la sentencia.",
    ],
  },
  {
    id: "certificada-estado-civil",
    titulo: "Certificada del Estado Civil",
    costo: "$121.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Nombre completo y fecha de nacimiento, defunción, matrimonio, divorcio, etc.",
    ],
  },
  {
    id: "copia-acta",
    titulo: "Copia Fiel del Acta Certificada del Libro",
    costo: "$121.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Copia simple del acta.",
      "Nombre completo y fecha de nacimiento.",
    ],
  },
  {
    id: "inexistencia-registro",
    titulo: "Constancia de Inexistencia de Registro",
    subtitulo: "Nacimientos, defunciones y matrimonio",
    costo: "$121.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "No estar registrado en el Registro Civil del Municipio de Acajete, Veracruz.",
    ],
  },
  {
    id: "defuncion",
    titulo: "Registro de Defunción",
    costo: "$125.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Solicitud de registro de defunción.",
      "Certificado de defunción original, sin tachaduras ni alteraciones, y 2 copias.",
      "Copia del acta de nacimiento del finado(a).",
      "CURP del finado(a).",
      "Copia del acta de matrimonio en caso de ser casado.",
      "Identificación oficial del INE del finado y del declarante.",
      "2 testigos con identificación oficial.",
    ],
  },
  {
    id: "inhumacion",
    titulo: "Permiso de Inhumación",
    costo: "$450.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Copia del acta de defunción del finado(a).",
      "Copia del acta de nacimiento del finado(a).",
      "CURP del finado(a).",
      "Copia del acta de matrimonio en caso de ser casado.",
      "Identificación oficial del INE del finado y del declarante.",
      "Original del traslado del cadáver.",
    ],
  },
  {
    id: "re-inhumacion",
    titulo: "Permiso de Re-inhumación",
    costo: "$450.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Copia del título de propiedad del panteón donde se depositarán los restos.",
      "Copia certificada del acta de defunción.",
      "Identificación oficial del propietario de la fosa.",
    ],
  },
  {
    id: "exhumacion",
    titulo: "Permiso de Exhumación",
    costo: "Consultar en Tesorería",
    requisitos: [
      "Copia certificada del acta de defunción.",
      "Comprobar parentesco con el finado (acta de nacimiento o matrimonio).",
      "Copia certificada del acta de nacimiento, identificación oficial vigente y CURP de quien pretende realizar la exhumación.",
      "Ubicación de fosa (panteón municipal) o copia del título de propiedad.",
      "Proporcionar el destino de los restos.",
    ],
  },
  {
    id: "traslado-cadaver",
    titulo: "Traslado de Cadáver",
    costo: "$450.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Copia del acta de defunción del finado(a).",
      "Copia del acta de nacimiento del finado(a).",
      "CURP del finado(a).",
      "Copia del acta de matrimonio en caso de ser casado.",
      "Identificación oficial del INE del finado y del declarante.",
      "Original del traslado del cadáver.",
    ],
  },
  {
    id: "deposito-cenizas",
    titulo: "Depósito de Cenizas",
    costo: "$450.00",
    lugarPago: "Pago en Tesorería.",
    requisitos: [
      "Copia certificada del acta de defunción.",
      "Constancia de cremación proporcionada por el crematorio.",
      "Identificación oficial del familiar declarante.",
      "Proporcionar el destino de las cenizas.",
    ],
  },
];

// ======== TRÁMITES DE CATASTRO ========
export const tramitesCatastro = [
  {
    id: "cedula-catastral",
    titulo: "Cédula Catastral",
    costo: "$871.17 (hasta 31 enero 2026) · $903.28 (del 1 febrero 2026 al 31 enero 2027)",
    descripcion: "Actualización al registro catastral por modificaciones físicas del inmueble, manifestación de construcciones y/o ampliaciones.",
    tiempoRespuesta: "15 días naturales",
    solicitantes: "Personas físicas y morales",
    formaPago: "Efectivo o transferencia bancaria a la cuenta institucional del H. Ayuntamiento de Acajete, Ver.",
    requisitos: [
      "Copia de escritura, título o documento que acredite la posesión legal del predio.",
      "Copia de identificación oficial.",
      "Recibo de pago predial al corriente.",
      "Foto del predio (parte del frente).",
      "Plano antecedente (para zonas que no son de interés social, aprobado por el Municipio de Acajete, Ver.); plano de la construcción a declarar.",
      "Licencia de construcción previamente otorgada por la Dirección de Desarrollo Urbano (documento que autoriza construir, ampliar, modificar, reparar o remodelar una edificación o instalación en el predio).",
    ],
  },
  {
    id: "certificado-valor-catastral",
    titulo: "Certificado de Valor Catastral",
    subtitulo: "Traslado de Dominio",
    costo: "$1,244.54 (hasta 31 enero 2026) · $1,290.41 (del 1 febrero 2026 al 31 enero 2027)",
    descripcion: "Trámite que solicita una persona física o moral cuando quiere certificar la forma DC-016 con valores actualizados para el pago de impuesto de traslado de dominio.",
    tiempoRespuesta: "15 días naturales",
    solicitantes: "Personas físicas y morales",
    formaPago: "Efectivo o transferencia bancaria a la cuenta institucional del H. Ayuntamiento de Acajete, Ver.",
    requisitos: [
      "Copia de escritura, título o documento que acredite la posesión legal del predio.",
      "Foto del predio (parte del frente).",
      "Escritura del adquirente (proyecto de escritura que debe presentar el Notario).",
      "Copia de INE.",
      "Recibo de pago predial del año en curso.",
      "Formato DC-016 que emite la notaría, firmado y/o sellado.",
      "Recibo de pago municipal realizado por el solicitante.",
    ],
  },
  {
    id: "actualizacion-datos",
    titulo: "Actualización al Registro Catastral",
    subtitulo: "Modificaciones o rectificación de datos administrativos y legales",
    costo: "Gratuito",
    esGratuito: true,
    descripcion: "Correcciones por errores ortográficos y/o datos que fuesen añadidos al registro catastral.",
    tiempoRespuesta: "15 días naturales",
    solicitantes: "Personas físicas y morales",
    formaPago: "Servicio gratuito.",
    requisitos: [
      "Copia de escritura, título o documento que acredite la posesión legal del predio.",
      "Foto del predio (parte del frente).",
      "Copia de identificación oficial.",
      "Recibo de pago predial al corriente.",
      "Plano antecedente (para zonas que no son de interés social, aprobado por el Municipio).",
    ],
  },
];

// ======== TRANSPARENCIA ========
export const leyesTransparencia = [
  {
    id: "ley-875",
    numero: "Ley 875",
    titulo: "Ley de Transparencia y Acceso a la Información Pública para el Estado de Veracruz",
    descripcion:
      "Portal oficial de transparencia conforme a la Ley 875. Se publica la información obligatoria relacionada con la gestión, administración y rendición de cuentas del H. Ayuntamiento.",
    enlace: "#",
  },
  {
    id: "ley-250",
    numero: "Ley 250",
    titulo: "Información de Oficio Fundamental",
    descripcion:
      "Información de oficio y fundamental aplicable a todas las áreas municipales, disponible de manera obligatoria y sin necesidad de solicitud ciudadana conforme al Artículo 50.",
    enlace: "#",
  },
  {
    id: "ley-contabilidad",
    numero: "Ley General de Contabilidad Gubernamental",
    titulo: "Reportes financieros y Cuenta Pública",
    descripcion:
      "Reportes financieros, ejercicio presupuestal, Cuenta Pública y armonización contable obligatoria para transparentar el manejo y estado de la hacienda municipal, en cumplimiento de la Ley General de Contabilidad Gubernamental.",
    enlace: "#",
  },
  {
    id: "ley-disciplina-financiera",
    numero: "Ley de Disciplina Financiera",
    titulo: "Responsabilidad hacendaria y financiera",
    descripcion:
      "Ley de orden público que establece los criterios generales de responsabilidad hacendaria y financiera que rigen a las Entidades Federativas y los Municipios, para un manejo sostenible de las finanzas públicas.",
    enlace: "#",
  },
];

// ======== AVISO DE PRIVACIDAD ========
export const avisoPrivacidad = {
  responsable: "H. Ayuntamiento de Acajete, Veracruz",
  domicilio: "Palacio Municipal, Centro, Acajete, Veracruz, México",
  ultimaActualizacion: "Enero 2026",
  secciones: [
    {
      titulo: "Identidad y domicilio del responsable",
      contenido: "El H. Ayuntamiento de Acajete, Veracruz, con domicilio en el Palacio Municipal ubicado en el centro del municipio, es el responsable del uso y protección de los datos personales que los ciudadanos proporcionan para la realización de trámites y servicios.",
    },
    {
      titulo: "Datos personales que se recaban",
      contenido: "Para los fines señalados en el presente aviso de privacidad, se podrán recabar datos personales como: nombre completo, CURP, domicilio, teléfono, correo electrónico, identificación oficial, así como datos relacionados con el trámite específico que se solicita ante las diferentes áreas del H. Ayuntamiento.",
    },
    {
      titulo: "Finalidades del tratamiento",
      contenido: "Los datos personales recabados serán utilizados únicamente para la prestación de trámites y servicios municipales, la integración de expedientes, la emisión de documentos oficiales, el contacto con el ciudadano y el cumplimiento de obligaciones legales y fiscales del municipio.",
    },
    {
      titulo: "Transferencia de datos",
      contenido: "Los datos personales no serán transferidos ni compartidos con terceros sin el consentimiento expreso del titular, salvo en los casos previstos por la legislación aplicable en materia de transparencia, acceso a la información pública y protección de datos personales.",
    },
    {
      titulo: "Derechos ARCO",
      contenido: "El titular de los datos personales tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos (derechos ARCO), así como a revocar el consentimiento otorgado. Para ejercer estos derechos, podrá acudir a la Unidad de Transparencia del H. Ayuntamiento o enviar su solicitud por los medios de contacto oficiales.",
    },
    {
      titulo: "Modificaciones al aviso",
      contenido: "El presente aviso de privacidad puede ser actualizado en cualquier momento conforme a las reformas legislativas o necesidades institucionales. Las modificaciones serán publicadas en el sitio oficial del H. Ayuntamiento.",
    },
  ],
};