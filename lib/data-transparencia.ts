const BASE = "/docs/transparencia/2026/t1";

function e(s: string) {
  return encodeURIComponent(s);
}

// Contables - Enero y Febrero (mismos nombres)
const contablesEneroFeb = [
  { nombre: "Estado de Actividades", href: "" },
  { nombre: "Estado de Situación Financiera", href: "" },
  { nombre: "Estado de Variación en la Hacienda Pública", href: "" },
  { nombre: "Estado de Cambios en la Situación Financiera", href: "" },
  { nombre: "Estado de Flujos de Efectivo", href: "" },
  { nombre: "Informe de Pasivos Contingentes", href: "" },
  { nombre: "Notas a los Estados Financieros", href: "" },
  { nombre: "Estado Analítico del Activo", href: "" },
  { nombre: "Estado Analítico de la Deuda y Otros Pasivos", href: "" },
];

const archivosContablesEneroFeb = [
  "01_Estado de Actividades.pdf",
  "02_ Estado de Situacion Financiera.pdf",
  "03_ Estado de Variacion en la Hacienda Publica.pdf",
  "04_ Estado de Cambios en la Situacion Financiera.pdf",
  "05_ Estado de Flujos de Efectivo.pdf",
  "06_ Informe Pasivos Contingentes.pdf",
  "07_ Notas a los Estados Financieros.pdf",
  "08_ Estado Analitico del Activo.pdf",
  "09_ Estado Analitico de la Deuda y Otros Pasivos.pdf",
];

const archivosContablesMarzo = [
  "01_ Estado de Actividades.pdf",
  "02_ Estado de Situacion Financiera.pdf",
  "03_ Estado de Variación en la Hacienda Pública.pdf",
  "04_ Estado de Cambios en la Situacion Financiera.pdf",
  "05_ Estado de Flujos de Efectivo.pdf",
  "06_ Informe Pasivos Contingentes.pdf",
  "07_ Notas a los Estados Financieros.pdf",
  "08_ Estado Analitico del Activo.pdf",
  "09_ Estado Analitico de la Deuda y Otros Pasivos.pdf",
];

const nombresContables = [
  "Estado de Actividades",
  "Estado de Situación Financiera",
  "Estado de Variación en la Hacienda Pública",
  "Estado de Cambios en la Situación Financiera",
  "Estado de Flujos de Efectivo",
  "Informe de Pasivos Contingentes",
  "Notas a los Estados Financieros",
  "Estado Analítico del Activo",
  "Estado Analítico de la Deuda y Otros Pasivos",
];

const archivosPresupuestales = [
  "I. Estado Analitico de Ingresos.pdf",
  "i. Estado del Presupuesto de Egresos_ Clasificacion Administrativa.pdf",
  "ii. Estado del Presupuesto de Egresos_ Clasificacion Economica.pdf",
  "iii. Estado del Presupuesto de Egresos_ Clasif Objeto del Gasto.pdf",
  "iv. Estado del Presupuesto de Egresos_ Clasificacion Funcional.pdf",
];

const nombresPresupuestales = [
  "Estado Analítico de Ingresos",
  "Presupuesto de Egresos: Clasificación Administrativa",
  "Presupuesto de Egresos: Clasificación Económica",
  "Presupuesto de Egresos: Objeto del Gasto",
  "Presupuesto de Egresos: Clasificación Funcional",
];

const archivosAdicional = [
  "16_ Formato de Aplicación de los Recursos del FAISMUN 2026.pdf",
  "17_ Formato de Aplicación de los Recursos del FORTAMUN_DF 2026.pdf",
  "18_ Programas con Recursos Concurrente por Orden de Gobierno.pdf",
  "19_ Ejercicio y Destino de Ingresos Extraordinarios por Convenio.pdf",
  "20_ Montos Pagados por Ayudas y Subsidios.pdf",
  "21_ Relación de Cuentas Bancarias Productivas Especificas.pdf",
  "22_ Conciliación Entre los Ingresos Presupuestarios y Contables.pdf",
  "23_ Conciliación Entre los Egresos Presupuestarios y Contables.pdf",
];

const nombresAdicional = [
  "Aplicación de Recursos FAISMUN 2026",
  "Aplicación de Recursos FORTAMUN-DF 2026",
  "Programas con Recursos Concurrentes por Orden de Gobierno",
  "Ingresos Extraordinarios por Convenio",
  "Montos Pagados por Ayudas y Subsidios",
  "Cuentas Bancarias Productivas Específicas",
  "Conciliación de Ingresos Presupuestarios y Contables",
  "Conciliación de Egresos Presupuestarios y Contables",
];

function docs(carpeta: string, archivos: string[], nombres: string[]) {
  return archivos.map((archivo, i) => ({
    nombre: nombres[i],
    href: `${BASE}/${carpeta}/${e(archivo)}`,
  }));
}

function categoriasLGCG(mes: string, contables: string[]) {
  return [
    {
      nombre: "I. Contables",
      documentos: docs(`lgcg/${mes}/contables`, contables, nombresContables),
    },
    {
      nombre: "II. Presupuestales",
      documentos: docs(`lgcg/${mes}/presupuestales`, archivosPresupuestales, nombresPresupuestales),
    },
    {
      nombre: "III. Programático",
      documentos: [
        {
          nombre: "Gasto por Categoría Programática",
          href: `${BASE}/lgcg/${mes}/programatico/${e("Gasto Categoria Programatica.pdf")}`,
        },
      ],
    },
    {
      nombre: "IV. Adicional",
      documentos: docs(`lgcg/${mes}/adicional`, archivosAdicional, nombresAdicional),
    },
  ];
}

export type Documento = { nombre: string; href: string };
export type Categoria = { nombre: string; documentos: Documento[] };
export type MesLGCG = { id: string; nombre: string; categorias: Categoria[] };
export type MesLDF = { id: string; nombre: string; documentos: Documento[] };

// Marzo se publica con el paquete completo entregado por Tesorería, que
// incluye anexos bancarios ausentes en enero y febrero.
const BASE_MARZO = "/docs/transparencia/2026/t1/marzo/PDF";

function docsMarzo(carpeta: string, entradas: [string, string][]) {
  const ruta = carpeta.split("/").map(e).join("/");
  return entradas.map(([archivo, nombre]) => ({
    nombre,
    href: `${BASE_MARZO}/${ruta}/${e(archivo)}`,
  }));
}

const marzoAdicional: [string, string][] = [
  ["0_ Oficio de Remisión.pdf", "Oficio de Remisión"],
  ["01_ Acta de Sesión.pdf", "Acta de Sesión"],
  ["02_ Balanza de Comprobación.pdf", "Balanza de Comprobación"],
  ["03_ Conciliaciones Bancarias.pdf", "Conciliaciones Bancarias"],
  ["04_ Informe de Altas y Bajas de Personal.pdf", "Informe de Altas y Bajas de Personal"],
  ["05_ Informe de Altas de Bienes Muebles.pdf", "Informe de Altas de Bienes Muebles"],
  ["06_ Informe de Bajas de Bienes Muebles.pdf", "Informe de Bajas de Bienes Muebles"],
  ["07_ Informe de Altas de Bienes Inmuebles.pdf", "Informe de Altas de Bienes Inmuebles"],
  ["08_ Informe de Bajas de Bienes Inmuebles.pdf", "Informe de Bajas de Bienes Inmuebles"],
  ["09_ Estado de Deuda Pública Mensual.pdf", "Estado de Deuda Pública Mensual"],
  ["10_ Notificación de Depósito de Participaciones Federales.pdf", "Notificación de Depósito de Participaciones Federales"],
  ["11_ Notificación de Depósito de Aportaciones Federales.pdf", "Notificación de Depósito de Aportaciones Federales"],
  ["12_ Reporte de Recaudación Predial.pdf", "Reporte de Recaudación Predial"],
  ["13_ Reporte de Recaudación Traslado de Dominio.pdf", "Reporte de Recaudación por Traslado de Dominio"],
  ["13_ Reporte de Recaudación de los Derechos por servicio Agua.pdf", "Reporte de Recaudación de Derechos por Servicio de Agua"],
  ["14_ Relación de Donaciones Recibidas.pdf", "Relación de Donaciones Recibidas"],
  ["15_ Corte de Caja Mensual.pdf", "Corte de Caja Mensual"],
  ["16_ Formato de Aplicación de los Recursos del FAISMUN 2026.pdf", "Aplicación de Recursos FAISMUN 2026"],
  ["17_ Formato de Aplicación de los Recursos del FORTAMUN_DF 2026.pdf", "Aplicación de Recursos FORTAMUN-DF 2026"],
  ["18_ Programas con Recursos Concurrente por Orden de Gobierno.pdf", "Programas con Recursos Concurrentes por Orden de Gobierno"],
  ["19_ Ejercicio y Destino de Ingresos Extraordinarios por Convenio.pdf", "Ingresos Extraordinarios por Convenio"],
  ["20_ Montos Pagados por Ayudas y Subsidios.pdf", "Montos Pagados por Ayudas y Subsidios"],
  ["21_ Relación de Cuentas Bancarias Productivas Especificas.pdf", "Cuentas Bancarias Productivas Específicas"],
  ["22_ Conciliación Entre los Ingresos Presupuestarios y Contables.pdf", "Conciliación de Ingresos Presupuestarios y Contables"],
  ["23_ Conciliación Entre los Egresos Presupuestarios y Contables.pdf", "Conciliación de Egresos Presupuestarios y Contables"],
  ["24_ Listado de Adjudicaciones y Licitaciones.pdf", "Listado de Adjudicaciones y Licitaciones"],
  ["25_ Relación de Bienes que Componen el Patrimonio.pdf", "Relación de Bienes que Componen el Patrimonio"],
  ["27_ Notificación de Participaciones y Aportaciones Federales.pdf", "Notificación de Participaciones y Aportaciones Federales"],
  ["29_ Relación de Cheques en Transito y Depositos Pendientes.pdf", "Relación de Cheques en Tránsito y Depósitos Pendientes"],
  ["30_Contratación de Financiamentos u Obligaciones.pdf", "Contratación de Financiamientos u Obligaciones"],
  ["31_ Acta de Baja de bienes muebles.pdf", "Acta de Baja de Bienes Muebles"],
  ["32_Disposiciones de Contratación Emitidas por el Comite de Obras.pdf", "Disposiciones de Contratación del Comité de Obras"],
  ["33_Reporte de Nomina del Periodo Marzo 2026.pdf", "Reporte de Nómina de Marzo 2026"],
  ["i_ Estados de Cuenta.pdf", "Estados de Cuenta"],
  ["ii_ Auxiliares bancarios.pdf", "Auxiliares Bancarios"],
  ["iii_ Cheques en Tránsito.pdf", "Cheques en Tránsito"],
  ["iv_ Depósitos Pendientes por Registrar por el Banco.pdf", "Depósitos Pendientes por Registrar por el Banco"],
];

const cuentas = ["1.1.1.2.02.67", "1.1.1.2.02.68", "1.1.1.2.02.69", "1.1.1.2.02.70", "1.1.1.2.05.03", "1.1.1.2.05.04", "1.1.1.2.05.05", "1.1.1.2.05.06"];

const marzoEstadosDeCuenta: [string, string][] = [
  ["BBVA INGRESOS PROPIOS 2025 1.1.1.2.02.67.pdf", "BBVA Ingresos Propios 2025 · 1.1.1.2.02.67"],
  ["BBVA PARTICIPACIONES 2025 1.1.1.2.02.68.pdf", "BBVA Participaciones 2025 · 1.1.1.2.02.68"],
  ["BBVA FAISMUN 2025 1.1.1.2.02.69.pdf", "BBVA FAISMUN 2025 · 1.1.1.2.02.69"],
  ["BBVA FORTAMUN-DF 2025 1.1.1.2.02.70.pdf", "BBVA FORTAMUN-DF 2025 · 1.1.1.2.02.70"],
  ["EF35 EDO DE CUENTA 1.1.1.2.05.03.pdf", "Estado de Cuenta FAISMUN 2026 · 1.1.1.2.05.03"],
  ["EF35 EDO DE CUENTA 1.1.1.2.05.04.pdf", "Estado de Cuenta FORTAMUN-DF 2026 · 1.1.1.2.05.04"],
  ["EF35 EDO DE CUENTA 1.1.1.2.05.05.pdf", "Estado de Cuenta Participaciones 2026 · 1.1.1.2.05.05"],
  ["EF35 EDO DE CUENTA 1.1.1.2.05.06.pdf", "Estado de Cuenta Ingresos Fiscales 2026 · 1.1.1.2.05.06"],
];

const marzoLDF: [string, string][] = [
  ["1_ EstadoSituacionFinancieraDetallado.pdf", "Estado de Situación Financiera Detallado"],
  ["2_ BalancePresupuestario.pdf", "Balance Presupuestario"],
  ["3_ EstadoAnaliticoIngresosDetallado.pdf", "Estado Analítico de Ingresos Detallado"],
  ["4_ Presupuesto de Egresos Detallado_Objeto del Gasto LDF.pdf", "Presupuesto de Egresos Detallado: Objeto del Gasto"],
  ["5_ Presupuesto de Egresos Detallado_Clasif Administrativa LDF.pdf", "Presupuesto de Egresos Detallado: Clasificación Administrativa"],
  ["6_ Presupuesto de Egresos Detallado_Clasif Funcional LDF.pdf", "Presupuesto de Egresos Detallado: Clasificación Funcional"],
  ["7_ Clasificación de Servicios Personales por Categoria LDF.pdf", "Servicios Personales por Categoría"],
  ["8_DeudaLDF.pdf", "Informe Analítico de la Deuda y Otros Pasivos"],
  ["9_InformeAnaliticoDeObligacionesDiferentesDeFinanciamiento.pdf", "Informe de Obligaciones Diferentes de Financiamiento"],
  ["10_Reporte de Traspaso Entre Bancos.pdf", "Reporte de Traspaso Entre Bancos"],
];

const categoriasMarzo: Categoria[] = [
  {
    nombre: "I. Contables",
    documentos: docsMarzo("I. Contables", archivosContablesMarzo.map((a, i) => [a, nombresContables[i]])),
  },
  {
    nombre: "II. Presupuestales",
    documentos: docsMarzo("II. Presupuestales", archivosPresupuestales.map((a, i) => [a, nombresPresupuestales[i]])),
  },
  {
    nombre: "III. Programático",
    documentos: docsMarzo("III. Programatico", [["Gasto Categoria Programatica.pdf", "Gasto por Categoría Programática"]]),
  },
  { nombre: "IV. Adicional", documentos: docsMarzo("IV. Adicional", marzoAdicional) },
  {
    nombre: "V. Auxiliares Bancarios",
    documentos: docsMarzo("IV. Adicional/Auxiliares Bancarios", cuentas.map((c) => [`Auxiliar ${c}.pdf`, `Auxiliar ${c}`])),
  },
  {
    nombre: "VI. Conciliaciones Bancarias",
    documentos: docsMarzo("IV. Adicional/Conciliaciones Bancarias", cuentas.map((c) => [`Conciliación Bancaria ${c}.pdf`, `Conciliación Bancaria ${c}`])),
  },
  { nombre: "VII. Estados de Cuenta", documentos: docsMarzo("IV. Adicional/ESTADOS DE CUENTA", marzoEstadosDeCuenta) },
];

export const estadosFinancierosT1_2026 = {
  periodo: "Primer Trimestre 2026",
  lgcg: {
    id: "lgcg",
    nombre: "Ley General de Contabilidad Gubernamental",
    siglas: "LGCG",
    meses: [
      { id: "enero", nombre: "Enero 2026", categorias: categoriasLGCG("enero", archivosContablesEneroFeb) },
      { id: "febrero", nombre: "Febrero 2026", categorias: categoriasLGCG("febrero", archivosContablesEneroFeb) },
      { id: "marzo", nombre: "Marzo 2026", categorias: categoriasMarzo },
    ] as MesLGCG[],
  },
  ldf: {
    id: "ldf",
    nombre: "Ley de Disciplina Financiera",
    siglas: "LDF",
    meses: [
      {
        id: "marzo",
        nombre: "Marzo 2026",
        documentos: docsMarzo("V. Disciplina Financiera", marzoLDF),
      },
    ] as MesLDF[],
  },
};

const BASE_T2 = "/docs/transparencia/2026/t2";

function docsT2(mes: string, carpeta: string, archivos: string[], nombres: string[]) {
  return archivos.map((archivo, i) => ({
    nombre: nombres[i],
    href: `${BASE_T2}/${mes}/PDF/${e(carpeta)}/${e(archivo)}`,
  }));
}

// Abril llega de TesorerÃ­a con nombres de archivo propios (acentos y
// espacios distintos al resto de los meses), por lo que lleva su lista.
const archivosContablesAbril = [
  "01_ Estado de Actividades.pdf",
  "02_ Estado de Situacion Financiera.pdf",
  "03_ Estado de Variacion en la Hacienda Publica.pdf",
  "04_ Estado de Cambios en la Situación Financiera.pdf",
  "05_ Estado de Flujos de Efectivo.pdf",
  "06_ Informe de Pasivos Contigentes.pdf",
  "07_ Notas a los Estados Financieros.pdf",
  "08_ Estado Analitico del Activo.pdf",
  "09_ Estado Analitico de la Deuda y  Otros Pasivos.pdf",
];

// Abril y mayo comparten la estructura mensual de enero y febrero: no
// incluyen Disciplina Financiera, que solo se publica al cierre del trimestre.
function categoriasT2Mensual(mes: string, contables: string[], programatico: string): Categoria[] {
  return [
    {
      nombre: "I. Contables",
      documentos: docsT2(mes, "I. Contables", contables, nombresContables),
    },
    {
      nombre: "II. Presupuestales",
      documentos: docsT2(mes, "II. Presupuestales", archivosPresupuestales, nombresPresupuestales),
    },
    {
      nombre: "III. Programático",
      documentos: docsT2(mes, "III. Programatico", [programatico], ["Gasto por Categoría Programática"]),
    },
    {
      nombre: "IV. Adicional",
      documentos: docsT2(mes, "IV. Adicional", archivosAdicional, nombresAdicional),
    },
  ];
}

const archivosAdicionalJunio = [
  "09_ Estado de Deuda Pública Mensual.pdf",
  "17_ Formato de Aplicación de los Recursos del FAISMUN 2026.pdf",
  "18_ Formato de Aplicación de los Recursos del FORTAMUN_DF 2026.pdf",
  "19_ Programas con Recursos Concurrente por Orden de Gobierno.pdf",
  "20_ Ejercicio y Destino de Ingresos Extraordinarios por Convenios federales.pdf",
  "21_ Montos Pagados por Ayudas y Subsidios.pdf",
  "22_ Relación de Cuentas Bancarias Productivas Especificas.pdf",
  "23_ Conciliación Entre los Ingresos Presupuestarios y Contables.pdf",
  "24_ Conciliación Entre los Egresos Presupuestarios y Contables.pdf",
  "Reporte FAISMUN 2do Trimestre.pdf",
  "Inventario de Bienes Muebles e Inmuebles 2026.pdf",
];

const nombresAdicionalJunio = [
  "Estado de Deuda Pública Mensual",
  "Aplicación de Recursos FAISMUN 2026",
  "Aplicación de Recursos FORTAMUN-DF 2026",
  "Programas con Recursos Concurrentes por Orden de Gobierno",
  "Ingresos Extraordinarios por Convenios Federales",
  "Montos Pagados por Ayudas y Subsidios",
  "Cuentas Bancarias Productivas Específicas",
  "Conciliación de Ingresos Presupuestarios y Contables",
  "Conciliación de Egresos Presupuestarios y Contables",
  "Reporte Trimestral FAISMUN — Acuse SIMVER",
  "Inventario de Bienes Muebles e Inmuebles 2026",
];

const archivosLDFJunio = [
  "1_ EstadoSituacionFinancieraDetallado.pdf",
  "2_ BalancePresupuestario.pdf",
  "3_ EstadoAnaliticoIngresosDetallado.pdf",
  "4_ Presupuesto de Egresos Detallado_Objeto del Gasto LDF.pdf",
  "5_ Presupuesto de Egresos Detallado_Clasif Administrativa LDF.pdf",
  "6_ Presupuesto de Egresos Detallado_Clasif Funcional LDF.pdf",
  "7_ Clasificación de Servicios Personales por Categoria LDF.pdf",
  "8_DeudaLDF.pdf",
  "9_InformeAnaliticoDeObligacionesDiferentesDeFinanciamiento.pdf",
  "Informe sobre estudios actuariales LDF.pdf",
];

const nombresLDFJunio = [
  "Estado de Situación Financiera Detallado",
  "Balance Presupuestario",
  "Estado Analítico de Ingresos Detallado",
  "Presupuesto de Egresos Detallado: Objeto del Gasto",
  "Presupuesto de Egresos Detallado: Clasificación Administrativa",
  "Presupuesto de Egresos Detallado: Clasificación Funcional",
  "Servicios Personales por Categoría",
  "Informe Analítico de la Deuda y Otros Pasivos",
  "Informe de Obligaciones Diferentes de Financiamiento",
  "Informe sobre Estudios Actuariales",
];

export const estadosFinancierosT2_2026 = {
  periodo: "Segundo Trimestre 2026",
  lgcg: {
    id: "lgcg",
    nombre: "Ley General de Contabilidad Gubernamental",
    siglas: "LGCG",
    meses: [
      {
        id: "abril",
        nombre: "Abril 2026",
        categorias: categoriasT2Mensual("abril", archivosContablesAbril, "EF15 Gasto por Categoria Programatica.pdf"),
      },
      {
        id: "mayo",
        nombre: "Mayo 2026",
        categorias: categoriasT2Mensual("mayo", archivosContablesEneroFeb, "Gasto Categoria Programatica.pdf"),
      },
      {
        id: "junio",
        nombre: "Junio 2026",
        categorias: [
          {
            nombre: "I. Contables",
            documentos: docsT2("junio", "I. Contables", archivosContablesMarzo, nombresContables),
          },
          {
            nombre: "II. Presupuestales",
            documentos: docsT2("junio", "II. Presupuestales", archivosPresupuestales, nombresPresupuestales),
          },
          {
            nombre: "III. Programático",
            documentos: docsT2("junio", "III. Programatico", ["Gasto Categoria Programatica.pdf"], ["Gasto por Categoría Programática"]),
          },
          {
            nombre: "IV. Adicional",
            documentos: docsT2("junio", "IV. Adicional", archivosAdicionalJunio, nombresAdicionalJunio),
          },
        ],
      },
    ] as MesLGCG[],
  },
  ldf: {
    id: "ldf",
    nombre: "Ley de Disciplina Financiera",
    siglas: "LDF",
    meses: [
      {
        id: "junio",
        nombre: "Junio 2026",
        documentos: docsT2("junio", "V. Disciplina Financiera", archivosLDFJunio, nombresLDFJunio),
      },
    ] as MesLDF[],
  },
};
