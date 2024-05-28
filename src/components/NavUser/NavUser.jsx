import './NavUser.css';
import { images } from '../../assets/images';

function NavUser() {
  return (
    <li className='nav-item dropdown pe-3'>
        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src={images.profile} alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">John Doe</span>
        </a>

        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
                <h6>John Doe</h6>
                <span>Web Designer</span>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-person-fill"></i>
                    <span>My Profile</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear-fill"></i>
                    <span>Account Settings</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle-fill"></i>
                    <span>Need Help?</span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li>
                <a className="dropdown-item d-flex align-items-center" href="#">
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Log Out</span>
                </a>
            </li>

        </ul>
    </li>
  )
}

export default NavUser
