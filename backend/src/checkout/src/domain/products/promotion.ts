import { Column, Entity } from 'typeorm';

import { EntityBase } from 'src/common/domain/entity-base';
import { PromotionType } from './promotion-type';

@Entity('promotion')
export class Promotion extends EntityBase {
  @Column()
  readonly name: string;
  @Column()
  readonly minQuantity: number;
  @Column()
  readonly promotionType: PromotionType;

  constructor(name: string, minQuantity: number, promotionType: PromotionType) {
    super();
    this.name = name;
    this.minQuantity = minQuantity;
    this.promotionType = promotionType;
  }
}