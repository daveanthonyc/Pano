import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from './state/themeSlice';
import userReducer from './state/userSlice';
import { issueApi } from "./services/issue";

const store = configureStore({
    reducer: combineReducers({[issueApi.reducerPath]: issueApi.reducer, theme: themeReducer, user: userReducer }),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(issueApi.middleware),
}) 

export default store;
