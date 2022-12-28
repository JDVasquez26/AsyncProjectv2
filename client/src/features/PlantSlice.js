import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePlant = createAsyncThunk(
  "singleplant",
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8088/api/plants/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removePlantAsync = createAsyncThunk(
    "plant/removePlant",
    async (id) => {
      try {
        const { data } = await axios.delete(`http://localhost:8088/api/plants/${id}`);
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  );


// export const updateSinglePlantAsync = createAsyncThunk(
//   "student/updatePlant",
//   async (plant) => {
//     try {
//       const { id, name, imageUrl, amazonLink, siteId } = plant;
//       const updatedPlant = { name, imageUrl, amazonLink, siteId }; //what it will be updating?
//       const { data } = await axios.put(
//         `http://localhost:8088/api/plants/${id}`,
//         updatedPlant
//       );
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

const singlePlantSlice = createSlice({
  name: "plant",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePlant.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(removePlantAsync.fulfilled, (state, action) => {
        //we dont update the state for delete
      });

    // builder.addCase(updateSinglePlantAsync.fulfilled, (state, action) => {
    //   return action.payload;
    // });
  },
});

export const selectPlant = (state) => state.plant;

export default singlePlantSlice.reducer;
