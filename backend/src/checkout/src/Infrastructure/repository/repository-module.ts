import { Module } from '@nestjs/common';

import { ProductRepositoryModule } from './products/product-repository.module';

@Module({
  imports: [
    ProductRepositoryModule,
  ],
  exports: [
    ProductRepositoryModule,
  ],
})
export class RepositoryModule { }