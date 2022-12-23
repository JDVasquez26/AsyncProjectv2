import { configureStore } from "@reduxjs/toolkit";
import ListSitesReducer from '../features/ListSitesSlice'
import ListPlantsSlice from "../features/ListPlantsSlice";

const store = configureStore({
    reducer: {
      sites: ListSitesReducer,
      plants: ListPlantsSlice,
    },
  });
  
  export default store;
  

