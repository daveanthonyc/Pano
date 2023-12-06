import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './state/themeSlice'

const store = configureStore({
    reducer: themeReducer,
});

export default store;
