import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { countriesAPI } from '../services/CountryService';
import { Country } from '../models/Country';

const DetailPage: React.FC = () => {
  const { cca3 } = useParams<{ cca3: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [currencyCodes, setCurrencyCodes] = useState<any>(null);
  const { data: countries } = countriesAPI.useFetchAllCountriesQuery();


  useEffect(() => {
    if (countries) {
      const foundCountry = countries.find((c: Country) => c.cca3 == cca3);
      console.log(foundCountry)
      if (foundCountry) {
        setCountry(foundCountry);
        setCurrencyCodes(Object.keys(foundCountry.currencies));
      }
    }
  }, [cca3, countries]);

  if (!country) {
    return <p>Country not found</p>;
  }

  return (
    <div className='detail-page'>
      <div className='infos'>
        <div className='sub-info-sec sis-big'>
          <p className='info-title'>Names:</p>
          <div className='inner-info'>
            <p className='info-title-sm'>Common:</p>
            <p className='country-prop'>{country.name.common}</p>
          </div>
          <div className='inner-info'>
            <p className='info-title-sm'>Official:</p>
            <p className='country-prop'>{country.name.official}</p>
          </div>
        </div>
        <div className='sub-info-sec sis-big'>
          <p className='info-title'>Native names:</p>
          <div className='inner-info'>
            <p className='info-title-sm'>Common:</p>
            <p className='country-prop'>{country.altSpellings[0]}</p>
          </div>
          <div className='inner-info'>
            <p className='info-title-sm'>Official:</p>
            <p className='country-prop'>{country.altSpellings[1]}</p>
          </div>
        </div>
        <div className='sub-info-sec'>
          <p className='info-title'>Capital:</p>
          <p className='country-prop'>{country.capital}</p>
        </div>
        <div className='sub-info-sec'>
          <p className='info-title'>Region:</p>
          <p className='country-prop'>{country.region}</p>
        </div>
        <div className='sub-info-sec'>
          <p className='info-title'>Subregion:</p>
          <p className='country-prop'>{country.subregion}</p>
        </div>
        <div className='sub-info-sec'>
          <p className='info-title'>Population:</p>
          <p className='country-prop'>{country.population}</p>
        </div>
        <div className='sub-info-sec sis-big'>
        <p className='info-title'>Currencies:</p>
          <div className='inner-info'>
            <p className='info-title-sm'>Name:</p>
            <p className='country-prop'>{country.currencies[currencyCodes[0]].name}</p>
          </div>
          <div className='inner-info'>
            <p className='info-title-sm'>Symbol:</p>
            <p className='country-prop'>{country.currencies[currencyCodes[0]].symbol}</p>
          </div>
        </div>
      </div>
      <div className='images'>
        <img className='flag-img' src={country.flags.png} alt={country.flags.alt} />
        <img className='coa' src={country.coatOfArms.png} alt="" />
      </div>
    </div>
  );
};

export default DetailPage;
