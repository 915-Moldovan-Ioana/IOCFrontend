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

function AdminIPostInfo() {
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

    const i = 2

    const [news, setNews] = React.useState('');
    const [message, setMessage] = useState('');
    const [created, setCreated] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch(`http://localhost:8080/admins/announcements?type=stagiu`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => res.json())
            .then(result => setNews(result))
            .catch(err => console.log(err))
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        const newInfo = { message: message, created: created }
        console.log(newInfo)
        fetch("http://localhost:8080/admins/announcements/stagiu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(newInfo)
        }).then(() => {
            setNews((prevState) => {
                const newState = [...prevState]
                newState.push(newInfo)
                return newState
            })
            console.log("New info added")
            handleClose()
        })
    }

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>News</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: 'white' }}><b>Data</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b>Informatie</b></TableCell>
                        <TableCell sx={{ color: 'white' }} align="left"><b> </b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(news).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.created}</TableCell>
                            <TableCell align="left">{row.message}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table></TableContainer>
            <Button variant="contained" color="inherit" sx={{ color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleOpen}>Posteaza</Button>
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
                    <h1 style={{ color: "black", }}>Posteaza o informatie noua</h1>
                    <TextField id="outlined-basic" label="Informatie" variant="outlined" fullWidth margin="normal"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button variant="contained" color="inherit" sx={{ color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleClick}>Posteaza</Button>
                </Box>
            </Modal>
        </Paper>
    )
}

export default AdminIPostInfo;