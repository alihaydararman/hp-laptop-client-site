import axios from 'axios';
import React from 'react';
import './Comment.css'
import { useForm } from 'react-hook-form';

const Comment = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://sheltered-ravine-48644.herokuapp.com/comments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data successfull inserted')
                    reset();
                }
            })
    }
    return (
        <div className="addservice">
            <h2 style={{ textAlign: 'center' }}>Please Add Your Comment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter your name" />
                <input type="number" {...register("rating")} placeholder="Rating" />
                <textarea {...register("description")} placeholder="Enter Description" style={{ width: '40%' }} />

                <input type="submit" />
            </form>
        </div>
    );
};


export default Comment;