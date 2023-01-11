import React from "react";
import {
  Container,
  Divider,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import { Fragment, useState, useEffect, useRef } from "react";
import { Box } from "@mui/system";
import { ChatMessageDto } from "../model/ChatMessageDto";
import SendIcon from "@mui/icons-material/Send";

export default function Chat() {
  //   const [chatMessages, setChatMessages] = useState([]);
  //   const [user] = useState("Iulia Farcas");
  //   const [message, setMessage] = useState("");
  //   const webSocket = useRef(null);
  //   const ENTER_KEY_CODE = 13;
  //   const scrollBottomRef = useRef(null);

  //   useEffect(() => {
  //     console.log("Opening WebSocket");
  //     webSocket.current = new WebSocket("ws://localhost:8080/chat");
  //     webSocket.current.onopen = (event: any) => {
  //       console.log("Open:", event);
  //     };
  //     webSocket.current.onclose = (event: any) => {
  //       console.log("Close:", event);
  //     };
  //     return () => {
  //       console.log("Closing Websocket");
  //       webSocket.current.close();
  //     };
  //   }, []);

  //   const handleEnterKey = (event: any) => {
  //     if (event.keyCode === ENTER_KEY_CODE) {
  //       sendMessage();
  //     }
  //   };
  //   const listChatMessages = chatMessages.map((chatMessageDto, index) => (
  //     <ListItem key={index}>
  //       <ListItemText
  //         primary={`${chatMessageDto.user}: ${chatMessageDto.message} `}
  //       />
  //     </ListItem>
  //   ));

  //   useEffect(() => {
  //     webSocket.current.onmessage = (event: any) => {
  //       const chatMessageDto = JSON.parse(event.data);
  //       console.log("Message: ", chatMessageDto);
  //       setChatMessages([
  //         ...chatMessages,
  //         { user: chatMessageDto.user, message: chatMessageDto.message },
  //       ]);
  //       if (scrollBottomRef.current) {
  //         scrollBottomRef.current.scrollIntoView({
  //           behavior: "smooth",
  //         });
  //       }
  //     };
  //   }, [chatMessages]);

  //   const handleMessageChange = (event: any) => {
  //     setMessage(event.target.value);
  //   };

  //   const sendMessage = () => {
  //     if (message) {
  //       console.log("Sent!");
  //       webSocket.current.send(JSON.stringify(new ChatMessageDto(user, message)));
  //       setMessage("");
  //     }
  //   };
  return (
    <Fragment>
      <Container>
        <Paper elevation={5}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {/* {chatPerson} */}
              hi
            </Typography>
            <Divider />
            <Grid container spacing={4} alignItems="right">
              <Grid item xs={12} sx={{ height: "20rem" }}>
                <List sx={{ height: "18rem", overflow: "auto" }}>
                  {/* {listChatMessages} */}
                  {/* <ListItem ref={scrollBottomRef}></ListItem> */}
                  <ListItem> </ListItem>
                </List>
              </Grid>

              <Grid item xs={10}>
                <FormControl fullWidth>
                  <TextField
                    // value={message}
                    label="Type your message..."
                    variant="outlined"
                    // onChange={handleMessageChange}
                    // onKeyDown={handleEnterKey}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <IconButton aria-label="send" color="primary">
                  <SendIcon></SendIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Fragment>
  );
}
