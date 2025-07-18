// import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';

// @Controller()
// export class ApiController {
//   constructor(
//     @Inject('RIDE_SERVICE') private readonly rideClient: ClientProxy,
//     @Inject('TAXI_SERVICE') private readonly taxiClient: ClientProxy,
//     @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
//   ) {}

//   @Post('ride/book')
//   async bookRide(@Body() data: any) {
//     console.log(data,'data===============>')
//     return this.rideClient.send('create_ride', data).toPromise();
//   }

//   @Get('taxi/nearby')
//   async getNearby() {
//     return this.taxiClient.send('get_nearby', {}).toPromise();
//   }
//   @Post('taxi')
//   async addTaxi(@Body() data:any) {
//     try {
//       return this.taxiClient.send('add_taxi', data ).toPromise();
//     } catch (error) {
      
//     }
//   }

//   @Post('payment/process')
//   async processPayment(@Body() data: any) {
//     return this.paymentClient.send('process_payment', data).toPromise();
//   }
// }
