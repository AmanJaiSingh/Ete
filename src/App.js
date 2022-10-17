import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Order from "./component/Order";
import Value from "./component/Value";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Value />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
