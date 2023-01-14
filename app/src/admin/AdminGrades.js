import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { TableContainer } from '@mui/material';

function AdminGrades() {

    const paperStyle = { padding: '50px 20px', margin: "20px 250px auto" }

    const i = 2
    const [grades, setGrades] = React.useState('');

    useEffect(() => {
        fetch(`http://localhost:8080/admins/grades`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(result => setGrades(result))
            .catch(err => console.log(err))
    }, []);


    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>Notele studentilor sunt:</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Nume si prenume</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Sesiune normala</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Sesiune restanta</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(grades).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.firstName + ' ' + row.lastName}</TableCell>
                            <TableCell align="left">{row.normalGrade}</TableCell>
                            <TableCell align="left">{row.reTakeGrade}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
        </Paper>
    )
}

export default AdminGrades;