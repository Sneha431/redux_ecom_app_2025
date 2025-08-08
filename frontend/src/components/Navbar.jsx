import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register';
import { setsearchterm } from '../redux/productSlice'

const Navbar = () => {
  const products = useSelector((state)=>state.cart.products);
const totalQty = useSelector((state) => state.cart.totalQuantity);
const [isModelOpen,setisModelOpen]=useState(false);
const [isLogin, setisLogin] = useState(true);
const [search, setsearch] = useState(true);
const dispatch=useDispatch();
const navigate = useNavigate();
const openSignUp = ()=>{
  setisLogin(false);
  setisModelOpen(true);
}
const openLogin = () => {
  setisLogin(true);
  setisModelOpen(true);
};
const handlesearch = (e) =>{
e.preventDefault();
dispatch(setsearchterm(search));
setshowdiv(false);
navigate("/filter-data");
}

const [showdiv,setshowdiv]=useState(false);
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
          <div className="p-4 md:hidden">
            <FaBars onClick={() => setshowdiv(!showdiv)} />
          </div>
          <div className="text-lg font-bold">
            <Link to="/">E-Shop</Link>
          </div>
          <div className="relative flex-1 mx-4 hidden md:block ">
            <form onSubmit={handlesearch}>
              <input
                type="text"
                placeholder="Search Product"
                className="w-full py-2 px-4 border border-gray-300 rounded-sm"
                onChange={(e) => setsearch(e.target.value)}
              />
              <FaSearch
                className="absolute top-3 right-3 text-red-500 cursor-pointer"
                onClick={handlesearch}
              ></FaSearch>
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg mr-2" />
              {products.length > 0 && (
                <span className="absolute top-0 text-xs px-2 py-[1.4px] w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white ml-1 mt-[-5px]">
                  {totalQty}
                </span>
              )}
            </Link>
            <div className="flex justify-between space-x-2 ml-2">
              <button className="hidden md:block" onClick={openLogin}>
                Login
              </button>
              <span className="">|</span>
              <button className="hidden md:block" onClick={openSignUp}>
                Register
              </button>
            </div>
            <button className="block md:hidden">
              <FaUser onClick={openLogin} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center space-x-10 py-4 text-sm font-bold">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          <Link className="hover:underline" to="/shop">
            Shop
          </Link>
          <Link className="hover:underline" to="/favourite">
            Favourites
          </Link>
          <Link className="hover:underline" to="/contact">
            Contact
          </Link>
          <Link className="hover:underline" to="/about">
            About
          </Link>
        </div>

        <Modal isModalOpen={isModelOpen} setisModalOpen={setisModelOpen}>
          {isLogin ? (
            <Login openSignUp={openSignUp} />
          ) : (
            <Register openLogin={openLogin} />
          )}
        </Modal>
      </nav>
      <div
        className={`fixed top-0 left-0 h-full w-96 p-10 text-sm font-bold bg-gray-100 border border-gray-200 shadow-sm z-50 
    transform transition-transform duration-300 ease-in-out
    ${showdiv ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <button
          className="absolute top-2 right-8 text-gray-800 text-3xl bg-transparent cursor-pointer"
          onClick={() => setshowdiv(false)}
        >
          &times;
        </button>
        <div className="text-xl text-center font-extraboldbold mb-4 text-red-500">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1  block md:hidden mt-3">
          <form onSubmit={handlesearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 border border-gray-300 rounded-sm"
              onChange={(e) => setsearch(e.target.value)}
            />
            <FaSearch
              className="absolute top-3 right-3 text-red-500 cursor-pointer"
              onClick={handlesearch}
            ></FaSearch>
          </form>
        </div>
        <ul
          className="flex flex-col gap-7 justify-center text-gray-800 font-semibold text-lg"
          onClick={() => setTimeout(() => setshowdiv(false), 1000)}
        >
          <li className="mt-8">
            <Link className="hover:underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/favourite">
              Favourites
            </Link>
          </li>
          <li>
            {" "}
            <Link className="hover:underline" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar