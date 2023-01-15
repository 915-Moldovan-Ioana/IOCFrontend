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
import axios from 'axios';

function AlocareStudenti() {

    const paperStyle = { padding: '50px 20px', margin: "20px 250px auto" }
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const [coords, setCoords] = useState([]);
    const [students, setStudents] = useState([]);

    const [currId, setCurrId] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (id) => {
        setOpen(true);
        setCurrId(id);
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch(`http://localhost:8080/student/without-coordinator`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(result => setStudents(result))
            .then(console.log(students))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:8080/coordonator`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(result => setCoords(result))
            .then(console.log(coords))
            .catch(err => console.log(err))
    }, []);

    const handleSetCoord = (teacherId) => {
        console.log(currId)
        console.log(teacherId)
        axios.post(`http://localhost:8080/coordonator/receive-student/${currId}/${teacherId}`)
            .then(() => {
                console.log("Student added")
                setOpen(false)
                window.alert('Student alocat!')
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>Alocare studenti</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Nume student</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b> </b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(students).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.user.lastName + " " + row.user.firstName}</TableCell>
                            <TableCell align='right'>
                                <Button variant="contained" color="inherit" onClick={() => handleOpen(row.user.id)}>Alege coordonator</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={modalStyle}
                    noValidate
                    autoComplete="off"
                    justifyContent="flex-end"
                >
                    <TableContainer sx={{ height: 300 }}><Table sx={{ minWidth: 300, maxHeight: "max-content" }} aria-label="simple table">
                        <TableBody>
                            {Array.from(coords).map((row2) => (
                                <TableRow
                                    key={row2.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                >
                                    <TableCell align="left">{row2.user.lastName + " " + row2.user.firstName}</TableCell>
                                    <TableCell align='right'>
                                        <Button variant="contained" color="inherit" onClick={() => handleSetCoord(row2.user.id)}>Alege</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table></TableContainer>
                </Box>
            </Modal>
        </Paper>
    )
}

export default AlocareStudenti;