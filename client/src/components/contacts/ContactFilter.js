//Using useRef() hook.
import React, { useRef } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <from
      ref={text}
      type="text"
      placeholder="Filter Contacts..."
      onChange={onChange}
    ></from>
  );
};

export default ContactFilter;
