export function getPaises(id) {
    return mapping[id] || '';
}

export const paises = [
    { codigo: 1, id: "1", description: "AFGANISTÁN" },
    { codigo: 2, id: "2", description: "ALBANIA" },
    { codigo: 3, id: "3", description: "ALEMANIA" },
    { codigo: 4, id: "4", description: "ANDORRA" },
    { codigo: 5, id: "5", description: "ANGOLA" },
    { codigo: 6, id: "6", description: "ANTIGUA Y BARBUDA" },
    { codigo: 7, id: "7", description: "ARABIA SAUDITA" },
    { codigo: 8, id: "8", description: "ARGELIA" },
    { codigo: 9, id: "9", description: "ARGENTINA" },
    { codigo: 10, id: "10", description: "ARMENIA" },
    { codigo: 11, id: "11", description: "AUSTRALIA" },
    { codigo: 12, id: "12", description: "AUSTRIA" },
    { codigo: 13, id: "13", description: "AZERBAIYÁN" },
    { codigo: 14, id: "14", description: "BAHAMAS" },
    { codigo: 15, id: "15", description: "BAHRÉIN" },
    { codigo: 16, id: "16", description: "BANGLADESH" },
    { codigo: 17, id: "17", description: "BARBADOS" },
    { codigo: 18, id: "18", description: "BÉLGICA" },
    { codigo: 19, id: "19", description: "BELICE" },
    { codigo: 20, id: "20", description: "BENÍN" },
    { codigo: 21, id: "21", description: "BIELORRUSIA" },
    { codigo: 22, id: "22", description: "BIRMANIA" },
    { codigo: 23, id: "23", description: "BOLIVIA" },
    { codigo: 24, id: "24", description: "BOSNIA Y HERZEGOVINA" },
    { codigo: 25, id: "25", description: "BOTSUANA" },
    { codigo: 26, id: "26", description: "BRASIL" },
    { codigo: 27, id: "27", description: "BRUNÉI" },
    { codigo: 28, id: "28", description: "BULGARIA" },
    { codigo: 29, id: "29", description: "BURKINA FASO" },
    { codigo: 30, id: "30", description: "BURUNDI" },
    { codigo: 31, id: "31", description: "BUTÁN" },
    { codigo: 32, id: "32", description: "CABO VERDE" },
    { codigo: 33, id: "33", description: "CAMBOYA" },
    { codigo: 34, id: "34", description: "CAMERÚN" },
    { codigo: 35, id: "35", description: "CANADÁ" },
    { codigo: 36, id: "36", description: "CATAR" },
    { codigo: 37, id: "37", description: "CHAD" },
    { codigo: 38, id: "38", description: "CHILE" },
    { codigo: 39, id: "39", description: "CHINA" },
    { codigo: 40, id: "40", description: "CHIPRE" },
    { codigo: 41, id: "41", description: "COLOMBIA" },
    { codigo: 42, id: "42", description: "COMORAS" },
    { codigo: 43, id: "43", description: "COREA DEL NORTE" },
    { codigo: 44, id: "44", description: "COREA DEL SUR" },
    { codigo: 45, id: "45", description: "COSTA DE MARFIL" },
    { codigo: 46, id: "46", description: "COSTA RICA" },
    { codigo: 47, id: "47", description: "CROACIA" },
    { codigo: 48, id: "48", description: "CUBA" },
    { codigo: 49, id: "49", description: "DINAMARCA" },
    { codigo: 50, id: "50", description: "DOMINICA" },
    { codigo: 51, id: "51", description: "ECUADOR" },
    { codigo: 52, id: "52", description: "EGIPTO" },
    { codigo: 53, id: "53", description: "EL SALVADOR" },
    { codigo: 54, id: "54", description: "EMIRATOS ÁRABES UNIDOS" },
    { codigo: 55, id: "55", description: "ERITREA" },
    { codigo: 56, id: "56", description: "ESLOVAQUIA" },
    { codigo: 57, id: "57", description: "ESLOVENIA" },
    { codigo: 58, id: "58", description: "ESPAÑA" },
    { codigo: 59, id: "59", description: "ESTADOS UNIDOS" },
    { codigo: 60, id: "60", description: "ESTONIA" },
    { codigo: 61, id: "61", description: "ETIOPÍA" },
    { codigo: 62, id: "62", description: "FILIPINAS" },
    { codigo: 63, id: "63", description: "FINLANDIA" },
    { codigo: 64, id: "64", description: "FIYI" },
    { codigo: 65, id: "65", description: "FRANCIA" },
    { codigo: 66, id: "66", description: "GABÓN" },
    { codigo: 67, id: "67", description: "GAMBIA" },
    { codigo: 68, id: "68", description: "GEORGIA" },
    { codigo: 69, id: "69", description: "GHANA" },
    { codigo: 70, id: "70", description: "GRANADA" },
    { codigo: 71, id: "71", description: "GRECIA" },
    { codigo: 72, id: "72", description: "GUATEMALA" },
    { codigo: 73, id: "73", description: "GUINEA" },
    { codigo: 74, id: "74", description: "GUINEA-BISSAU" },
    { codigo: 75, id: "75", description: "GUINEA ECUATORIAL" },
    { codigo: 76, id: "76", description: "GUYANA" },
    { codigo: 77, id: "77", description: "HAITÍ" },
    { codigo: 78, id: "78", description: "HONDURAS" },
    { codigo: 79, id: "79", description: "HUNGRÍA" },
    { codigo: 80, id: "80", description: "INDIA" },
    { codigo: 81, id: "81", description: "INDONESIA" },
    { codigo: 82, id: "82", description: "IRAK" },
    { codigo: 83, id: "83", description: "IRÁN" },
    { codigo: 84, id: "84", description: "IRLANDA" },
    { codigo: 85, id: "85", description: "ISLANDIA" },
    { codigo: 86, id: "86", description: "ISRAEL" },
    { codigo: 87, id: "87", description: "ITALIA" },
    { codigo: 88, id: "88", description: "JAMAICA" },
    { codigo: 89, id: "89", description: "JAPÓN" },
    { codigo: 90, id: "90", description: "JORDANIA" },
    { codigo: 91, id: "91", description: "KAZAJISTÁN" },
    { codigo: 92, id: "92", description: "KENIA" },
    { codigo: 93, id: "93", description: "KIRGUISTÁN" },
    { codigo: 94, id: "94", description: "KIRIBATI" },
    { codigo: 95, id: "95", description: "KOSOVO" },
    { codigo: 96, id: "96", description: "KUWAIT" },
    { codigo: 97, id: "97", description: "LAOS" },
    { codigo: 98, id: "98", description: "LESOTO" },
    { codigo: 99, id: "99", description: "LETONIA" },
    { codigo: 100, id: "100", description: "LÍBANO" },
    { codigo: 101, id: "101", description: "LIBERIA" },
    { codigo: 102, id: "102", description: "LIBIA" },
    { codigo: 103, id: "103", description: "LIECHTENSTEIN" },
    { codigo: 104, id: "104", description: "LITUANIA" },
    { codigo: 105, id: "105", description: "LUXEMBURGO" },
    { codigo: 106, id: "106", description: "MADAGASCAR" },
    { codigo: 107, id: "107", description: "MALASIA" },
    { codigo: 108, id: "108", description: "MALAWI" },
    { codigo: 109, id: "109", description: "MALDIVAS" },
    { codigo: 110, id: "110", description: "MALÍ" },
    { codigo: 111, id: "111", description: "MALTA" },
    { codigo: 112, id: "112", description: "MARRUECOS" },
    { codigo: 113, id: "113", description: "MARSHALL" },
    { codigo: 114, id: "114", description: "MAURICIO" },
    { codigo: 115, id: "115", description: "MAURITANIA" },
    { codigo: 116, id: "116", description: "MÉXICO" },
    { codigo: 117, id: "117", description: "MICRONESIA" },
    { codigo: 118, id: "118", description: "MOLDAVIA" },
    { codigo: 119, id: "119", description: "MÓNACO" },
    { codigo: 120, id: "120", description: "MONGOLIA" },
    { codigo: 121, id: "121", description: "MONTENEGRO" },
    { codigo: 122, id: "122", description: "MOZAMBIQUE" },
    { codigo: 123, id: "123", description: "NAMIBIA" },
    { codigo: 124, id: "124", description: "NAURU" },
    { codigo: 125, id: "125", description: "NEPAL" },
    { codigo: 126, id: "126", description: "NICARAGUA" },
    { codigo: 127, id: "127", description: "NÍGER" },
    { codigo: 128, id: "128", description: "NIGERIA" },
    { codigo: 129, id: "129", description: "NORUEGA" },
    { codigo: 130, id: "130", description: "NUEVA ZELANDA" },
    { codigo: 131, id: "131", description: "OMÁN" },
    { codigo: 132, id: "132", description: "PAÍSES BAJOS" },
    { codigo: 133, id: "133", description: "PAKISTÁN" },
    { codigo: 134, id: "134", description: "PALAOS" },
    { codigo: 135, id: "135", description: "PALESTINA" },
    { codigo: 136, id: "136", description: "PANAMÁ" },
    { codigo: 137, id: "137", description: "PAPÚA NUEVA GUINEA" },
    { codigo: 138, id: "138", description: "PARAGUAY" },
    { codigo: 139, id: "139", description: "PERÚ" },
    { codigo: 140, id: "140", description: "POLONIA" },
    { codigo: 141, id: "141", description: "PORTUGAL" },
    { codigo: 142, id: "142", description: "REINO UNIDO" },
    { codigo: 143, id: "143", description: "REPÚBLICA CENTROAFRICANA" },
    { codigo: 144, id: "144", description: "REPÚBLICA CHECA" },
    { codigo: 145, id: "145", description: "REPÚBLICA DE MACEDONIA" },
    { codigo: 146, id: "146", description: "REPÚBLICA DEL CONGO" },
    { codigo: 147, id: "147", description: "REPÚBLICA DEMOCRÁTICA DEL CONGO" },
    { codigo: 148, id: "148", description: "REPÚBLICA DOMINICANA" },
    { codigo: 149, id: "149", description: "RUANDA" },
    { codigo: 150, id: "150", description: "RUMANÍA" },
    { codigo: 151, id: "151", description: "RUSIA" },
    { codigo: 152, id: "152", description: "SAMOA" },
    { codigo: 153, id: "153", description: "SAN CRISTÓBAL Y NIEVES" },
    { codigo: 154, id: "154", description: "SAN MARINO" },
    { codigo: 155, id: "155", description: "SAN VICENTE Y LAS GRANADINAS" },
    { codigo: 156, id: "156", description: "SANTA LUCÍA" },
    { codigo: 157, id: "157", description: "SANTO TOMÉ Y PRÍNCIPE" },
    { codigo: 158, id: "158", description: "SENEGAL" },
    { codigo: 159, id: "159", description: "SERBIA" },
    { codigo: 160, id: "160", description: "SEYCHELLES" },
    { codigo: 161, id: "161", description: "SIERRA LEONA" },
    { codigo: 162, id: "162", description: "SINGAPUR" },
    { codigo: 163, id: "163", description: "SIRIA" },
    { codigo: 164, id: "164", description: "SOMALIA" },
    { codigo: 165, id: "165", description: "SRI LANKA" },
    { codigo: 166, id: "166", description: "SUDÁFRICA" },
    { codigo: 167, id: "167", description: "SUDÁN" },
    { codigo: 168, id: "168", description: "SUDÁN DEL SUR" },
    { codigo: 169, id: "169", description: "SUECIA" },
    { codigo: 170, id: "170", description: "SUIZA" },
    { codigo: 171, id: "171", description: "SURINAM" },
    { codigo: 172, id: "172", description: "TAILANDIA" },
    { codigo: 173, id: "173", description: "TANZANIA" },
    { codigo: 174, id: "174", description: "TAYIKISTÁN" },
    { codigo: 175, id: "175", description: "TIMOR ORIENTAL" },
    { codigo: 176, id: "176", description: "TOGO" },
    { codigo: 177, id: "177", description: "TONGA" },
    { codigo: 178, id: "178", description: "TRINIDAD Y TOBAGO" },
    { codigo: 179, id: "179", description: "TÚNEZ" },
    { codigo: 180, id: "180", description: "TURKMENISTÁN" },
    { codigo: 181, id: "181", description: "TURQUÍA" },
    { codigo: 182, id: "182", description: "TUVALU" },
    { codigo: 183, id: "183", description: "UCRANIA" },
    { codigo: 184, id: "184", description: "UGANDA" },
    { codigo: 185, id: "185", description: "URUGUAY" },
    { codigo: 186, id: "186", description: "UZBEKISTÁN" },
    { codigo: 187, id: "187", description: "VANUATU" },
    { codigo: 188, id: "188", description: "VATICANO" },
    { codigo: 189, id: "189", description: "VENEZUELA" },
    { codigo: 190, id: "190", description: "VIETNAM" },
    { codigo: 191, id: "191", description: "YEMEN" },
    { codigo: 192, id: "192", description: "YIBUTI" },
    { codigo: 193, id: "193", description: "ZAMBIA" },
    { codigo: 194, id: "194", description: "ZIMBABUE" }
];

paises.sort((a, b) => (a.description > b.description) ? 1 : -1);

export function getPaisCode(id) {
    for (var i = 0; i < paises.length; i++) {
        if (paises[i].id === id)
            return paises[i].codigo;
    }
    return 0;
}

//Obtener los Estados de Mexico
export function getestados(id) {
    return mapping[id] || '';
}
export const estados = [
    { codigo: 1, id: "1", description: "AGUASCALIENTES" },
    { codigo: 2, id: "2", description: "BAJA CALIFORNIA" },
    { codigo: 3, id: "3", description: "BAJA CALIFORNIA SUR" },
    { codigo: 4, id: "4", description: "CAMPECHE" },
    { codigo: 5, id: "5", description: "COAHUILA" },
    { codigo: 6, id: "6", description: "COLIMA" },
    { codigo: 7, id: "7", description: "CHIAPAS" },
    { codigo: 8, id: "8", description: "CHIHUAHUA" },
    { codigo: 9, id: "9", description: "CIUDAD DE MEXICO" },
    { codigo: 10, id: "10", description: "DURANGO" },
    { codigo: 11, id: "11", description: "GUANAJUATO" },
    { codigo: 12, id: "12", description: "GUERRERO" },
    { codigo: 13, id: "13", description: "HIDALGO" },
    { codigo: 14, id: "14", description: "JALISCO" },
    { codigo: 15, id: "15", description: "MEXICO" },
    { codigo: 16, id: "16", description: "MICHOACAN" },
    { codigo: 17, id: "17", description: "MORELOS" },
    { codigo: 18, id: "18", description: "NAYARIT" },
    { codigo: 19, id: "19", description: "NUEVO LEON" },
    { codigo: 20, id: "20", description: "OAXACA" },
    { codigo: 21, id: "21", description: "PUEBLA" },
    { codigo: 22, id: "22", description: "QUERETARO" },
    { codigo: 23, id: "23", description: "QUINTANA ROO" },
    { codigo: 24, id: "24", description: "SAN LUIS POTOSI" },
    { codigo: 25, id: "25", description: "SINALOA" },
    { codigo: 26, id: "26", description: "SONORA" },
    { codigo: 27, id: "27", description: "TABASCO" },
    { codigo: 28, id: "28", description: "TAMAULIPAS" },
    { codigo: 29, id: "29", description: "TLAXCALA" },
    { codigo: 30, id: "30", description: "VERACRUZ" },
    { codigo: 31, id: "31", description: "YUCATAN" },
    { codigo: 32, id: "32", description: "ZACATECAS" }
];

estados.sort((a, b) => (a.description > b.description) ? 1 : -1);

export function getEstadoCode(id) {
    for (var i = 0; i < estados.length; i++) {
        if (estados[i].id === id)
            return estados[i].codigo;
    }
    return 0;
}