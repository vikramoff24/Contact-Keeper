import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItems contact={contact}></ContactItems>
      ))}
    </Fragment>
  );
};

export default Contacts;
