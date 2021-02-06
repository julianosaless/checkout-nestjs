import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/index/index.module').then((m) => m.IndexModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/product/product.module').then(
            (m) => m.ProductModule
          ),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
