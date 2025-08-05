import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
 const[order,setorder]=useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/checkout"
          element={<Checkout setorder={setorder} />}
        ></Route>
        <Route
          path="/order-confirmation"
          element={<Order order={order} />}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
