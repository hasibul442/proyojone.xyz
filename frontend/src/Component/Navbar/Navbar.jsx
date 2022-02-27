import React,{useState} from 'react';
import { Link }  from 'react-router-dom';

import "./navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
  <>
    <section className="desktop-view">
        <nav className="navbar navbar-expand-lg shadow"  style={{ backgroundColor: '#fff' }}>
            <div className="container-fluid">
                <Link className="navbar-brand logo-style" to='/'>Proyojone</Link>
                <div className='menu-icon navbar-toggler text-dark' onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link navbar-item" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link navbar-item" to="/earn">Earn With Proyojone</Link>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button"  aria-expanded="false">
                            Services
                        </div>
                        <ul className="dropdown-menu dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><Link to='/car' className="dropdown-item" ><img src= "assets/images/menubar-icon/car.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Car</Link></li>
                            <li><Link className="dropdown-item" to="/bike-rider"><img src= "assets/images/menubar-icon/motorbike.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Bike Rider</Link></li>
                            <li><Link className="dropdown-item" to="/food"><img src= "assets/images/menubar-icon/fast-food.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Food</Link></li>
                            <li><Link className="dropdown-item" to="/grocery"><img src= "assets/images/menubar-icon/shopping-bag.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Grocery</Link></li>
                            <li><Link className="dropdown-item" to="/phermacy"><img src= "assets/images/menubar-icon/pharmacy.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Phermacy</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-expanded="false">
                            Help
                        </div>
                        <ul className="dropdown-menu dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">User Help Center</Link></li>
                            <li><Link className="dropdown-item" to="/">Merchant Help Center</Link></li>
                            <li><Link className="dropdown-item" to="/">How to join Proyojone</Link></li><hr/>
                            <li><Link className="dropdown-item" to="/"><i className="far fa-comment"></i> Send a message</Link></li><hr/>
                            <li><Link className="dropdown-item" to="/"><i className="fas fa-headset"></i> Helpline</Link></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbar-item" to="/">Blog</Link>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" aria-expanded="false">
                            More
                        </div>
                        <ul className="dropdown-menu dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">Download App</Link></li>
                            <li><Link className="dropdown-item" to="/">Proyojone for Business</Link></li>
                            <li><Link className="dropdown-item" to="/">Proyojone Points</Link></li>
                            <li><Link className="dropdown-item" to="/">Covid19 News</Link></li>
                            <li><Link className="dropdown-item" to="/">About us</Link></li>
                            <li><Link className="dropdown-item" to="/">Contact</Link></li>
                            <li><Link className="dropdown-item" to="/">Privacy Policy</Link></li>
                            <li><Link className="dropdown-item" to="/">Send a message</Link></li>

                        </ul>
                    </li>
                </ul>
                <div className="d-flex">
                   <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">বাংলা</Link></li>
                            <li><Link className="dropdown-item" to="/">English</Link></li>

                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </section>

    <section className="mobile-view">
        <nav className="navbar navbar-expand-lg shadow"  style={{ backgroundColor: '#fff' }}>
            <div className="container-fluid">
                <Link className="navbar-brand logo-style" to='/'>Proyojone</Link>
                <div className='menu-icon navbar-toggler text-dark' onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/earn">Earn With Proyojone</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                            Services
                        </Link>
                        <ul className="dropdown-menu border-0 dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/car"><img src= "assets/images/menubar-icon/car.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Car</Link></li>
                            <li><Link className="dropdown-item" to="/bike-rider"><img src= "assets/images/menubar-icon/motorbike.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Bike Rider</Link></li>
                            <li><Link className="dropdown-item" to="/food"><img src= "assets/images/menubar-icon/fast-food.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Food</Link></li>
                            <li><Link className="dropdown-item" to="/grocery"><img src= "assets/images/menubar-icon/shopping-bag.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Grocery</Link></li>
                            <li><Link className="dropdown-item" to="/phermacy"><img src= "assets/images/menubar-icon/pharmacy.png" className='menubar-icon img-fluid' alt=''/>&nbsp;&nbsp;&nbsp;Phermacy</Link></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Help
                        </a>
                        <ul className="dropdown-menu border-0 dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/">User Help Center</Link></li>
                            <li><Link className="dropdown-item" to="/">Merchant Help Center</Link></li>
                            <li><Link className="dropdown-item" to="/">How to join Proyojone</Link></li><hr/>
                            <li><Link className="dropdown-item" to="/"><i className="far fa-comment"></i> Send a message</Link></li><hr/>
                            <li><Link className="dropdown-item" to="/"><i className="fas fa-headset"></i> Helpline</Link></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Blog</Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu border-0 dropdown_auto_menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/">Download App</Link></li>
                            <li><Link className="dropdown-item" to="/">Proyojone for Business</Link></li>
                            <li><Link className="dropdown-item" to="/">Proyojone Points</Link></li>
                            <li><Link className="dropdown-item" to="/">Covid19 News</Link></li>
                            <li><Link className="dropdown-item" to="/">About us</Link></li>
                            <li><Link className="dropdown-item" to="/">Contact</Link></li>
                            <li><Link className="dropdown-item" to="/">Privacy Policy</Link></li>
                            <li><Link className="dropdown-item" to="/">Send a message</Link></li>

                        </ul>
                    </li>
                </ul>
                <div className="d-flex">
                   <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </div>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">বাংলা</a></li>
                            <li><a className="dropdown-item" href="/">English</a></li>

                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </section>
  </>
  );
}

export default Navbar;
