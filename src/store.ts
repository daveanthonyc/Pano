import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from './state/themeSlice';
import userReducer from './state/userSlice';
import projectReducer from './state/projectSlice';
import { issueApi } from "./services/issue";

const store = configureStore({
    reducer: combineReducers({
        [issueApi.reducerPath]: issueApi.reducer, 
        theme: themeReducer, 
        user: userReducer,
        project: projectReducer,
    }),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(issueApi.middleware),
}) 

export default store;
