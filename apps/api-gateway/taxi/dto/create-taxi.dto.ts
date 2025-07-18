import { IsString, IsNotEmpty, IsIn, ValidateNested, IsArray, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';

class LocationDto {
  @IsString()
  @IsIn(['Point'])
  type: 'Point';

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  coordinates: [number, number];
}

export class CreateTaxiDto {
  @IsString()
  @IsNotEmpty()
  driverId: string;

  @IsString()
  @IsNotEmpty()
  vehicleNumber: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsIn(['available', 'busy', 'offline'])
  status: string;

  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;
}