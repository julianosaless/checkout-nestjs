import { Controller, Get, HttpStatus, Put, Param, HttpCode } from "@nestjs/common";
import { get } from "http";
import { ProductDto } from "src/application/products/product-dto";

import { ProductService } from "src/application/products/product-service";
import { PromotionDto } from "src/application/products/promotion-dto";

@Controller('/api/products')
export class ProductController {

  constructor(private service: ProductService) { }

  @Get()
  @HttpCode(200)
  public async getAll(): Promise<ProductDto[]> {
    return await this.service
      .getAll();
  }

  @Get("promotions")
  @HttpCode(200)
  public async getAllPromotions(): Promise<PromotionDto[]> {
    return await this.service.getAllPromotions();
  }
}