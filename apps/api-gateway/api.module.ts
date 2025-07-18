import { Module } from '@nestjs/common';
// import { ApiController } from './api.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TaxiModule } from './taxi/taxi.module';
import { RidesModule } from './rides/rides.module';
import { PaymentsModule } from './payments/payments.module';
import { PaymentsController } from './payments/payments.controller';
import { RidesController } from './rides/rides.controller';
import { TaxiController } from './taxi/taxi.controller';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RIDE_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'ride_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    // Taxi Service Client
    ClientsModule.register([
      {
        name: 'TAXI_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'taxi_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'payment_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
   controllers: [TaxiController, RidesController, PaymentsController],
  providers: [],
})
export class ApiModule{}