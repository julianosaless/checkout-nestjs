import { BaseRepository } from "src/common/domain/repository/base.repository";
import { Product } from "src/domain/products/product";

export class ProductRepository extends BaseRepository<Product>{
  where(entity: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

}