import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { Cart } from 'src/shared/models/cart';
import CartProduct from 'src/shared/models/cart-product';

import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.scss'],
})

export class CartProductsComponent implements OnInit {
  cart: Cart = new Cart();
  showDataNotFound = true;
  loading = false;

  messageTitle = 'No Products Found in Cart';
  messageDescription = 'Please, Add Products to Cart';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCartProduct();
  }


  getCartProduct(): void {
    this.loading = true;
    this.productService.getCart()
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        cart => {
          this.loading = false;
          this.cart = cart;
        },
        error => console.log(error));
  }

  removeCartProduct(product: CartProduct): void {
    this.productService.removeCartProduct(product)
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        cart => {

          this.cart = cart;
        },
        error => console.log(error));
  }

  plusCartProduct(product: CartProduct): void {
    this.productService.addToCart(product.productId)
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        cart => {
          this.cart = cart;
        },
        error => console.log(error));
  }

  minusCartProduct(product: CartProduct): void {
    if (product.quantity === 0) {
      return;
    }

    this.productService.addToCart(product.productId, -1)
      .pipe(
        tap(response => console.log(response)),
        take(1)
      )
      .subscribe(
        cart => {
          this.cart = cart;
        },
        error => console.log(error));
  }
}
