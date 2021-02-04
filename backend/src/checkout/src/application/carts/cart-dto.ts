import { CartProduct } from "src/domain/carts/cart-product";
import { CartProductDto } from "./cart-product-dto";

export class CartDto {
  readonly id: string;
  readonly name: string;
  readonly products: CartProductDto[]

  constructor(id: string, name: string, products: CartProductDto[]) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}