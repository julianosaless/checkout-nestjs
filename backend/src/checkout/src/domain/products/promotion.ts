import { EntityBase } from 'src/common/domain/entity-base';
import { PromotionType } from './promotion-type';

export class Promotion extends EntityBase {
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