import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    showBooks: true,
   //  showSortingBook
 }

 const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        setShowBooks(state,action) {
			state.showBooks = !action.payload
		},
      
    },
    
 })

 export const uiActions=uiSlice.actions
 export default uiSlice