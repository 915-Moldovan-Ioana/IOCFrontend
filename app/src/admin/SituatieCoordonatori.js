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

function SituatieCoordonatori() {

    const paperStyle = { padding: '50px 20px', margin: "20px auto" }

    const i = 2
    const [news, setNews] = useState([
        { id: 1, name: 'Coordonator1', applications: 20, noAcc: 10, noDeclined: 10, noStudents: 10 },
        { id: 2, name: 'Coordonator2', applications: 40, noAcc: 25, noDeclined: 15, noStudents: 25 }
    ])
    const [name, setName] = useState('');
    const [noAcc, setNoAcc] = useState(0);
    const [noDeclined, setNoDeclined] = useState(0);
    const [applications, setApplications] = useState(0);
    const [noStudents, setNoStudents] = useState(0);
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
            <h1 style={{ color: "black", }}>Situatie coordonatori</h1>
            <Button variant="contained" color="inherit" sx={{ color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleOpen}>Descarca situatia coordonatorilor</Button>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Nume</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Nr aplicatii primite</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Nr aplicatii acceptate</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Nr aplicatii refuzate</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Nr studenti</b></TableCell>
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
                            <TableCell align="left">{row.applications}</TableCell>
                            <TableCell align="left">{row.noAcc}</TableCell>
                            <TableCell align="left">{row.noDeclined}</TableCell>
                            <TableCell align="left">{row.noStudents}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
        </Paper>
    )
}

export default SituatieCoordonatori;