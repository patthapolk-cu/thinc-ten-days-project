import { IShortProductCart } from "../interfaces/product";
import getUser from "./getUser";
import increaseCartList from "./increaseCartList";
const addCart = async (product: IShortProductCart) => {
  try {
    const response = await fetch(`http://localhost:3000/api/members/1`);
    if (response.ok) {
      const memberInfo = await response.json();
      let new_cart = memberInfo.cart;
      new_cart = [
        ...new_cart,
        { productId: product.productId, orderd: 4, amount: 1 },
      ];
      const updatedMember = { ...memberInfo, cart: new_cart };
      const updateResponse = await fetch(
        `http://localhost:3000/api/members/1`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedMember),
        }
      );
      if (updateResponse.ok) {
        console.log("Success");
        return true;
      } else {
        console.log("Error");
        return false;
      }
    } else {
      console.log("Member not found");
      return false;
    }
  } catch (error) {
    console.log("Error processing incrementation");
    return false;
  }
};

export const addToCart = async (product: IShortProductCart) => {
  const user = await getUser();
  let cc: boolean = true;
  let count: number = 0;
  user?.cart.forEach((element: IShortProductCart) => {
    if (element.productId == product.productId) {
      increaseCartList(count, 1);
      cc = false;
    }
    count++;
  });
  if (cc) addCart(product);
};
