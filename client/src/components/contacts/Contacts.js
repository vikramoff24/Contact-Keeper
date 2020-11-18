import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const contactContext = useContext(ContactContext);

const { Contacts } = contactContext;
const Contacts = () => {
  return (
    <Fragment>
      {Contacts.map((contact) => (
        <h1>{contact.name}</h1>
      ))}
    </Fragment>
  );
};

export default Contacts;
