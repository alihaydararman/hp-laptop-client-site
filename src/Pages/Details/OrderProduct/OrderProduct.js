import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Nevigetions from '../../Shared/Nevigetions/Nevigetions';
// import useAuth from '../../Hooks/useAuth';
import './OrderProduct.css'

const OrderProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset(data)
        axios.post('https://sheltered-ravine-48644.herokuapp.com/orders', data)
            .then(result => {
                console.log(result.data);
                reset('')
            })
    };
    // const { user } = useAuth();
    return (
        <>
            <Nevigetions></Nevigetions>
            <div style={{ textAlign: 'center' }} className="container orderservice">
                <h1>Enter Your Order Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="Your Name" {...register("displayName")} />
                    <input defaultValue='Enter Your Email' {...register("email")} />
                    <input defaultValue='Mobile Number'  {...register("mobile")} />
                    <input type='date' {...register("date")} />
                    <input type="submit" />
                </form>
            </div>
            <Footer></Footer>
        </>
    );
};

export default OrderProduct;