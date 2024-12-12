import React from 'react'
import { Link } from 'react-router-dom'
import slider from '../../assets/img/Slider.jpg'

const Slider = () => {
  return (
    <div className='slider d-flex align-items-center' style={{backgroundImage:`url(${slider})`}}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="d-xs-none d-md-block col-md-6"></div>
          <div className="col-12 col-md-6 caption text-center text-md-start">
            <h2 className='slider-title text-light'>Leader In Power&<br/> Automatic <span>Technologies</span></h2>
            <p className='text-light py-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br/> sed diam nonumy eirmod tempor invidunt <br/>ut labore et dolore magna.</p>
            <div className='d-flex justify-content-center justify-content-md-start'>
              <Link to="/" className='btn btn-warning me-3' style={{fontSize:"13px", fontWeight:"500"}}>LEARN MORE</Link>
              <Link to="services" className='btn btn-info text-light' style={{fontSize:"13px", fontWeight:"500"}}>OUR SERVICES</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
