import React from 'react';
import "./navbar.css"
function Navbar() {
  return (
  <>
    <section className="desktop-view">
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand logo-style" href='/'>Proyojone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/earn">Earn With Proyojone</a>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button"  aria-expanded="false">
                            Services
                        </div>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Food</a></li>
                            <li><a className="dropdown-item" href="/">Grocery</a></li>
                            <li><a className="dropdown-item" href="/">Phermacy</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-expanded="false">
                            Help
                        </div>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">User Help Center</a></li>
                            <li><a className="dropdown-item" href="/">Merchant Help Center</a></li>
                            <li><a className="dropdown-item" href="/">How to join Proyojone</a></li><hr/>
                            <li><a className="dropdown-item" href="/"><i className="far fa-comment"></i> Send a message</a></li><hr/>
                            <li><a className="dropdown-item" href="/"><i className="fas fa-headset"></i> Helpline</a></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" aria-expanded="false">
                            More
                        </div>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Download App</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone for Business</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone Points</a></li>
                            <li><a className="dropdown-item" href="/">Covid19 News</a></li>
                            <li><a className="dropdown-item" href="/">About us</a></li>
                            <li><a className="dropdown-item" href="/">Contact</a></li>
                            <li><a className="dropdown-item" href="/">Privacy Policy</a></li>
                            <li><a className="dropdown-item" href="/">Send a message</a></li>

                        </ul>
                    </li>
                </ul>
                <div className="d-flex">
                   <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">বাংলা</a></li>
                            <li><a className="dropdown-item" href="/">English</a></li>

                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    </section>
    <section className="mobile-view">
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand logo-style" href='/'>Proyojone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/earn">Earn With Proyojone</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href='/' id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Food</a></li>
                            <li><a className="dropdown-item" href="/">Grocery</a></li>
                            <li><a className="dropdown-item" href="/">Phermacy</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Help
                        </a>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">User Help Center</a></li>
                            <li><a className="dropdown-item" href="/">Merchant Help Center</a></li>
                            <li><a className="dropdown-item" href="/">How to join Proyojone</a></li><hr/>
                            <li><a className="dropdown-item" href="/"><i className="far fa-comment"></i> Send a message</a></li><hr/>
                            <li><a className="dropdown-item" href="/"><i className="fas fa-headset"></i> Helpline</a></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu border-0 bg-primary dropdown_auto_menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Download App</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone for Business</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone Points</a></li>
                            <li><a className="dropdown-item" href="/">Covid19 News</a></li>
                            <li><a className="dropdown-item" href="/">About us</a></li>
                            <li><a className="dropdown-item" href="/">Contact</a></li>
                            <li><a className="dropdown-item" href="/">Privacy Policy</a></li>
                            <li><a className="dropdown-item" href="/">Send a message</a></li>

                        </ul>
                    </li>
                </ul>
                <div className="d-flex">
                   <div className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" href="/" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
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
