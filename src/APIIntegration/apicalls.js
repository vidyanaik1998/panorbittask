
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCustomerDetails = async (
  ) => {
      try {    
        const response = await axios.get("https://panorbit.in/api/users.json",  {       
        });
        return response?.data;
      } catch (error) {
        return error;
      }
    
  };

