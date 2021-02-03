import { Entity, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm';

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

  @Column({ nullable: true })
  promotionId: string;

  @ManyToOne(type => Promotion, { nullable: true })
  @JoinColumn()
  promotion: Promotion;

  constructor(name: string, price: number) {
    super();
    this.name = name;
    this.price = price;
  }

  public addPromotion(promotionId: string): Product {
    this.promotionId = promotionId;
    return this;
  }

}