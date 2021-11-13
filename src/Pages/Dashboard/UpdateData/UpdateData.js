import React, { useEffect, useState } from 'react';
import './UpdateData.css'
import { useParams } from 'react-router';
import Nevigetions from '../../Shared/Nevigetions/Nevigetions';
import Footer from '../../Shared/Footer/Footer';





const UpdateData = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://sheltered-ravine-48644.herokuapp.com/products/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId]);
    //update data
    const handleImagechange = e => {
        const updatedImage = e.target.value;
        const update = { img: updatedImage, name: service.name, price: service.price, packege: service.packege, description: service.description }
        setService(update)
    }

    const handleNamechange = e => {
        const updatename = e.target.value;
        const update = { img: service.img, name: updatename, price: service.price, packege: service.packege, description: service.description }
        setService(update)
    }

    const handlePricechange = e => {
        const updatePrice = e.target.value;
        const update = { img: service.img, name: service.name, price: updatePrice, packege: service.packege, description: service.description }
        setService(update)
    }

    const handlePackagechange = e => {
        const updatePackege = e.target.value;
        const update = { img: service.img, name: service.name, price: service.price, packege: updatePackege, description: service.description }
        setService(update)
    }

    const handledetailschange = e => {
        const updatedes = e.target.value;
        const update = { img: service.img, name: service.name, price: service.price, packege: service.packege, description: updatedes }
        setService(update)
    }


    const handleUpdateuser = e => {

        const url = `https://sheltered-ravine-48644.herokuapp.com/products/${serviceId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated succesfully')
                    setService({});
                }
            })
        e.preventDefault();
    }

    return (

        <>
            <Nevigetions></Nevigetions>
            <div className="addservice">
                <h2 style={{ textAlign: 'center' }}>Update Data</h2>
                <h3 style={{ textAlign: 'center' }}>Id:{serviceId}</h3>
                <form onSubmit={handleUpdateuser}>
                    <input onChange={handleImagechange} type="text" value={service.img || ''} placeholder='Please submit img url' />
                    <input onChange={handleNamechange} type="text" value={service.name || ''} placeholder="Enter your place name" />
                    <input onChange={handlePricechange} type="number" value={service.price || ''} placeholder="Package Price" />
                    <input onChange={handlePackagechange} type="text" value={service.packege || ''} placeholder="Package Duration" />
                    <textarea onChange={handledetailschange} type="text" value={service.description || ''} placeholder="Enter Description" style={{ width: '40%' }} />

                    <input type="submit" />
                </form>
            </div >
            <Footer></Footer>
        </>
    );
};

export default UpdateData;