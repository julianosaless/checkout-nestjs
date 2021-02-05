import { CartProduct } from "src/domain/carts/cart-product";

export interface IPromotionDiscountService {
  createDiscount(cartProduct: CartProduct): any;
}