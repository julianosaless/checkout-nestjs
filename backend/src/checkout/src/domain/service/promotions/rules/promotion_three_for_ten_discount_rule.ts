import { Promotion } from "src/domain/products/promotion";
import { PromotionType } from "src/domain/products/promotion-type";
import { IPromotionDiscountRule } from "./promotion-discount-rule.interface";

export class PromotionThreeForTenDiscountRule implements IPromotionDiscountRule {

  private targetDiscount: number = 10;

  isSatisfiedBy(quantity: number, price: number, promotion: Promotion): boolean {
    if (promotion == null || promotion.promotionType != PromotionType.threeForTen) return false;
    var totalOfProduct = quantity * price;

    return quantity >= promotion.minQuantity && totalOfProduct > this.targetDiscount;
  }

  createDiscount(quantity: number, price: number, promotion: Promotion): number {
    const minimaunTotalDiscount = (promotion.minQuantity * price) - this.targetDiscount;

    const quantityOfDiscount = quantity / promotion.minQuantity;
    const totalOfDiscount = quantityOfDiscount * minimaunTotalDiscount;

    return totalOfDiscount;
  }

}