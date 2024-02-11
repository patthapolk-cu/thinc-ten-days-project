export interface IShortProduct {
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  index: number;
  isShowing: boolean;
}
export interface IShortProductFavorite extends IShortProduct {
  amount: number;
  remove(index: number): Promise<void>;
}
export interface IShortProductCart extends IShortProductFavorite {
  status: boolean;
}
export interface ISelectedProduct {
  productPrice: number;
  productName: string;
  productImage: string;
  orderid: number;
  productId: number;
  amount: number;
}
export interface ProductDTO {
  productImage: string;
  productName: string;
  productPrice: number;
  tag: string[];
  productId: number;
  productDetail: string;
  productStock: number;
  productOwnerId: number;
}
