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

function AlocareStudenti() {

    const paperStyle = { padding: '50px 20px', margin: "20px auto" }
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

    const [coords, setCoords] = useState([
        { id: 1, name: 'Profesorul X' },
        { id: 2, name: 'Razvan Invatatul' },
        { id: 3, name: 'Profesorul Prof' }
    ])

    const [news, setNews] = useState([
        { id: 1, name: 'Pop Maria' },
        { id: 2, name: 'Pop Emanuel' },
        { id: 3, name: 'Rares Marc' },
        { id: 4, name: 'Dan Andrei' }
    ])
    const [name, setName] = useState('');
    const [coord, setCoord] = useState('-');
    const [noAloc, setNoAloc] = useState(0);
    const [noFree, setNoFree] = useState(0);
    const [status, setStatus] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // useEffect(() => {
    //     fetch(`http://localhost:8080/admins/announcements?type=licenta`, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(result => setNews(result))
    //         .catch(err => console.log(err))
    // }, []);

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const newInfo = { message: message, created: created }
    //     console.log(newInfo)
    //     fetch("http://localhost:8080/admins/announcements/licenta", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         },
    //         body: JSON.stringify(newInfo)
    //     }).then(() => {
    //         console.log("New info added")
    //         handleClose()
    //     })
    // }

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>Alocare studenti</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Nume student</b></TableCell>
                        <TableCell sx={{ color: 'white' }}><b>Nume coordonator</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b> </b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(news).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.coord}</TableCell>
                            <TableCell align='right'>
                                <Button variant="contained" color="inherit" onClick={handleOpen}>Alege coordonator</Button>
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
                                    <TableCell align="left">{row2.name}</TableCell>
                                    <TableCell align='right'>
                                        <Button variant="contained" color="inherit" onClick={() => setCoord(row2.name)}>Alege</Button>
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