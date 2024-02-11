import { ReactNode, useEffect, useState } from "react";
import { ISelectedProduct, ProductDTO } from "../interfaces/product";
import getAllProducts from "../function/getAllProducts";
import { UserDTO } from "../interfaces/user";
import getUser from "../function/getUser";
import LongCard from "../component/LongCard";
import SortFilter from "../component/sortfilter";
import decreseWishList from "../function/deleteWishList";
import { Link } from "react-router-dom";

function Favorite() {
  const [allProducts, setAllProducts] = useState<ProductDTO[]>([]);
  const [user, setUser] = useState<UserDTO | null>(null);
  const [favorite, setFavorite] = useState<ReactNode>([]);
  const deleteList = async (index: number) => {
    const success = await decreseWishList(index);
    if (success) window.location.reload();
  };
  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllProducts();
      setAllProducts(products);
    }
    fetchProducts();
  }, []);
  useEffect(() => {
    async function fetchUser() {
      const user = await getUser();
      setUser(user);
      const favoriteList: ReactNode = user?.wishlist.map(
        (e: ISelectedProduct, index: number) => {
          let component = <></>;
          allProducts.forEach((element: ProductDTO) => {
            if (element.productId == e.productId)
              component = (
                <LongCard
                  key={e.productId}
                  productImage={e.productImage}
                  productName={element.productName}
                  productPrice={element.productPrice}
                  amount={e.amount}
                  remove={deleteList}
                  index={index}
                  isShowing={true}
                  productId={e.productId}
                />
              );
          });
          return component;
        }
      );
      setFavorite(favoriteList);
    }
    if (allProducts.length != 0) fetchUser();
  }, [allProducts]);
  return (
    <div className="min-h-screen font-sans">
      <div className="flex px-4 py-5">
        <div className="absolute">
          <Link to="/">
            <img src="./src/assets/return.svg" />
          </Link>
        </div>
        <div className="w-screen h-12 flex items-center justify-center">
          <p className="font-bold text-base">Favorite</p>
        </div>
      </div>
      <div className="px-5 py-2.5">
        <SortFilter
          items="Favorite"
          amount={user?.wishlist.length ?? 0}
          products={favorite}
          setProduct={setFavorite}
        />
      </div>
      <div className="flex px-5 flex-wrap gap-x-7 gap-y-5 overflow-scroll">
        {favorite}
      </div>
    </div>
  );
}
export default Favorite;
