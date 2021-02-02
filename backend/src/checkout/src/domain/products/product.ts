import { Entity, Column } from 'typeorm';

import { IAggregateRoot } from 'src/common/domain/aggregate-root.interface';
import { EntityBase } from 'src/common/domain/entity-base';

@Entity('products')
export class Product extends EntityBase implements IAggregateRoot {
  @Column()
  readonly name: string;
  @Column()
  readonly price: number;


  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }
}