export function getDocuments(id) {
    return mapping[id] || '';
}

export const documents = [
    { codigo: 1, id: "1", description: "IDENTIFICACION OFICIAL" },
    { codigo: 2, id: "2", description: "CONSTANCIA DE LA CLABE ÚNICA DE REGISTRO DE POBLACIÓN" },
    { codigo: 3, id: "3", description: "COMPROBANTE DE DOMICILIO PARTICULAR" },
    { codigo: 4, id: "4", description: "DECLARACIÓN DE LA PERSONA FÍSICA" },
];

documents.sort((a, b) => (a.description > b.description) ? 1 : -1);

export function getEstadoCode(id) {
    for (var i = 0; i < documents.length; i++) {
        if (documents[i].id === id)
            return documents[i].codigo;
    }
    return 0;
}