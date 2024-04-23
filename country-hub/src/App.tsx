import './App.css'
import { Outlet} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import CountryProvider from './contexts/FilterContext'

function App() {

  return (
    <>
      <CountryProvider>
        <Navbar/>
        <Outlet />
        <Footer/>
      </CountryProvider>
    </>
  )
}

export default App
