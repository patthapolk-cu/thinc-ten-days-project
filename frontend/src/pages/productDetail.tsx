import React, { useState } from "react";
import getProduct from "../api/getProduct";
import { useLocation } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const path = location.pathname;
  const productWord = path.replace(/\/product\//, '')
  console.log(getProduct(productWord));
  const [amount, setAmount] = useState(1);
  
  const handlePositiveButtonClick = () => {
    setAmount(amount + 1);
  };

  const handleNegativeButtonClick = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const getAmount = () => {
    return amount;
  };
  const handleBackButtonClick = () => {
    console.log("s");
  };
  const handleFavoriteButtonClick = () => {
    console.log("s");
  };
  const handleCartButtonClick = () => {
    console.log("s");
  };

  return (
    <div className="block scroll-y">
      <div className="object-contain h-80 w-full top-0 overflow-hidden">
        <img src="./src/assets/product.svg" className=" h-min-80 w-full"></img>
      </div>
      <div className="h-fit px-5 block mt-6 mb-4">
        <div className="flex">
          <div className="flex w-fit h-fit text-gray-500 font-inter text-base font-normal leading-5 ">
            Baby products
          </div>
          <div className="ml-auto flex w-min h-fit text-gray-500 font-inter text-base font-normal leading-5 ">
            Price
          </div>
        </div>
        <div className="flex">
          <div className="w-3/5 text-gray-900 font-inter text-xl font-semibold leading-6">
            Baby girl cute yellow bow for infant
          </div>
          <div className="ml-auto w-fit text-right text-dark-dark font-inter text-xl font-semibold leading-6">
            $99
          </div>
        </div>
      </div>
      <div className=" border-y border-blue-200 flex b-y-2 mx-5 py-3 gap-x-2.5 ">
        <div className="rounded-full w-10 h-10  overflow-hidden ">
          <img
            src="./src/assets/product.svg"
            className="  h-full object-cover"
          ></img>
        </div>
        <span className=" w-full inline-block align-middle text-gray-900 font-inter text-base font-medium">
          Methee Heephong
        </span>
      </div>
      <div className="flex mx-5 mt-4 text-gray-500 font-inter text-base font-normal leading-5">
        Baby girl cute yellow bow for infant very good thank you dalai
        chotisalikorn surenjargal eiei suitable for kids wear in many occasions
        very cute so adorable super duper soft with good material Baby girl cute
        yellow bow for infant very good thank you dalai Baby girl cute yellow
        bow for infant very good thank you dalai chotisalikorn surenjargal eiei
        suitable for kids wear in many occasions very cute so adorable super
        duper soft with good material Baby girl cute yellow bow for infant very
        good thank you dalai Baby girl cute yellow bow for infant very good
        thank you dalai chotisalikorn surenjargal eiei suitable for kids wear in
        many occasions very cute so adorable super duper soft with good material
        Baby girl cute yellow bow for infant very good thank you dalai Baby girl
        cute yellow bow for infant very good thank you dalai chotisalikorn
        surenjargal eiei suitable for kids wear in many occasions very cute so
        adorable super duper soft with good material Baby girl cute yellow bow
        for infant very good thank you dalai
      </div>

      <button
        onClick={handleBackButtonClick}
        className="absolute top-0 left-0 fixed mx-5 my-6 "
      >
        <img src="./src/assets/return.svg" />
      </button>
      <div className="absolute flex top-0 right-0 mx-5 my-6 gap-3.5 ">
        <button onClick={handleFavoriteButtonClick} className=" ">
          <img src="./src/assets/favoriteButton.svg" />
        </button>
        <button onClick={handleCartButtonClick} className="">
          <img src="./src/assets/addCartButton.svg" />
        </button>
      </div>
      <div className="p-3 flex w-full justify-center mb-20 gap-3.5">
        <button onClick={handleNegativeButtonClick} className="">
          <img src="./src/assets/negative.svg" />
        </button>
        <div className="font-inter text-base font-medium leading-6">
          {getAmount()}
        </div>

        <button onClick={handlePositiveButtonClick} className="">
          <img src="./src/assets/positive.svg" />
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
