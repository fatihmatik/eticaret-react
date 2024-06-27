import { configureStore } from "@reduxjs/toolkit";
import mydataSliceReducer from "./slicer";
import profileSlicer from "./profileSlicer";

export const store = configureStore({
  reducer: {
    mydata: mydataSliceReducer,
    profileData: profileSlicer,
  },
});
