import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-between w-full h-20 px-5 fixed bottom-0 border-0 shadow-custom z-40 bg-white">
      <Link
        to="/"
        className="flex items-center justify-center w-20 p-7 flex-shrink-0"
      >
        <img src="./src/assets/footer1.svg" className="" />
      </Link>
      <Link
        to="/cart"
        className="flex items-center justify-center w-20 p-7 flex-shrink-0"
      >
        <img src="./src/assets/footer2.svg" className="" />
      </Link>
      <Link
        to="/favorite"
        className="flex items-center justify-center w-20 p-7 flex-shrink-0"
      >
        <img src="./src/assets/footer3.svg" className="" />
      </Link>
      <Link
        to="/profile"
        className="flex items-center justify-center w-20 p-7 flex-shrink-0"
      >
        <img src="./src/assets/footer4.svg" className="" />
      </Link>
    </div>
  );
}

export default Footer;
