import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearcart } from "../redux/cartSlice";
import { toast } from "react-toastify";
import loader from "../assets/images/loading_button.gif";

const Checkout = ({ setorder, address, setaddress }) => {
  const [billingToggle, setbillingtoggle] = useState(true);
  const [shippingToggle, setshippingToggle] = useState(false);
  const [paymentToggle, setpaymentToggle] = useState(false);
  const [paymentMethod, setpaymentMethod] = useState("COD");
  const [showload, setshowload] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const neworder = {
      products: cart.products,
      orderNumber: "#" + Math.floor(Math.random() * 10000 + 1),
      address: data.address,
      shippingInformation: {
        name: data.name,
        city: data.city,
        zipcode: data.zipcode,
      },
      totalPrice: cart.totalPrice,
    };

    setshowload(true);
    setorder(neworder);
    toast.success("Order Placed Successfully.");

    setTimeout(() => {
      setshowload(false);
      navigate("/order-confirmation");
      dispatch(clearcart());
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24"
    >
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-between space-x-10 mt-8 h-full w-full">
        {/* FORM START */}
        <div className="w-full px-4 mx-auto md:w-2/3">
          {/* BILLING SECTION */}
          <div
            className={`border border-gray-300 mb-6 ${
              billingToggle ? "px-3 py-7" : "p-2"
            } rounded-md`}
          >
            <div
              className={`transform transition-all duration-500 flex items-center justify-between ${
                billingToggle ? "mb-6" : ""
              }`}
              onClick={() => setbillingtoggle(!billingToggle)}
            >
              <h3 className="font-semibold text-lg">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  {...register("name", {
                    required: "Name field is required",
                  })}
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  {...register("email", {
                    required: "Email id field is required",
                  })}
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  {...register("phone", {
                    required: "Contact Number field is required",
                  })}
                  type="text"
                  placeholder="Enter phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* SHIPPING SECTION */}
          <div
            className={`border border-gray-300 mb-6 ${
              shippingToggle ? "px-3 py-7" : "p-2"
            } rounded-md`}
          >
            <div
              className={`transform transition-all duration-500 flex items-center justify-between ${
                shippingToggle ? "mb-6" : ""
              }`}
              onClick={() => setshippingToggle(!shippingToggle)}
            >
              <h3 className="font-semibold text-lg">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  {...register("address", {
                    required: "Address field is required",
                  })}
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">City</label>
                <input
                  {...register("city", { required: "City field is required" })}
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  {...register("zipcode", {
                    required: "Zip field is required",
                  })}
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-0"
                />
                {errors.zipcode && (
                  <p className="text-red-500 text-sm">
                    {errors.zipcode.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* PAYMENT SECTION */}
          <div
            className={`border border-gray-300 mb-6 ${
              paymentToggle ? "px-3 py-7" : "p-2"
            } rounded-md`}
          >
            <div
              className={`transform transition-all duration-500 flex items-center justify-between ${
                paymentToggle ? "mb-6" : ""
              }`}
              onClick={() => setpaymentToggle(!paymentToggle)}
            >
              <h3 className="font-semibold text-lg">Payment Information</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Method
                </label>

                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    value="cod"
                    {...register("payment", {
                      required: "Please select a payment method",
                    })}
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
                    value="dc"
                    {...register("payment", {
                      required: "Please select a payment method",
                    })}
                    checked={paymentMethod === "dc"}
                    onChange={() => setpaymentMethod("dc")}
                  />
                  <label className="block text-gray-700 ml-2">Debit Card</label>
                </div>

                {errors.payment && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.payment.message}
                  </p>
                )}
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  {/* Card fields can also be registered if needed */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                      placeholder="Enter Card Number"
                      name="cardnumber"
                      {...register("cardnumber", {
                        required: "Card Number field is required",
                      })}
                    />
                    {errors.cardnumber && (
                      <p className="text-red-500 text-sm">
                        {errors.cardnumber.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      className="border p-2 w-full rounded border-gray-300 bg-white outline-0"
                      placeholder="Enter Card Holder Name"
                      name="cardname"
                      {...register("cardname", {
                        required: "Card Holder name field is required",
                      })}
                    />
                    {errors.cardnumber && (
                      <p className="text-red-500 text-sm">
                        {errors.cardnumber.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-between mb-4">
                    {/* Expiry Date */}
                    <div className="w-1/2 mr-2">
                      <label
                        htmlFor="expirydate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Expiry Date
                      </label>
                      <input
                        id="expirydate"
                        className="w-full border p-2 rounded border-gray-300 bg-white outline-0"
                        placeholder="MM/YY"
                        {...register("expirydate", {
                          required: "Expiry Date field is required",
                        })}
                      />
                      {errors.expirydate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.expirydate.message}
                        </p>
                      )}
                    </div>

                    {/* CVV */}
                    <div className="w-1/2">
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        CVV
                      </label>
                      <input
                        id="cvv"
                        className="w-full border p-2 rounded border-gray-300 bg-white outline-0"
                        placeholder="CVV"
                        {...register("CVV", {
                          required: "CVV field is required",
                        })}
                      />
                      {errors.CVV && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.CVV.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="w-[340px] md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
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

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 mt-6 text-md hover:bg-red-800 flex items-center text-center justify-center"
          >
            {showload ? "Placing order, please wait...." : "Place Order"}
            <img
              src={loader}
              className={`w-5 h-5 ml-2 mt-1 ${showload ? "block" : "hidden"}`}
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
