const QuestionarioSchema = {
    name: 'Questionario',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      titulo: 'string',
      usuario: 'string',
      data: 'string',
      answered: 'bool',
      resposta:'string',
      dataResposta: 'string',
      latlong: 'string',
    },
};

export {QuestionarioSchema}

