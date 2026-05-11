"use client";

import { useState } from "react";
import { ChevronDown, FileSpreadsheet, Download } from "lucide-react";

const BASE = "/docs/transparencia/fracciones";

type Fraccion = { nombre: string; href: string };
type Dependencia = { nombre: string; slug: string; archivos: { nombre: string; archivo: string }[] };

const dependencias: Dependencia[] = [
  {
    nombre: "Catastro",
    slug: "catastro",
    archivos: [
      { nombre: "Art. 70 Fr. XL — Catastro", archivo: "40-LGT_Art_70_Fr_XL CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LII", archivo: "LTAIPVIL15LII CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIII", archivo: "LTAIPVIL15LIII CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVa", archivo: "LTAIPVIL15LIVa CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVb", archivo: "LTAIPVIL15LIVb CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E1", archivo: "LTAIPVIL16IIE1 CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E2", archivo: "LTAIPVIL16IIE2 CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E3", archivo: "LTAIPVIL16IIE3 CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E4", archivo: "LTAIPVIL16IIE4 CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E5", archivo: "LTAIPVIL16IIE5 CATASTRO.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II E6", archivo: "LTAIPVIL16IIE6 CATASTRO.xlsx" },
    ],
  },
  {
    nombre: "Contraloría Interna",
    slug: "contraloria",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. I", archivo: "LTAIPVIL15I CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IIa", archivo: "LTAIPVIL15IIa CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IIb", archivo: "LTAIPVIL15IIb CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. III", archivo: "LTAIPVIL15III CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LI", archivo: "LTAIPVIL15LI CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. V", archivo: "LTAIPVIL15V CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. VI", archivo: "LTAIPVIL15VI CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. VII", archivo: "LTAIPVIL15VII CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. Xa", archivo: "LTAIPVIL15Xa CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. Xb", archivo: "LTAIPVIL15Xb CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XI", archivo: "LTAIPVIL15XI CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIIa", archivo: "LTAIPVIL15XIIa CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIIb", archivo: "LTAIPVIL15XIIb CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIIc", archivo: "LTAIPVIL15XIIc CONTRALORIAÇ.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIV", archivo: "LTAIPVIL15XIV CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVII", archivo: "LTAIPVIL15XVII CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVIII", archivo: "LTAIPVIL15XVIII CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXIV", archivo: "LTAIPVIL15XXIV CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXV", archivo: "LTAIPVIL15XXV CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXX", archivo: "LTAIPVIL15XXX CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIII", archivo: "LTAIPVIL15XXXIII CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVa", archivo: "LTAIPVIL15XXXVa CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIa", archivo: "LTAIPVIL15XXXVIIa CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIb", archivo: "LTAIPVIL15XXXVIIb CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. IIA", archivo: "LTAIPVIL16IIA CONTRALORIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. IIB", archivo: "LTAIPVIL16IIB CONTRALORIA.xlsx" },
    ],
  },
  {
    nombre: "DIF Municipal",
    slug: "dif",
    archivos: [
      { nombre: "Art. 70 Fr. XXVIII", archivo: "28-LGT_Art_70_Fr_XXVIII DIF.xlsx" },
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL DIF.xlsx" },
      { nombre: "Art. 70 Fr. XLIV", archivo: "44-LGT_Art_70_Fr_XLIV DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-a", archivo: "LTAIPVIL15XVa DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-b", archivo: "LTAIPVIL15XVb DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XLI", archivo: "LTAIPVIL15XLI DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVa", archivo: "LTAIPVIL15XXXVa DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVb", archivo: "LTAIPVIL15XXXVb DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVc", archivo: "LTAIPVIL15XXXVc DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIa", archivo: "LTAIPVIL15XXXVIIIa DIF.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIb", archivo: "LTAIPVIL15XXXVIIIb DIF.xlsx" },
    ],
  },
  {
    nombre: "Fomento Agropecuario",
    slug: "agropecuario",
    archivos: [
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-a", archivo: "LTAIPVIL15XVa COMPLETO AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-b", archivo: "LTAIPVIL15XVb AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX (1) AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX (1) AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIa", archivo: "LTAIPVIL15XXXVIIa AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIb", archivo: "LTAIPVIL15XXXVIIb AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIa", archivo: "LTAIPVIL15XXXVIIIa AGROPECUARIO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIb", archivo: "LTAIPVIL15XXXVIIIb AGROPECUARIO.xlsx" },
    ],
  },
  {
    nombre: "Instituto Municipal de la Mujer (IMM)",
    slug: "imm",
    archivos: [
      { nombre: "Art. 70 Fr. XXVIII", archivo: "28-LGT_Art_70_Fr_XXVIII PRIMER TRIMESTRE IMM.xlsx" },
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL PRIMER TRIMESTRE IMM.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV IMM PRIMER TRIMESTRE .xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-a", archivo: "LTAIPVIL15XVa IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-b", archivo: "LTAIPVIL15XVb IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVa", archivo: "LTAIPVIL15XXXVa IMM PRIMER TRIMESTRE .xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVb", archivo: "LTAIPVIL15XXXVb IMM  PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVc", archivo: "LTAIPVIL15XXXVc IMM PRIMER TRIMESTRE_.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIa", archivo: "LTAIPVIL15XXXVIIa IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIb", archivo: "LTAIPVIL15XXXVIIb IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIa", archivo: "LTAIPVIL15XXXVIIIa IMM PRIMER TRIMESTRE.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIb", archivo: "LTAIPVIL15XXXVIIIb IMM PRIMER TRIMESTRE.xlsx" },
    ],
  },
  {
    nombre: "Dirección Jurídica",
    slug: "juridico",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. I", archivo: "LTAIPVIL15I JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. III", archivo: "LTAIPVIL15III JURIDIDCO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LI", archivo: "LTAIPVIL15LI JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIII", archivo: "LTAIPVIL15LIII JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVa", archivo: "LTAIPVIL15LIVa JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVb", archivo: "LTAIPVIL15LIVb JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVI-a", archivo: "LTAIPVIL15XVIa JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVI-b", archivo: "LTAIPVIL15XVIb JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXVII", archivo: "LTAIPVIL15XXVII JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXV-a", archivo: "LTAIPVIL15XXXVa JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXV-b", archivo: "LTAIPVIL15XXXVb JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXV-c", archivo: "LTAIPVIL15XXXVc JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVI", archivo: "LTAIPVIL15XXXVI JURIDICO.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XLVIII", archivo: "LTAIPVIL15XLVIII JURIDICO.xlsx" },
    ],
  },
  {
    nombre: "Obras Públicas",
    slug: "obras-publicas",
    archivos: [
      { nombre: "Art. 70 Fr. XXVIII", archivo: "28-LGT_Art_70_Fr_XXVIII OBRAS P.xlsx" },
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. V", archivo: "LTAIPVIL15V OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. VI", archivo: "LTAIPVIL15VI OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-a", archivo: "LTAIPVIL15XVa OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-b", archivo: "LTAIPVIL15XVb OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXVII", archivo: "LTAIPVIL15XXVII OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXII", archivo: "LTAIPVIL15XXXII OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIa", archivo: "LTAIPVIL15XXXVIIa OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIb", archivo: "LTAIPVIL15XXXVIIb OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIa", archivo: "LTAIPVIL15XXXVIIIa OBRAS P.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIb", archivo: "LTAIPVIL15XXXVIIIb OBRAS P.xlsx" },
    ],
  },
  {
    nombre: "Protección Civil",
    slug: "proteccion-civil",
    archivos: [
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL PROTECCION.xlsx" },
      { nombre: "Art. 70 Fr. XLV-b", archivo: "45b-LGT_Art_70_Fr_XLV PROTECCCION C.xlsx" },
      { nombre: "Art. 70 Fr. XLV-c", archivo: "45c-LGT_Art_70_Fr_XLV PROTECCION C.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. III", archivo: "LTAIPVIL15III PROTECCION C.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV PROTECCION C.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX PROTECCION C.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX PROTECCION C.xlsx" },
    ],
  },
  {
    nombre: "Oficialía Mayor",
    slug: "oficialía",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. IIa", archivo: "LTAIPVIL15IIa oficilia...xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IIb", archivo: "LTAIPVIL15IIb. oficialia..xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. III", archivo: "LTAIPVIL15III.. oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. Xa", archivo: "LTAIPVIL15Xa oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. Xb", archivo: "LTAIPVIL15Xb oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIV", archivo: "LTAIPVIL15XIV oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVI-a", archivo: "LTAIPVIL15XVIa oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVI-b", archivo: "LTAIPVIL15XVIb oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XVIII", archivo: "LTAIPVIL15XVIII oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX oficialia.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LI", archivo: "LTAIPVIL15LI oficialia.xlsx" },
    ],
  },
  {
    nombre: "Registro Civil",
    slug: "registro-civil",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV Reg. civil.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX — 1er Trim.", archivo: "LTAIPVIL15XIX 1er trim. Reg. Civil.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX reg. civil.xlsx" },
    ],
  },
  {
    nombre: "Regiduría",
    slug: "regiduria",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. XV-a", archivo: "LTAIPVIL15XVa REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XV-b", archivo: "LTAIPVIL15XVb REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXVII", archivo: "LTAIPVIL15XXVII REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVa", archivo: "LTAIPVIL15LIVa regiduria.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVb", archivo: "LTAIPVIL15LIVb REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIa", archivo: "LTAIPVIL15XXXVIIIa REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXVIIIb", archivo: "LTAIPVIL15XXXVIIIb REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II-K", archivo: "LTAIPVIL16IIK REGIDURIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II-L", archivo: "LTAIPVIL16IIL REGIDURIA.xlsx" },
    ],
  },
  {
    nombre: "Sindicatura",
    slug: "sindicatura",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVa", archivo: "LTAIPVIL15XXXIVa sindicatura.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVb", archivo: "LTAIPVIL15XXXIVb SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVc", archivo: "LTAIPVIL15XXXIVc SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVd", archivo: "LTAIPVIL15XXXIVd SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVe", archivo: "LTAIPVIL15XXXIVe SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVf", archivo: "LTAIPVIL15XXXIVf SINDICATURA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIVg", archivo: "LTAIPVIL15XXXIVg SINDICATURA.xlsx" },
    ],
  },
  {
    nombre: "Transparencia",
    slug: "transparencia",
    archivos: [
      { nombre: "LTAIPVIL Art. 15 Fr. XIII", archivo: "LTAIPVIL15XIII TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LII", archivo: "LTAIPVIL15LII TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIII", archivo: "LTAIPVIL15LIII TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVa", archivo: "LTAIPVIL15LIVa (1) TRASNSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVb", archivo: "LTAIPVIL15LIVb TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. LIVc", archivo: "LTAIPVIL15LIVc TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XLVIa", archivo: "LTAIPVIL15XLVIa TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XLVIb", archivo: "LTAIPVIL15XLVIb TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIXa", archivo: "LTAIPVIL15XXXIXa TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIXb", archivo: "LTAIPVIL15XXXIXb TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIXc", archivo: "LTAIPVIL15XXXIXc TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIXd1", archivo: "LTAIPVIL15XXXIXd1 TRANSPARENCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XXXIXd2", archivo: "LTAIPVIL15XXXIXd2 TRANSPARENCIA.xlsx" },
    ],
  },
  {
    nombre: "Comandancia",
    slug: "comandancia",
    archivos: [
      { nombre: "Art. 70 Fr. XL", archivo: "40-LGT_Art_70_Fr_XL COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. IV", archivo: "LTAIPVIL15IV COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XIX", archivo: "LTAIPVIL15XIX COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 15 Fr. XX", archivo: "LTAIPVIL15XX COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-A", archivo: "LTAIPVIL16IIIA COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-B1", archivo: "LTAIPVIL16IIIB1 COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-B2", archivo: "LTAIPVIL16IIIB2 COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-C", archivo: "LTAIPVIL16IIIC COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-D", archivo: "LTAIPVIL16IIID COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-E", archivo: "LTAIPVIL16IIIE COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-F", archivo: "LTAIPVIL16IIIF COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-G", archivo: "LTAIPVIL16IIIG COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-H", archivo: "LTAIPVIL16IIIH COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-I", archivo: "LTAIPVIL16IIIi COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. III-J", archivo: "LTAIPVIL16IIIJ COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II-i1", archivo: "LTAIPVIL16IIi1 COMANDANCIA.xlsx" },
      { nombre: "LTAIPVIL Art. 16 Fr. II-i2", archivo: "LTAIPVIL16IIi2 COMANDANCIA.xlsx" },
    ],
  },
];

export default function FraccionesLey875() {
  const [abierta, setAbierta] = useState<string | null>(null);

  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-0.5 bg-accent-500" />
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-brand-900 font-bold">
            Información de Oficio — Ley 875 / LTAIPVIL
          </h2>
        </div>
        <p className="text-sm text-brand-600 mb-10 pl-[52px]">
          Fracciones publicadas por cada dependencia municipal conforme a los artículos 15 y 16 de la Ley de Transparencia y Acceso a la Información Pública para el Estado de Veracruz. Primer Trimestre 2026.
        </p>

        <div className="space-y-3">
          {dependencias.map((dep) => {
            const isOpen = abierta === dep.slug;
            return (
              <div key={dep.slug} className="border border-brand-200 rounded-sm overflow-hidden">
                <button
                  onClick={() => setAbierta(isOpen ? null : dep.slug)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-brand-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet size={18} className="text-accent-500 flex-shrink-0" />
                    <span className="font-[family-name:var(--font-playfair)] font-semibold text-brand-900">
                      {dep.nombre}
                    </span>
                    <span className="text-xs text-brand-500 hidden sm:inline">
                      ({dep.archivos.length} fracciones)
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-accent-600 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 bg-brand-50/40 border-t border-brand-100">
                    <ul className="space-y-1 pt-3">
                      {dep.archivos.map((f) => {
                        const href = `${BASE}/${dep.slug}/${encodeURIComponent(f.archivo)}`;
                        return (
                          <li key={f.archivo}>
                            <a
                              href={href}
                              download
                              className="group flex items-center gap-3 px-3 py-2.5 rounded-sm hover:bg-white hover:shadow-sm transition-all"
                            >
                              <FileSpreadsheet size={15} className="text-green-600 group-hover:text-green-700 flex-shrink-0" />
                              <span className="text-sm text-brand-800 group-hover:text-brand-900 flex-1 leading-snug">
                                {f.nombre}
                              </span>
                              <Download size={13} className="text-brand-300 group-hover:text-accent-500 flex-shrink-0 transition-colors" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
