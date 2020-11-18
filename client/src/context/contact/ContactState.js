import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const intialState = {
    contacts: [
      {
        id: 1,
        name: "vikram",
        email: "viram@rfsvd",
        phone: "039499394322332",
        type: "personal",
      },
      {
        id: 2,
        name: "vrvrw cefs",
        email: "fw ew@rfsvd",
        phone: "324223224544332",
        type: "personal",
      },
      {
        id: 3,
        name: "vdsvk gfd",
        email: "vgdggrd@rfsvd",
        phone: "039499567876543",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  //Clear Filter

  //wrap entire application with context in App.js file.
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
