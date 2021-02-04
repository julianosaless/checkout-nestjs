import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


import { BaseRepository } from "src/common/domain/repository/base.repository";
import { Cart } from "src/domain/carts/cart";
import { CartProduct } from "src/domain/carts/cart-product";

@Injectable()
export class CartRepository extends BaseRepository<Cart>{


  constructor(
    @InjectRepository(Cart)
    private readonly cartRepository: Repository<Cart>,
    @InjectRepository(CartProduct)
    private readonly cartProductRepository: Repository<CartProduct>) {
    super(cartRepository);
  }

  public async removeProduct(productId: string): Promise<void> {
    const currentProduct = (await this.cartProductRepository.find({ productId: productId }))[0];
    if (!currentProduct) return;
    await this.cartProductRepository.delete(currentProduct.id)
  }
}