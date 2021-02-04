import { Module } from '@nestjs/common';

import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { DomainModule } from '../domain/domain.module';
import { CartService } from './carts/cart-service';
import { ProductService } from './products/product-service';


@Module({
  imports: [InfrastructureModule, DomainModule],
  providers: [ProductService, CartService],
  exports: [ProductService, CartService]
})
export class ApplicationModule { }