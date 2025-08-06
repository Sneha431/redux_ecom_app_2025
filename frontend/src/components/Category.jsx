import React from 'react'
import mencat from "../assets/images/mencat.png";
import kidscat from "../assets/images/kidscat.png";
import womencat from "../assets/images/womencat.png";
import { createSearchParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const categories = [
  {
    title: "men",
    imageurl: mencat,
  },
  {
    title: "women",
    imageurl: womencat,
  },
  {
    title: "kids",
    imageurl: kidscat,
  },
];
const Category = () => {
  const navigate = useNavigate();
  
  const categorysearch = (cat) => {
 
    const query = createSearchParams({
      category: cat,
    }).toString();

    navigate(`/shop?${query}`);
  };
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-70 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageurl}
            alt=""
            srcSet=""
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-10 left-12">
            <p className="text-xl font-bold">
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </p>
            <p
              className="text-gray cursor-pointer font-semibold flex items-center gap-2 origin-left hover:scale-105 transform transition-transform duration-300 text-gray-300 hover:text-blue-800"
              onClick={() => categorysearch(category.title)}
            >
              View All <FaArrowRight className="mt-1" />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category