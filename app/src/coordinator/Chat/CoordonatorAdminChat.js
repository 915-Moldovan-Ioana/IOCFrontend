import React, { Fragment, useEffect, useContext, useRef } from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import {
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  ListItem,
  ListItemText,
  List,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import "./Chat.css";
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from "@mui/icons-material/Send"
import axios from "axios";
import IdContext from "../../login/IdContext";

const AdminChat = () => {
    const idctx = useContext(IdContext);
    const id = idctx.idLogin;
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [coordonator, setCoordonator] = useState(null)
    const [adminId, setAdminId] = useState(null)

    const getMessages = async () => {
        await axios.get(`http://localhost:8080/student/${id}/adminMessages`)
        .then((response) => {
            setCoordonator(response.data.student);
            setAdminId(response.data.adminId);
            setChatMessages(response.data.messages);
        })
    }

    useEffect(() => {
        getMessages();
      }, []);
    
    const listChatMessages = chatMessages.map((chatMessage, index) => (
    <ListItem key={index}>
        <ListItemText primary={`${chatMessage.fromId === adminId? "Admin" : coordonator.firstName + " " + coordonator.lastName}: ${chatMessage.text}`} />
    </ListItem>
    ));
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        };
          
        const sendMessage = async () => {
        if(message) {
            await axios.post(`http://localhost:8080/student/messages/sendMessage`, {
            fromId: coordonator.id,
            toId: adminId,
            message: message
            });
            getMessages();
        }
        setMessage("")
        }
  
    return (
        <Fragment>
          <Container>
         <Paper elevation={5}>
            <Box p={3} id="chat-container">
                <Typography variant="h4" gutterBottom>
                  Chat cu admin-ul:
                </Typography>
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
                    <IconButton aria-label="send" color="primary" onClick={sendMessage}>
                      <SendIcon />
                    </IconButton>
                    <IconButton aria-label="refresh" color="primary" onClick={getMessages}>
                      <RefreshIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>
        </Fragment>
      );
};
export default AdminChat;
