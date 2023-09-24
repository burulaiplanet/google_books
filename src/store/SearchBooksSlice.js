import { createSlice } from "@reduxjs/toolkit";
import {
  getBooksActions,
  loadMoreBooksActions,
} from "./SearchBooksActions";

const initialState = {
  items: [],
  isLoading: false,
  hasError: false,
};

const searchBooksSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooksActions.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooksActions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload
    },
    [getBooksActions.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError=action.payload
    },


    [loadMoreBooksActions.pending]: (state) => {
      state.isLoading = true;
    },
    [loadMoreBooksActions.fulfilled]: (state, action) => {
      state.isLoading = false;
      action.payload.forEach((element) => {
        const prev = state.items.find((el) => el.id === element.id);
        if (!prev) {
          state.items.push(element);
        }
      });
    },
    [loadMoreBooksActions.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
  },
});
export const searchBooksSliceActions = searchBooksSlice.actions;
export default searchBooksSlice;
