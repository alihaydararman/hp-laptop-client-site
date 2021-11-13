import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import './Manageservices.css'


const Manageservices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>Manage Services</h1>
            <div className='servicesm'>
                {
                    services.map(service => <ManageService
                        key={service._id}
                        service={service}
                        setServices={setServices}
                        services={services}

                    ></ManageService>)
                }
            </div>
        </div>
    );
};
export default Manageservices;