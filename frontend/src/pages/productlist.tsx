import SearchBar from "../component/searchbar";
import SortFilter from "../component/sortfilter";
import { ReactNode, useEffect, useState } from "react";
import { ProductDTO } from "../interfaces/product";
import getAllProducts from "../function/getAllProducts";
import Card from "../component/card";

function ProductList() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [productList, setProductList] = useState<ReactNode>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    const allProducts: ReactNode = products.map(
      (product: ProductDTO, index: number) => {
        return (
          <Card
            productId={product.productId}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            index={index}
            isShowing={true}
          />
        );
      }
    );
    setProductList(allProducts);
  }, [products]);
  return (
    <div className="p-5">
      <SearchBar productList={products} setProductList={setProducts} />
      <SortFilter
        items="Baby products"
        amount={products.length}
        products={productList}
        setProduct={setProductList}
      />
      <div className="flex flex-wrap gap-x-7 gap-y-5 overflow-scroll">
        {productList}
      </div>
    </div>
  );
}

export default ProductList;
