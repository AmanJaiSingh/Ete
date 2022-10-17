import React, { useState } from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";
import Modal from "../plats/Modal";
import CartItem from "../plats/CartItem";
import { Link } from "react-router-dom";

const Cart = (props) => {
  // console.log(props.items);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };

  return (
    <>
      <div onClick={handleModal} className=" flex justify-around text-2xl ">
        <span className="hover:font-bold">Cart</span>
        <Badge className="mt-1.5" badgeContent={props.count} color="primary">
          <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
        </Badge>
      </div>

      {showModal && (
        <Modal onClose={handleModal}>
          <div className="contain">
            <div className="font-bold text-2xl ">Checkout Modal</div>
            {props.count > 0 ? (
              props.items.map((item) => {
                return (
                  <CartItem
                    onAddItem={props.onAddItem}
                    onRemoveItem={props.onRemoveItem}
                    data={item}
                    key={item.id}
                  />
                );
              })
            ) : (
              <div>Please Add some Items</div>
            )}
          </div>
          {props.count > 0 && (
            <div className="checkout-modal_footer">
              <div className="totalAmount ">
                <h4 className="text-xl">Total Amount: </h4>
                <h4 className="font-semibold">
                  {props.items.reduce((previous, current) => {
                    return (
                      previous + current.discountedPrice * current.quantity
                    );
                  }, 0)}
                  <span style={{ marginLeft: "4px" }}>INR</span>
                </h4>
              </div>
              <Link to="/order">
                <button className="bg-orange-500 rounded-md p-2 text-white mt-1 hover:bg-orange-800 duration-200">
                  Order Now
                </button>
              </Link>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Cart;
