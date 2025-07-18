import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class PaymentsService implements OnModuleInit {
  private client: ClientProxy;

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'rides_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  async notifyRidePaid(data: any) {
    return this.client.send('ride_paid', data).toPromise();
  }
}