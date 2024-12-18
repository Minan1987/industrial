import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/img/Logo_footer.png'
import Search from './Search';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container h-100">
        <Link to="/" className="navbar-brand d-lg-none" ><img src={logo} alt="Industrial Logo" width="200px" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse h-100" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-warning">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">PROJECTS</Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">NEWS</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">SHOP</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">CONTACT US</Link>
            </li>
          </ul>
          <Outlet />
          <Search />
        </div>
      </div>
    </nav>
  )
}

export default Menu
