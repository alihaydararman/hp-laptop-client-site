import axios from 'axios';
import React from 'react';
import './Addservice.css';
import { useForm } from "react-hook-form";


const Addservice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://sheltered-ravine-48644.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data successfull inserted')
                    reset();
                }
            })
    }
    return (
        <div className="addservice">
            <h2 style={{ textAlign: 'center' }}>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder='Please submit img url' />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your place name" />
                <input type="number" {...register("price")} placeholder="Package Price" />
                <input {...register("packege", { required: true, maxLength: 20 })} placeholder="Package Duration" />
                <textarea {...register("description")} placeholder="Enter Description" style={{ width: '40%' }} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Addservice;