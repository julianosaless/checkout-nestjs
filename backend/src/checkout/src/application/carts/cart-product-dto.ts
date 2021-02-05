import { PromotionDto } from "../products/promotion-dto";

export class CartProductDto {
  readonly id: string;
  readonly productId: string;
  readonly productName: string;
  readonly quantity: number;
  readonly price: number;
  readonly total: number;
  promotion: PromotionDto;

  constructor(id: string, productId: string, productName: string, quantity: number, price: number, total: number) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
  }

  public addPromotion(promotionId: string, promotionName: string): void {
    this.promotion = new PromotionDto(promotionId, promotionName)
  }
}