import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://61e5ac4cc14c7a0017124de9.mockapi.io/CRUD`)
        .then((response) => {
            setData(response.data);
        })
    }, [])

  return (
    <div className="flex items-center flex-col justify-center">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Update</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length && data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row?.id}</TableCell>
                <TableCell align="right">{row?.firstName}</TableCell>
                <TableCell align="right">{row?.lastName}</TableCell>
                <TableCell>
                    <Link to='/update'>
                        <Button variant="contained" color="success">Update</Button>
                    </Link>
                </TableCell>
                <TableCell>
                    <Link to='/delete'>
                        <Button variant="contained" color="error">Delete</Button>
                    </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Link to='/'>Create</Link>
    </div>
  );
}

export default Read;
