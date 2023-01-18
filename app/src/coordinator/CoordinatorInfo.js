import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableContainer} from "@mui/material";
import IdContext from "../login/IdContext";
import axios from "axios";

function CoordinatorInfo() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  const idctx = useContext(IdContext);
  const id = idctx.idLogin;
  const [message, setMessage] = useState(null);
  const [criteria,setCriteria]=useState(null);

  useEffect(() => {
    getMessages();
    getInfo2();
  }, []);


  async function getInfo2() {
    const response = await axios.get(
        `http://localhost:8080/admins/global-details`
    );
    const responseData = await response.data.evaluationCriteria;
    setCriteria(responseData);
    console.log("response data ", responseData);
    console.log(criteria);
}

  async function getMessages() {
    const response = await axios.get(
      `http://localhost:8080/coordonator/announcement`
    );
    const responseData = await response.data;
    setMessage(responseData);
    console.log("MESSAGE ", responseData);
    console.log(message);
  }



  return (
    <>
      <Paper elevation={3} style={paperStyle}>
      <h1 align="center" style={{ color: "black" }}>
          Criterii
        </h1>
        <h2 align="center" style={{ color: "black" }}>
                        {criteria}
        </h2>
        <h1 align="center" style={{ color: "black" }}>
          Anunturi generale
        </h1>
        <TableContainer sx={{ height: 300 }}>
          <Table
            sx={{ minWidth: 650, maxHeight: "max-content" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Mesaj</b>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: "white", width: "200px" }}
                >
                  <b>Data</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {message && (
              <TableBody>
                {Array.from(message).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.message}</TableCell>
                    <TableCell align="center">
                      {new Date(row.created).toLocaleDateString()}
                    </TableCell>
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

export default CoordinatorInfo;
