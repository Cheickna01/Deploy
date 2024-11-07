import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "Mango",
      url: ".../public/images/mango.jpg",
      price: 5,
      id: 65237894,
    },
    {
      name: "Watermelon",
      url: ".../public/images/watermelon.jpg",
      price: 7,
      id: 45129452,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("fruitCart/addOne", (state, action) => {
      console.log("first");
    });
  },
});

export default fruits.reducer;
