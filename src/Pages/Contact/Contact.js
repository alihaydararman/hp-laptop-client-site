import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>

            <div id='contact' className="container px-1 py-5 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h1>Hp Tech</h1>
                        <h4 className="blue-text">Just answer a few questions<br /> so that we can personalize the right experience for you.</h4>
                        <div className="card">
                            <h5 className="text-center mb-4">Powering world-class Hospital Hp Tech</h5>
                            <form className="form-card" onsubmit="event.preventDefault()">
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)" /> </div>
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" /> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Your email<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" /> </div>
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" /> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Write your Problem<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)" /> </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Write Your Problem<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="form-group col-sm-12"> <button type="submit"
                                        style={{ backgroundColor: 'purple' }}
                                        className="btn-block btn-primary">Submit</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
