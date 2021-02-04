import { Column, Entity, ManyToOne } from "typeorm";

import { EntityBase } from "src/common/domain/entity-base";
import { Product } from "../products/product";
import { Cart } from "./cart";
@Entity("cartproducts")
export class CartProduct extends EntityBase {

  @Column()
  readonly cartId: string;
  @ManyToOne(type => Cart, cart => cart.products)
  readonly cart: Cart;
  @Column()
  readonly quantity: number;
  @Column()
  readonly productId: string;
  @Column()
  readonly price: number;
  readonly product: Product;


  constructor(cartId: string, product: Product, quantity: number) {
    super();
    this.cartId = cartId;
    this.productId = product?.id;
    this.quantity = quantity;
    this.price = product?.price;
    this.product = product;
  }

  public changeQuantity(quantity: number): void {
    quantity += quantity;

    if (quantity <= 0) {
      quantity = 0;
    }
  }

  public get total(): number {
    return this.quantity * this.price;
  }
}