import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const {id} = useParams();
  const products = useSelector(state=>state.product.products)
  const [product,setProduct]=useState(null);
    const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();
  const handleaddtocart = (e) => {
    e.stopPropagation();
    e.preventDefault();
   dispatch(addToCart({ ...product, quantity: parseInt(quantity) }));

    toast.success(`${product.name} added successfully`);
  };
  useEffect(() => {
   const newproduct = products.find((product)=>product.id===parseInt(id));
   setProduct(newproduct);
 
  }, [id,products]);
console.log(product);
  if (!product) return <div>Loading...</div>;
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row gap-x-16">
        {/* Product Image */}
        <div className="md:w-1/2 py-4 shadow-md px-8 h-96 flex justify-center">
          <img src={product.image} alt={product.name} className="h-full" />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
          <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            <span className="mr-3">Price :</span>${product.price}
          </p>

          {/* Quantity Input */}
          <div className="flex items-center mb-4 gap-x-2">
            <label
              htmlFor="quantity"
              className="mr-2 text-lg font-semibold text-gray-800"
            >
              Quantity :
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              className="border p-1 w-16"
              onChange={(e) => setquantity(e.target.value)}
            />
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-red-600 text-white py-1.5 px-4 hover:bg-red-800 cursor-pointer"
            onClick={(e) => handleaddtocart(e, product)}
          >
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="flex items-center">
              <FaCarSide className="mr-1" />
              Delivery & Return
            </p>
            <p className="flex items-center">
              <FaQuestion className="mr-1" />
              Ask a Question
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Product Description</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );

}

export default ProductDetails