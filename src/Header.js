import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ aRClasses, hamClass }) {
  const [wndSz, setSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    window.onresize = (e) => {
      setSize(e.target.outerWidth);
    };
  });

  const addHamburger = () => {
    if (wndSz <= 768) {
      return (
        <span className={`hamburger ${hamClass}`} onClick={() => aRClasses()}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      );
    }
  };
  return (
    <div className="header">
      <div className="container">
        {addHamburger()}
        <Link to="/" className="logo">
          G. S. S. Body Works
        </Link>
      </div>
    </div>
  );
}

export default Header;
