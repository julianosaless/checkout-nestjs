import CartProduct from './cart-product';

export class Cart {
  name: string = '';
  products: CartProduct[] = [];
  total: number = 0;
}
