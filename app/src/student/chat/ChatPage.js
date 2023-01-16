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

const Chat = () => {
  const bottomRef = useRef(null);
  const idctx = useContext(IdContext);
  const id = idctx.idLogin;
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [student, setStudent] = useState(null)
  const [teacher, setTeacher] = useState(null)

  async function getMessages() {
    await axios.get(`http://localhost:8080/student/${id}/messages`)
    .then((response => {
      setStudent(response.data.student);
      setTeacher(response.data.teacher);
      setChatMessages(response.data.messages);
    }))
    .catch((e) => {
    
    })
  }

  useEffect(() => {
    getMessages();
  }, []);

  const listChatMessages = chatMessages.map((chatMessage, index) => (
    <ListItem key={index}>
      <ListItemText primary={`${chatMessage.fromId === teacher.id? teacher.firstName + " " + teacher.lastName : student.firstName + " " + student.lastName}: ${chatMessage.text}`} />
    </ListItem>
  ));

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
  const sendMessage = async () => {
    if(message) {
      await axios.post(`http://localhost:8080/student/messages/sendMessage`, {
        fromId: student.id,
        toId: teacher.id,
        message: message
      });
      getMessages();
    }
    setMessage("")
  }

  return (
    <Fragment>
      <Container>
      { student &&<Paper elevation={5}>
        <Box p={3} id="chat-container">
            <Typography variant="h4" gutterBottom>
              Chat cu coordonatorul:
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="center">
              <Grid id="chat-window" xs={12} item>
                <List id="chat-window-messages">{listChatMessages}</List>
                <div ref={bottomRef}></div>
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
        }
        { !student && 
        <div id="center">
          <h1>You don't have a coordinator!</h1>
        </div>
        }
      </Container>
    </Fragment>
  );
};
export default Chat;
