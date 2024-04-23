import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import countryHubLogo from '../../assets/images/CountryHubLogo.png';
import { FaBars } from 'react-icons/fa';
import { Container } from './NavbarStyles';
import Sidebar from '../SiderBar/SideBar';

interface NavbarProps {
  //onFilterChange: (filters: { independent: string; region: string[]; population: [number, number] }) => void;
}

const Navbar = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/allCountries');
  }, [navigate]); 

  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  
  return (
    <Container>
      <img className='logo' src={countryHubLogo} alt="" />
      <FaBars style={{ color: 'black',  width: '50px',  strokeWidth: '0'}} onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Navbar