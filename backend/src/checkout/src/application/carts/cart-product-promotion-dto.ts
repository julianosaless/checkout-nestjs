export class CartProductPromotionDto {

  readonly name: string;
  readonly totalOfDiscount: number;

  constructor(name: string, totalOfDiscount: number) {
    this.name = name;
    this.totalOfDiscount = totalOfDiscount;
  }

}