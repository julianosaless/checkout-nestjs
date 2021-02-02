import { Entity } from 'src/common/domain/entity';
import { PromotionType } from './promotion-type';

export class Promotion extends Entity {
  readonly name: string;
  readonly minQuantity: number;
  readonly promotionType: PromotionType;

  constructor(name: string, minQuantity: number, promotionType: PromotionType) {
    super();
    this.name = name;
    this.minQuantity = minQuantity;
    this.promotionType = promotionType;
  }
}