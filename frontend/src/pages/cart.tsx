import { ReactNode, useEffect, useState } from "react";
import CartCard from "../component/cartCard";
import SortFilter from "../component/sortfilter";
import { ISelectedProduct, ProductDTO } from "../interfaces/product";
import getAllProducts from "../function/getAllProducts";
import { UserDTO } from "../interfaces/user";
import getUser from "../function/getUser";
import decreseCartList from "../function/deleteCart";
import { Link } from "react-router-dom";
import handlePayment from "../function/handlePayment";
import clearCart from "../function/clearCart";
function Cart() {
  const [allProducts, setAllProducts] = useState<ProductDTO[]>([]);
  const [user, setUser] = useState<UserDTO | null>(null);
  const [cart, setCart] = useState<ReactNode>([]);
  const [enoughMoney, setEnoughMoney] = useState<boolean>(true);
  const [subtotal, setSubtotal] = useState<number>(0);
  const setTotal = () => {
    let newSubtotal = 0;
    const money = user?.cash ?? 0;
    user?.cart.forEach((e: any) => {
      const matchedProduct = allProducts.find(
        (element: any) => element.productId === e.productId
      );
      if (matchedProduct) {
        newSubtotal += matchedProduct.productPrice * e.amount;
      }
    });
    setSubtotal(newSubtotal);
    setEnoughMoney(subtotal <= money);
  };
  const deleteList = async (index: number) => {
    const success = await decreseCartList(index);
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
    setTotal();
  }, [user, allProducts]);

  useEffect(() => {
    async function fetchProducts() {
      const user = await getUser();
      setUser(user);
      const cartList: ReactNode = user?.cart.map(
        (e: ISelectedProduct, index: number) => {
          let component = <></>;
          allProducts.forEach((element: ProductDTO) => {
            if (element.productId == e.productId)
              component = (
                <CartCard
                  key={e.productId}
                  productImage={element.productImage}
                  productName={element.productName}
                  productPrice={element.productPrice}
                  amount={e.amount}
                  status={true}
                  remove={deleteList}
                  index={index}
                  isShowing={true}
                  productId={element.productId}
                />
              );
          });
          return component;
        }
      );
      setCart(cartList);
    }
    fetchProducts();
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
          <p className="font-bold text-base">Cart</p>
        </div>
      </div>
      <div className="px-5 py-2.5">
        <SortFilter
          items="Cart"
          amount={user?.cart.length ?? 0}
          products={cart}
          setProduct={setCart}
        />
      </div>
      <div className="flex px-5 flex-wrap gap-x-7 gap-y-5 overflow-scroll">
        {cart}
      </div>
      <div className="flex items-center justify-between w-full h-20 px-5 fixed bottom-0 border-0 shadow-custom z-50 bg-white">
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-gray-500">
            <p>My balance : {user?.cash}</p>
            <p>Subtotal : {subtotal}</p>
          </div>
          {enoughMoney && (
            <Link to="../payment">
              <button
                onClick={async () => {
                  await handlePayment(1, subtotal);
                  await clearCart();
                }}
                className="bg-search-box-color py-3 px-7 rounded-xl text-white font-medium"
              >
                จ่ายตอนนี้
              </button>
            </Link>
          )}
          {!enoughMoney && (
            <button
              onClick={() => {
                handlePayment(1, subtotal);
              }}
              className="bg-red-800 py-3 px-7 rounded-xl text-white font-medium"
            >
              เงินไม่พอ ไอควาย
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
