import { Promotion } from "src/domain/products/promotion";

export interface IPromotionDiscountRule {
    isSatisfiedBy(quantity: number, price: number, promotion: Promotion): boolean;
    createDiscount(quantity: number, price: number, promotion: Promotion): number;
}