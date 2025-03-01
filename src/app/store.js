import { configureStore } from "@reduxjs/toolkit";
import api from '../features/api/api';
import paginationReducer from "../features/pagination/paginateSlice";
import itemReducre from "../features/item/itemSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        paginate: paginationReducer,
        managerItem: itemReducre,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getBaseMiddleware) => getBaseMiddleware().concat(api.middleware)
});