import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import portfolioSlice from "../slices/portfolioSlice";

export default configureStore({
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
      portfolio: portfolioSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),

  });