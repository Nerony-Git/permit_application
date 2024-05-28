import './Logo.css';
import { images } from '../../assets/images';

function Logo() {
    const handleToggleSideBar= () => {
        document.body.classList.toggle("toggle-sidebar");
    };
  return (
    <div className='d-flex align-items-center justify-content-between'>
            <a href='#' className='logo d-flex align-items-center'>
                <img src={images.logo} alt='Logo' />
                <span className='d-none d-lg-block'>Oil & Gas</span>
            </a>
            <i className='bi bi-list toggle-sidebar-btn' onClick={handleToggleSideBar}></i>
        </div>
  )
}

export default Logo
