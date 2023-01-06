import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./apicalls"

export const store = configureStore({
  reducer: {
    userDetails:userReducer  ,

  },
  middleware: [thunk],
})

export const persistor = persistStore(store);


