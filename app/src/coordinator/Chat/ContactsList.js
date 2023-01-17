import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import IdContext from "../../login/IdContext";
import {
    List,
    ListItem,
    ListItemText
  } from "@mui/material";
import ChatModal from "./ChatModal/ChatModal"
import {Flex} from "rebass"
import './Chat.css'

const ContactsList = () => {
  const idctx = useContext(IdContext);
  const id = idctx.idLogin;
  const [openModal, setOpenModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [coordinator, setCoordinator] = useState(null);
  const [student, setStudent] = useState(null);

  const getContacts = async () => {
    const response = await axios.get(`http://localhost:8080/coordonator/${id}/contacts/`)
    setCoordinator(response.data.teacher);
    setContacts(response.data.students);
  }

  const contactClicked = contact => {
    setStudent(contact);
    setOpenModal(true);
  }

  useEffect(() => {
    getContacts();
  }, [])

  const listContacts = contacts.map((contact, index) => (
    <ListItem key={index} onClick={() => contactClicked(contact)}>
      <ListItemText primary={`${contact.firstName} ${contact.lastName}`}/>
    </ListItem>
  ));


  return (
    <div>
      { contacts.length>0 &&
      <Flex flexDirection={"row"}>
        
        <List>
          <h1>Contacts:</h1>
          {listContacts}
        </List>
        {openModal && <ChatModal coordinator={coordinator} student={student} open={openModal} onClose={() => setOpenModal(false)}/>}
      </Flex>
      }
      { contacts.length===0 && 
      <div id="center">
        <h1>You don't have any students!</h1>
      </div>
      }
    </div>
  );
};
export default ContactsList;
