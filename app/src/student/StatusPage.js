import React, { useState, useEffect, useContext } from "react";
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

function StatusPage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  const idctx = useContext(IdContext);
  const id = idctx.idLogin;
  const [cerere, setCerere] = useState(null);


  useEffect(() => {
    getCerere();
    console.log(cerere);
  }, []);

  async function getCerere() {
    const response = await axios.get(
      `http://localhost:8080/student/status-cereri/${id}`
    );
    const responseData = await response.data;
    setCerere(responseData);
    console.log("response data ", responseData);
    console.log(cerere);
  }

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
            {cerere && (
              <TableBody>
                {Array.from(cerere).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.teacherName}</TableCell>
                    <TableCell align="center">{row.statusCerereType}</TableCell>
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

export default StatusPage;
