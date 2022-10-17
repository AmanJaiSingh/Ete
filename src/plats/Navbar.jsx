import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";
import Cart from "../component/Cart";
import { Link } from "react-router-dom";

function Navbar(props) {
  // console.log(props.items);
  return (
    <div className="container bg-zinc-700 w-full">
      <div className="flex justify-between p-2 items-center">
        <div className=" hover:text-orange-300 cursor-pointer text-3xl ml-3 pb-1 text-gray-200">
          <Link to="/card">AmanKart</Link>
          <ShoppingCartIcon />
        </div>
        <div className="-ml-10 rounded-3xl flex bg-black">
          <input
            type="text"
            placeholder="Enter product Name"
            className="w-96"
          />
          <button className="bg-orange-400 px-1 text-xl p-1">
            <SearchIcon />
          </button>
        </div>
        <div className="pl-10 w-40 cursor-pointer text-white hover:font-bold hover:text-orange-300">
          <Cart
            count={props.Count}
            items={props.items}
            onAddItem={props.onAddItem}
            onRemoveItem={props.onRemoveItem}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
