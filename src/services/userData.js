import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabase";

export const addUser = createAsyncThunk(
  "packages/addPackage",
  async (newUser, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.from("user").insert([newUser]);

      if (error) {
        throw new Error(error.message);
      }
      return data[0]; // Return the newly added package data
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
