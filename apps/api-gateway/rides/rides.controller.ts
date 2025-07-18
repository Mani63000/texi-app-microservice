import { Controller, Post, Body, Param, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('rides')
export class RidesController {
  constructor(@Inject('RIDE_SERVICE') private readonly rideClient: ClientProxy) {}

  @Post('create')
  async createRide(@Body() data: any) {
    return this.rideClient.send('create_ride', data).toPromise();
  }

  @Get('status/:id')
  async rideStatus(@Param('id') id: string) {
    return this.rideClient.send('get_ride_status', { id }).toPromise();
  }
}
