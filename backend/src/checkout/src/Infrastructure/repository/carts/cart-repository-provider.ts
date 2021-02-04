import { Provider } from "@nestjs/common";

import { CartRepository } from "./cart-repository";

export const CartRepositoryProvider: Provider = {
  provide: 'CartRepo',
  useClass: CartRepository
}