import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductRoutes } from './product.routing';
import { SharedModule } from 'src/shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CartProductsComponent } from './cart-products/cart-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    CartProductsComponent,
    ProductDetailComponent,
  ],
  exports: [ProductListComponent],
})
export class ProductModule { }
