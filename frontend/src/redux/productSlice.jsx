import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products:[]
}

const productSlice = createSlice({
  name:"Products",
  initialState,
  reducers:{
setProducts:(state,action)=>{
state.products=action.payload
}
  }
})

export default productSlice.reducer;
export const {setProducts}=productSlice.actions;