export class CartProductDto {
  readonly productId: string;
  readonly productName: string;
  readonly quantity: number;
  readonly price: number;
  readonly total: number;

  constructor(productId: string, productName: string, quantity: number, price: number, total: number) {
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
  }
}