import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Cart } from 'src/domain/carts/cart';
import { CartProduct } from 'src/domain/carts/cart-product';
import { Product } from 'src/domain/products/product';
import { CartRepositoryProvider } from './cart-repository-provider';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, CartProduct])],
  providers: [CartRepositoryProvider],
  exports: [CartRepositoryProvider],
})
export class CartRepositoryModule { }