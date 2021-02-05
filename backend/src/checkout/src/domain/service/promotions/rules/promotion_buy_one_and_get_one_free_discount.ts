import { Promotion } from "src/domain/products/promotion";
import { PromotionType } from "src/domain/products/promotion-type";
import { IPromotionDiscountRule } from "./promotion-discount-rule.interface";

export class PromotionBuyOneAndGetOneFreeDiscount implements IPromotionDiscountRule {

  isSatisfiedBy(quantity: number, price: number, promotion: Promotion): boolean {
    if (promotion == null || promotion.promotionType != PromotionType.buyOneGetOneFree) return false;
    return quantity >= promotion.minQuantity;
  }

  createDiscount(quantity: number, price: number, promotion: Promotion): number {
    const gift = 1;
    const percentageOfDiscountEachProduct = gift / promotion.minQuantity;
    const minimaunDiscount = (promotion.minQuantity * price) * percentageOfDiscountEachProduct;

    const quantityOfDiscount = quantity / promotion.minQuantity;
    const totalOfDiscount = quantityOfDiscount * minimaunDiscount;

    return totalOfDiscount;
  }

}