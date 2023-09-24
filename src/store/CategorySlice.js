import { createSlice } from "@reduxjs/toolkit"

const initialState={
    newItems:[]
}

const categorySlice=createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategoryBooks(state,action){
            console.log(action.payload);
            state.newItems=action.payload
        }
    }
})
 export const categorySlices=categorySlice.actions
 export default categorySlice