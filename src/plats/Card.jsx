import React, { useState } from "react";
import Modal from "./Modal";

function Card(props) {
  // const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function clicked(e) {
    // console.log(props.id);
    if (e.target.name === "inc") {
      // setCount(count + 1);
      props.onAddItem(props.id);
    }
    if (e.target.name === "dec") {
      // setCount(count - 1);
      props.onRemoveItem(props.id);
    }
    if (e.target.name === "Add") {
      // setCount(count + 1);
      props.onAddItem(props.id);
    }
  }

  const handleModal = () => {
    setShowModal((previousState) => !previousState);
  };
  // console.log(props);
  return (
    <>
      <div className=" border-2 justify-between flex flex-col my-5 mx-10 rounded-lg   w-64 h-80">
        <div
          onClick={handleModal}
          className="px-2 w-full h-64  flex flex-col justify-evenly"
        >
          <div className="h-60 flex justify-center mb-3">
            <img src={`img/${props.data.thumbnail}`} alt="Data Img" />
          </div>
          <div className="flex ">
            <div className="px-2 line-through">₹ {props.data.price}</div>
            <div className="px-2 ">₹{props.data.discountedPrice}</div>
          </div>
          <div className="px-2  font-medium">{props.data.title}</div>
        </div>
        {props.data.quantity > 0 ? (
          <>
            <div className="flex justify-between">
              <button
                className="w-10 h-10 bg-orange-400 rounded-md"
                onClick={clicked}
                name="dec"
              >
                -
              </button>
              <div className="pt-1">{props.data.quantity}</div>
              <button
                onClick={clicked}
                className="w-10 h-10 bg-orange-400 rounded-md"
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
              onClick={clicked}
              className="rounded-lg bg-orange-400 flex justify-center px-3 pt-1 h-10 "
            >
              Add to card
            </button>
          </>
        )}
      </div>
      {showModal && (
        <Modal onClose={handleModal}>
          <div>
            <div className=" border-2  flex my-5 mx-10 rounded-lg ">
              <div className="px-2  h-96 w-96 flex flex-col ">
                <div className=" flex h-full w-full justify-center mb-3">
                  <img src={`img/${props.data.thumbnail}`} alt="Data Img" />
                </div>
              </div>
              <div className="flex flex-col item-center">
                <div className="  font-medium text-2xl">{props.data.title}</div>
                <div className="flex pt-2 ">
                  <div className="px-2 line-through">₹ {props.data.price}</div>
                  <div className="px-2 ">₹{props.data.discountedPrice}</div>
                </div>

                <div className="py-4 w-96"> {props.data.description}</div>

                {props.data.quantity > 0 ? (
                  <>
                    <div className=" pt-10 flex justify-between">
                      <button
                        className="w-10 h-10  border-2 border-orange-400 hover:bg-white duration-300 text-white hover:text-orange-400 bg-orange-400 rounded-md"
                        onClick={clicked}
                        name="dec"
                      >
                        -
                      </button>
                      <div className="pt-1">{props.data.quantity}</div>
                      <button
                        onClick={clicked}
                        className="w-10 h-10  border-2 border-orange-400 hover:bg-white duration-300 text-white hover:text-orange-400  bg-orange-400 rounded-md"
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
                      onClick={clicked}
                      className="rounded-lg mt-10 border-2 border-orange-400 hover:bg-white duration-300 text-white hover:text-orange-400 bg-orange-400 flex justify-center px-3 pt-1 h-10 "
                    >
                      Add to card
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Card;
