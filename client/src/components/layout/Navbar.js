import React from "react";
import PropType from "prop-types";

const Navbar = () => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
};

Navbar.PropType = {
  title: PropTypes.string.isRequired,
  icon: PropType.string, //not required compulsory
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
