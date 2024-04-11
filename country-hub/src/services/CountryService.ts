import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICountry } from "../store/reducers/Countries";


export const countriesAPI = createApi({
    reducerPath: 'countries',
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1'}),
    endpoints: (build) => ({
        fetchAllCountries: build.query<ICountry, void>({
            query: () => '/all',
        })
        ,
        fetchIndependentCountries: build.query<ICountry, void>({
          query: () => '/all?independent=true',
        }),
        fetchCountriesByPopulation: build.query<ICountry, { minPopulation?: number; maxPopulation?: number }>({
            query: ({ minPopulation = 0, maxPopulation = Number.MAX_SAFE_INTEGER }) => 
            `/all?population?min=${minPopulation}&population?max=${maxPopulation}`,
        }),
        fetchCountriesByRegion: build.query<ICountry, { region: string }>({
            query: ({ region }) => `/all?region=${region}`,
        }),
    }),
})
