import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./apiSlice";

import photoReducer from "./photos/slice";
export const store = configureStore({
    reducer: {   
     
      auth: photoReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,     
    },
    devTools: import.meta.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
  });