import { Controller, Get, HttpStatus, Put, Param, HttpCode } from "@nestjs/common";
import { ProductDto } from "src/application/products/product-dto";

import { ProductService } from "src/application/products/product-service";
import { PromotionDto } from "src/application/products/promotion-dto";

@Controller('/api/products')
export class ProductController {

  constructor(private service: ProductService) { }

  @Get("promotions")
  @HttpCode(200)
  public async getAllPromotions(): Promise<PromotionDto[]> {
    return await this.service
      .getAllPromotions();
  }

  @Get(':id')
  @HttpCode(200)
  async getBy(@Param('id') id: string): Promise<ProductDto> {
    return await this.service
      .get(id);
  }

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<ProductDto[]> {
    return await this.service
      .getAll();
  }

}