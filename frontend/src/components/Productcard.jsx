import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { removefav, setfav } from "../redux/productSlice";

const Productcard = ({ product }) => {
  const dispatch = useDispatch();

  // Check if this product is in favourites
  const isFavourite = useSelector((state) =>
    state.product.favourite.find((fav) => fav.id === product.id)
  );

  const handleaddtocart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart`);
  };

  const addfav = () => {
    dispatch(setfav(product));
    toast.success(`${product.name} added to favourites`);
  };

  const removefromfav = () => {
    dispatch(removefav(product));
    toast.success(`${product.name} removed from favourites`);
  };

  return (
    <div className="bg-white p-4 shadow rounded relative border border-gray-300 transform transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
      </Link>

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>

      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>

      <div className="flex">
        <div
          className="absolute bottom-4 right-2 flex hover:z-90 items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300 cursor-pointer"
          onClick={(e) => handleaddtocart(e)}
        >
          <span className="group-hover:hidden absolute bottom-2">+</span>
          <span className="hidden group-hover:block">Add to Cart</span>
        </div>

        <div className="absolute bottom-4 right-12 flex items-center justify-center">
          {isFavourite ? (
            <FaHeart
              className="text-red-700 w-8 h-8 cursor-pointer"
              onClick={removefromfav}
              title="Remove from Favourite"
            />
          ) : (
            <FaRegHeart
              className="text-red-700 w-8 h-8 cursor-pointer"
              onClick={addfav}
              title="Add to Favourite"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Productcard;
