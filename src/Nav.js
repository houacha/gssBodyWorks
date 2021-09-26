import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ setCurrent, current }) {
  const linkArr = [
    { link: "/", val: "Home" },
    { link: "/about", val: "About Glenn" },
    { link: "/services", val: "Services Offered" },
    { link: "/availability", val: "Availability" },
    { link: "/location", val: "Location" },
    { link: "/contact", val: "Contact Information" },
  ];

  const setSession = (i) => {
    setCurrent(i);
    sessionStorage.setItem("current", i);
  };

  React.useEffect(() => {
    setCurrent(Number(sessionStorage.getItem("current")));
  }, [setCurrent]);

  return (
    <div className="nav-bar">
      <ul className="nav-list">
        {Array(linkArr.length)
          .fill()
          .map((_, i) => {
            if (current === i) {
              return (
                <li key={i}>
                  <Link
                    className="current"
                    to={linkArr[i]["link"]}
                    onClick={() => setSession(i)}
                  >
                    {linkArr[i]["val"]}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <Link to={linkArr[i]["link"]} onClick={() => setSession(i)}>
                    {linkArr[i]["val"]}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}

export default Nav;
