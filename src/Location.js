import React from "react";
import "./Location.css";
import img from "./assets/location-img.jpg";
import Nav from "./Nav";

function Location({ setCurrent, current }) {
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="location-content">
            <div className="content">
              <img src={img} alt="skiing" />
              <div className="paragraph">
                <br />
                <br />
                <br />
                <font size="4">
                  Located in the Third Ward
                  <br />
                  <br />
                  The Landmark Building
                  <br />
                  316 N. Milwaukee Street Suite 302
                  <br />
                  Milwaukee, WI 53202
                  <br />
                </font>
                <br />
                <br />
                <br />
                <br />
                <font size="3">
                  Phone: 414-915-3059
                  <br />
                  Text: 414-915-3059
                </font>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.331430707138!2d-87.9078005845607!3d43.034457679147415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880519a6760c97bd%3A0x9ad644cf9eff82c4!2s316%20N%20Milwaukee%20St%20%23302%2C%20Milwaukee%2C%20WI%2053202!5e0!3m2!1sen!2sus!4v1631928282483!5m2!1sen!2sus"
                width="350"
                height="250"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
