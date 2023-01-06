import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer } from '@mui/material';

function StudentIInfo() {

    const paperStyle = { padding: '50px 20px', margin: "20px auto" }

    // TODO: fetch news
    const [news, setNews] = useState([
        { id: 1, date: "12.12.2022", info: "lalalala" },
        { id: 2, date: "24.12.2022", info: "blablabla" }
    ]);

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
        </Paper>
    )
}

export default StudentIInfo;