import Promotion from './promotion';

export default class CartProduct {
  id: string = '';
  productId: string = '';
  productName: string = '';
  quantity: number = 0;
  price: number = 0;
  total: number = 0;
  promotion: Promotion = new Promotion();
}
