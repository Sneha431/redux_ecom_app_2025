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
import FilterData from "./pages/FilterData";
import ProductDetails from "./pages/ProductDetails";

import { Bounce, ToastContainer } from "react-toastify";
import Favourite from "./pages/Favourite";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
 const[order,setorder]=useState(null);
  const [address,setaddress]=useState("Test 123");
   const [myfavourite,setmyfavourite]=useState(false);
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/shop"
          element={
            <Shop myfavourite={myfavourite} setmyfavourite={setmyfavourite} />
          }
        ></Route>
        <Route
          path="/favourite"
          element={
            <Favourite
              myfavourite={myfavourite}
              setmyfavourite={setmyfavourite}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={<Cart setaddress={setaddress} address={address} />}
        ></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route> */}
        <Route
          path="/checkout"
          element={
            <Checkout
              setorder={setorder}
              address={address}
              setaddress={setaddress}
            />
          }
        ></Route>
        <Route
          path="/order-confirmation"
          element={<Order order={order} />}
        ></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
