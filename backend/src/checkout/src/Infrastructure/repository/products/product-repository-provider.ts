import { Provider } from "@nestjs/common";

import { ProductRepository } from "./product-repository";

export const ProductRepositoryProvider: Provider = {
  provide: 'ProductRepo',
  useClass: ProductRepository
}