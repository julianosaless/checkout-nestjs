import { Injectable } from "@nestjs/common";

import { BaseRepository } from "src/common/domain/repository/base.repository";
import { Product } from "src/domain/products/product";

@Injectable()
export class ProductRepository extends BaseRepository<Product>{
}