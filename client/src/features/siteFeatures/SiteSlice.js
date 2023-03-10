import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleSiteAsync = createAsyncThunk(
  "singleSite",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8088/api/sites/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);


export const removeSiteAsync = createAsyncThunk(
    "site/removeSite",
    async (id) => {
      try {
        const { data } = await axios.delete(`http://localhost:8088/api/sites/${id}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );


export const updateSiteAsync = createAsyncThunk(
  "site/updateSite",
  async (site) => {
    try {
      const { id, name, lighting } = site;
      const updatedSite = { name, lighting }; //what it will be updating?
      const { data } = await axios.put(
        `http://localhost:8088/api/sites/${id}`,
        updatedSite
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);


const singleSiteSlice = createSlice({
  name: "site",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleSiteAsync.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(updateSiteAsync.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(removeSiteAsync.fulfilled, (state, action) => {
        //we dont update the state for delete
      });

    
  },
});

export const selectSite = (state) => state.site;

export default singleSiteSlice.reducer;