import './Header.css';
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>

        <Logo/>

        <Search/>

        <Navbar/>

    </header>
  )
}

export default Header
