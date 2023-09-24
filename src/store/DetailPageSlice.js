import { createSlice } from "@reduxjs/toolkit"
import { getDetailPageAction } from "./DetailPageAction"

const initialState={
    book:{},
    isLoading:false,
    hasError:false,
}

const detailItemsSlice=createSlice({
    name:'detailItems',
    initialState,
    reducers:{},
    extraReducers:{
[getDetailPageAction.pending]:(state)=>{
    state.isLoading=true;
},
[getDetailPageAction.fulfilled]:(state,action)=>{
    // state.isLoading=false,
    state.book=action.payload
},
[getDetailPageAction.rejected]:(state,action)=>{
    // state.isLoading=false,
    state.hasError=action.payload
},
    }
})

export const getDetailItemsSlices=detailItemsSlice.actions
export default detailItemsSlice