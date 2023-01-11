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
function CLPage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  async function getTeachers() {
    const response = await axios.get(`http://localhost:8080/coordonator`);
    const responseData = await response.data;
    setTeachers(responseData);
  }
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getTeachers();
  }, []);

  // TODO: fetch news
  const [news, setNews] = useState([
    {
      id: 1,
      nume: "nume1",
      prenume: "12.12.2022",
      gradAcademic: "lalalala",
      temeInteres: "asbc",
      adresaEmail: "sjedfh",
      numarLocuri: "ajd",
    },
    {
      id: 2,
      nume: "nume2",
      prenume: "12.12.2022",
      gradAcademic: "lalalala",
      temeInteres: "asbc",
      adresaEmail: "sjedfh",
      numarLocuri: "ajd",
    },
    {
      id: 3,
      nume: "nume3",
      prenume: "12.12.2022",
      gradAcademic: "lalalala",
      temeInteres: "asbc",
      adresaEmail: "sjedfh",
      numarLocuri: "ajd",
    },
  ]);

  return (
    <>
      <Paper elevation={3} style={paperStyle}>
        <h1 align="center" style={{ color: "black" }}>
          {" "}
          Lista profesori coordonatori
        </h1>
        <TableContainer sx={{ height: 600 }}>
          <Table
            sx={{ minWidth: 650, maxHeight: "max-content" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Prenume</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Nume</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Grad academic</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Teme de interes si cercetare</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Adresa de email</b>
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Nr locuri libere/ Total nr locuri</b>
                </TableCell>
                {/* <TableCell align="left" sx={{ color: "white" }}>
                  <b> </b>
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from(teachers).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.user.firstName}</TableCell>
                  <TableCell align="center">{row.user.lastName}</TableCell>
                  <TableCell align="center">{row.grad}</TableCell>
                  <TableCell align="center">{row.temeInteres}</TableCell>
                  <TableCell align="center">{row.user.email}</TableCell>
                  <TableCell align="center">
                    {row.locuri - row.locuriLibere}/{row.locuri}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default CLPage;
