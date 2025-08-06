import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Emptycart from "../assets/images/emptycart.jpg";
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import App from './../App';
const Cart = ({address,setaddress}) => {
  const cart = useSelector((state)=>state.cart);

  const[isModalOpen,setisModalOpen]=useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
          {/* Product List */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
            {/* For desktop */}
            <div className="hidden md:flex justify-between border-b items-center mb-4 text-[15px] font-bold">
              <p>PRODUCT</p>
              <div className="flex space-x-8 ">
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUBTOTAL</p>
                <p>ACTION</p>
              </div>
            </div>

            {cart.products.map((product) => (
              <React.Fragment key={product.id}>
                {/* For desktop */}
                <div className="hidden md:flex flex-row items-center justify-between p-3 border-b">
                  {/* Product Info */}
                  <div className="hidden md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-[17px] font-semibold">{product.name}</h3>
                    </div>
                  </div>

                  {/* Price, Quantity, Total, Delete */}
                  <div className="hidden md:flex space-x-12 items-center">
                    <p>${product.price}</p>

                    <div className="flex items-center justify-center border">
                      <button
                        className="text-xl font-bold px-1.5 border-r"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        type="button"
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-1 border-l"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        type="button"
                      >
                        +
                      </button>
                    </div>

                    <p>${(product.price * product.quantity).toFixed(2)}</p>

                    <button className="text-red-500 hover:text-red-700">
                      <FaTrashAlt
                        onClick={() => dispatch(removeFromCart(product.id))}
                      />
                    </button>
                  </div>
                </div>
                {/* For Mobile */}
                <div className="flex flex-col justify-between p-3  md:hidden">
                  {/* Product Info */}
                  <div className="flex items-center justify-between ">
                    <div className="flex flex-col   space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                    <div className="flex items-center justify-center border h-full mb-5 ">
                      <button
                        className="text-xl font-bold px-1.5 border-r"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                        type="button"
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-1 border-l"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <button className="text-red-500 hover:text-red-700 mb-5">
                      <FaTrashAlt
                        onClick={() => dispatch(removeFromCart(product.id))}
                      />
                    </button>
                  </div>

                  {/* Price, Quantity, Total, Delete */}
                  <div className="flex space-x-12 items-center mb-4">
                    <p>
                      {" "}
                      <span className="text-md font-bold mr-2">
                        Sub Total :
                      </span>
                      ${product.price}
                    </p>
                    <p>
                      <span className="text-md font-bold mr-2">Total:</span>$
                      {(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>

            <div className="flex justify-between mb-5 border-b pb-1">
              <span className="text-sm">TOTAL ITEMS:</span>
              <span>{cart.totalQuantity}</span>
            </div>

            <div className="mb-4 border-b pb-2">
              <p>Shipping:</p>
              <p className="ml-2">
                shipping to (
                <span className="text-xs font-bold">{address}</span>)
              </p>
              <button
                className="text-blue-500 hover:underline mt-1 ml-2"
                onClick={() => setisModalOpen(true)}
              >
                Change Address
              </button>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
          <Modal setisModalOpen={setisModalOpen} isModalOpen={isModalOpen}>
            <ChangeAddress
              setaddress={setaddress}
              setisModalOpen={setisModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img src={Emptycart} alt="" className="h-96" />
          <p className='text-3xl font-bold'>No items in the cart</p>
        </div>
      )}
    </div>
  );
}

export default Cart