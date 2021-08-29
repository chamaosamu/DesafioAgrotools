import { useState, useCallback } from 'react';
import { IQuestionario } from '../models/Questionario';
import getRealm from './realm';

export default {

    insertQuestionario:async ( { titulo, usuario, data } : IQuestionario ) => {
        const realm = await getRealm();
        const lastPanel = realm.objects('Questionario').sorted('id', true)[0];
        const highestId = lastPanel == null ? 0 : lastPanel.id;
        const idPanel = highestId == null ? 1 : highestId + 1;
        realm.write(() => {
            const questionario = realm.create('Questionario', {
                id: idPanel,
                titulo: titulo,
                usuario:  usuario,
                data: data,
                answered: false,
                resposta: '',
                dataResposta:'',
                latlong: '',
            }, 'modified');
        });
            console.log('Questionario criado')
    },

    insertResponse:async ( {id, titulo, usuario, data, resposta, dataResposta, latlong} : IQuestionario ) => {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Questionario', {
                id: id,
                titulo: titulo,
                usuario:  usuario,
                data: data,
                answered: true,
                resposta: resposta,
                dataResposta: dataResposta,
                latlong: latlong,
            }, 'modified');
        });
            console.log('Questionario criado')
    },

    getQuestionario:async(item:any) => {
        const realm = await getRealm();
        realm.write(() => {
            console.log('Quest map to realm start.');
            // The following takes 47 seconds to complete.
            item.forEach(obj => {
              realm.create('Questionario', obj, 'modified');
            });
          });
    },


    deleteQuestionario:async(id:any) => {
        const realm = await getRealm();
        realm.write(() => {
            realm.delete(realm.objectForPrimaryKey('Questionario', id));
        });
        console.log('deletado')
    },

}