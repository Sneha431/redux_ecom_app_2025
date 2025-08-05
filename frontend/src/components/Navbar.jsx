import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const products = useSelector((state)=>state.cart.products);
const totalQty = useSelector((state) => state.cart.totalQuantity);
const [isModelOpen,setisModelOpen]=useState(false);
const [isLogin, setisLogin] = useState(true);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {totalQty}
              </span>
            )}
          </Link>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 py-4 text-sm font-bold">
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/shop">
          Shop
        </Link>
        <Link className="hover:underline" to="/">
          Contact
        </Link>
        <Link className="hover:underline" to="/">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar