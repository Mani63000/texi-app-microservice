import { Injectable } from '@nestjs/common';
import { getStateConnection } from './taxi-db.provider';
import { Taxi } from './entities/taxi.entity';
@Injectable()
@Injectable()
export class TaxiService {
  async addTaxi(data: any) {
    try {
      const connection = await getStateConnection(data.state);
      const taxiRepo = connection.getMongoRepository(Taxi);
      const taxi = taxiRepo.create({
        driverId: data.driverId,
        vehicleNumber: data.vehicleNumber,
        state: data.state,
        status: data.status,
        location: data.location,
      });

      const result = await taxiRepo.save(taxi);
      await connection.close();
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error('Error adding taxi:', error);
      throw new Error(`Could not add taxi: ${error.message}`);
    }
  }
}