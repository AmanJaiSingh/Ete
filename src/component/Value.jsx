import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../plats/Card";

// const items = {
//   title: "Aman",
//   price: 200,
//   img: "images.png",
// };

const Value = () => {
  const [item, setItem] = useState({
    title: "Aman",
    price: 200,
    thumbnail: "images.png",
    discountedPrice: 120,
    count: 0,
  });

  const handleInput = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (item.price < 0) {
      alert("paise dega kya usko");
    }
  };

  // function HandleClicked(e) {
  //   if (e.target.name === "inc") {
  //     setItem({
  //       ...item,
  //       count: (item.count += 1),
  //     });
  //   }
  //   if (e.target.name === "dec") {
  //     setItem({
  //       ...item,
  //       count: (item.count -= 1),
  //     });
  //   }
  //   if (e.target.name === "Add") {
  //     setItem({
  //       ...item,
  //       count: 1,
  //     });
  //   }

  //   if (item.count >= 10) {
  //     alert("Max item reached");
  //     setItem({
  //       ...item,
  //       count: 9,
  //     });
  //   }
  // }

  return (
    <>
      <div className="flex justify-evenly item-center">
        <div className="flex flex-row h-screen  items-center justify-center text-3xl">
          <form onSubmit={submitForm} className="flex  flex-col ">
            <div className="mb-10 font-bold">Item Card Details</div>
            <div className="flex flex-col ">
              <span className="my-4">Title</span>
              <span className="">
                <input
                  className=" text-lg  border-2 border-gray-400 w-full py-2 "
                  type="text"
                  value={item.title}
                  id=""
                  name="title"
                  placeholder="Enter new Name"
                  onChange={handleInput}
                />
              </span>
              <span className="my-4">Price</span>
              <span className="w-80">
                <input
                  className=" text-lg  border-2 border-gray-400 w-full py-2"
                  type="text"
                  name="price"
                  onChange={handleInput}
                  value={item.price}
                  placeholder="Enter new price"
                  id=""
                />
              </span>
              <span className="my-4">DiscountedPrice</span>
              <span className="">
                <input
                  className=" text-lg  border-2 border-gray-400 w-full py-2"
                  type="text"
                  onChange={handleInput}
                  value={item.discountedPrice}
                  placeholder="Enter new discounted Price"
                  name="discountedPrice"
                  id=""
                />
              </span>
            </div>
            <div className="flex justify-end">
              <div className="my-2 pb-2 border-2 w-40 flex justify-center text-white rounded-md hover:border-2 hover:border-orange-500 hover:text-orange-500 duration-300 hover:bg-white bg-orange-500">
                <Link to="/">
                  <button>Update</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="h-screen flex items-center">
          <Card data={item} />
        </div>
      </div>
    </>
  );
};

export default Value;
