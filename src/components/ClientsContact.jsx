import React from 'react'
import ContactFrom from './ContactFrom'
import img1 from '../../assets/img/icon6.jpg'
import img2 from '../../assets/img/icon5.jpg'
import img3 from '../../assets/img/icon4.jpg'
import img4 from '../../assets/img/icon9.jpg'
import img5 from '../../assets/img/icon8.jpg'
import img6 from '../../assets/img/icon7.jpg'

const ClientsContact = () => {
    return (
        <section className='clients-contacts mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 clients pe-5">
                        <div className="title">
                            <h2>WE WORK GLOBALLY</h2>
                            <h3 className='fw-bold fs-1'>Our Clients</h3>
                        </div>
                        <div className="container">
                            <div className="row">
                                <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque consequuntur voluptate eaque dolor officia possimus iusto iste, sed molestias officiis accusantium neque pariatur!
                                </p>
                                <div className="col-4 mb-3"><img src={img1} width="100%" alt=""/></div>
                                <div className="col-4 mb-3"><img src={img2} width="100%" alt="" /></div>
                                <div className="col-4 mb-3"><img src={img3} width="100%" alt="" /></div>
                                <div className="col-4"><img src={img4} width="100%" alt="" /></div>
                                <div className="col-4"><img src={img5} width="100%" alt="" /></div>
                                <div className="col-4"><img src={img6} width="100%" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 contacts ps-5 mt-5 mt-lg-0">
                        <div className="title">
                            <h2 style={{ width: "110px" }}>CONTACT US</h2>
                            <h3 className='fw-bold fs-1'>Get In Touch</h3>
                        </div>
                        <ContactFrom />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsContact
