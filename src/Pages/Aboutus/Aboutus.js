import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Nevigetions from '../Shared/Nevigetions/Nevigetions';



const AboutUs = () => {
    return (
        <>
            <Nevigetions></Nevigetions>
            <div className='container'>
                <h2 className='my-4' style={{ color: 'red' }}>Hp Tech</h2>
                <br /><br />
                <div className='text-justify row'>
                    <p className='col-12'> HP TECH is an organization of sustainable business experts that works with its global network of the world’s leading companies to build a just and sustainable world. With offices in Asia, Europe, and North America, BSR™ provides insight, advice, and collaborative initiatives to help you see a changing world more clearly, create long-term business value, and scale impact.</p>

                    <p className='col-12'>Hp Tech is an organization of sustainable business experts that works with its global network of the world’s leading companies to build a just and sustainable world. With offices in Asia, Europe, and North America, BSR™ provides insight, advice, and collaborative initiatives to help you see a changing world more clearly, create long-term business value, and scale impact.</p>
                </div>
                <h2 style={{ color: 'red' }}>Affiliate partners</h2>
                <div className='row aling-item-center'>
                    <div className="col-lg-3  col-12">
                        <img src='https://spng.pngfind.com/pngs/s/316-3162645_new-logo-ministry-of-tourism-and-culture-hd.png' alt="" />
                    </div>
                    <div className="col-lg-3  col-12">
                        <img src='https://spng.pngfind.com/pngs/s/316-3162645_new-logo-ministry-of-tourism-and-culture-hd.png' alt="" />
                    </div>
                    <div className="col-lg-3  col-12">
                        <img src='https://spng.pngfind.com/pngs/s/316-3162645_new-logo-ministry-of-tourism-and-culture-hd.png' alt="" />
                    </div>
                    <div className="col-lg-3  col-12">
                        <img src='https://spng.pngfind.com/pngs/s/316-3162645_new-logo-ministry-of-tourism-and-culture-hd.png' alt="" />
                    </div>
                </div><br />

                <div className='row'>Hp Tech is an organization of sustainable business experts that works with its global network of the world’s leading companies to build a just and sustainable world. With offices in Asia, Europe, and North America, BSR™ provides insight, advice, and collaborative initiatives to help you see a changing world more clearly, create long-term business value, and scale impact.</div><br />

                <div className='row text justify my-5'>
                    <div className="row" style={{ color: 'red' }}>
                        <h2>A Few Word of Hp Tech</h2> <br />
                    </div>
                    <div className="col-lg-8 col-12">
                        <p>Hp Tech is an organization of sustainable business experts that works with its global network of the world’s leading companies to build a just and sustainable world. With offices in Asia, Europe, and North America, BSR™ provides insight, advice, and collaborative initiatives to help you see a changing world more clearly, create long-term business value, and scale impact.trusted brand image to the people of Bangladesh.</p>
                        <p>When asked Mr. Samason H Chowdhury, why the name SQUARE was chosen, he remembered - "We named it SQUARE because it was started by four friends and also because it signifies accuracy and perfection meaning quality"</p>
                    </div>
                    <div className="col-lg-4 col-12">
                        <img style={{ width: '100%' }} src='https://previews.123rf.com/images/putracetol/putracetol1805/putracetol180508465/102231936-laptop-world-logo-icon-design.jpg' alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;