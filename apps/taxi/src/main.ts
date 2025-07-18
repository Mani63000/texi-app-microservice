import { NestFactory } from '@nestjs/core';
import { TaxiModule } from './taxi.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(TaxiModule, {
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'taxi_queue',
          queueOptions: {
            durable: false,
          },
        },
      });
  await app.listen();
}
console.log('Taxi microservice is listening on 3000');
bootstrap();
