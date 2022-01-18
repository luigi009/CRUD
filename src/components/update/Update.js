import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from 'axios';

function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    const sendDataToAPI = () => {
        let body = {
            firstName,
            lastName 
        }

        axios.put(`https://61e5ac4cc14c7a0017124de9.mockapi.io/CRUD/${ID}`, body)
        .then(() => {
            window.location.assign('/read');
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'));
    }, [])

  return (
    <div className='flex flex-col justify-center items-center'>
      <Form className="flex flex-col">
        <div className="mb-4">
          <TextField
            id="standard-basic"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label="First Name"
            variant="standard"
          />
        </div>

        <div className="mb-4">
          <TextField
            id="standard-basic"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label="Last Name"
            variant="standard"
          />
        </div>

        <Button variant="contained" onClick={sendDataToAPI} type="submit">
          Update
        </Button>
      </Form>

      <Link to="/read" className='bg-indigo-600 text-white p-2 mt-2 rounded-md'>Read</Link>
    </div>
  );
}

export default Update;
