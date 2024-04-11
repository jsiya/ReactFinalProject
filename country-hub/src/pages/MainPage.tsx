import React, { useEffect, useState } from 'react'
import { countriesAPI } from '../services/CountryService';

const MainPage :  React.FC = () => {
  const { data: countries, isLoading, isError } = countriesAPI.useFetchAllCountriesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  
  return (
    <div>
      <h1>All Countries</h1>
      <p>
        {countries?.map((country, index) => (
          <span key={index}>{country.name.common}, </span>
        ))}
      </p>
    </div>
  );
}

export default MainPage