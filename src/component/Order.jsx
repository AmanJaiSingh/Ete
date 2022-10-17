import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="flex justify-center items-center bg-orange-400 text-9xl text-white h-screen flex-col">
      <div>Order Done</div>
      <Link to="/">
        <h1 className="text-4xl cursor-pointer  pt-20 text-white font-bold">
          Back to Home Page
        </h1>
      </Link>
    </div>
  );
};

export default Order;
