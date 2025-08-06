import React from 'react'
import { useSelector } from 'react-redux'
import Productcard from '../components/Productcard';
import NoProduct from "../assets/images/NoProduct_1.png";
const FilterData = () => {
  const filteredproducts = useSelector((state) => state.product.filteredData);
  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filteredproducts.length > 0 ? (
        <>
          <h2 className="text-xl font-bold mb-6 text-center">Search Items</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredproducts.map((product, index) => (
              <Productcard product={product} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="">
          <img src={NoProduct} alt="" className="text-center mx-auto" />
        </div>
      )}
    </div>
  );
}

export default FilterData