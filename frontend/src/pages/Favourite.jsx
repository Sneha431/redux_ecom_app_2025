import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";

import Productcard from "../components/Productcard";
import Nofav from "../assets/images/no_fav.png";

const Favourite = ({ myfavourite, setmyfavourite }) => {
  const productsfav = useSelector((state) => state.product.favourite);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsfav) {
      dispatch(setProducts(productsfav));
    }
  }, [productsfav]);

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {productsfav.length > 0 ? (
        <>
          <h2 className="text-xl font-bold mb-6 text-center">My Favourites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {productsfav.map((product, index) => (
              <Productcard
                product={product}
                key={index}
                myfavourite={myfavourite}
                setmyfavourite={setmyfavourite}
              />
            ))}
          </div>{" "}
        </>
      ) : (
        <div className="">
          <img src={Nofav} alt="" className="text-center mx-auto w-md" />
        </div>
      )}
    </div>
  );
}

export default Favourite;
