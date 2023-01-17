import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer } from '@mui/material';
import axios from 'axios';
import studentIInfo from "../student/StudentIInfo";

function SituatieStudenti() {

    const paperStyle = { padding: '50px 20px', margin: "20px 250px auto" }
    const [situations, setSituations] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/admins/students/all`)
            .then(response => {
                console.log(response)
                setSituations(response.data.students);
            })
            .then(console.log(situations))
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>Situatie studenti</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Student</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="right"><b>Coordonator</b></TableCell>
                        <TableCell align="left"><b> </b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(situations).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.user.lastName + " " + row.user.firstName}</TableCell>
                            <TableCell align="right">{row.coordinator != null ? row.coordinator.lastName + " " + row.coordinator.firstName : "Studentul nu are coordonator"}</TableCell>
                            <TableCell align='left'></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
        </Paper>
    )
}

export default SituatieStudenti;