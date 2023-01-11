import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableContainer } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
function StatusPage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  return (
    <>
      <Paper elevation={3} style={paperStyle}>
        <h1 align="center" style={{ color: "black" }}>
          Status cerere
        </h1>
        <TableContainer sx={{ height: 600 }}>
          <Table
            sx={{ minWidth: 650, maxHeight: "max-content" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Nume profesor</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Status</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">Razvan Doica</TableCell>
                <TableCell align="center" sx={{color: "red"}}>REJECTED</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">Alex Gajia</TableCell>
                <TableCell align="center" sx={{color: "green"}}>APPROVED</TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">Daniel Dragoi</TableCell>
                <TableCell align="center" sx={{color: "red"}}>REJECTED</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default StatusPage;
