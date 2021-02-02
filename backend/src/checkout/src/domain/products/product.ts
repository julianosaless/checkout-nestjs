import { IAggregateRoot } from 'src/common/domain/aggregate-root.interface';
import { Entity } from 'src/common/domain/entity';

export class Product extends Entity implements IAggregateRoot {
  readonly name: string;
  readonly price: number;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }
}