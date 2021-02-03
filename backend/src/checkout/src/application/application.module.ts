import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

import { DomainModule } from '../domain/domain.module';
import { ProductService } from './products/product-service';


@Module({
  imports: [InfrastructureModule, DomainModule],
  providers: [ProductService],
  exports: [ProductService]
})
export class ApplicationModule { }