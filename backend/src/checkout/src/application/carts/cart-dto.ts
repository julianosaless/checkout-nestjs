import { CartProduct } from "src/domain/carts/cart-product";

export class CartDto {
  readonly id: string;
  readonly name: string;
  readonly products: CartProduct[]

  constructor(id: string, name: string, products: CartProduct[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}