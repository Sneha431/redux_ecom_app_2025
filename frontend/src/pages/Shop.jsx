import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import { mockData } from '../assets/mockData';
import Productcard from '../components/Productcard';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  
  useEffect(() => {
    if (category) {
      const categoryproduct = products.products.filter(
        (prod) => prod.category == category
      );
      dispatch(setProducts(categoryproduct));
    } else {
      dispatch(setProducts(mockData));
    }
  }, []);

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {products.products.map((product, index) => (
          <Productcard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop