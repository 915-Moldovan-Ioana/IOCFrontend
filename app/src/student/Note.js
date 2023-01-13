import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import IdContext from "../login/IdContext";
import axios from "axios";

function Note() {
    const paperStyle = { padding: "50px 20px", margin: "20px auto" };
    const idctx = useContext(IdContext);
    const id = idctx.idLogin;
    const [info, setInfo] = useState(null);
    async function getInfo() {
        const response = await axios.get(
            `http://localhost:8080/student/${id}/stage-details`
        );
        const responseData = await response.data;
        setInfo(responseData);
        console.log("response data ", responseData);
        console.log(info);
    }
    useEffect(() => {
        getInfo();
        console.log(info);
    }, []);

    // TODO: fetch news

    return (
        <>
            <Paper elevation={3} style={paperStyle}>
                <h1 align="center" style={{ color: "black" }}>
                    {" "}
                    Task-uri & deadline-uri
                </h1>
                <TableContainer sx={{ height: 600 }}>
                    <Table
                        sx={{ minWidth: 650, maxHeight: "max-content" }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ color: "white" }}>
                                    <b>Mesaj</b>
                                </TableCell>
                                <TableCell align="center" sx={{ color: "white" }}>
                                    <b>Deadline</b>
                                </TableCell>
                                <TableCell align="center" sx={{ color: "white" }}>
                                    <b>Nota primita:</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {info && (
                            <TableBody>
                                {Array.from(info.tasks).map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell align="center">{row.message}</TableCell>
                                        <TableCell align="center">{row.deadline}</TableCell>
                                        <TableCell align="center">{row.grade?row.grade:"---"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
}

export default Note;
