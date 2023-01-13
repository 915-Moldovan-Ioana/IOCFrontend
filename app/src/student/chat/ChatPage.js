import React, { Fragment } from "react";
import { useState } from "react";
import {Box} from "@mui/system"
import {Container, Divider, Grid, Paper, Typography, ListItem, ListItemText, List, FormControl, TextField, IconButton} from "@mui/material"
import './Chat.css'
import SendIcon from "@mui/icons-material/Send"

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([
    {user: "Alex", message: "salut, am nevoie de ajutor"},
    {user: "Razvan Invatatul", message: "Ce problema ai?"},
    {user: "Alex", message: "Nu mi mai merge codul"},
    {user: "Razvan Invatatul", message: "Hai ca ne uitam maine peste el"},
    {user: "Alex", message: "Multumesc, o zi frumoasa!"},
    {user: "Razvan Invatatul", message: "La revedere!"},
  ])

const [message, setMessage] = useState("");
  
  const listChatMessages = chatMessages.map((chatMessage, index) => 
    <ListItem key={index}>
      <ListItemText primary={`${chatMessage.user}: ${chatMessage.message}`}/>
    </ListItem>)

  const handleMessageChange = event => {
    setMessage(event.target.value);
  }

  return (
    <Fragment>
      <Container>
        <Paper elevation={5}>
          <Box p={3} id="chat-container">
            <Typography variant="h4" gutterBottom>
              Chat cu coordonatorul:
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid id="chat-window" xs={12} item>
                <List id="chat-window-messages">
                  {listChatMessages}
                </List>
              </Grid>
              <Grid item width={"93%"}>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleMessageChange}  
                    value={message}
                    label="Enter your message..."
                    variant="outlined"/>
                </FormControl>
              </Grid>
              <Grid item width={"4%"}>
                <IconButton
                  aria-label="send"
                  color="primary">
                    <SendIcon/>
                  </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
};
export default Chat;