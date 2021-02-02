export class ProductDto {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly promotionId: string;

  constructor(id: string, name: string, price: number, promotionId: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.promotionId = promotionId;
  }
}