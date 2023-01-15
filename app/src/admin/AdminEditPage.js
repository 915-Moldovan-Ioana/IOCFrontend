import React, { useState, useEffect, useMemo, useCallback } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";

function AdminEditPage() {
  const paperStyle = { padding: "50px 20px", margin: "20px 250px auto" };
  const [criteria, setCriteria] = React.useState("");
  const [noHours, setNoHours] = React.useState(0);
  const [rules, setRules] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const date = new Date();
  const [endDate, setEndDate] = useState(date);
  const dateString = endDate.toString();
  const [obj, setObject] = React.useState(null);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const validateText = (text: String) => {
    if (text === "") return false;
    return true;
  };
  const validateNumber = (nr: Number) => {
    if (nr <= 0) return false;
    return true;
  };
  const validateDate = () => {
    if (
      date.getDate() == endDate.getDate() &&
      date.getMonth() == endDate.getMonth() &&
      date.getFullYear() == endDate.getFullYear()
    )
      return false;
    return true;
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const emptyFields = () => {
    setCriteria("");
    setNoHours(0);
    setRules("");
    setEndDate(date);
    setOpen(true);
  };

  const updateInfo = () => {
    console.log(noHours);
    console.log(formatDate(endDate));
    console.log(rules);
    console.log(criteria);

    const data = {
      practiceHoursTotal: noHours,
      practiceEndDate: formatDate(endDate),
      rules: rules,
      evaluationCriteria: criteria,
    };

    // useEffect(() => {
    //   console.log("am ajuns");
    //   fetch(`http://localhost:8080/admins/global-details`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((result) => setObject(result))
    //     .catch((err) => console.log(err));
    // }, []);

    // useEffect(() => {
    //   setCriteria(obj.evaluationCriteria);
    // }, [obj]);

    fetch(`http://localhost:8080/admins/save-global-details`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then(emptyFields())
      .catch((err) => console.log(err));
  };

  return (
    <Paper
      elevation={10}
      style={paperStyle}
      sx={{ height: "980px", marginLeft: "300px" }}
    >
      <h1 style={{ color: "black", textAlign: "center" }}>
        Editeaza criteriile de practica
      </h1>

      <InputLabel sx={{ marginBottom: "10px", color: "black" }}>
        <b>Criteriul de evaluare</b>
      </InputLabel>
      <TextField
        id="outlined-basic"
        label="Editeaza criteriul..."
        variant="outlined"
        multiline={true}
        rows={10}
        fullWidth
        value={criteria}
        onChange={(e) => {
          setCriteria(e.target.value);
        }}
      />
      <InputLabel
        sx={{ marginBottom: "10px", marginTop: "30px", color: "black" }}
      >
        <b> Numarul total de ore de practica</b>
      </InputLabel>
      <TextField
        id="outlined-basic2"
        type="number"
        label="Numar de ore..."
        variant="outlined"
        value={noHours}
        onChange={(e) => {
          setNoHours(e.target.value);
        }}
      />
      <br />
      <InputLabel
        sx={{ marginTop: "30px", marginBottom: "10px", color: "black" }}
      >
        <b>Reguli</b>
      </InputLabel>
      <TextField
        id="outlined-basic"
        label="Editeaza regulile..."
        variant="outlined"
        multiline={true}
        rows={10}
        fullWidth
        value={rules}
        onChange={(e) => {
          setRules(e.target.value);
        }}
      />
      <br />

      <InputLabel
        sx={{ marginTop: "30px", marginBottom: "10px", color: "black" }}
      >
        <b>Data de finalizare a practicii</b>
      </InputLabel>
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Data"
        inputProps={{ min: formatDate(date) }}
        type="date"
        value={formatDate(endDate)}
        onChange={(e) => {
          console.log(new Date(e.target.value));
          setEndDate(new Date(e.target.value));
        }}
      />
      <br />
      <Button
        disabled={
          !validateText(criteria) ||
          !validateText(rules) ||
          !validateNumber(noHours) ||
          !validateDate()
        }
        variant="contained"
        sx={{
          marginTop: "20px",
          backgroundColor: "rgba(15, 12, 110, 1)",
          float: "right",
        }}
        onClick={updateInfo}
      >
        Salveaza modificarile
      </Button>
      <Snackbar
        open={open}
        severity="success"
        autoHideDuration={4000}
        onClose={handleClose}
        message="Schimbarile au fost efectuate cu succes!"
      ></Snackbar>
    </Paper>
  );
}

export default AdminEditPage;
