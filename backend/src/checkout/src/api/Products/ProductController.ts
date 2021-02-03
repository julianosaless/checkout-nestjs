import { Controller, Get, HttpStatus, Put, Param, HttpCode } from "@nestjs/common";
import { ProductDto } from "src/application/products/product-dto";

import { ProductService } from "src/application/products/product-service";

@Controller('/api/products')
export class ProductController {

  constructor(private service: ProductService) { }

  @Get()
  @HttpCode(200)
  async getAll(): Promise<ProductDto[]> {
    return await this.service
      .getAll();
  }

}