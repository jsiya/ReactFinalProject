import React from 'react';
import { Link } from 'react-router-dom';
import populationIcon from '../../assets/images/userIcon.png'
import currIcon from '../../assets/images/moneyIcon.png'
import { Country } from '../../models/Country';
import './Card.css'

interface CardProps {
  country: Country;
  to?: string;
}

const Card: React.FC<CardProps> = ({ country, to }) => {
    const currency = country.currencies?.[Object.keys(country.currencies)[0]];
    // console.log(currency?.name)
  return (
    <Link to={to || `/details`} className='card-link'>
    <div className='card'>
        <div className='img-sec'>
        <img className='flag' src={country.flags.png} alt="" />
        </div>
        <div className='card-info-sec'>
            <p className='country-name'>{country.name.common}</p>
            <div className='card-inner-info-sec'>
                <img src={populationIcon} alt="" />
                <p className='card-info-p'>{country.population}</p>
            </div>
            <div className='card-inner-info-sec'>
                <img src={currIcon} alt="" />
                <p className='card-info-p'>{currency?.symbol}</p>
            </div>
        </div>
    </div>
    </Link>
  );
};

export default Card;
