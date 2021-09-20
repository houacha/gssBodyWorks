import React from "react";
import img from "./assets/header-img.jpg";
import Nav from "./Nav";
import "./Home.css";

function Home({ setCurrent, current }) {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="banner">
          <img src={img} className="home-img" alt="canoeing" />
        </div>
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content">
            <font size="4">
              <em className="paragraph">
                Tension is who you think you should be. Relaxation is who you
                are” <br />~ Chinese proverb
              </em>
            </font>
            <h2>
              <font size="5">Therapeutic Massage Modalities</font>
            </h2>
            <p className="paragraph">
              <font size="5">
                Relaxing Swedish Massage <br />
                Deep Tissue Massage <br />
                Sports Massage
                <br />
                Thai Body Works <br />
                Chair Massage
                <br />
              </font>

              <br />

              <font size="4">
                The Landmark Building
                <br />
                316 N. Milwaukee Street Suite 302
                <br />
                Milwaukee, WI 53202
                <br />
                <br />
                Phone: 414-915-3059
                <br />
                Text: 414-915-3059
                <br />
              </font>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
