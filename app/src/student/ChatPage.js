import React from "react";
import History from "./chat/History";
import { Box } from "@mui/material";
import { useState } from "react";
import Paper from "@mui/material/Paper";

const Chat = () => {
  const paperStyle = { padding: "50px 20px", margin: "20px auto" };

  return (
    <>
      <Paper elevation={3} style={paperStyle}>
        <h1 align="center" style={{ color: "black" }}>
          {" "}
          Chat
        </h1>
      </Paper>
    </>
  );
};
export default Chat;
