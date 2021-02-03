import { Component, OnInit } from '@angular/core';
import { tap, take } from 'rxjs/operators';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.loading = true;
    this.productService.getAll()
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        products => {
          this.products = products;
          this.loading = false;
        },
        error => console.log(error));
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product.id)
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe();
  }
}
