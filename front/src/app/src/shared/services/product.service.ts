import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cart } from '../models/cart';
import CartProduct from '../models/cart-product';
import { Product } from '../models/product';
import Promotion from '../models/promotion';

@Injectable()
export class ProductService {

  // needs change to use a service
  private url = 'http://localhost:3000/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getAllPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.url}/promotions`);
  }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(`${this.url}/Carts`);
  }

  addToCart(productId: string, quantity = 1): Observable<Cart> {
    const cart = new Cart();
    const item = new CartProduct();

    item.productId = productId;
    item.quantity = quantity;
    cart.products.push(item);

    return this.http.post<Cart>(`${this.url}/carts`, cart);
  }

  removeCartProduct(product: CartProduct): Observable<Cart> {
    return this.http.delete<Cart>(`${this.url}/${product.id}/carts`);
  }

  changePromotion(productId: string, promotionId: string): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${productId}/promotions/${promotionId}`, {});
  }
}

