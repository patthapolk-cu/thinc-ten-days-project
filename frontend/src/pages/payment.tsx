import { Link } from "react-router-dom";

function PaymentComplete() {
  return (
    <div className="flex flex-col w-full h-fit my-48 items-center gap-y-4">
      <div className="">
        <img src="./src/assets/payment.svg" className="animate-bounce-short" />
      </div>
      <div>
        <p className="text-3xl font-semibold">Payment Completed!</p>
      </div>
      <div>
        <p className="text-gray-400 text-base">Thank you for your order</p>
      </div>
      <Link to="/" className="bg-search-box-color py-3 px-7 rounded-xl">
        <p className="text-white font-medium">Back to shopping</p>
      </Link>
    </div>
  );
}

export default PaymentComplete;
