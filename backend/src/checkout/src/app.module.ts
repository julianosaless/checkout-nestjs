import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { ApiModule } from './api/ApiModule';
import { Product } from './domain/products/product';
import { Promotion } from './domain/products/promotion';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'checkout',
    username: 'root',
    password: 'checkout',
    synchronize: true,
    logging: true,
    entities: [Product, Promotion]
  }),
    InfrastructureModule,
    DomainModule,
    ApplicationModule,
    ApiModule
  ]
})
export class AppModule { }
