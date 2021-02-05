import { CartProduct } from "src/domain/carts/cart-product";
import { CartProductDto } from "./cart-product-dto";

export class CartDto {
  readonly id: string;
  readonly name: string;
  products: CartProductDto[] = []
  total: number;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}