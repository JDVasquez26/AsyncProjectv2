import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPlantsAsync = createAsyncThunk(
  "plants/fetchAll",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:8088/api/plants");
      console.log("fetchPlants data:", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addPlantAsync = createAsyncThunk(
  "plants/addPlant",
  async ({ name, imageUrl, amazonLink, siteId }) => {
    console.log("site add plant:", siteId)
    try {
      const { data } = await axios.post(`http://localhost:8088/api/plants`, {
        name, imageUrl, amazonLink, siteId 
      });
      console.log("addPlant data:", data);
      return data
    } catch (err) {
      console.log(err);
    }
  }
);


const ListPlantsSlice = createSlice({
    name:'plants',
    initialState: [],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPlantsAsync.fulfilled, (state, action) => {
            return action.payload;
          });

          builder.addCase(addPlantAsync.fulfilled, (state, action) => {
            console.log("addplant payload: ", action.payload)
            state.push(action.payload);
          });


    }
})

export const selectPlants = (state) => {
    return state.plants;
  };
  
  export default ListPlantsSlice.reducer;


