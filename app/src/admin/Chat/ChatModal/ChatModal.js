import React, { Fragment, useEffect, useContext, useRef } from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import {
  Paper,
  Divider,
  Grid,
  List,
  FormControl,
  TextField,
  IconButton,
  ListItem,
  ListItemText
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send"
import RefreshIcon from "@mui/icons-material/Refresh"
import "./ChatModal.css";
import axios from "axios";

function ChatModal({ adminId, contact, open, onClose }) {
  const paperStyle = { padding: "50px 20px", margin: "20px auto", width: "70%", height: "500px" };
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const getMessages = async () => {
    await axios.post(`http://localhost:8080/coordonator/messages`, {
      teacherId: adminId,
      studentId: contact.id
    }).then(response => {
      setChatMessages(response.data);
    })
  }

  useEffect(() => {
    getMessages();
    setMessage("")
  }, [contact]);

  let listChatMessages = chatMessages.map((chatMessage, index) => (
    <ListItem key={index}>
      <ListItemText primary={`${chatMessage.fromId === adminId? "Admin" : contact.firstName + " " + contact.lastName}: ${chatMessage.text}`} />
    </ListItem>
  ));

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const sendMessage = async () => {
    if(message) {
      await axios.post(`http://localhost:8080/student/messages/sendMessage`, {
        fromId: adminId,
        toId: contact.id,
        message: message
      });
      getMessages();
      setMessage("")
    }
  }

  return (
    <>
      <Paper elevation={3} style={paperStyle}>
        <h1 align="center" style={{ color: "black" }}>
          Chat with {contact.firstName} {contact.lastName}
        </h1>
        <Box p={3} id="chat-container">
              <Divider />
              <Grid container spacing={4} alignItems="center">
                <Grid id="chat-window" xs={12} item>
                  <List id="chat-window-messages">
                    {listChatMessages}
                  </List>
                </Grid>
                <Grid item width={"90%"}>
                  <FormControl fullWidth>
                    <TextField
                      onChange={handleMessageChange}
                      value={message}
                      label="Enter your message..."
                      variant="outlined"
                    />
                  </FormControl>
                </Grid>
                <Grid item width={"10%"}>
                  <IconButton
                    onClick={sendMessage}
                    aria-label="send"
                    color="primary"
                  >
                    <SendIcon />
                  </IconButton>
                  <IconButton
                    onClick={getMessages}
                    aria-label="refresh"
                    color="primary"
                  >
                    <RefreshIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>

      </Paper>
    </>
  );
}
export default ChatModal;
