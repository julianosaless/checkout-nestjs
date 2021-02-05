import { Controller, Get, HttpStatus, Put, Param, HttpCode, Delete, Post, Body } from "@nestjs/common";
import { CartDto } from "src/application/carts/cart-dto";
import { CartService } from "src/application/carts/cart-service";
import { ProductDto } from "src/application/products/product-dto";

import { ProductService } from "src/application/products/product-service";
import { PromotionDto } from "src/application/products/promotion-dto";

@Controller('/api/products')
export class ProductController {

  constructor(private service: ProductService, private cartService: CartService) { }

  @Get("promotions")
  @HttpCode(200)
  public async getAllPromotions(): Promise<PromotionDto[]> {
    return await this.service
      .getAllPromotions();
  }

  @Get("Carts")
  @HttpCode(201)
  public async getAllCart(): Promise<CartDto> {
    return await this.cartService
      .getCurrentCart();
  }

  @Post("carts")
  @HttpCode(201)
  public async saveCarts(@Body() cart: CartDto): Promise<CartDto> {
    return await this.cartService.add(cart.products);
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

  @Delete(':productId/carts')
  @HttpCode(200)
  async delete(@Param('productId') id: string): Promise<CartDto> {
    await this.cartService.removeProduct(id);
    return await this.cartService.getCurrentCart();
  }

  @Post()
  @HttpCode(201)
  async post(@Body() cart: CartDto): Promise<CartDto> {
    return await this.cartService.add(cart.products)
  }


}