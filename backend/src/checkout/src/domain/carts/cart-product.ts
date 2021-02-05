import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

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
  quantity: number;
  @Column()
  readonly productId: string;

  @ManyToOne(type => Product, { nullable: false })
  @JoinColumn()
  product: Product;

  @Column()
  readonly price: number;


  constructor(cartId: string, product: Product, quantity: number) {
    super();
    this.cartId = cartId;
    this.productId = product?.id;
    this.quantity = quantity;
    this.price = product?.price;
    this.product = product;
  }

  public changeQuantity(quantity: number): void {
    this.quantity += quantity;

    if (this.quantity <= 0) {
      this.quantity = 0;
    }
  }

  public get total(): number {
    return this.quantity * this.price;
  }
}