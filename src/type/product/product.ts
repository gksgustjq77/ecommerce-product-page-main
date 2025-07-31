export interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  count?: number;
  images?: {
    large: string;
    thumbnail: string;
  };
}
