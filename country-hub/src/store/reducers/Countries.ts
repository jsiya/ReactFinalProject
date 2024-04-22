import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Country } from "../../models/Country";

export interface ICountry {
    isLoading: boolean
    data: Country[];
    error: string
}

const initialState: ICountry = {
    isLoading: true,
    error: '',
    data: []
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        countriesFetching: (state) =>{
            state.isLoading = true;
        },
        countriesFetchingSuccess: (state, action: PayloadAction<Country[]>) =>{
            state.data = action.payload;
            state.error = '';
            state.isLoading = false;
        },
        countriesFetchingReject: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    }
})

export const countriesReducer =  countriesSlice.reducer;
export const countriesAction = countriesSlice.actions;