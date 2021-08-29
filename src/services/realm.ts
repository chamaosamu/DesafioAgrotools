import Realm from 'realm';

import { QuestionarioSchema } from './schemas/QuestionarioSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ QuestionarioSchema ],
    schemaVersion: 1
  });
}