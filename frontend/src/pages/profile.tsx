import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDTO } from "../interfaces/user";
import getUser from "../function/getUser";

const cardnumber: string = "69420911734511000000000";
const address: string = "BKK, Thailand";

function Profile() {
  const [rank, setRank] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState<UserDTO | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      const user = await getUser();
      setUser(user);
      setName(user.name);
      if (user.cash >= 10000) {
        setRank("Gold");
      } else if (user.cash >= 5000) {
        setRank("Silver");
      } else {
        setRank("Bronze");
      }
    }
    fetchProducts();
  }, []);

  // const [inputValue1, setInputValue1] = useState('');

  // const handleInputChange1 = (event: {
  // 	target: { value: SetStateAction<string> };
  // }) => {
  // 	setInputValue1(event.target.value);
  // 	setName(event.target.value);
  // };

  // const [inputValue2, setInputValue2] = useState('');

  // const handleInputChange2 = (event: {
  // 	target: { value: SetStateAction<string> };
  // }) => {
  // 	setInputValue2(event.target.value);
  // };

  return (
    <div className="w-auto min-h-screen font-sans">
      <div className="flex px-5 py-6 items-center justify-between w-full">
        <Link to="/">
          <img src="./src/assets/return.svg" />
        </Link>
        <div className="h-12 flex items-center justify-center">
          <p className="font-bold text-base">User</p>
        </div>
        <div className="w-50px h-50px"></div>
      </div>
      <div className="flex items-center justify-center">
        {rank === "Gold" && (
          <div className="grid grid-cols-1 bg-membercardgold w-350px h-185px">
            <div className="mx-7 mt-6 w-48 text-white font-bold text-16 leading-6 h-14">
              {name}
            </div>
            <div className="flex justify-center items-center font-light text-sm leading-5">
              {cardnumber}
            </div>
            <div className="flex items-end justify-between px-7 pb-6 text-white font-light text-13 leading-5">
              <div className="">
                <p>Balance</p>
                <p className="pt-0.5 text-15 font-medium">${user?.cash}</p>
              </div>
              <div>{rank} user</div>
            </div>
          </div>
        )}
        {rank === "Silver" && (
          <div className="grid grid-cols-1 bg-membercardsilver w-350px h-185px">
            <div className="mx-7 mt-6 w-48 text-white font-bold text-16 leading-6 h-14">
              {name}
            </div>
            <div className="flex justify-center items-center font-light text-sm leading-5">
              {cardnumber}
            </div>
            <div className="flex items-end justify-between px-7 pb-6 text-white font-light text-13 leading-5">
              <div className="">
                <p>Balance</p>
                <p className="pt-0.5 text-15 font-medium">${user?.cash}</p>
              </div>
              <div>{rank} user</div>
            </div>
          </div>
        )}
        {rank === "Bronze" && (
          <div className="grid grid-cols-1 bg-membercardbronze w-350px h-185px rounded-10 ">
            <div className="mx-7 mt-6 w-48 text-white font-bold text-16 leading-6 h-14">
              {name}
            </div>
            <div className="flex justify-center items-center font-light text-sm leading-5">
              {cardnumber}
            </div>
            <div className="flex items-end justify-between px-7 pb-6 text-white font-light text-13 leading-5">
              <div className="">
                <p>Balance</p>
                <p className="pt-0.5 text-15 font-medium">${user?.cash}</p>
              </div>
              <div>{rank} user</div>
            </div>
          </div>
        )}
      </div>
      <div className="flex-box px-5 pt-6 pb-2">
        <p>Name</p>
        <div className="mt-2.5 pl-3 items-center gap-2 flex-shrink-0 h-50px p-3 w-full bg-profile-box-color rounded-10">
          {/* <input
						type="text"
						placeholder={name}
						value={inputValue1}
						onChange={handleInputChange1}
						className="focus:outline-none w-full bg-profile-box-color text-15 font-light"
					/> */}
          <p className="w-full bg-profile-box-color text-15 font-light  text-name-address-color">
            {user?.name}
          </p>
        </div>
      </div>
      <div className="flex-box py-6 px-5">
        <p>Address</p>
        <div className="mt-2.5 pl-3 items-center gap-2 flex-shrink-0 h-50px p-3 w-full bg-profile-box-color rounded-10">
          {/* <input
						type="text"
						placeholder={address}
						value={inputValue2}
						onChange={handleInputChange2}
						className="focus:outline-none w-full bg-profile-box-color text-15 font-light"
					/> */}
          <p className="w-full bg-profile-box-color text-15 font-light text-name-address-color">
            {address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
