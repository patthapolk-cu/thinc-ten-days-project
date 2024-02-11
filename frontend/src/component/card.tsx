
import { addToCart } from "../function/addToCart";

import { IShortProduct } from "../interfaces/product";
import React from "react";
import { Link } from "react-router-dom";
import getProduct from "../api/getProduct";

function Card(props: IShortProduct) {
  const handleClick = () => {
    window.location.href = "/product/"+props.productName;
    
  };

  let component = <></>;

  if (props.isShowing) {
    component = (
      <div className={"bg-white flex flex-col w-40 h-54 gap-1"} onClick={handleClick}>
        <div>
          <img
            src={props.productImage}
            className="rounded-2xl w-40 h-40 object-cover object-center"
            alt={props.productName}
          />
        </div>
        <div>
          <p className="text-xs">{props.productName}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">$ {props.productPrice}</p>
        </div>
      </div>
    );
  }

  return component;
}

export default Card;
