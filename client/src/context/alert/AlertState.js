import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const intialState = []
}

  const [state, dispatch] = useReducer(alertReducer, intialState);
  //actions
  // Set Alert

  const setAlert= (msg,type,timeout=5000)=>
  {
      const id=uuid();
      dispatch({type:SET_ALERT,payload:{msg,type,id}});

      setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),timeout)
  }
  //wrap entire application with context in App.js file.
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
