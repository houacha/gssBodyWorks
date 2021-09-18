import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="logo">
          G. S. S. Body Works
        </Link>
      </div>
    </div>
  );
}

export default Header;
