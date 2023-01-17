import React, { useState, useEffect, useRef, useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { TableContainer } from "@mui/material";
import IdContext from "../login/IdContext";
import Sidebar from "../sidebar/Sidebar";
import axios from "axios";
function CLPage() {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };
  const [modalTeacherId,setTeacherId] = useState(0)
  const [isCoordinated, setIsCoordinated] = useState(false);
  const idctx = useContext(IdContext);
  const id = idctx.idLogin;

  async function getTeachers() {
    const response = await axios.get(`http://localhost:8080/coordonator`);
    const responseData = await response.data;
    setTeachers(responseData);
  }

  const checkIfStudentIsCoordinated = async () => {
    const response = await axios.get(`http://localhost:8080/student/${id}/is-coordinated`)
    const responseData = await response.data;
    setIsCoordinated(responseData);
  }

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    checkIfStudentIsCoordinated();
    getTeachers();
  }, []);

  // TODO: fetch news

  const ref = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id) => {
    setOpen(true)
    setTeacherId(id)
  }
  const handleClose = () => setOpen(false);
  const handleClick = (e) => {
      e.preventDefault()

      axios.post('http://localhost:8080/student/request', { id:{studentId: id,teacherId: modalTeacherId },documentUrl: ref.current.value})
            .then(() => {

            })
            .catch(error => {
                console.error(error);
            });

      window.alert('File uploaded!')
      handleClose();
  };
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
                  <b>Nr locuri ocupate/ Total nr locuri</b>
                </TableCell>
                { !isCoordinated &&
                <TableCell align="center" sx={{ color: "white" }}>
                  <b>Trimite cerere</b>
                </TableCell>
                }
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
                  { !isCoordinated &&
                  <TableCell align="center"><Button variant="contained"  onClick={()=>handleOpen(row.user.id)} className=".MuiButton-sizeLarge" size="large" sx={{ color: "blue", backgroundColor : "white", fontSize: "x-large", fontWeight: "900"}}>+</Button></TableCell>
                  }
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <Box
                    component="form"
                    sx={modalStyle}
                    noValidate
                    autoComplete="off"
                    justifyContent="flex-end"
                    >
                    <input ref={ref} style={{width: "350px"}} type="file" />
                    <Button variant="contained" color="inherit" sx={{ marginLeft: 20, color: 'white', backgroundColor: 'rgba(15, 12, 110, 1)', borderColor: 'rgba(15, 12, 110, 1)' }} onClick={handleClick}>Trimite</Button>
                      </Box>
                  </Modal>
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
