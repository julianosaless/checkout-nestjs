import { Controller, Get, HttpStatus, Put, Param } from "@nestjs/common";
import { ProductService } from "src/application/products/product-service";

@Controller('/api/products')
export class ProductController {

  constructor(private service: ProductService) { }

  @Get()
  public Get(): HttpStatus {
    return;
  }

}