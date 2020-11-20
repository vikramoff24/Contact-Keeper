import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItems contact={contact}></ContactItems>
          ))
        : contacts.map((contact) => (
            <ContactItems contact={contact}></ContactItems>
          ))}
    </Fragment>
  );
};

export default Contacts;
