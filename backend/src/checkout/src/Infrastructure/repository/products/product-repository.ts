import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


import { BaseRepository } from "src/common/domain/repository/base.repository";
import { Product } from "src/domain/products/product";
import { Promotion } from "src/domain/products/promotion";

@Injectable()
export class ProductRepository extends BaseRepository<Product>{
  readonly promotionRepository: Repository<Promotion>;
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Promotion)
    promotionRepository: Repository<Promotion>) {
    super(productRepository);
    this.promotionRepository = promotionRepository;
  }

}