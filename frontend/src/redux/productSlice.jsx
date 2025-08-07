import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products:[],
  searchTerm:"",
  filteredData:[],
  favourite:[]
}

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setsearchterm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(state.searchTerm.toLocaleLowerCase())
      );
    },
    setfav: (state, action) => {
      const exist = state.favourite.find((fav) => fav.id == action.payload.id);
      if (!exist) {
        state.favourite.push(action.payload);
      }
 
    },
    removefav: (state, action) => {
     state.favourite = state.favourite.filter(
       (fav) => fav.id !== action.payload.id
     );
      
    },
  },
});

export default productSlice.reducer;
export const {setProducts,setsearchterm,setfav,removefav}=productSlice.actions;