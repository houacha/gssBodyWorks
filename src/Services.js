import React from "react";
import "./Services.css";
import Nav from "./Nav";
import img from "./assets/services-img.jpg";

function Services({ setCurrent, current }) {
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content">
            <img src={img} alt="rock climbing" />
            <br />
            <br />
            <div className="paragraph">
              <font size="4">
                90 minute massage&nbsp; $75.00
                <br />
                <br />
                120 minute massage&nbsp; $90.00
                <br />
                <br />
                Gift Certificates are available.
                <br />
                <br />
                Please call for an introductory special.
                <br />
                <br />
              </font>
              <br />
              <br />
              <br />
              <font size="3">
                Phone: 414-915-3059
                <br />
                Text: 414-915-3059
              </font>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
