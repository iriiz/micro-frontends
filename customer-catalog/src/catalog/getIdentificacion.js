export function getIdentificacion(id) {
    return mapping[id] || '';
}

export const identificacion = [
    { codigo: 1, id: "1", description: "INE" },
    { codigo: 2, id: "2", description: "PASAPORTE" },
    { codigo: 3, id: "3", description: "CARTILLA MILITAR" },
    { codigo: 4, id: "4", description: "CEDULA PROFESIONAL" },
    { codigo: 5, id: "5", description: "LICENCIA DE CONDUCIR" },
    { codigo: 6, id: "6", description: "INAPAM" },
    { codigo: 7, id: "7", description: "DOCUMENTO MIGRATORIO" },
    { codigo: 8, id: "8", description: "OTRO" },
]

export function getIdentidicacionCode(id) {
    for (var i = 0; i < identificacion.length; i++) {
        if (identificacion[i].id === id)
            return identificacion[i].codigo;
    }
    return 0;
}

//
export function getOcupacion(id) {
    return mapping[id] || '';
}

export const ocupacion = [
    { id: 115, codigo: "115", description: "ABARROTERO" },
    { id: 265, codigo: "265", description: "ABOGADO" },
    { id: 159, codigo: "159", description: "ACCS AUTOMOTROCICES" },
    { id: 260, codigo: "260", description: "ACUACULTOR" },
    { id: 80, codigo: "80", description: "ADMINISTRADOR" },
    { id: 254, codigo: "254", description: "AGENCIAS DE SEGURIDAD" },
    { id: 262, codigo: "262", description: "AGENTE ADUANAL" },
    { id: 266, codigo: "266", description: "AGENTE DE BOLSA" },
    { id: 270, codigo: "270", description: "AGENTE INMOBILIARIO" },
    { id: 131, codigo: "131", description: "AGRICULTOR" },
    { id: 3, codigo: "3", description: "ALBAÑIL" },
    { id: 202, codigo: "202", description: "ALMACENISTA" },
    { id: 4, codigo: "4", description: "AMA DE CASA" },
    { id: 192, codigo: "192", description: "ANUNCIOS PUBLICITARIOS" },
    { id: 5, codigo: "5", description: "APICULTURISTA" },
    { id: 135, codigo: "135", description: "ARQUITECTO" },
    { id: 6, codigo: "6", description: "ARRENDATARIO" },
    { id: 7, codigo: "7", description: "ARTESANO" },
    { id: 177, codigo: "177", description: "ARTICULOS D LIMPIEZA" },
    { id: 8, codigo: "8", description: "ASESOR" },
    { id: 172, codigo: "172", description: "AUTO DETALLADO" },
    { id: 91, codigo: "91", description: "AVIADOR" },
    { id: 136, codigo: "136", description: "BIENES RAICES" },
    { id: 36, codigo: "36", description: "BLOQUERO" },
    { id: 138, codigo: "138", description: "BOLERO" },
    { id: 245, codigo: "245", description: "BOLSAS DE PLASTICO" },
    { id: 137, codigo: "137", description: "BOMBERO" },
    { id: 193, codigo: "193", description: "BOTANICA" },
    { id: 150, codigo: "150", description: "CANTO" },
    { id: 211, codigo: "211", description: "CARGADOR DE MATERIAL" },
    { id: 9, codigo: "9", description: "CARNICERO" },
    { id: 249, codigo: "249", description: "CARPINTERIA" },
    { id: 11, codigo: "11", description: "CARROCERO" },
    { id: 12, codigo: "12", description: "CERRAJERO" },
    { id: 20, codigo: "20", description: "CHOFER" },
    { id: 18, codigo: "18", description: "COCINERA" },
    { id: 221, codigo: "221", description: "COM Y VTA MARISCOS" },
    { id: 147, codigo: "147", description: "COMERCIANTE" },
    { id: 1, codigo: "1", description: "COMERCIANTE" },
    { id: 13, codigo: "13", description: "CONFECCIONISTA" },
    { id: 14, codigo: "14", description: "CONSECIONARIO" },
    { id: 196, codigo: "196", description: "CONSTRUCCION" },
    { id: 15, codigo: "15", description: "CONSULTOR" },
    { id: 120, codigo: "120", description: "CONSULTORA MARY KAY" },
    { id: 16, codigo: "16", description: "CONTADOR" },
    { id: 17, codigo: "17", description: "CONTRATISTA" },
    { id: 157, codigo: "157", description: "COODRINADOR  EVENTOS" },
    { id: 129, codigo: "129", description: "COOPERATIVA ESCOLAR" },
    { id: 267, codigo: "267", description: "CORREDOR PUBLICO" },
    { id: 133, codigo: "133", description: "COSMETOLOGA" },
    { id: 19, codigo: "19", description: "COSTURERA" },
    { id: 253, codigo: "253", description: "CRIADOR" },
    { id: 132, codigo: "132", description: "CULTORA DE BELLEZA" },
    { id: 142, codigo: "142", description: "DECORADOR" },
    { id: 21, codigo: "21", description: "DENTISTA" },
    { id: 22, codigo: "22", description: "DIBUJANTE" },
    { id: 203, codigo: "203", description: "DISEÑADOR" },
    { id: 187, codigo: "187", description: "DIST  LINAZA" },
    { id: 101, codigo: "101", description: "DIST INDEP ARDYSS" },
    { id: 88, codigo: "88", description: "DISTRIBUIDOR" },
    { id: 77, codigo: "77", description: "ECONOMISTA" },
    { id: 146, codigo: "146", description: "EDITOR" },
    { id: 104, codigo: "104", description: "EDUCADORA" },
    { id: 200, codigo: "200", description: "ELAB DE PIÑATAS" },
    { id: 151, codigo: "151", description: "ELECTRICISTA" },
    { id: 23, codigo: "23", description: "ELECTRICO" },
    { id: 226, codigo: "226", description: "ELECTRODOMESTICOS" },
    { id: 206, codigo: "206", description: "ELECTROMECANICO" },
    { id: 24, codigo: "24", description: "ELOTERO" },
    { id: 25, codigo: "25", description: "EMPLEADO" },
    { id: 26, codigo: "26", description: "EMPRESARIA" },
    { id: 42, codigo: "42", description: "EMPRESARIO" },
    { id: 210, codigo: "210", description: "ENCARG  LIMPIADURIA" },
    { id: 154, codigo: "154", description: "ENFERMERA" },
    { id: 27, codigo: "27", description: "ENTRENADOR" },
    { id: 82, codigo: "82", description: "ESC DE PERROS" },
    { id: 222, codigo: "222", description: "ESTANCIA INFANTIL" },
    { id: 28, codigo: "28", description: "ESTILISTA" },
    { id: 29, codigo: "29", description: "ESTUDIANTE" },
    { id: 118, codigo: "118", description: "EXPORTADOR" },
    { id: 239, codigo: "239", description: "FABRI EQU TORTILLAS" },
    { id: 122, codigo: "122", description: "FARMACEUTICA" },
    { id: 30, codigo: "30", description: "FERRETERO" },
    { id: 31, codigo: "31", description: "FLORISTA" },
    { id: 32, codigo: "32", description: "FOTOGRAFA" },
    { id: 100, codigo: "100", description: "FOTOGRAFO" },
    { id: 191, codigo: "191", description: "FRUTERO" },
    { id: 33, codigo: "33", description: "FUMIGADOR" },
    { id: 207, codigo: "207", description: "FUNDICION EN GENERAL" },
    { id: 163, codigo: "163", description: "GANADERO" },
    { id: 158, codigo: "158", description: "GRABACION DE VIDEOS" },
    { id: 228, codigo: "228", description: "GUARDIA DE SEGURIDAD" },
    { id: 34, codigo: "34", description: "HERRERO" },
    { id: 111, codigo: "111", description: "IMPORTADOR" },
    { id: 35, codigo: "35", description: "IMPRESOR" },
    { id: 230, codigo: "230", description: "INDUSTRIA" },
    { id: 37, codigo: "37", description: "INGENIERO" },
    { id: 38, codigo: "38", description: "INSTRUCTOR" },
    { id: 117, codigo: "117", description: "INSTRUCTOR DE KARAT" },
    { id: 271, codigo: "271", description: "INTERMEDIA COMERCIAL" },
    { id: 39, codigo: "39", description: "JARDINERO" },
    { id: 195, codigo: "195", description: "JOYERO" },
    { id: 119, codigo: "119", description: "LABORATORISTA" },
    { id: 252, codigo: "252", description: "LANCHERO" },
    { id: 40, codigo: "40", description: "LAVANDERA" },
    { id: 183, codigo: "183", description: "LAVAPLATOS" },
    { id: 41, codigo: "41", description: "LIDER" },
    { id: 126, codigo: "126", description: "LOCUTOR" },
    { id: 237, codigo: "237", description: "MANTENIMIENTO" },
    { id: 43, codigo: "43", description: "MECANICO" },
    { id: 106, codigo: "106", description: "MECANICO ELECTRICIS" },
    { id: 255, codigo: "255", description: "MEDICO" },
    { id: 44, codigo: "44", description: "MESERA" },
    { id: 164, codigo: "164", description: "MODISTA" },
    { id: 107, codigo: "107", description: "MONTADOR DE PAN" },
    { id: 248, codigo: "248", description: "MUEBLERIA" },
    { id: 152, codigo: "152", description: "MUSICO" },
    { id: 204, codigo: "204", description: "NOMINAS" },
    { id: 130, codigo: "130", description: "NOTARIO PUBLICO" },
    { id: 121, codigo: "121", description: "NUTRIOLOGO" },
    { id: 45, codigo: "45", description: "OBRERO" },
    { id: 46, codigo: "46", description: "OPERADOR" },
    { id: 225, codigo: "225", description: "ORFEBRE" },
    { id: 92, codigo: "92", description: "PANADERO" },
    { id: 47, codigo: "47", description: "PARAMEDICO" },
    { id: 186, codigo: "186", description: "PASA BOTES" },
    { id: 258, codigo: "258", description: "PINTOR" },
    { id: 214, codigo: "214", description: "PLANCHADOR" },
    { id: 49, codigo: "49", description: "PLASTICO" },
    { id: 50, codigo: "50", description: "PLATANERO" },
    { id: 51, codigo: "51", description: "PLOMERO" },
    { id: 105, codigo: "105", description: "PROD LIMPIEZA" },
    { id: 52, codigo: "52", description: "PROFESIONISTA" },
    { id: 201, codigo: "201", description: "PROMOTOR" },
    { id: 235, codigo: "235", description: "PUBLICISTA" },
    { id: 108, codigo: "108", description: "RADIO T V" },
    { id: 250, codigo: "250", description: "RECICLADO" },
    { id: 220, codigo: "220", description: "RECICLADORA" },
    { id: 54, codigo: "54", description: "REPARACION" },
    { id: 251, codigo: "251", description: "REPARTIDOR" },
    { id: 217, codigo: "217", description: "REPRESENTANTE" },
    { id: 256, codigo: "256", description: "RESTAURANTERO" },
    { id: 257, codigo: "257", description: "ROPA" },
    { id: 216, codigo: "216", description: "SASTRE" },
    { id: 55, codigo: "55", description: "SECRETARIA" },
    { id: 198, codigo: "198", description: "SEGURIDAD PRIVADA" },
    { id: 261, codigo: "261", description: "SERVICIO" },
    { id: 134, codigo: "134", description: "SOLDADOR" },
    { id: 56, codigo: "56", description: "TALLER MECANICO" },
    { id: 205, codigo: "205", description: "TAXISTA" },
    { id: 263, codigo: "263", description: "TECNICO" },
    { id: 259, codigo: "259", description: "TECNICO ELECTRICISTA" },
    { id: 109, codigo: "109", description: "TECNICO EN REFRIGE" },
    { id: 199, codigo: "199", description: "TECNICO REFRIGERACI" },
    { id: 264, codigo: "264", description: "TEJEDORA" },
    { id: 58, codigo: "58", description: "TORNERO" },
    { id: 140, codigo: "140", description: "TRABAJADOR" },
    { id: 124, codigo: "124", description: "TRABAJADOR DEL HOGAR" },
    { id: 59, codigo: "59", description: "TRANSPORTISTA" },
    { id: 215, codigo: "215", description: "TRATAMIENTO AGUA" },
    { id: 60, codigo: "60", description: "TRICICLERO" },
    { id: 61, codigo: "61", description: "VAJILLERA" },
    { id: 227, codigo: "227", description: "VENDEDORA" },
    { id: 185, codigo: "185", description: "VENDEDOR" },
    { id: 62, codigo: "62", description: "VENTAS" },
    { id: 165, codigo: "165", description: "VERDURAS" },
    { id: 123, codigo: "123", description: "VETERINARIO" },
    { id: 97, codigo: "97", description: "VIDRIERO" },
    { id: 242, codigo: "242", description: "VIDRIO" },
    { id: 144, codigo: "144", description: "VIDEOS" },
    { id: 234, codigo: "234", description: "VIGILANTE" },
    { id: 112, codigo: "112", description: "ZAPATERO" }
];

ocupacion.sort((a, b) => (a.description > b.description) ? 1 : -1);

export function getOcupacionCode(id) {
    for (var i = 0; i < ocupacion.length; i++) {
        if (ocupacion[i].id === id)
            return ocupacion[i].codigo;
    }
    return 0;
}