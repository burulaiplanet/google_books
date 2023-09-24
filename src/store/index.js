import { configureStore } from "@reduxjs/toolkit";
import searchBooksSlice from "./SearchBooksSlice";
import detailItemsSlice from "./DetailPageSlice";
import sortBooksSlice, { sortBooksSlices } from "./SortBookSlice";
import uiSlice from "./UISlice";
import categorySlice from "./CategorySlice";

const store=configureStore({
    reducer:{
        searchBooks:searchBooksSlice.reducer,
        detailBook:detailItemsSlice.reducer,
        sortBooks:sortBooksSlice.reducer,
        uiSlice:uiSlice.reducer,
        categorySlice:categorySlice.reducer
       
    }
})
export default store