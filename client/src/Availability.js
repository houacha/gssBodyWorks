import React from "react";
import "./Availability.css";
import Nav from "./Nav";
import img from "./assets/availability-img.jpg";

function Availability({ setCurrent, current }) {
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content">
            <div className="img-container">
              <img src={img} alt="biking" />
            </div>
            <br />
            <br />
            <br />
            <div className="paragraph">
              <font size="4">
                Morning
                <br />
                Afternoon
                <br />
                Evening
                <br />
                Appointments
                <br />
                Available.
                <br />
                <br />
                <br />
                Out Calls also Available by Appointment
              </font>
              <br />
              <br />
              <br />
              <font size="3">
                Phone: 414-915-3059
                <br />
                Text: 414-915-3059
              </font>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Availability;
