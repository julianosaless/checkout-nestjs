import { PromotionDto } from "../products/promotion-dto";

export class CartProductDto {
  readonly productId: string;
  readonly productName: string;
  readonly quantity: number;
  readonly price: number;
  readonly total: number;
  promotion: PromotionDto;

  constructor(productId: string, productName: string, quantity: number, price: number, total: number) {
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