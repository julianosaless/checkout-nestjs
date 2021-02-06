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
    public readonly cartProductRepository: Repository<CartProduct>) {
    super(cartRepository);
  }

  public async removeProduct(productId: string): Promise<void> {
    const currentProduct = (await this.cartProductRepository.find({ productId: productId }))[0];
    if (!currentProduct) return;
    await this.cartProductRepository.delete(currentProduct.id)
  }

  public async findAll(): Promise<Cart[]> {
    return await this.repository.find({ relations: ['cartProducts'] });
  }

  public async findDefault(): Promise<Cart> {
    var defaultCart = (await this.repository.find())[0];
    if (!defaultCart) return;

    const cart = await this.repository.findOne(defaultCart.id, {
      relations: ['cartProducts', 'cartProducts.product', 'cartProducts.product.promotion'],
      order: {
        products: 'ASC',
      },
    });
    return cart;
  }

  public async deleteAll(cartProduct: CartProduct[]): Promise<void> {
    cartProduct.forEach(async (product) => {
      await this.cartProductRepository.delete(product.id)
    });
  }
} 