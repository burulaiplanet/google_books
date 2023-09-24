import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooksActions = createAsyncThunk(
  "searchBooks/fetchSearchBooks",
  async (books) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          books +
          "&key=AIzaSyAKK60d5iNA-7fbo7DtCIPDUcjOt6GoFxE" +
          "&maxResults=30"
      );
      return response.data.items;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


export const loadMoreBooksActions = createAsyncThunk(
  "loadMore/fetchSearchBooks",
  async (requestBooks) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
        requestBooks +
          "&key=AIzaSyDa19QCvpr8CcKZj1Myh6Q92oQJ4GGY2rY" +
          "&maxResults=30"
      );
      return response.data.items;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
