import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EntityBase {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}