import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


import { BaseRepository } from "src/common/domain/repository/base.repository";
import { Product } from "src/domain/products/product";

@Injectable()
export class ProductRepository extends BaseRepository<Product>{
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>) {
    super(productRepository);
  }
}