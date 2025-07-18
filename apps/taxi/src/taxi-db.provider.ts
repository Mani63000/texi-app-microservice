import { createConnection } from 'typeorm';
import { Taxi } from './entities/taxi.entity';

const stateDbUriMap = {
  punjab: 'mongodb://localhost:27017/db_punjab',
  chandigarh: 'mongodb://localhost:27017/db_chandigarh',
};

export async function getStateConnection(state: string) {
  const uri = stateDbUriMap[state];
  return createConnection({
    type: 'mongodb',
    url: uri,
    // useUnifiedTopology: "true",
    entities: [Taxi],
  });
}
