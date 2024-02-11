import { useState } from "react";
import { IShortProductCart } from "../interfaces/product";
import increaseCartList from "../function/increaseCartList";

function CartCard(props: IShortProductCart) {
  const [amount, setAmount] = useState<number>(props.amount);
  const [status, setStatus] = useState<boolean>(props.status);
  let component = <></>;
  props.isShowing
    ? (component = (
        <div className="flex w-full">
          <div className="flex pr-5 pl-2 justify-center items-center">
            <button onClick={() => setStatus(!status)}>
              {status ? (
                <img src="./src/assets/status_checked.svg" />
              ) : (
                <img src="./src/assets/status_unchecked.svg" />
              )}
            </button>
          </div>
          <div className="bg-white gap-1 w-full rounded-10 shadow-lg shadow-gray-500 bg-blend-normal	  py-1.5 font-sans">
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
                      const incrementation = await increaseCartList(
                        props.index,
                        -1
                      );
                      if (incrementation) {
                        setAmount(Math.max(0, amount - 1));
                        window.location.reload();
                      }
                    }}
                    className="pr-3.5"
                  >
                    <img src="./src/assets/circle-minus.svg" />
                  </button>
                  <p>{amount}</p>
                  <button
                    onClick={async () => {
                      const incrementation = await increaseCartList(
                        props.index,
                        1
                      );
                      if (incrementation) {
                        setAmount(amount + 1);
                        window.location.reload();
                      }
                    }}
                    className="pl-3.5"
                  >
                    <img src="./src/assets/circle-plus.svg" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <button onClick={() => props.remove(props.index)}>
                  <img className="w-6 h-6" src="./src/assets/trash.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    : (component = <></>);
  return component;
}

export default CartCard;
