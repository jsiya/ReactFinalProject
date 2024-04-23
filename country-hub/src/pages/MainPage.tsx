import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { countriesAPI } from '../services/CountryService';
import SearchBar from '../components/SearchBar/SearchBar';
import Card from '../components/Card/Card';
import { Country } from '../models/Country';
import { Empty, Button, Flex, Spin } from 'antd';

const MainPage: React.FC = () => {
  const { data: countries, isLoading, isError } = countriesAPI.useFetchAllCountriesQuery();

  //search
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('1'); 
  const [filteredCountries, setFilteredCountries] = useState<Country[] | null>(null);

  //load more
  const [displayedCountries, setDisplayedCountries] = useState<number>(6);
  const [countriesPerPage, setCountriesPerPage] = useState<number>(6);

  useEffect(() => {
    if (!isLoading && countries) {
      handleSearch();
    }
  }, [countries, isLoading]);

  const handleSearch = () => {
    let newFilteredCountries: Country[] | null = countries;

    if (searchInput.trim() !== '') {
      newFilteredCountries = countries?.filter((country: Country) => {
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
    }
  
    setFilteredCountries(newFilteredCountries);
    setDisplayedCountries(6);
  };

  
  const handleLoadMore = () => {
    if (filteredCountries) {
      setDisplayedCountries(prevCount => Math.min(prevCount + countriesPerPage, filteredCountries.length));
    }
  };

  if (isLoading) 
    return  (
      <Flex className='load' align="center" gap="middle" justify='center'>
        <Spin size="large" />
      </Flex>
    );

  if (isError) return <p>Error fetching data</p>;

  return (
    <div>
      <SearchBar handleSearch={handleSearch} setSearchCategory={setSearchCategory} setSearchInput={setSearchInput} />

      {filteredCountries && (
        <div className='cards-sec'>
          {filteredCountries.slice(0, displayedCountries).map((country: Country, index: number) => (
            <Link className='card-link' key={index} to={`/details/${country.cca3}`}>
              <Card key={index} country={country} />
            </Link>
          ))}
        </div>
      )}

      {filteredCountries && filteredCountries.length > displayedCountries && (
        <Button className='load-more-btn' onClick={handleLoadMore}>See more countries</Button>
      )}

      {filteredCountries && filteredCountries.length === 0 && <Empty />}
    </div>
  );
}

export default MainPage;
