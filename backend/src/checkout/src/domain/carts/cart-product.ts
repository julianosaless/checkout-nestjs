import { Product } from "../products/product";

export class CartProduct {

  readonly cartId: string;
  readonly quantity: number;
  readonly productId: string;
  readonly price: number;
  readonly product: Product;

  constructor(cartId: string, product: Product, quantity: number) {
    this.cartId = cartId;
    this.productId = product.id;
    this.quantity = quantity;
    this.price = product.price;
    this.product = product;
  }

  public changeQuantity(quantity: number): void {
    quantity += quantity;

    if (quantity <= 0) {
      quantity = 0;
    }
  }

  public get total(): number {
    return this.quantity * this.price;
  }
}