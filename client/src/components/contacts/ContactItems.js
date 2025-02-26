import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
export const ContactItems = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;
  const contactContext = useContext(ContactContext);
  const { setCurrent, deleteContact, clearCurrent } = contactContext;
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  const handleClick = () => {
    setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open" /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={handleClick}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItems.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItems;
