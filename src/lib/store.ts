import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/lib/features/counterSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
//   rehydrated: false,
// };

const rootReducer = combineReducers({
  counter: counterReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
