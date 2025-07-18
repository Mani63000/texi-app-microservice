import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('payments')
export class PaymentsController {
  constructor(@Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy) {}

  @Post('pay')
  async pay(@Body() data: any) {
    return this.paymentClient.send('make_payment', data).toPromise();
  }
}
