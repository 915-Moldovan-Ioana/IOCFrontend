import React, { useState, useContext, useEffect } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import Context from "./Context";
import IdContext from "./IdContext";
import "../index.css"
import axios from "axios";

export default function Login() {
  const ctx = useContext(Context);
  const idctx = useContext(IdContext);
  const [firstName] = useState("");
  const [lastName] = useState("");
  const [email, setEmail] = useState("");
  const [role] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const userModel = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: password,
    };

    console.log(password);
    console.log(email);
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/users/${email}/${password}`)
    //         .then(response => {
    //             if(response.data==null)
    //                 navigate("/");
    //             else {
    //                 ctx.setIsLoggedIn(true);
    //                 idctx.setIdLogin(response.data.id);
    //                 idctx.setRole(response.data.role);
    //                 navigate("/");
    //             }
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);
    try {
      const response = await fetch(
        `http://localhost:8080/users/${email}/${password}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        const data = await response.json();
        ctx.setIsLoggedIn(true);
        idctx.setIdLogin(data.id);
        idctx.setRole(data.role);
        navigate("/");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <div className="login" style={{ padding: 30 }}>
      <Grid
        container
        spacing={3}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid align="center" marginTop={"20px"}>
          <CgLogIn size={35} />
          <h2>Login</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            type={"password"}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={login}
            fullWidth
            sx={{
              color: "white",
              backgroundColor: "rgba(15, 12, 110, 1)",
              borderColor: "rgba(15, 12, 110, 1)",
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
      <img className="center2"
           src="https://upload.wikimedia.org/wikipedia/ro/thumb/b/ba/Logo_Universitatea_Babe%C8%99-Bolyai.svg/1280px-Logo_Universitatea_Babe%C8%99-Bolyai.svg.png" alt={"poza ubb"}/>
    </div>
  );
}
