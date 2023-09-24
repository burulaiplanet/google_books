import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailPageAction=createAsyncThunk(
    'detailItems/getDetailItems',
    async(bookId)=>{
        try{
            const response=await axios.get('https://www.googleapis.com/books/v1/volumes/'+bookId+'?key=AIzaSyAKK60d5iNA-7fbo7DtCIPDUcjOt6GoFxE')
            return response.data

        }catch(error){
            throw new Error(error.message)
        }
    }



)