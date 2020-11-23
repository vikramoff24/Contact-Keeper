import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {filtered !== null ? (
        filtered.map((contact) => (
          <ContactItems key={contact._id} contact={contact} />
        ))
      ) : (
        <TransitionGroup>
          {contacts.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItems contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </Fragment>
  );
};

export default Contacts;
