import React from 'react';
import { Link } from 'react-router-dom';

const BlueContactSection = () => {
  return (
    <section className='blue-contact-section py-4'>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center w-100 w-lg-75 m-auto">
          <div className="col-12 col-lg-10 text-center text-lg-start">
            <p className='fs-3 m-0'>If You Need Any Industrial Solution... We Are Available For You</p>
          </div>
          <div className="col-12 col-lg-2 text-center text-lg-end">
            <Link to="/contact-us" className="btn btn-warning text-light fw-bold">CONTACT US</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlueContactSection;
