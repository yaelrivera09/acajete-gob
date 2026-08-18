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

export const estadosFinancierosT1_2026 = {
  periodo: "Primer Trimestre 2026",
  lgcg: {
    id: "lgcg",
    nombre: "Ley General de Contabilidad Gubernamental",
    siglas: "LGCG",
    meses: [
      { id: "enero", nombre: "Enero 2026", categorias: categoriasLGCG("enero", archivosContablesEneroFeb) },
      { id: "febrero", nombre: "Febrero 2026", categorias: categoriasLGCG("febrero", archivosContablesEneroFeb) },
      { id: "marzo", nombre: "Marzo 2026", categorias: categoriasLGCG("marzo", archivosContablesMarzo) },
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
        documentos: [
          { nombre: "Estado de Situación Financiera Detallado", href: `${BASE}/ldf/marzo/${e("1_ EstadoSituacionFinancieraDetallado.pdf")}` },
          { nombre: "Balance Presupuestario", href: `${BASE}/ldf/marzo/${e("2_ BalancePresupuestario.pdf")}` },
          { nombre: "Estado Analítico de Ingresos Detallado", href: `${BASE}/ldf/marzo/${e("3_ EstadoAnaliticoIngresosDetallado.pdf")}` },
          { nombre: "Presupuesto de Egresos Detallado: Objeto del Gasto", href: `${BASE}/ldf/marzo/${e("4_ Presupuesto de Egresos Detallado_Objeto del Gasto LDF.pdf")}` },
          { nombre: "Presupuesto de Egresos Detallado: Clasificación Administrativa", href: `${BASE}/ldf/marzo/${e("5_ Presupuesto de Egresos Detallado_Clasif Administrativa LDF.pdf")}` },
          { nombre: "Presupuesto de Egresos Detallado: Clasificación Funcional", href: `${BASE}/ldf/marzo/${e("6_ Presupuesto de Egresos Detallado_Clasif Funcional LDF.pdf")}` },
          { nombre: "Servicios Personales por Categoría", href: `${BASE}/ldf/marzo/${e("7_ Clasificación de Servicios Personales por Categoria LDF.pdf")}` },
          { nombre: "Informe Analítico de la Deuda y Otros Pasivos", href: `${BASE}/ldf/marzo/${e("8_Informe Analitico de la Deuda y Otros Pasivos-LDF.pdf")}` },
          { nombre: "Informe de Obligaciones Diferentes de Financiamiento", href: `${BASE}/ldf/marzo/${e("9_InformeAnaliticoDeObligacionesDiferentesDeFinanciamiento.pdf")}` },
          { nombre: "Reporte de Traspaso Entre Bancos", href: `${BASE}/ldf/marzo/${e("10_Reporte de Traspaso Entre Bancos.pdf")}` },
        ],
      },
    ] as MesLDF[],
  },
};

const BASE_T2 = "/docs/transparencia/2026/t2/junio/PDF";

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

function docsT2(carpeta: string, archivos: string[], nombres: string[]) {
  return archivos.map((archivo, i) => ({
    nombre: nombres[i],
    href: `${BASE_T2}/${e(carpeta)}/${e(archivo)}`,
  }));
}

export const estadosFinancierosT2_2026 = {
  periodo: "Segundo Trimestre 2026",
  lgcg: {
    id: "lgcg",
    nombre: "Ley General de Contabilidad Gubernamental",
    siglas: "LGCG",
    meses: [
      {
        id: "junio",
        nombre: "Junio 2026",
        categorias: [
          {
            nombre: "I. Contables",
            documentos: docsT2("I. Contables", archivosContablesMarzo, nombresContables),
          },
          {
            nombre: "II. Presupuestales",
            documentos: docsT2("II. Presupuestales", archivosPresupuestales, nombresPresupuestales),
          },
          {
            nombre: "III. Programático",
            documentos: docsT2("III. Programatico", ["Gasto Categoria Programatica.pdf"], ["Gasto por Categoría Programática"]),
          },
          {
            nombre: "IV. Adicional",
            documentos: docsT2("IV. Adicional", archivosAdicionalJunio, nombresAdicionalJunio),
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
        documentos: docsT2("V. Disciplina Financiera", archivosLDFJunio, nombresLDFJunio),
      },
    ] as MesLDF[],
  },
};
