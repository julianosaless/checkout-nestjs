import { Inject, Injectable } from "@nestjs/common";
import { Cart } from "src/domain/carts/cart";
import { CartProduct } from "src/domain/carts/cart-product";

import { CartRepository } from "src/infrastructure/repository/carts/cart-repository";
import { ProductRepository } from "src/infrastructure/repository/products/product-repository";
import { CartDto } from "./cart-dto";
import { CartProductDto } from "./cart-product-dto";

const CartRepo = () => Inject('CartRepo');
const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class CartService {

  constructor(
    @CartRepo() private readonly repository: CartRepository,
    @ProductRepo() private readonly productRepository: ProductRepository
  ) { }

  public async add(cartProducts: CartProductDto[]): Promise<CartDto> {
    let cart = (await this.repository.findAll())[0];
    if (!cart) {
      cart = new Cart("default cart");
      await this.repository.insert(cart);
    }

    cartProducts.forEach(() => async (cartProduct: CartProductDto) => {
      const product = await this.productRepository.find(cartProduct.productId);

      cart.add(new CartProduct(cart.id, product, cartProduct.quantity));
      this.repository.update(cart.id, cart);

    });

    return new CartDto("", "", []);
  }

  public async removeProduct(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }

  public async getCurrentCart(): Promise<CartDto> {
    const currentCart = (await this.repository.findAll())[0]
    if (!currentCart) {
      return new CartDto("", "", []);
    }
    return new CartDto("", "", []);
  }

}