import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { countriesAPI } from '../services/CountryService';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../components/Card/Card';
import { Country } from '../models/Country';
import { Empty } from 'antd';

const MainPage: React.FC = () => {
  const { data: countries, isLoading, isError } = countriesAPI.useFetchAllCountriesQuery();
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('1'); 
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(null);

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      // If search input is empty, show all countries
      setFilteredCountries(countries);
    } else {
      // Otherwise, perform filtering based on search input and category
      const newFilteredCountries = countries?.filter((country: Country) => {
        switch (searchCategory) {
          case '2':
            return country.capital && country.capital[0]?.toLowerCase().includes(searchInput.toLowerCase());
          case '3':
            return country.languages && Object.values(country.languages).some(language =>
              language.toLowerCase().includes(searchInput.toLowerCase())
            );
          default:
            return country.name.common.toLowerCase().includes(searchInput.toLowerCase());
        }
      });
  
      setFilteredCountries(newFilteredCountries);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [countries]);


  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  
  return (
    <div>
      <SearchBar handleSearch={handleSearch}  setSearchCategory={setSearchCategory} setSearchInput={setSearchInput} />
      <div className='cards-sec'>
        {filteredCountries?.length > 0 ? (
          filteredCountries?.map((country: Country, index: number) => (
            <Link className='card-link' key={index} to={`/details/${country.cca3}`}>
              <Card key={index} country={country} />
            </Link>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default MainPage;
