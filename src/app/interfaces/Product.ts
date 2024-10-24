export default interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  createdAt: Date | string;

  quantity?: number;
  totalPrice?: number;
}
