import { Entity, Column } from 'typeorm';

@Entity()
export class EntityBase {
  @Column()
  public id: string;
}