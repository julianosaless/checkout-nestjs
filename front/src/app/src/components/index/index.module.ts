import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ProductModule } from '../product/product.module';
import { IndexRoutes } from './index.routing';
import { IndexComponent } from './index.component';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    SharedModule,
    RouterModule.forChild(IndexRoutes),
  ],
  declarations: [
    IndexComponent,
    NavbarComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent],
  providers: [],
})
export class IndexModule { }
