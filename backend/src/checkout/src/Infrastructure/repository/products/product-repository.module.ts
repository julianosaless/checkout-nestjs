import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/domain/products/product';
import { ProductRepositoryProvider } from './product-repository-provider';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductRepositoryProvider],
  exports: [ProductRepositoryProvider],
})
export class ProductRepositoryModule { }