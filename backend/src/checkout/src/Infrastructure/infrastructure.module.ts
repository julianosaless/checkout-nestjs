import { Module } from '@nestjs/common';

import { CartRepositoryModule } from './repository/carts/cart-repository.module';
import { ProductRepositoryModule } from './repository/products/product-repository.module';

@Module({
  imports: [ProductRepositoryModule, CartRepositoryModule],
  exports: [ProductRepositoryModule, CartRepositoryModule],
})
export class InfrastructureModule { }