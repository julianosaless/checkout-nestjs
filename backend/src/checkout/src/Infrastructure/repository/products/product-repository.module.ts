import { Module } from '@nestjs/common';

import { ProductRepository } from './product-repository';

@Module({
  exports: [ProductRepository],
})
export class ProductRepositoryModule { }