import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';



const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e => {


        fetch(`https://sheltered-ravine-48644.herokuapp.com/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'aplication/json'
            },

        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">CREATE ADMIN</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
}

export default MakeAdmin;