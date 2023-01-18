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
  const [contact, setContact] = useState(null);

  const getContacts = async () => {
    const response = await axios.get(`http://localhost:8080/admins/contacts/`)
    setContacts(response.data);
  }

  const contactClicked = contact => {
    setContact(contact);
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
    <Flex flexDirection={"row"}>
      <List>
        <h1>Contacts:</h1>
        {listContacts}
      </List>
      {openModal && <ChatModal adminId={id} contact={contact} open={openModal} onClose={() => setOpenModal(false)}/>}
    </Flex>
  );
};
export default ContactsList;
