import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside id='sidebar' className='sidebar'>
      <ul className="sidebar-nav" id='sidebar-nav'>
        <li className='nav-item'>
            <a className='nav-link' href='#'>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li className='nav-item'>
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-people-fill"></i><span>Users</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-person-badge-fill"></i><span>Contractors</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-building-gear"></i><span>Companies</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="bi bi-cone-stripped"></i><span>Safety Officers</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle"></i><span>Others</span>
            </a>
          </li>
        </ul>
        </li>
        <li className='nav-item'>
            <a className="nav-link collapsed" href="#">
                <i className='bi-door-open-fill'></i>
                <span>Permits</span>
            </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-person"></i>
            <span>Profile</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-person"></i>
            <span>Profile</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-person"></i>
            <span>Profile</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="#">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
        </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
