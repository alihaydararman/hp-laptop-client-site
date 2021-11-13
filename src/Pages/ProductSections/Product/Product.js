import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = ({ service }) => {
    const { _id, name, price, description, img, packege } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <h5>Warranty: {packege}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary bg-primary">ADD {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Product;