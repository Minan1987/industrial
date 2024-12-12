import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logo_Header.png'
import location from '../../assets/img/location-icon.jpg'
import phone from '../../assets/img/phone-icon.jpg'

const TopHeader = () => {
  return (
    <section className="header">
      <div className="top-header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className='col-12 col-md-6 text-center text-md-start'><p>Welcome to Leader in Industrial Solution since 2005</p></div>
          <div className='col-12 col-md-6 text-center text-md-end'><p>Global Certificate: <span>ISO 9001:2015 </span></p></div>
        </div>
      </div>
      </div>
      <div className="container-fluid-sm container-md">
        <div className="row justify-content-between align-items-center py-4">
          <div className="logo col-lg-6 d-none d-lg-block">
            <Link to="/">
              <img src={logo} alt="Industrial Logo" width="200px" />
            </Link>
          </div>
          <div className="contact-info col-12 col-lg-6 ">
            <div className="d-flex justify-content-around justify-content-lg-end align-items-center">
              <div className='d-flex justify-content-between align-items-center'>
                <img src={location} alt="location" width="35px"/>
                <div className='d-flex flex-column'>
                  <span>Email Address</span>
                  <span className='fw-bold'>info@industrial.com</span>
                </div>
              </div>
              <div className="vr mx-4"></div>
              <div className='d-flex justify-content-between align-items-center'>
                <img src={phone} alt="phone" width="35px"/>
                <div className='d-flex flex-column'>
                  <small>Call Us</small>
                  <span className='fw-bold'>18004567890</span>
                </div>
              </div>
              <div className='ms-4 d-none d-md-block'>
                <button className='btn btn-warning fs-6 fs-md-4'>REQUEST A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopHeader
