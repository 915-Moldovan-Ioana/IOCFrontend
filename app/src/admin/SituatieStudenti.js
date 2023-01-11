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

function SituatieStudenti() {

    const paperStyle = { padding: '50px 20px', margin: "20px auto" }

    const i = 2
    const [news, setNews] = useState([
        { id: 1, name: 'Pop Adrian', applied: 'Da', coords: "Coordonator1, Coordonator2", applications: 2, status: 'In curs de asteptare' },
        { id: 2, name: 'Pop Maria', applied: 'Nu', coords: "-", applications: 0, status: 'Necunoscut' }
    ])
    const [name, setName] = useState('');
    const [applied, setApplied] = useState('');
    const [coords, setCoords] = useState('');
    const [applications, setApplications] = useState(0);
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
            <h1 style={{ color: "black", }}>Situatie studenti</h1>
            <Button variant="contained" color="inherit" sx={{ color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleOpen}>Descarca situatia studentilor</Button>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Nume</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Aplicat</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Coordonatori la care a aplicat</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Nr de aplicari</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Status</b></TableCell>
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
                            <TableCell align="left">{row.applied}</TableCell>
                            <TableCell align="left">{row.coords}</TableCell>
                            <TableCell align="left">{row.applications}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
        </Paper>
    )
}

export default SituatieStudenti;