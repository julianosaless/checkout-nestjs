import { Module } from '@nestjs/common';

import { ProductRepositoryModule } from '../../infrastructure/repository/products/product-repository.module';

@Module({
  imports: [ProductRepositoryModule],
  exports: [ProductRepositoryModule]
})
export class ProductModule { }