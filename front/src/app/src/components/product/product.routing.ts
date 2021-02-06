import { Routes } from '@angular/router';

import { IndexComponent } from '../index/index.component';
import { CartProductsComponent } from './cart-products/cart-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const ProductRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'all',
        component: ProductListComponent,
      },
      {
        path: 'cart-items',
        component: CartProductsComponent,
      },
      {
        path: ':id',
        component: ProductDetailComponent,
      },
    ],
  },
];
