import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/domain/products/product';
import { Promotion } from 'src/domain/products/promotion';
import { ProductRepositoryProvider } from './product-repository-provider';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Promotion])],
  providers: [ProductRepositoryProvider],
  exports: [ProductRepositoryProvider],
})
export class ProductRepositoryModule { }