import { createSlice } from "@reduxjs/toolkit";
import {  getSortBooksActions } from "./SortBookActions";

const initialState = {
newSortBook:[],
  isLoading: false,
  hasError: false,
};

const sortBooksSlice = createSlice({
  name: "getSortByRelevance",
  initialState,
  reducers: {
    setSortBooks(state,action){
        state.newSortBook=action.payload
    }
    
  },
  // extraReducers: {
  //   [getSortBooksActions.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getSortBooksActions.fulfilled]: (state, action) => {
  //     console.log(action.payload);
  //     state.isLoading = false;
  //     state.sortBook = action.payload;
  //   },
  //   [getSortBooksActions.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.hasError = action.payload;
  //   },
  // },
});
export const sortBooksSlices = sortBooksSlice.actions;
export default sortBooksSlice;
