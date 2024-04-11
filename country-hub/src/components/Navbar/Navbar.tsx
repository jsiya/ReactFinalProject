import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/allCountries');
  }, [navigate]); 

  
  return (
    <div>Navbar</div>
  )
}

export default Navbar