import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTaxiDto } from './dto/create-taxi.dto';
@Controller('taxi')
export class TaxiController {
  constructor(@Inject('TAXI_SERVICE') private readonly taxiClient: ClientProxy) {}

  @Post('add')
  async addTaxi(@Body() createTaxiDto: CreateTaxiDto) {
    console.log(createTaxiDto,'controlerr====')
    return this.taxiClient.send('taxi', createTaxiDto).toPromise();
  }

  @Post('request-ride')
  async requestRide(@Body() data: any) {
    return this.taxiClient.send('request_ride', data).toPromise();
  }
}