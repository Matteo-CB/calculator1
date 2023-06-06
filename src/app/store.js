import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "../feature/result.slice";

export default configureStore({
  reducer: {
    result: resultReducer,
  },
});
