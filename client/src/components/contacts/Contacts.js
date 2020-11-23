import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactContext from "../../context/contact/contactContext";
import AuthContext from "../../context/auth/authContext";
import ContactItems from "./ContactItems";
import Spinner from "../../components/layout/Spinner";
const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const authContext = useContext(AuthContext);
  const { contacts, filtered, getContacts, loading } = contactContext;
  const { loadUser } = authContext;
  useEffect(() => {
    getContacts();
    //loadUser();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {filtered !== null ? (
            filtered.map((contact) => (
              <ContactItems key={contact._id} contact={contact} />
            ))
          ) : (
            <TransitionGroup>
              {contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <ContactItems contact={contact} />
                </CSSTransition>
              ))}
            </TransitionGroup>
          )}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
