import { IAggregateRoot } from "src/common/domain/aggregate-root.interface";
import { EntityBase } from "src/common/domain/entity-base";
import { Column, Entity, OneToMany } from "typeorm";
import { CartProduct } from "./cart-product";

@Entity("carts")
export class Cart extends EntityBase implements IAggregateRoot {

  @Column()
  readonly name: string;

  @OneToMany(type => CartProduct, cartProduct => cartProduct.cart)
  private cartProducts: CartProduct[];

  productToDeletes: CartProduct[] = [];

  public get products(): CartProduct[] {
    if (!this.cartProducts) {
      this.cartProducts = [];
    }
    return this.cartProducts ? this.cartProducts : [];
  }

  public get totalCost(): number {
    var allTotals = this.products.map(product => product.total);
    return allTotals.reduce((a, b) => a + b, 0);
  }

  constructor(name: string) {
    super();
    this.name = name;
  }

  public add(cartProduct: CartProduct): void {
    if (cartProduct == null) return;
    this.mergeProduct(cartProduct);
  }

  public remove(productId: string): void {
    const currentProduct = this.cartProducts.filter((cartProduct) => cartProduct.productId === productId)[0];

    const productIndex = this.cartProducts.findIndex((product) => product.productId === productId);
    this.cartProducts = this.cartProducts.slice(0, productIndex);
    this.productToDeletes.push(currentProduct);
  }

  private mergeProduct(cartProduct: CartProduct): void {
    const products = this.cartProducts
      .filter((product) => product.productId === cartProduct.productId);

    if (products && products.length > 0) {
      const totalOfQuantity = products.reduce((a, b) => a + b.quantity, 0);
      cartProduct.changeQuantity(totalOfQuantity);

      products.forEach((product) => this.remove(product.productId));
    }
    this.products.push(cartProduct);
  }
}