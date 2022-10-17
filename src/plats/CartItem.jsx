import React from "react";

const CartItem = (props) => {
  function add(e) {
    props.onAddItem(props.data.id);
  }
  function remove(e) {
    props.onRemoveItem(props.data.id);
  }
  return (
    <>
      <div className="  justify-between flex  my-5 mx-10 rounded-lg  ">
        <div className="flex">
          <div className="px-2   flex flex-col justify-evenly">
            <div className="flex h-20 justify-center mb-3">
              <img src={`img/${props.data.thumbnail}`} alt="Data Img" />
            </div>
          </div>
          <div className="flex flex-col justify-center -mt-3">
            <div className="font-bold">{props.data.title}</div>
            <div>
              <span className=" font-semibold pr-2">
                ₹{props.data.discountedPrice}
              </span>
              <span className=" text-sm line-through ">
                ₹{props.data.price}
              </span>
            </div>
          </div>
        </div>
        {props.data.quantity > 0 ? (
          <>
            <div className="flex w-32 justify-between pt-3">
              <button
                className="w-8 h-8 text-white font-bold bg-orange-500 rounded-md"
                onClick={remove}
                name="dec"
              >
                -
              </button>
              <div className="font-bold pt-1">{props.data.quantity}</div>
              <button
                onClick={add}
                className="w-8 text-white font-bold h-8 bg-orange-500 rounded-md"
                name="inc"
              >
                +
              </button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              name="Add"
              onClick={add}
              className="rounded-lg bg-orange-400 flex justify-center px-3 pt-1 h-10 "
            >
              Add to card
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartItem;
