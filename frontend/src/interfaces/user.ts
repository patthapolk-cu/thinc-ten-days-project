import { ISelectedProduct } from "./product";

export interface UserDTO {
  name: string;
  userid: number;
  cash: number;
  product: number[];
  wishlist: ISelectedProduct[];
  cart: ISelectedProduct[];
}
