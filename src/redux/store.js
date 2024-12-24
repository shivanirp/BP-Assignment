import { configureStore } from "@reduxjs/toolkit";
import reducer from "./stations.slice";
 
const store = configureStore({
  reducer: {
    stations: reducer,
  },
});
 
export default store;