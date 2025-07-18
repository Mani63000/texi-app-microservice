import { Entity, ObjectIdColumn, Column, Index } from 'typeorm';
import { ObjectId } from 'mongodb';

export interface Location {
  type: 'Point';
  coordinates: [number, number];
}
@Entity('taxis')
export class Taxi {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  driverId: string;

  @Column()
  vehicleNumber: string;

  @Column()
  state: string;

  @Column()
  status: string; // available, busy, offline

  @Column()
  location: Location;
}