import { CartProduct } from "src/domain/carts/cart-product";
import { Promotion } from "src/domain/products/promotion";
import { ProductRepository } from "src/infrastructure/repository/products/product-repository";
import { IPromotionDiscountService } from "./promotion-discount-service.interface";
import { IPromotionDiscountRule } from "./rules/promotion-discount-rule.interface";
import { PromotionBuyOneAndGetOneFreeDiscount } from "./rules/promotion_buy_one_and_get_one_free_discount";
import { PromotionThreeForTenDiscountRule } from "./rules/promotion_three_for_ten_discount_rule";

export class PromotionDiscountService implements IPromotionDiscountService {

  readonly discountRules: IPromotionDiscountRule[] = [new PromotionThreeForTenDiscountRule(), new PromotionBuyOneAndGetOneFreeDiscount()];

  constructor(readonly productRepository: ProductRepository) { }

  public createDiscount(cartProduct: CartProduct): { promotion: Promotion, discount: number } {
    if (!cartProduct.product?.promotion) return { promotion: null, discount: 0 };

    const lastPromotion = this.discountRules
      .filter((rule) => rule.isSatisfiedBy(cartProduct.quantity, cartProduct.price, cartProduct.product?.promotion))[0];

    if (!lastPromotion) return { promotion: null, discount: 0 };

    const discount = lastPromotion.createDiscount(cartProduct.quantity, cartProduct.price, cartProduct.product?.promotion);
    return { promotion: cartProduct.product?.promotion, discount: 0 };
  }

}