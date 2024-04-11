import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countriesReducer } from "./reducers/Countries";
import { countriesAPI } from "../services/CountryService";


const rootReducer = combineReducers({
    countriesReducer,
    [countriesAPI.reducerPath] : countriesAPI.reducer,
});

const configureMiddleware = [
    countriesAPI.middleware
]

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(configureMiddleware)
    });
};

export type RootState = ReturnType<typeof rootReducer>;

export type  AppStore = ReturnType<typeof setupStore>;

export type  AppDispatch = AppStore['dispatch']