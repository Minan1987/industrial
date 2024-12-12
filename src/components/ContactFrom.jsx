import React from 'react'

const ContactFrom = () => {
    return (
        <div className='contact-form container'>
            <form className="row" >
                <div className="col-md-12 mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder='Your Name:'
                    />
                </div>
                <div className="col-md-12 mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder='Your email:'
                    />
                </div>
                <div className="col-md-12 mb-3">
                 <select className="form-select" >
                    <option selected disabled value="">Select One</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>   
                </div>
                <div className="col-md-12 mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder='Your Phone Number:'
                    />
                </div>
                <div className="col-12">
                    <button className="btn btn-warning fw-bold py-2" style={{fontSize:"13px"}} type="submit">SUBMIT NOW</button>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom
