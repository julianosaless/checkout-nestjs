import { Entity, Column } from 'typeorm';

import { EntityBase } from 'src/common/domain/entity-base';
import { IAggregateRoot } from 'src/common/domain/aggregate-root.interface';
import { Promotion } from './promotion';
import { PromotionType } from './promotion-type';

@Entity('products')
export class Product extends EntityBase implements IAggregateRoot {
  @Column()
  readonly name: string;
  @Column()
  readonly price: number;
  @Column()
  readonly promotionId: string;
  @Column()
  promotion: Promotion;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  public addPromotion(name: string, minQuantity: number, promotionType: PromotionType): Product {
    this.promotion = new Promotion(name, minQuantity, promotionType);
    return this;
  }

}