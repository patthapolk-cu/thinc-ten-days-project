import { useState } from "react";
import { IShortProductFavorite } from "../interfaces/product";
import increaseWishList from "../function/incrementWishlist";
function LongCard(props: IShortProductFavorite) {
  const [amount, setAmount] = useState<number>(props.amount);
  let component = <></>;
  props.isShowing
    ? (component = (
        <div className="bg-white w-full gap-1 rounded-10 shadow-lg shadow-gray-500 bg-blend-normal py-1.5 font-sans">
          <div className="flex justify-between px-3 py-2.5">
            <div>
              <img
                src={props.productImage}
                className="object-cover rounded-2xl w-28 h-28 object-center"
              />
            </div>
            <div className="px-2.5 w-3/5">
              <div>
                <p className="text-sm font-bold py-2">{props.productName}</p>
              </div>
              <div>
                <p className="text-xs font-thin">$ {props.productPrice}</p>
              </div>
              <div className="flex pt-9">
                <button
                  onClick={async () => {
                    const incrementation = await increaseWishList(
                      props.index,
                      -1
                    );
                    if (incrementation) setAmount(Math.max(amount - 1, 0));
                  }}
                  className="pr-3.5"
                >
                  <img src="./src/assets/circle-minus.svg" />
                </button>
                <p>{amount}</p>
                <button
                  onClick={async () => {
                    const incrementation = await increaseWishList(
                      props.index,
                      1
                    );
                    if (incrementation) setAmount(Math.max(amount + 1, 0));
                  }}
                  className="pl-3.5"
                >
                  <img src="./src/assets/circle-plus.svg" />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <button>
                <img className="w-6 h-6" src="./src/assets/shopping-cart.svg" />
              </button>
              <button
                onClick={async () => {
                  props.remove(props.index);
                }}
              >
                <img className="w-6 h-6" src="./src/assets/trash.svg" />
              </button>
            </div>
          </div>
        </div>
      ))
    : (component = <></>);
  return component;
}

export default LongCard;
