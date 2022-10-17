import React, { useEffect } from "react";
import Navbar from "../plats/Navbar";
import Card from "../plats/Card";
import { useState } from "react";
import data from "../Data/products.json";
// import { Remove } from "@mui/icons-material";
// const item = {
//   title: "Aman",
//   price: 200,
//   img: "../img/images.png",
// };

function Home() {
  const [item, setItem] = useState([]);
  const [counter, setCounter] = useState(0);
  const [pre, setPre] = useState([]);
  // const [mullti, setmulti] = useState([]);
  // console.log(item);
  useEffect(() => {
    setItem(data);
    setPre([]);
  }, []);
  const addCart = (id) => {
    // if (pre.indexOf(id) > -1) {
    //   return;
    // }
    // setmulti([...pre, id]);
    // setPre([...pre, id]);
    // setCounter(counter + 1);

    let temp = [...item];
    let index = temp.findIndex((i) => i.id == id);
    temp[index].quantity += 1;
    // console.log(temp[index].id);
    setItem([...temp]);

    let temp2 = [...pre];
    let index2 = temp2.findIndex((i) => i.id === id);
    if (index2 > -1) {
      temp2[index2] = temp[index];
    } else {
      temp2.push(temp[index]);
    }
    setPre([...temp2]);
  };
  // console.log(pre);
  const removeCart = (id) => {
    // let index = pre.indexOf(id);
    // if (index > -1) {
    //   let it = [...pre];
    //   it.splice(index, 1);
    //   setPre(...it);
    //   setCounter(counter - 1);
    // } else {
    //   return;
    // }
    let temp = [...item];
    let index = temp.findIndex((i) => i.id == id);
    if (temp[index] !== 0) {
      temp[index].quantity -= 1;
      setItem([...temp]);
    }
    let temp2 = [...pre];
    let index2 = temp2.findIndex((i) => i.id === id);
    if (temp2[index2].quantity == 0) {
      temp2.splice(index2, 1);
    } else {
      temp2[index2] = temp[index];
    }

    setPre([...temp2]);
  };
  // console.log(pre);
  // console.log(mullti);

  return (
    <>
      <Navbar
        Count={pre.length}
        items={pre}
        onAddItem={addCart}
        onRemoveItem={removeCart}
      />
      <div className="flex flex-wrap mx-20">
        {/* <Card data={item[0]} onClicked1={HandleClicked} /> */}
        {item.map((i, id) => {
          return (
            <Card
              onAddItem={addCart}
              onRemoveItem={removeCart}
              data={i}
              id={id}
              key={id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
