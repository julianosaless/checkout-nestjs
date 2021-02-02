import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';
import { ProductService } from './products/product-service';

@Module({
  exports: [ProductService],
  imports: [DomainModule]
})
export class ApplicationModule { }