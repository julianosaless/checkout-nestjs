import { Injectable } from "@nestjs/common";

import { BaseRepository } from "src/common/domain/repository/base.repository";
import { ProductRepository } from 'src/infrastructure/repository/products/product-repository';
import { Product } from "src/domain/products/product";
import { ProductDto } from "./product-dto";

@Injectable()
export class ProductService {

  private repository: BaseRepository<Product>;
  constructor(private productRepository: ProductRepository) {
    this.repository = productRepository;
  }

  public async get(id: string): Promise<ProductDto> {
    const product = await this.repository.find(id);
    return this.map(product);
  }

  public async getAll(): Promise<ProductDto[]> {
    const products = await this.repository.findAll();
    return products.map(product => this.map(product));
  }

  private map(product: Product): ProductDto {
    return new ProductDto(product.id, product.name, product.price, product.promotionId);
  }
}