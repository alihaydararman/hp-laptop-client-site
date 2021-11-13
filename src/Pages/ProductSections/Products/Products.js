import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';

const Products = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // const url = 'https://warm-spire-28182.herokuapp.com/service';
        const url = 'http://localhost:5000/products';

        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className='container'>
            <h2 className="text-primary mt-5 bg-dark">HP TECH PRODUCT</h2>
            <div className="service-container">
                {
                    services.slice(0, 6).map(service => <Product
                        key={service._id}
                        service={service}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;