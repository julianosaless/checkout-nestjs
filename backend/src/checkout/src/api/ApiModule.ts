import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';

import { DomainModule } from 'src/domain/domain.module';
import { ProductController } from './Products/ProductController';

@Module({
  controllers: [
    ProductController,
  ],
  imports: [DomainModule, ApplicationModule]
})

export class ApiModule { }