import React, { useState } from 'react';
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

function AdminBPostInfo() {

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
    const [news, setNews] = useState([
        { id: 1, date: "12.12.2022", info: "lalalala" },
        { id: 2, date: "24.12.2022", info: "blablabla" }
    ]);
    const [info, setInfo] = useState('');
    const [date, setDate] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = (e) => {
        e.preventDefault()
        // TODO: fetch
        const newInfo = { id: i + 1, info: info, date: date }
        console.log(newInfo)
        handleClose()
    }

    return (
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{ color: "black", }}>News</h1>
            <TableContainer sx={{ height: 600 }}><Table sx={{ minWidth: 650, maxHeight: "max-content" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Data</b></TableCell>
                        <TableCell align="left"><b>Informatie</b></TableCell>
                        <TableCell align="left"><b> </b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.from(news).map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                        >
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{row.info}</TableCell>
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
                        value={info}
                        onChange={(e) => setInfo(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Data" variant="outlined" fullWidth margin="normal"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <Button variant="contained" color="inherit" sx={{ color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleClick}>Posteaza</Button>
                </Box>
            </Modal>
        </Paper>
    )
}

export default AdminBPostInfo;