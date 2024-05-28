import './Navbar.css'
import NavUser from '../NavUser/NavUser'
import NavMessages from '../NavMessages/NavMessages'
import NavNotifications from '../NavNotifications/NavNotifications'

const Navbar = () => {
  return (
        <nav className='header-nav ms-auto'>
            <ul className="d-flex align-items-center">
                <li className='nav-item d-block d-lg-none'>
                    <a className='nav-link nav-icon search-bar-toggle' href='#'>
                        <i className="bi bi-search"></i>
                    </a>
                </li>
                <NavNotifications/>
                <NavMessages/>
                <NavUser/>
            </ul>
        </nav>
  )
}

export default Navbar
