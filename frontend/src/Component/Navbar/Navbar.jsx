import React from 'react';
import "./navbar.css"
function Navbar() {
  return (
  <>
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href='/'>Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/earn">Earn With Proyojone</a>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Food</a></li>
                            <li><a className="dropdown-item" href="/">Grocery</a></li>
                            <li><a className="dropdown-item" href="/">Phermacy</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Help
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">User Help Center</a></li>
                            <li><a className="dropdown-item" href="/">Merchant Help Center</a></li>
                            <li><a className="dropdown-item" href="/">How to join Proyojone</a></li><hr/>
                            <li><a className="dropdown-item" href="/">Send a message</a></li><hr/>
                            <li><a className="dropdown-item" href="/">Helpline</a></li>

                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Blog</a>
                    </li>

                    <li className="nav-item dropdown dropdown_auto">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Download App</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone for Business</a></li>
                            <li><a className="dropdown-item" href="/">Proyojone Points</a></li>
                            <li><a className="dropdown-item" href="/">Covid19 News</a></li>
                            <li><a className="dropdown-item" href="/">About us</a></li>
                            <li><a className="dropdown-item" href="/">Contact</a></li>
                            <li><a className="dropdown-item" href="/">Send a message</a></li>
                            <li><a className="dropdown-item" href="/">Helpline</a></li>

                        </ul>
                    </li>
                </ul>
                <div className="d-flex">
                   <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" data-bs-display="static" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Bangla</a></li>
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
