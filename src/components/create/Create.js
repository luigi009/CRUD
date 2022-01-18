import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";


function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendDataToAPI = () => {
        let body = {
            firstName,
            lastName 
        }

        axios.post(`https://61e5ac4cc14c7a0017124de9.mockapi.io/CRUD`, body)
        .then(() => {
            window.location.assign('/read');
        })
    }

    return (

        <div className='flex flex-col justify-center items-center'>
            <Form className='flex flex-col'>
                <div className='mb-4'>
                    <TextField id="standard-basic" onChange={(e) => setFirstName(e.target.value)} label="First Name" variant="standard" />
                </div>

                <div className='mb-4'>
                    <TextField id="standard-basic" onChange={(e) => setLastName(e.target.value)} label="Last Name" variant="standard" />
                </div>

                <Button variant="contained" onClick={sendDataToAPI} type='submit'>Submit</Button>
            </Form>

            <Link to='/read' className='bg-indigo-600 text-white p-2 mt-2 rounded-md'>Read</Link>
        </div>
    )
}

export default Create
