import React from 'react'
import mencat from "../assets/images/mencat.png";
import kidscat from "../assets/images/kidscat.png";
import womencat from "../assets/images/womencat.png";
import { useNavigate } from 'react-router-dom';
const categories = [
  {
    title: "Men",
    imageurl: mencat,
  },
  {
    title: "Women",
    imageurl: womencat,
  },
  {
    title: "Kids",
    imageurl: kidscat,
  },
];
const Category = () => {
  const navigate = useNavigate();
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
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray cursor-pointer" onClick={()=>navigate("/shop")} >View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category