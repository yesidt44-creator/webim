"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────────────── */

type BearingData = {
  d: number; D: number; B: number; Cr: number; C0r: number;
  type: "DGBB" | "ACBB" | "SRB" | "CRB" | "TRB"; series: string; rpm: number;
  skf: string; nsk: string; fag: string; ntn: string; timken: string; koyo: string; nachi: string;
};

const BEARING_DB: Record<string, BearingData> = {
  "6200": { d:10,D:30,B:9,Cr:5.07,C0r:2.36,type:"DGBB",series:"62",rpm:32000,skf:"6200",nsk:"6200",fag:"6200",ntn:"6200",timken:"6200",koyo:"6200",nachi:"6200" },
  "6201": { d:12,D:32,B:10,Cr:6.89,C0r:3.10,type:"DGBB",series:"62",rpm:28000,skf:"6201",nsk:"6201",fag:"6201",ntn:"6201",timken:"6201",koyo:"6201",nachi:"6201" },
  "6202": { d:15,D:35,B:11,Cr:7.65,C0r:3.60,type:"DGBB",series:"62",rpm:26000,skf:"6202",nsk:"6202",fag:"6202",ntn:"6202",timken:"6202",koyo:"6202",nachi:"6202" },
  "6203": { d:17,D:40,B:12,Cr:9.56,C0r:4.75,type:"DGBB",series:"62",rpm:22000,skf:"6203",nsk:"6203",fag:"6203",ntn:"6203",timken:"6203",koyo:"6203",nachi:"6203" },
  "6204": { d:20,D:47,B:14,Cr:12.7,C0r:6.55,type:"DGBB",series:"62",rpm:18000,skf:"6204",nsk:"6204",fag:"6204",ntn:"6204",timken:"6204",koyo:"6204",nachi:"6204" },
  "6205": { d:25,D:52,B:15,Cr:14.0,C0r:7.80,type:"DGBB",series:"62",rpm:16000,skf:"6205",nsk:"6205",fag:"6205",ntn:"6205",timken:"6205",koyo:"6205",nachi:"6205" },
  "6206": { d:30,D:62,B:16,Cr:19.5,C0r:11.2,type:"DGBB",series:"62",rpm:13000,skf:"6206",nsk:"6206",fag:"6206",ntn:"6206",timken:"6206",koyo:"6206",nachi:"6206" },
  "6207": { d:35,D:72,B:17,Cr:25.5,C0r:15.3,type:"DGBB",series:"62",rpm:11000,skf:"6207",nsk:"6207",fag:"6207",ntn:"6207",timken:"6207",koyo:"6207",nachi:"6207" },
  "6208": { d:40,D:80,B:18,Cr:29.1,C0r:17.8,type:"DGBB",series:"62",rpm:10000,skf:"6208",nsk:"6208",fag:"6208",ntn:"6208",timken:"6208",koyo:"6208",nachi:"6208" },
  "6209": { d:45,D:85,B:19,Cr:32.5,C0r:21.2,type:"DGBB",series:"62",rpm:9000,skf:"6209",nsk:"6209",fag:"6209",ntn:"6209",timken:"6209",koyo:"6209",nachi:"6209" },
  "6210": { d:50,D:90,B:20,Cr:35.1,C0r:23.2,type:"DGBB",series:"62",rpm:8500,skf:"6210",nsk:"6210",fag:"6210",ntn:"6210",timken:"6210",koyo:"6210",nachi:"6210" },
  "6211": { d:55,D:100,B:21,Cr:43.6,C0r:29.0,type:"DGBB",series:"62",rpm:7500,skf:"6211",nsk:"6211",fag:"6211",ntn:"6211",timken:"6211",koyo:"6211",nachi:"6211" },
  "6212": { d:60,D:110,B:22,Cr:52.0,C0r:36.0,type:"DGBB",series:"62",rpm:6700,skf:"6212",nsk:"6212",fag:"6212",ntn:"6212",timken:"6212",koyo:"6212",nachi:"6212" },
  "6300": { d:10,D:35,B:11,Cr:8.06,C0r:3.40,type:"DGBB",series:"63",rpm:28000,skf:"6300",nsk:"6300",fag:"6300",ntn:"6300",timken:"6300",koyo:"6300",nachi:"6300" },
  "6301": { d:12,D:37,B:12,Cr:9.75,C0r:4.15,type:"DGBB",series:"63",rpm:24000,skf:"6301",nsk:"6301",fag:"6301",ntn:"6301",timken:"6301",koyo:"6301",nachi:"6301" },
  "6302": { d:15,D:42,B:13,Cr:11.4,C0r:5.00,type:"DGBB",series:"63",rpm:20000,skf:"6302",nsk:"6302",fag:"6302",ntn:"6302",timken:"6302",koyo:"6302",nachi:"6302" },
  "6303": { d:17,D:47,B:14,Cr:13.5,C0r:6.55,type:"DGBB",series:"63",rpm:18000,skf:"6303",nsk:"6303",fag:"6303",ntn:"6303",timken:"6303",koyo:"6303",nachi:"6303" },
  "6304": { d:20,D:52,B:15,Cr:15.9,C0r:7.80,type:"DGBB",series:"63",rpm:15000,skf:"6304",nsk:"6304",fag:"6304",ntn:"6304",timken:"6304",koyo:"6304",nachi:"6304" },
  "6305": { d:25,D:62,B:17,Cr:22.5,C0r:11.4,type:"DGBB",series:"63",rpm:12000,skf:"6305",nsk:"6305",fag:"6305",ntn:"6305",timken:"6305",koyo:"6305",nachi:"6305" },
  "6306": { d:30,D:72,B:19,Cr:28.1,C0r:14.6,type:"DGBB",series:"63",rpm:10000,skf:"6306",nsk:"6306",fag:"6306",ntn:"6306",timken:"6306",koyo:"6306",nachi:"6306" },
  "6307": { d:35,D:80,B:21,Cr:33.2,C0r:18.0,type:"DGBB",series:"63",rpm:9000,skf:"6307",nsk:"6307",fag:"6307",ntn:"6307",timken:"6307",koyo:"6307",nachi:"6307" },
  "6308": { d:40,D:90,B:23,Cr:41.0,C0r:22.4,type:"DGBB",series:"63",rpm:8000,skf:"6308",nsk:"6308",fag:"6308",ntn:"6308",timken:"6308",koyo:"6308",nachi:"6308" },
  "6309": { d:45,D:100,B:25,Cr:52.7,C0r:30.0,type:"DGBB",series:"63",rpm:7000,skf:"6309",nsk:"6309",fag:"6309",ntn:"6309",timken:"6309",koyo:"6309",nachi:"6309" },
  "6310": { d:50,D:110,B:27,Cr:61.8,C0r:36.0,type:"DGBB",series:"63",rpm:6300,skf:"6310",nsk:"6310",fag:"6310",ntn:"6310",timken:"6310",koyo:"6310",nachi:"6310" },
  "6311": { d:55,D:120,B:29,Cr:71.5,C0r:43.0,type:"DGBB",series:"63",rpm:5600,skf:"6311",nsk:"6311",fag:"6311",ntn:"6311",timken:"6311",koyo:"6311",nachi:"6311" },
  "6312": { d:60,D:130,B:31,Cr:81.9,C0r:52.0,type:"DGBB",series:"63",rpm:5000,skf:"6312",nsk:"6312",fag:"6312",ntn:"6312",timken:"6312",koyo:"6312",nachi:"6312" },
  "7205": { d:25,D:52,B:15,Cr:15.9,C0r:10.2,type:"ACBB",series:"72",rpm:18000,skf:"7205 BEP",nsk:"7205A",fag:"7205-B-TVP",ntn:"7205",timken:"7205WN",koyo:"7205C",nachi:"7205" },
  "7206": { d:30,D:62,B:16,Cr:22.1,C0r:14.6,type:"ACBB",series:"72",rpm:15000,skf:"7206 BEP",nsk:"7206A",fag:"7206-B-TVP",ntn:"7206",timken:"7206WN",koyo:"7206C",nachi:"7206" },
  "7207": { d:35,D:72,B:17,Cr:29.1,C0r:19.9,type:"ACBB",series:"72",rpm:12000,skf:"7207 BEP",nsk:"7207A",fag:"7207-B-TVP",ntn:"7207",timken:"7207WN",koyo:"7207C",nachi:"7207" },
  "7208": { d:40,D:80,B:18,Cr:33.2,C0r:24.0,type:"ACBB",series:"72",rpm:10000,skf:"7208 BEP",nsk:"7208A",fag:"7208-B-TVP",ntn:"7208",timken:"7208WN",koyo:"7208C",nachi:"7208" },
  "22205": { d:25,D:52,B:18,Cr:36.4,C0r:33.5,type:"SRB",series:"222",rpm:14000,skf:"22205 EK",nsk:"22205EAKE4",fag:"22205-E1-K",ntn:"22205EAK",timken:"22205KEJW33",koyo:"22205RHRK",nachi:"22205EXK" },
  "22206": { d:30,D:62,B:20,Cr:52.0,C0r:47.5,type:"SRB",series:"222",rpm:11000,skf:"22206 EK",nsk:"22206EAKE4",fag:"22206-E1-K",ntn:"22206EAK",timken:"22206KEJW33",koyo:"22206RHRK",nachi:"22206EXK" },
  "22207": { d:35,D:72,B:23,Cr:72.1,C0r:67.0,type:"SRB",series:"222",rpm:9500,skf:"22207 EK",nsk:"22207EAKE4",fag:"22207-E1-K",ntn:"22207EAK",timken:"22207KEJW33",koyo:"22207RHRK",nachi:"22207EXK" },
  "22208": { d:40,D:80,B:23,Cr:79.2,C0r:76.5,type:"SRB",series:"222",rpm:8500,skf:"22208 EK",nsk:"22208EAKE4",fag:"22208-E1-K",ntn:"22208EAK",timken:"22208KEJW33",koyo:"22208RHRK",nachi:"22208EXK" },
  "NU205": { d:25,D:52,B:15,Cr:21.6,C0r:16.6,type:"CRB",series:"NU2",rpm:16000,skf:"NU 205 ECP",nsk:"NU205ET2X",fag:"NU205-E-TVP2",ntn:"NU205ET2X",timken:"NU205EMA",koyo:"NU205",nachi:"NU205" },
  "NU206": { d:30,D:62,B:16,Cr:30.7,C0r:24.0,type:"CRB",series:"NU2",rpm:13000,skf:"NU 206 ECP",nsk:"NU206ET2X",fag:"NU206-E-TVP2",ntn:"NU206ET2X",timken:"NU206EMA",koyo:"NU206",nachi:"NU206" },
  "NU207": { d:35,D:72,B:17,Cr:39.0,C0r:31.0,type:"CRB",series:"NU2",rpm:11000,skf:"NU 207 ECP",nsk:"NU207ET2X",fag:"NU207-E-TVP2",ntn:"NU207ET2X",timken:"NU207EMA",koyo:"NU207",nachi:"NU207" },
  "NU208": { d:40,D:80,B:18,Cr:44.9,C0r:37.5,type:"CRB",series:"NU2",rpm:10000,skf:"NU 208 ECP",nsk:"NU208ET2X",fag:"NU208-E-TVP2",ntn:"NU208ET2X",timken:"NU208EMA",koyo:"NU208",nachi:"NU208" },
  "32205": { d:25,D:52,B:19.25,Cr:35.8,C0r:29.0,type:"TRB",series:"322",rpm:12000,skf:"32205 BJ2/Q",nsk:"HR32205J",fag:"32205-A",ntn:"4T-32205",timken:"32205",koyo:"32205JR",nachi:"32205" },
  "32206": { d:30,D:62,B:21.25,Cr:49.4,C0r:42.0,type:"TRB",series:"322",rpm:10000,skf:"32206 BJ2/Q",nsk:"HR32206J",fag:"32206-A",ntn:"4T-32206",timken:"32206",koyo:"32206JR",nachi:"32206" },
  "32207": { d:35,D:72,B:24.25,Cr:72.6,C0r:60.0,type:"TRB",series:"322",rpm:8500,skf:"32207 BJ2/Q",nsk:"HR32207J",fag:"32207-A",ntn:"4T-32207",timken:"32207",koyo:"32207JR",nachi:"32207" },
  "32208": { d:40,D:80,B:24.75,Cr:80.9,C0r:72.5,type:"TRB",series:"322",rpm:7500,skf:"32208 BJ2/Q",nsk:"HR32208J",fag:"32208-A",ntn:"4T-32208",timken:"32208",koyo:"32208JR",nachi:"32208" },
};

const TYPE_LABEL: Record<string, string> = {
  DGBB: "Bolas ranura profunda",
  ACBB: "Contacto angular",
  SRB: "Rodillos esféricos",
  CRB: "Rodillos cilíndricos",
  TRB: "Rodillos cónicos",
};

const SUFFIXES: Record<string, { desc: string; detail: string }> = {
  "2RS": { desc:"Sello de caucho en ambos lados", detail:"Doble sello de contacto de caucho (nitrilo NBR). Protege contra contaminantes y retiene grasa. Genera ligeramente más fricción que ZZ." },
  "2Z":  { desc:"Escudo metálico en ambos lados", detail:"Deflectores metálicos sin contacto en ambos lados. Menor fricción que sellos pero menor protección. También llamado ZZ." },
  "ZZ":  { desc:"Escudo metálico ambos lados", detail:"Equivalente a 2Z. Deflectores metálicos sin contacto. Común en motores eléctricos de baja contaminación." },
  "C3":  { desc:"Juego radial mayor que Normal", detail:"Juego interno C3: mayor que el Normal (CN). Se usa cuando hay ajustes de interferencia en el eje, temperaturas elevadas de operación, o prevención de precarga térmica." },
  "C4":  { desc:"Juego radial mayor que C3", detail:"Juego interno C4: mayor que C3. Para aplicaciones con grandes diferencias de temperatura entre pistas, como hornos y secadores industriales." },
  "C2":  { desc:"Juego radial menor que Normal", detail:"Juego interno C2: menor que el Normal. Se usa en aplicaciones de precisión, baja vibración y cargas ligeras con ajustes libres." },
  "E":   { desc:"Diseño interno reforzado", detail:"Capacidad de carga incrementada. Mayor número o tamaño de elementos rodantes. Jaula optimizada para mayor llenado." },
  "K":   { desc:"Agujero cónico 1:12", detail:"Agujero interior cónico (taper 1:12). Se monta con manguito de fijación (H) o de desmontaje (OH). Común en rodamientos autoalineables." },
  "M":   { desc:"Jaula mecanizada de latón", detail:"Jaula maciza mecanizada de latón. Alta resistencia a temperatura y mayor estabilidad a altas velocidades que jaulas de acero estampado." },
  "TN9": { desc:"Jaula de poliamida", detail:"Jaula moldeada por inyección de poliamida 6,6 reforzada con fibra de vidrio. Ligera, bajo coeficiente de fricción, buena para altas velocidades." },
  "W33": { desc:"Ranura y agujeros de lubricación", detail:"Ranura de lubricación y agujeros de provisión de grasa/aceite en el anillo exterior. Permite relubricación en servicio." },
  "NR":  { desc:"Ranura para anillo de retención", detail:"Ranura en la superficie exterior del anillo exterior para anillo de retención (snap ring). Facilita fijación axial." },
  "P6":  { desc:"Tolerancia ISO clase 6", detail:"Precisión mayor que Normal (P0). Para husillos de máquinas-herramienta y aplicaciones de media precisión." },
  "P5":  { desc:"Tolerancia ISO clase 5", detail:"Alta precisión. Para husillos de rectificadoras y aplicaciones de alta velocidad y baja vibración." },
};

type FailureMode = {
  id: string; name: string; iso: string; category: string; visual: string;
  causes: string[]; indicators: string[]; action: string;
  severity: "critica" | "alta" | "media";
};

const FAILURE_MODES: FailureMode[] = [
  { id:"fatigue_sub",name:"Fatiga subsuperficial",iso:"5.1.1",category:"Fatiga por contacto rodante",visual:"Descascaramiento (spalling) con bordes pronunciados y aspecto de cráter. La superficie metálica se desprende en forma de escamas debajo de la pista de rodadura.",causes:["Carga excesiva prolongada","Fin de vida útil calculada (L10)","Juego interno inadecuado","Desalineación del eje"],indicators:["Craterización en la pista de rodadura","Material desprendido con apariencia cristalina","Patrón de carga bien definido","Ruido y vibración crecientes antes de la falla"],action:"Verificar cálculo de vida útil L10, revisar carga aplicada vs capacidad nominal Cr. Considerar rodamiento de mayor capacidad.",severity:"alta" },
  { id:"fatigue_surface",name:"Fatiga superficial",iso:"5.1.2",category:"Fatiga por contacto rodante",visual:"Micropicaduras (micropitting) en la superficie. Aspecto opaco y rugoso en las pistas.",causes:["Contaminación por partículas duras","Lubricación insuficiente","Deslizamiento excesivo","Acabado superficial deficiente"],indicators:["Aspecto mate/opaco en la pista","Pequeños pits visibles con lupa 10x","Vibración progresiva","Temperatura ligeramente elevada"],action:"Mejorar filtración del lubricante, verificar viscosidad del aceite y condiciones kappa.",severity:"media" },
  { id:"abrasive_wear",name:"Desgaste abrasivo",iso:"5.2.1",category:"Desgaste",visual:"Superficies pulidas o con rayaduras finas paralelas a la dirección de rodadura. Pérdida de material uniforme.",causes:["Contaminación por polvo o partículas","Sellado insuficiente","Lubricante contaminado","Ambiente agresivo"],indicators:["Pistas con aspecto espejo","Juego radial excesivo medible","Rayaduras finas paralelas","Lubricante oscurecido con partículas metálicas"],action:"Mejorar sellado, filtrar o cambiar lubricante, verificar integridad de sellos/escudos.",severity:"media" },
  { id:"adhesive_wear",name:"Desgaste adhesivo (smearing)",iso:"5.2.2",category:"Desgaste",visual:"Transferencia de material entre superficies. Marcas de arrastre con aspecto de soldadura fría.",causes:["Deslizamiento entre elemento rodante y pista","Aceleración/desaceleración rápida","Carga insuficiente para el tamaño del rodamiento","Viscosidad del lubricante muy baja"],indicators:["Marcas brillantes de arrastre","Decoloración térmica localizada (dorada/azul)","Material transferido entre superficies","Olor a quemado en lubricante"],action:"Verificar precarga adecuada, revisar condiciones de arranque, considerar lubricante de mayor viscosidad o aditivos EP.",severity:"alta" },
  { id:"moisture_corrosion",name:"Corrosión por humedad",iso:"5.3.1",category:"Corrosión",visual:"Manchas de óxido distribuidas aleatoriamente. En etapas avanzadas, picaduras profundas en las pistas.",causes:["Almacenamiento inadecuado","Ingreso de agua al rodamiento","Condensación por cambios de temperatura","Manipulación con manos húmedas"],indicators:["Manchas naranjas/marrón en pistas y elementos","Picaduras superficiales","Grasa con aspecto lechoso","Ruido áspero durante giro manual"],action:"Mejorar almacenamiento (ambiente seco), usar sellos mejorados, verificar ingreso de agua al equipo.",severity:"media" },
  { id:"fretting_corrosion",name:"Corrosión por contacto (fretting)",iso:"5.3.2",category:"Corrosión",visual:"Polvo rojizo-marrón (óxido de hierro) en las superficies de contacto entre anillos y asiento del eje/alojamiento.",causes:["Ajuste demasiado flojo en eje o alojamiento","Vibración sin rotación","Carga oscilante sin rotación completa","Micro-movimiento entre anillo y asiento"],indicators:["Polvo rojizo en interfaz anillo-eje","Marcas oscuras en el bore del anillo interior","Ovalización del anillo","Aflojamiento progresivo del ajuste"],action:"Revisar tolerancias de ajuste eje/alojamiento según ISO 286. Usar adhesivo retenedor si es necesario.",severity:"alta" },
  { id:"electrical_erosion",name:"Erosión eléctrica (fluting)",iso:"5.4",category:"Erosión eléctrica",visual:"Estrías paralelas (fluting) en las pistas de rodadura, equidistantes y perpendiculares a la dirección de rodadura.",causes:["Corrientes parásitas de variadores de frecuencia (VFD)","Corriente de fuga a través del rodamiento","Soldadura eléctrica sin conexión a tierra adecuada","Generación de carga estática"],indicators:["Estrías/acanaladuras equidistantes en pistas","Ruido similar a zumbido eléctrico","Cráters microscópicos visibles con lupa","Lubricante ennegrecido con partículas de cráter"],action:"Instalar rodamientos aislados (cerámicos o con recubrimiento), usar escobillas de tierra en el eje, verificar puesta a tierra del motor y VFD.",severity:"alta" },
  { id:"brinelling",name:"Deformación plástica (brinelling)",iso:"5.5",category:"Deformación plástica",visual:"Indentaciones permanentes en las pistas correspondientes al espaciado de los elementos rodantes.",causes:["Impacto o golpe durante montaje","Sobrecarga estática","Vibración durante transporte sin rotación","Uso de martillo para montar"],indicators:["Indentaciones equidistantes en la pista","Vibración periódica durante rotación","Ruido rítmico ('click-click')","Marcas corresponden al pitch de los rodillos/bolas"],action:"Usar herramientas de montaje adecuadas (prensa hidráulica, calentador por inducción). No golpear.",severity:"alta" },
  { id:"cracking",name:"Agrietamiento y fractura",iso:"5.6",category:"Fractura",visual:"Grietas visibles en los anillos o elementos rodantes. Puede progresar hasta fractura completa del anillo.",causes:["Ajuste de interferencia excesivo","Montaje forzado (golpe directo)","Fatiga por flexión del anillo","Tratamiento térmico inadecuado (rodamiento falsificado)"],indicators:["Grietas visibles a simple vista","Fragmentos metálicos sueltos","Fractura parcial o completa del anillo","Falla catastrófica súbita"],action:"Verificar tolerancias de montaje, usar herramientas correctas, sospechar falsificación si el rodamiento es nuevo.",severity:"critica" },
];

const BRAND_DATA = [
  { name:"SKF",country:"Suecia",founded:1907,specialty:"Líder global, amplia gama",strength:"Innovación y precisión",hq:"Gotemburgo",stars:5,notes:"Mayor fabricante mundial. Serie Explorer con vida útil extendida. Fuerte en I+D y monitoreo de condición." },
  { name:"FAG/Schaeffler",country:"Alemania",founded:1883,specialty:"Alta precisión, máquinas-herramienta",strength:"Ingeniería de precisión",hq:"Schweinfurt",stars:5,notes:"Pionero en bolas de acero de precisión. Parte del Grupo Schaeffler (con INA). Excelente en rodamientos para turbinas eólicas y automoción." },
  { name:"NSK",country:"Japón",founded:1916,specialty:"Tecnología avanzada, aceros especiales",strength:"Aceros de ultra-larga vida",hq:"Tokio",stars:5,notes:"Segundo mayor fabricante mundial. Aceros Z-steel, EP-steel para vida extendida. Fuerte en automoción y máquinas-herramienta." },
  { name:"NTN",country:"Japón",founded:1918,specialty:"Automotriz, costo-efectivo",strength:"Durabilidad y disponibilidad",hq:"Osaka",stars:4,notes:"Premio Deming por control de calidad (1954). Buena relación calidad/precio. Serie ULTAGE para aplicaciones severas." },
  { name:"Timken",country:"EE.UU.",founded:1899,specialty:"Rodamientos cónicos y cargas pesadas",strength:"Metalurgia y aplicaciones pesadas",hq:"Canton, Ohio",stars:5,notes:"Autoridad mundial en rodamientos cónicos. Excelente para minería, ferrocarril y construcción. Conocimiento metalúrgico superior." },
  { name:"KOYO/JTEKT",country:"Japón",founded:1921,specialty:"Automotriz, costo competitivo",strength:"Economía y confiabilidad",hq:"Osaka",stars:4,notes:"Parte del grupo JTEKT (Toyota). Buen rendimiento en aplicaciones automotrices. Precios competitivos." },
  { name:"NACHI",country:"Japón",founded:1928,specialty:"Herramientas y rodamientos",strength:"Sellos de alta calidad",hq:"Toyama",stars:4,notes:"Sellos RS1 reconocidos por su calidad. Buena opción para aplicaciones con esfuerzo mecánico significativo." },
];

const NOMENCLATURE_DECODER = {
  type: { "1":"Rodamiento de bolas autoalineable","2":"Rodamiento de rodillos esféricos","3":"Rodamiento de rodillos cónicos","4":"Rodamiento de bolas de doble hilera c. angular","5":"Rodamiento axial de bolas","6":"Rodamiento de bolas de ranura profunda (DGBB)","7":"Rodamiento de bolas de contacto angular","N":"Rodamiento de rodillos cilíndricos (NU, NJ…)","QJ":"Rodamiento de bolas de cuatro puntos de contacto" },
  widthSeries: { "0":"Anchura normal","1":"Más ancho","2":"Ancho","3":"Extra ancho","8":"Ultra estrecho","9":"Muy estrecho" },
  diameterSeries: { "0":"Extra ligera","1":"Muy ligera","2":"Ligera","3":"Media","4":"Pesada","7":"Super ligera","8":"Ultra ligera","9":"Híper ligera" },
};

/* ─── SVG DIAGRAM ────────────────────────────────────────────────────────── */

function BearingCrossSection({ d, D, B, type }: { d: number; D: number; B: number; type: string }) {
  const sc = 2.0;
  const cx = 160; const cy = 130;
  const ri = (d / 2) * sc;
  const ro = (D / 2) * sc;
  const bw = B * sc;
  const ballR = ((ro - ri) / 2) * 0.52;
  const angles = [0,45,90,135,180,225,270,315];
  const rollerAngles = [0,30,60,90,120,150,180,210,240,270,300,330];
  return (
    <svg viewBox="0 0 320 260" width="100%" style={{ maxWidth: 300 }} aria-label={`Sección transversal rodamiento ${d}x${D}x${B}mm`}>
      <rect x={cx-bw/2} y={cy-ro} width={bw} height={ro-ri} rx={2} fill="#1e293b" stroke="#334155" strokeWidth={1} opacity={0.5} />
      <rect x={cx-bw/2} y={cy+ri} width={bw} height={ro-ri} rx={2} fill="#1e293b" stroke="#334155" strokeWidth={1} opacity={0.5} />
      <circle cx={cx} cy={cy} r={ro} fill="none" stroke="#94a3b8" strokeWidth={2.5} />
      <circle cx={cx} cy={cy} r={ri} fill="none" stroke="#94a3b8" strokeWidth={2.5} />
      {type==="DGBB" && angles.map((angle, i) => {
        const r=(ri+ro)/2; const rad=(angle*Math.PI)/180;
        return <circle key={i} cx={cx+r*Math.cos(rad)} cy={cy+r*Math.sin(rad)} r={ballR} fill="#93c5fd" opacity={0.75} />;
      })}
      {type==="CRB" && rollerAngles.map((angle, i) => {
        const r=(ri+ro)/2; const rad=(angle*Math.PI)/180;
        return <ellipse key={i} cx={cx+r*Math.cos(rad)} cy={cy+r*Math.sin(rad)} rx={ballR*0.45} ry={ballR*1.2} transform={`rotate(${angle},${cx+r*Math.cos(rad)},${cy+r*Math.sin(rad)})`} fill="#fcd34d" opacity={0.75} />;
      })}
      {(type==="SRB"||type==="TRB") && rollerAngles.map((angle, i) => {
        const r=(ri+ro)/2; const rad=(angle*Math.PI)/180;
        return <ellipse key={i} cx={cx+r*Math.cos(rad)} cy={cy+r*Math.sin(rad)} rx={ballR*0.4} ry={ballR*1.1} transform={`rotate(${angle},${cx+r*Math.cos(rad)},${cy+r*Math.sin(rad)})`} fill="#86efac" opacity={0.75} />;
      })}
      {type==="ACBB" && angles.map((angle, i) => {
        const r=(ri+ro)/2; const rad=(angle*Math.PI)/180;
        return <circle key={i} cx={cx+r*Math.cos(rad)} cy={cy+r*Math.sin(rad)} r={ballR*0.9} fill="#c4b5fd" opacity={0.75} />;
      })}
      <text x={cx+ro+6} y={cy-ro+12} fill="#64748b" fontSize={9} fontFamily="monospace">D={D}mm</text>
      <text x={cx+ri+4} y={cy+4} fill="#64748b" fontSize={9} fontFamily="monospace">d={d}mm</text>
      <text x={cx-bw/2-4} y={cy+ro+18} fill="#64748b" fontSize={9} fontFamily="monospace" textAnchor="end">B={B}mm</text>
    </svg>
  );
}

/* ─── CALIPER DIAGRAM ───────────────────────────────────────────────────── */

function CaliperDiagram() {
  const [val, setVal] = useState(25);
  const mainMM = Math.floor(val);
  const vernierDiv = Math.round((val - mainMM) * 50);
  const vernierMM = (vernierDiv * 0.02).toFixed(2);
  const total = (mainMM + parseFloat(vernierMM)).toFixed(2);
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="mb-3 text-xs font-bold tracking-widest text-slate-500 uppercase">Simulador de calibrador Vernier</p>
      <svg viewBox="0 0 600 160" width="100%" style={{ maxWidth: 600 }} aria-label="Calibrador vernier interactivo">
        <rect x={10} y={20} width={580} height={40} rx={3} fill="#0f172a" stroke="#334155" strokeWidth={1} />
        {Array.from({length:61},(_,i)=>{
          const x=30+i*9; const h=i%10===0?25:i%5===0?18:10;
          return <g key={i}><line x1={x} y1={20} x2={x} y2={20+h} stroke="#e2e8f0" strokeWidth={i%10===0?1:0.5}/>{i%10===0&&<text x={x} y={56} textAnchor="middle" fontSize={9} fill="#94a3b8">{i}</text>}</g>;
        })}
        <g transform={`translate(${(val)*9},0)`}>
          <rect x={30} y={62} width={100} height={32} rx={2} fill="#1e3a5f" stroke="#3b82f6" strokeWidth={1} opacity={0.8}/>
          {Array.from({length:51},(_,i)=>{
            const x=30+i*1.96; const h=i%10===0?18:i%5===0?12:6;
            return <line key={i} x1={x} y1={62} x2={x} y2={62+h} stroke="#60a5fa" strokeWidth={i%10===0?0.8:0.4}/>;
          })}
          <line x1={30} y1={18} x2={30} y2={96} stroke="#f87171" strokeWidth={1.2}/>
        </g>
        <text x={300} y={120} textAnchor="middle" fontSize={14} fontWeight={500} fill="#f1f5f9">Lectura: {total} mm</text>
        <text x={300} y={140} textAnchor="middle" fontSize={11} fill="#94a3b8">Escala principal: {mainMM} mm + Vernier: {vernierMM} mm</text>
      </svg>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-xs text-slate-500">Medida</span>
        <input type="range" min="0" max="55" step="0.02" value={val}
          onChange={e => setVal(parseFloat(e.target.value))}
          className="h-1.5 flex-1 cursor-pointer accent-blue-500" aria-label="Deslizador de medida" />
        <span className="min-w-[60px] text-right font-mono text-sm font-semibold text-white">{total} mm</span>
      </div>
    </div>
  );
}

/* ─── INPUT ─────────────────────────────────────────────────────────────── */

const inputCls = "w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2.5 font-mono text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none";

/* ─── NOMENCLATURE DECODER ──────────────────────────────────────────────── */

function NomenclatureDecoder() {
  const [ref, setRef] = useState("6205");
  const decode = useCallback((r: string) => {
    const clean = r.trim().toUpperCase();
    const parts: { label: string; value: string; desc: string }[] = [];
    let remaining = clean;
    let widthS = "", diamS = "", boreCode = "";
    const baseMatch = remaining.match(/^([A-Z]*\d+)([\s/-].*)?$/);
    const base = baseMatch ? baseMatch[1] : remaining;
    const suffixPart = baseMatch?.[2]?.replace(/^[\s/-]+/,"") ?? "";

    if (/^(NU|NJ|NUP|NF|N)\d/.test(base)) {
      const m = base.match(/^(NU|NJ|NUP|NF|N)(\d+)/);
      if (m) {
        parts.push({ label:"Tipo", value:m[1], desc:`Rodamiento de rodillos cilíndricos tipo ${m[1]}` });
        const nums = m[2];
        if (nums.length>=3) { widthS=nums[0]; diamS=nums[1]; boreCode=nums.substring(2); }
      }
    } else if (/^QJ\d/.test(base)) {
      parts.push({ label:"Tipo", value:"QJ", desc:NOMENCLATURE_DECODER.type["QJ"] });
      const nums = base.substring(2);
      if (nums.length>=3) { widthS=nums[0]; diamS=nums[1]; boreCode=nums.substring(2); }
    } else if (/^\d/.test(base)) {
      const first = base[0];
      parts.push({ label:"Tipo", value:first, desc:NOMENCLATURE_DECODER.type[first as keyof typeof NOMENCLATURE_DECODER.type] || "Tipo no reconocido" });
      const rest = base.substring(1);
      if (rest.length>=3) {
        widthS="(omitido)"; diamS=rest[0]; boreCode=rest.substring(1);
      } else if (rest.length===2) { widthS="(omitido)"; diamS="(omitido)"; boreCode=rest; }
    }
    if (widthS) parts.push({ label:"Serie anchura", value:widthS, desc:NOMENCLATURE_DECODER.widthSeries[widthS as keyof typeof NOMENCLATURE_DECODER.widthSeries]||(widthS==="(omitido)"?"Se omite en la designación":"Serie "+widthS) });
    if (diamS) parts.push({ label:"Serie diámetro", value:diamS, desc:NOMENCLATURE_DECODER.diameterSeries[diamS as keyof typeof NOMENCLATURE_DECODER.diameterSeries]||(diamS==="(omitido)"?"Se omite":"Serie "+diamS) });
    if (boreCode) {
      const bc = parseInt(boreCode, 10);
      const boreMM = bc===0?10:bc===1?12:bc===2?15:bc===3?17:bc*5;
      parts.push({ label:"Diámetro interior", value:boreCode, desc:`d = ${boreMM} mm${bc>=4?` (${boreCode} × 5)`:" (código especial)"}` });
    }
    if (suffixPart) {
      suffixPart.split(/[\s/]+/).forEach(tok => {
        const up = tok.toUpperCase();
        const f = SUFFIXES[up];
        parts.push(f ? { label:`Sufijo: ${up}`, value:f.desc, desc:f.detail } : { label:`Sufijo: ${tok}`, value:"Código de fabricante", desc:"Consultar catálogo del fabricante para interpretación exacta." });
      });
    }
    return parts;
  }, []);

  const decoded = decode(ref);
  const baseKey = ref.split(/[\s/-]/)[0].toUpperCase();
  const lookupData = BEARING_DB[baseKey];

  return (
    <div className="space-y-4">
      <input className={inputCls} type="text" value={ref} onChange={e => setRef(e.target.value)}
        placeholder="Ej: 6205-2RS/C3 ó NU207" style={{textTransform:"uppercase"}} />
      {decoded.length > 0 && (
        <div className="space-y-2">
          {decoded.map((p, i) => (
            <div key={i} className={`rounded-xl border p-3 ${i===0?"border-blue-500/30 bg-blue-500/10":i===decoded.length-1&&suffixPart(ref)?"border-emerald-500/30 bg-emerald-500/10":"border-slate-800 bg-slate-900/60"}`}>
              <div className="mb-0.5 text-[10px] font-bold tracking-widest text-slate-500 uppercase">{p.label}</div>
              <div className="text-sm font-semibold text-white">{p.value}</div>
              <div className="mt-0.5 text-xs leading-relaxed text-slate-400">{p.desc}</div>
            </div>
          ))}
        </div>
      )}
      {lookupData && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[["Ø interior",`${lookupData.d} mm`],["Ø exterior",`${lookupData.D} mm`],["Anchura",`${lookupData.B} mm`],["Cr",`${lookupData.Cr} kN`]].map(([label,value])=>(
            <div key={label} className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-center">
              <div className="text-[10px] text-slate-500">{label}</div>
              <div className="mt-1 font-mono text-base font-bold text-white">{value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function suffixPart(ref: string) {
  const m = ref.trim().match(/^([A-Z]*\d+)([\s/-].*)?$/i);
  return !!(m?.[2]);
}

/* ─── VISUAL INSPECTOR ──────────────────────────────────────────────────── */

function VisualInspector() {
  const [selected, setSelected] = useState<number|null>(null);
  const fm = selected !== null ? FAILURE_MODES[selected] : null;
  const severityClasses = {
    critica: "bg-red-500/10 text-red-400 border border-red-500/30",
    alta:    "bg-amber-500/10 text-amber-400 border border-amber-500/30",
    media:   "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30",
  };
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {FAILURE_MODES.map((f, i) => (
          <button key={i} onClick={()=>setSelected(i===selected?null:i)}
            className={`rounded-xl border p-3 text-left transition-all ${i===selected?"border-blue-500/40 bg-blue-500/10":"border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900"}`}>
            <div className="text-xs font-semibold text-white">{f.name}</div>
            <div className="mt-0.5 text-[10px] text-slate-500">ISO {f.iso}</div>
          </button>
        ))}
      </div>
      {fm && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-base font-bold text-white">{fm.name}</div>
              <div className="text-xs text-slate-400">ISO 15243:{fm.iso} — {fm.category}</div>
            </div>
            <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase ${severityClasses[fm.severity]}`}>
              {fm.severity}
            </span>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-3">
            <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">Aspecto visual</div>
            <p className="text-xs leading-relaxed text-slate-300">{fm.visual}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <div className="mb-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase">Causas</div>
              <ul className="space-y-1.5">
                {fm.causes.map((c,i)=>(
                  <li key={i} className="flex gap-2 text-xs text-slate-300">
                    <span className="mt-0.5 shrink-0 text-amber-400">—</span>{c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase">Indicadores</div>
              <ul className="space-y-1.5">
                {fm.indicators.map((ind,i)=>(
                  <li key={i} className="flex gap-2 text-xs text-slate-300">
                    <span className="mt-0.5 shrink-0 text-emerald-400">+</span>{ind}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3">
            <div className="mb-1 text-[10px] font-bold tracking-widest text-emerald-500 uppercase">Acción correctiva</div>
            <p className="text-xs leading-relaxed text-emerald-300">{fm.action}</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── BEARING SEARCH ────────────────────────────────────────────────────── */

function BearingSearch() {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"ref"|"dim">("ref");
  const [dims, setDims] = useState({ d:"", D:"", B:"" });

  const results = Object.entries(BEARING_DB).filter(([key,b]) => {
    if (mode==="ref") return key.toLowerCase().includes(query.toLowerCase()) && query.length > 0;
    const dm = dims.d ? Math.abs(b.d-parseFloat(dims.d))<=1 : true;
    const Dm = dims.D ? Math.abs(b.D-parseFloat(dims.D))<=1 : true;
    const Bm = dims.B ? Math.abs(b.B-parseFloat(dims.B))<=1 : true;
    return dm && Dm && Bm && (dims.d||dims.D||dims.B);
  }).slice(0, 6);

  const tabBtn = (label: string, active: boolean, onClick: ()=>void) => (
    <button onClick={onClick}
      className={`rounded-lg border px-4 py-2 text-xs font-semibold transition-all ${active?"border-blue-500/40 bg-blue-500/10 text-blue-400":"border-slate-800 bg-transparent text-slate-500 hover:text-slate-300"}`}>
      {label}
    </button>
  );

  const brands = ["skf","nsk","fag","ntn","timken","koyo","nachi"] as const;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {tabBtn("Por referencia", mode==="ref", ()=>setMode("ref"))}
        {tabBtn("Por dimensiones", mode==="dim", ()=>setMode("dim"))}
      </div>
      {mode==="ref" ? (
        <input className={inputCls} type="text" value={query}
          onChange={e=>setQuery(e.target.value)} placeholder="Ej: 6205, 6308, 22207, NU207…" />
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {(["d","D","B"] as const).map(dim => (
            <input key={dim} className={inputCls} type="number" value={dims[dim]}
              onChange={e=>setDims({...dims,[dim]:e.target.value})}
              placeholder={`${dim} (mm)`} />
          ))}
        </div>
      )}
      {results.length > 0 && (
        <div className="space-y-4">
          {results.map(([key,b])=>(
            <div key={key} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl font-bold text-white">{key}</span>
                  <span className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-400">{TYPE_LABEL[b.type]}</span>
                </div>
                <span className="text-xs text-slate-500">{b.d}×{b.D}×{b.B} mm</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {brands.map(brand=>(
                  <div key={brand} className="rounded-md border border-slate-800 bg-slate-950 px-2 py-1 text-[11px]">
                    <span className="text-slate-500 uppercase">{brand}: </span>
                    <span className="font-mono font-semibold text-slate-200">{b[brand]}</span>
                  </div>
                ))}
              </div>
              <div className="mb-4 flex flex-wrap gap-4 text-xs text-slate-500">
                <span>Cr: <strong className="text-white">{b.Cr} kN</strong></span>
                <span>C0r: <strong className="text-white">{b.C0r} kN</strong></span>
                <span>RPM lím.: <strong className="text-white">{b.rpm.toLocaleString()}</strong></span>
              </div>
              <div className="flex justify-center">
                <BearingCrossSection d={b.d} D={b.D} B={b.B} type={b.type} />
              </div>
            </div>
          ))}
        </div>
      )}
      {results.length===0 && query.length>0 && mode==="ref" && (
        <p className="py-6 text-center text-sm text-slate-500">Sin resultados para <span className="font-mono text-slate-300">"{query}"</span></p>
      )}
    </div>
  );
}

/* ─── MEASUREMENT GUIDE ─────────────────────────────────────────────────── */

function MeasurementGuide() {
  const [step, setStep] = useState(0);
  const steps = [
    { title:"Paso 1: Preparación", content:"Limpie el rodamiento y el calibrador con un paño limpio y sin pelusa. Elimine grasa, polvo o partículas que puedan alterar la medida. Verifique que el calibrador esté en cero: cierre las mordazas y confirme que ambas escalas (principal y Vernier) coincidan exactamente en cero.", tip:"Realice las mediciones en un ambiente con temperatura controlada (20°C ± 2°C) para evitar errores por dilatación térmica. Esto es especialmente crítico en rodamientos de precisión P5 y P4." },
    { title:"Paso 2: Medir diámetro exterior (D)", content:"Coloque el rodamiento de pie. Abra las mordazas exteriores del calibrador y posiciónelas diametralmente opuestas sobre el anillo exterior. Las mordazas deben estar perfectamente perpendiculares al eje del rodamiento. Cierre suavemente hasta hacer contacto firme sin deformar. Tome al menos 3 mediciones rotando el rodamiento 60° entre cada una.", tip:"Si obtiene diferencias mayores a 0.01 mm entre mediciones, puede indicar ovalización del anillo exterior — señal de desgaste o montaje forzado." },
    { title:"Paso 3: Medir diámetro interior (d)", content:"Use las mordazas interiores (puntas superiores). Insértelas dentro del agujero del anillo interior y expanda cuidadosamente hasta que ambas puntas contacten la superficie interna. El calibrador debe estar perpendicular al eje del rodamiento. Mida en al menos 3 posiciones angulares y en dos planos axiales diferentes.", tip:"Un diámetro interior mayor a la tolerancia indica desgaste. Compare con la tolerancia del eje según ISO 286 (p. ej. j5, k5, m6 para anillo interior girante)." },
    { title:"Paso 4: Medir anchura (B)", content:"Coloque el rodamiento plano sobre una superficie limpia. Use las mordazas exteriores para medir el ancho total del rodamiento, asegurándose de que las mordazas hagan contacto completo con ambas caras laterales. Mida en al menos 3 puntos alrededor de la circunferencia.", tip:"Diferencias de anchura entre puntos pueden indicar desalineación severa durante operación o montaje incorrecto con golpe lateral." },
    { title:"Paso 5: Verificar juego radial", content:"Con el anillo interior fijo, desplace radialmente el anillo exterior. Use un reloj comparador o galgas de espesores (feeler gauge) para medir el desplazamiento total. Compare con las tolerancias de juego: CN (Normal), C3, C4 según la tabla del fabricante.", tip:"Nunca mida juego radial con el rodamiento montado en el eje — el ajuste de interferencia reduce el juego. Esto es esperado y necesario." },
    { title:"Paso 6: Lectura del calibrador", content:"ESCALA PRINCIPAL: Identifique el último trazo completo a la izquierda del cero de la escala Vernier. ESCALA VERNIER: Busque qué trazo se alinea exactamente con algún trazo de la escala principal. Multiplique ese número por la resolución (0.02 mm o 0.05 mm). RESULTADO: Sume ambos valores.", tip:"Evite el error de paralaje: mire siempre perpendicular a las escalas. En calibradores digitales, presione ZERO antes de medir y asegúrese de que las mordazas están limpias." },
  ];
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {steps.map((_,i)=>(
          <button key={i} onClick={()=>setStep(i)}
            className={`min-h-9 min-w-9 rounded-full text-xs font-bold transition-all ${step===i?"bg-blue-600 text-white":"border border-slate-700 bg-slate-900 text-slate-400 hover:text-white"}`}>
            {i+1}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 space-y-3">
        <h4 className="font-bold text-white">{steps[step].title}</h4>
        <p className="text-sm leading-relaxed text-slate-300">{steps[step].content}</p>
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3">
          <div className="mb-1 text-[10px] font-bold tracking-widest text-amber-500 uppercase">Consejo de experto</div>
          <p className="text-xs leading-relaxed text-amber-200">{steps[step].tip}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0}
          className="flex items-center gap-1 rounded-lg border border-slate-800 px-4 py-2 text-xs text-slate-400 transition hover:text-white disabled:opacity-30">
          <ChevronLeft size={14}/> Anterior
        </button>
        <button onClick={()=>setStep(s=>Math.min(steps.length-1,s+1))} disabled={step===steps.length-1}
          className="flex items-center gap-1 rounded-lg border border-slate-800 px-4 py-2 text-xs text-slate-400 transition hover:text-white disabled:opacity-30">
          Siguiente <ChevronRight size={14}/>
        </button>
      </div>
    </div>
  );
}

/* ─── BRAND COMPARISON ───────────────────────────────────────────────────── */

function BrandComparison() {
  const [selected, setSelected] = useState<number|null>(null);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {BRAND_DATA.map((b,i)=>(
        <button key={i} onClick={()=>setSelected(i===selected?null:i)} className={`rounded-2xl border p-4 text-left transition-all ${selected===i?"border-blue-500/40 bg-blue-500/10":"border-slate-800 bg-slate-900 hover:border-slate-700"}`}>
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">{b.name}</span>
            <span className="text-[10px] text-slate-500">{b.country}</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">{b.specialty}</p>
          <div className="mt-2 text-xs text-amber-400">{"★".repeat(b.stars)}{"☆".repeat(5-b.stars)}</div>
          {selected===i && (
            <div className="mt-3 border-t border-slate-800 pt-3 space-y-2">
              <p className="text-[10px] text-slate-500">Fundada: {b.founded} · {b.hq}</p>
              <p className="text-xs leading-relaxed text-slate-300">{b.notes}</p>
              <p className="text-xs font-semibold text-blue-400">Fortaleza: {b.strength}</p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

/* ─── CONDITION CHECKLIST ───────────────────────────────────────────────── */

function ConditionChecklist() {
  const [checks, setChecks] = useState<Record<string,boolean>>({});
  const items = [
    { id:"noise",  label:"Ruido anormal al girar manualmente",severity:"warn", detail:"Gire el anillo interior lentamente. Debe ser suave y silencioso. Clics, raspado o rumor indican daño." },
    { id:"play",   label:"Juego radial excesivo (percibido al tacto)",severity:"warn", detail:"Sostenga el anillo exterior y mueva el interior radialmente. Si el movimiento es perceptible sin instrumentos, hay desgaste." },
    { id:"discolor",label:"Decoloración térmica (dorado, azul, negro)",severity:"danger",detail:"Dorado: ~200°C. Azul: ~300°C. Negro: >400°C. El rodamiento perdió dureza." },
    { id:"rust",   label:"Corrosión o picaduras visibles",severity:"danger",detail:"Cualquier punto de óxido en pistas o elementos rodantes es motivo de reemplazo inmediato." },
    { id:"cage",   label:"Jaula dañada, deformada o rota",severity:"danger",detail:"Verifique que la jaula mantenga los elementos rodantes equidistantes y sin deformación." },
    { id:"spall",  label:"Descascaramiento (spalling) en pistas",severity:"danger",detail:"Cráters o material desprendido en pistas = falla por fatiga. Reemplazo inmediato." },
    { id:"marks",  label:"Marcas de indentación en las pistas",severity:"warn", detail:"Indentaciones equidistadas = brinelling por golpe/vibración. Generan vibración periódica." },
    { id:"seal",   label:"Sellos/escudos dañados o desprendidos",severity:"warn", detail:"Sellos íntegros son críticos para la vida útil. Un sello dañado expone el rodamiento a contaminantes." },
    { id:"grease", label:"Grasa ennegrecida, seca o con olor a quemado",severity:"warn", detail:"Grasa negra = contaminación/degradación térmica. Grasa lechosa = ingreso de agua. Grasa seca = relubricación tardada." },
    { id:"fluting",label:"Estrías paralelas en las pistas (fluting)",severity:"danger",detail:"Patrón de estrías equidistantes = erosión eléctrica por corrientes parásitas de variadores de frecuencia." },
  ];
  const toggle = (id: string) => setChecks(p=>({...p,[id]:!p[id]}));
  const dangerCount = items.filter(i=>i.severity==="danger"&&checks[i.id]).length;
  const warnCount = items.filter(i=>i.severity==="warn"&&checks[i.id]).length;
  const checked = Object.keys(checks).length > 0;
  const verdict = !checked ? { text:"Marque las condiciones observadas", cls:"text-slate-500" }
    : dangerCount > 0 ? { text:"REEMPLAZAR INMEDIATAMENTE", cls:"text-red-400 font-bold" }
    : warnCount >= 3   ? { text:"REEMPLAZO RECOMENDADO", cls:"text-amber-400 font-bold" }
    : warnCount > 0    ? { text:"MONITOREAR — Uso condicional", cls:"text-amber-400" }
    : { text:"CONDICIÓN ACEPTABLE — Sin defectos observados", cls:"text-emerald-400 font-bold" };

  return (
    <div className="space-y-3">
      <p className={`text-center text-sm ${verdict.cls}`}>{verdict.text}</p>
      {items.map(item=>(
        <label key={item.id} onClick={()=>toggle(item.id)}
          className={`flex cursor-pointer gap-3 rounded-xl p-3 transition-all ${checks[item.id]?(item.severity==="danger"?"border border-red-500/20 bg-red-500/10":"border border-amber-500/20 bg-amber-500/10"):"border border-slate-800 bg-slate-900/50 hover:border-slate-700"}`}>
          <input type="checkbox" checked={!!checks[item.id]} readOnly
            className="mt-0.5 cursor-pointer accent-blue-500" />
          <div>
            <p className={`text-sm ${checks[item.id]?"font-semibold text-white":"text-slate-300"}`}>{item.label}</p>
            {checks[item.id] && <p className="mt-1 text-xs leading-relaxed text-slate-400">{item.detail}</p>}
          </div>
        </label>
      ))}
    </div>
  );
}

/* ─── SUFFIX REFERENCE ──────────────────────────────────────────────────── */

function SuffixReference() {
  const [filter, setFilter] = useState("");
  const entries = Object.entries(SUFFIXES).filter(([k,v])=>
    k.toLowerCase().includes(filter.toLowerCase())||v.desc.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="space-y-4">
      <input className={inputCls} type="text" value={filter} onChange={e=>setFilter(e.target.value)} placeholder="Buscar sufijo… (2RS, C3, K, M, W33…)" />
      <div className="grid gap-3 sm:grid-cols-2">
        {entries.map(([k,v])=>(
          <div key={k} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <span className="font-mono text-base font-bold text-white">{k}</span>
            <p className="mt-1 text-sm text-slate-300">{v.desc}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{v.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */

const SECTIONS = [
  { id:"search",       name:"Buscador",              short:"Buscador" },
  { id:"nomenclature", name:"Decodificador",          short:"Nomenclatura" },
  { id:"suffixes",     name:"Sufijos",                short:"Sufijos" },
  { id:"measurement",  name:"Guía de medición",       short:"Medición" },
  { id:"caliper",      name:"Simulador calibrador",   short:"Calibrador" },
  { id:"condition",    name:"Checklist inspección",   short:"Checklist" },
  { id:"failures",     name:"Modos de falla ISO 15243",short:"Fallas" },
  { id:"brands",       name:"Comparativa marcas",     short:"Marcas" },
];

export function BearingAcademy() {
  const [active, setActive] = useState("search");
  return (
    <div className="space-y-6">
      {/* Tabs */}
      <nav className="flex flex-wrap gap-2" aria-label="Secciones de rodamientos">
        {SECTIONS.map(s=>(
          <button key={s.id} onClick={()=>setActive(s.id)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap ${active===s.id?"border-blue-500/40 bg-blue-500/10 text-blue-400":"border-slate-800 bg-transparent text-slate-500 hover:border-slate-700 hover:text-slate-300"}`}>
            {s.short}
          </button>
        ))}
      </nav>
      {/* Content */}
      <div>
        {active==="search"       && <BearingSearch />}
        {active==="nomenclature" && <NomenclatureDecoder />}
        {active==="suffixes"     && <SuffixReference />}
        {active==="measurement"  && <MeasurementGuide />}
        {active==="caliper"      && <CaliperDiagram />}
        {active==="condition"    && <ConditionChecklist />}
        {active==="failures"     && <VisualInspector />}
        {active==="brands"       && <BrandComparison />}
      </div>
      <p className="text-center text-[10px] text-slate-600">
        Datos basados en ISO 15, ISO 492, ISO 15243 y catálogos de fabricantes · imelectric.es
      </p>
    </div>
  );
}
