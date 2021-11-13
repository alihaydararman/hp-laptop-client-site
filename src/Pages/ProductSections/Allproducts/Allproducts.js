import React, { useEffect, useState } from 'react';
import './Allproducts.css';
import Allproduct from '../Allproduct/Allproduct';

const Allproducts = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // const url = 'https://warm-spire-28182.herokuapp.com/service';
        const url = 'https://sheltered-ravine-48644.herokuapp.com/products';

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='container'>
            <h2 className="text-primary mt-5 bg-dark">HP TECH PRODUCT</h2>
            <div className="service-container">
                {
                    services.map(service => <Allproduct
                        key={service._id}
                        service={service}
                    ></Allproduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;