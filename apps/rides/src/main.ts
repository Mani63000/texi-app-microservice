import { NestFactory } from '@nestjs/core';
import { RidesModule } from './rides.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(RidesModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'ride_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
 console.log('🚖 Rides microservice is listening');
}
bootstrap();