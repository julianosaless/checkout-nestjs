import { Inject, Injectable } from "@nestjs/common";

import { ProductRepository } from 'src/infrastructure/repository/products/product-repository';
import { Product } from "src/domain/products/product";
import { ProductDto } from "./product-dto";
import { PromotionDto } from "./promotion-dto";

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductService {

  constructor(@ProductRepo() private readonly repository: ProductRepository,
  ) { }

  public async get(id: string): Promise<ProductDto> {
    const product = await this.repository.find(id);
    return this.map(product);
  }

  public async getAll(): Promise<ProductDto[]> {
    const products = await this.repository.findAll();
    return products.map(product => this.map(product));
  }

  public async updatePromotionForProduct(productId: string, promotionId: string = null): Promise<void> {
    const product = await this.repository.find(productId);
    product.addPromotion(promotionId);
    await this.repository.update(product.id, product);
  }

  public async getAllPromotions(): Promise<PromotionDto[]> {
    const promotions = await this.repository.promotionRepository.find()
    return promotions.map(promotion => new PromotionDto(promotion.id, promotion.name));
  }

  private map(product: Product): ProductDto {
    return new ProductDto(product.id, product.name, product.price, product.promotionId);
  }
}