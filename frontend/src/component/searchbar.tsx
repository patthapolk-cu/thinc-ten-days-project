import { SetStateAction, useState } from "react";
import querySearch from "../function/querySearch";
import { Link } from "react-router-dom";
import { ProductDTO } from "../interfaces/product";

function SearchBar(props: {
  productList: ProductDTO[];
  setProductList(products: any): void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center gap-6 pb-5">
      <div className="flex-1 items-center h-12 p-3 flex-shrink-0 bg-gray-100 rounded-10">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          className="focus:outline-none bg-gray-100 w-full"
        />
      </div>
      <Link
        to="/productlist"
        onClick={async () => {
          const productJson = await querySearch(inputValue);
          props.setProductList(productJson);
        }}
        type="submit"
        className="w-12 h-12 flex-shrink-0 rounded-10 bg-search-box-color items-center justify-center flex"
      >
        <img src="./src/assets/searchbutton.svg" alt="Search" />
      </Link>
    </div>
  );
}

export default SearchBar;
