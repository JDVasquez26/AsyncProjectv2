import { configureStore } from "@reduxjs/toolkit";
//Logging actions and state in production makes it easy to understand bugs and user-reported issues
import logger from "redux-logger";

import ListSitesReducer from "../features/siteFeatures/ListSitesSlice";
import ListPlantsReducer from "../features/plantFeatures/ListPlantsSlice";
import PlantReducer from "../features/plantFeatures/PlantSlice";
import SiteReducer from "../features/siteFeatures/SiteSlice";
import authReducer from "../features/authFeatures/authSlice"


const store = configureStore({
  reducer: {
    auth: authReducer, 
    sites: ListSitesReducer,
    plants: ListPlantsReducer,
    site: SiteReducer,
    plant: PlantReducer,
  },
  //middleware for logger to log the actions in redux
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/authFeatures/authSlice";