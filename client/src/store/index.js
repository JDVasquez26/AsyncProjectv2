import { configureStore } from "@reduxjs/toolkit";
import ListSitesReducer from "../features/ListSitesSlice";
import ListPlantsReducer from "../features/ListPlantsSlice";
import PlantReducer from "../features/PlantSlice";
import SiteReducer from "../features/SiteSlice";

const store = configureStore({
  reducer: {
    sites: ListSitesReducer,
    plants: ListPlantsReducer,
    site: SiteReducer,
    plant: PlantReducer,
  },
});

export default store;
