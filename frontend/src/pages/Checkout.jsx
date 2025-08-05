import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Checkout = ({setorder}) => {
  const[billingToggle,setbillingtoggle]=useState(true);
  const [shippingToggle, setshippingToggle] = useState(false);
    const [paymentToggle, setpaymentToggle] = useState(false);
      const [paymentMethod, setpaymentMethod] = useState("COD");
      const [shippingInfo,setshippingInfo]=useState({
        name:"",
        address:"",
        city:"",
        zipcode:""
      });
      const cart = useSelector(state=>state.cart);
      const navigate = useNavigate();
      const handleorder = () =>{
        const neworder = {
          products:cart.products,
          orderNumber:"#"+Math.floor(Math.random() * 10000) + 1,
          shippingInformation:shippingInfo,
          totalPrice:cart.totalPrice

        }
        setorder(neworder);
        navigate("/order-confirmation");
      }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-between space-x-10 mt-8 h-full w-full">
        <div className="w-full px-4 mx-auto md:w-2/3">
          <div
            className={` border border-gray-300  mb-6 ${
              billingToggle ? "px-3 py-7" : "p-2"
            } rounded-md `}
          >
            <div
              className={`transform transition-all duration-500  flex items-center justify-between ${
                billingToggle ? "mb-6" : ""
              } `}
              onClick={() => setbillingtoggle(!billingToggle)}
            >
              <h3 className="font-semibold text-lg">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              {/* Name Field */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0" 
                    onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      name: e.target.value,
                    })}
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
              </div>
            </div>
          </div>
          <div
            className={` border border-gray-300  mb-6 ${
              shippingToggle ? "px-3 py-7" : "p-2"
            } rounded-md `}
          >
            <div
              className={`transform transition-all duration-500  flex items-center justify-between ${
                shippingToggle ? "mb-6" : ""
              } `}
              onClick={() => setshippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold text-lg">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              {/* Name Field */}
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      city: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter zip code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      zipcode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={` border border-gray-300  mb-6 ${
              paymentToggle ? "px-3 py-7" : "p-2"
            } rounded-md `}
          >
            <div
              className={`transform transition-all duration-500  flex items-center justify-between ${
                paymentToggle ? "mb-6" : ""
              } `}
              onClick={() => setpaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold text-lg">Payment Information</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              {/* Name Field */}
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setpaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setpaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
              {paymentMethod == "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Card Number"
                      className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor=""
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                      placeholder="Enter Card Holder Name"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                        placeholder="Enter Expiry Date"
                        required
                      />
                    </div>
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor=""
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                        placeholder="Enter CVV"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-[340px]  md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleorder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout