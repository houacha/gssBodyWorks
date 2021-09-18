import React from "react";
import "./Contact.css";
import Nav from "./Nav";
import img from "./assets/contact-img.jpg";

function Contact({ setCurrent, current }) {
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content contact-content">
            <div>
              <img src={img} alt="skiing" />
              <div className="paragraph">
                <br />
                <br />
                <br />
                <font size="4">
                  Call to arrange an appointment for your massage.
                  <br />
                  <br />
                  Phone: 414-915-3059
                  <br />
                  <br />
                  Email: gssbodyworks.gs@gmail.com
                  <br />
                  <br />
                  or use the Contact Form below
                  <br />
                </font>
              </div>
            </div>
            <div>
              <form>
                <div>
                  <label className="form-label">
                    Name&nbsp;
                    <span className="required">*</span>
                  </label>
                  <div className="row">
                    <div className="col-md-4 first-name">
                      <input className="form-input" />
                      <label className="sublabel">First</label>
                    </div>
                    <div className="col-md-4 last-name">
                      <input className="form-input" />
                      <label className="sublabel">Last</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Are you currently a client?&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input className="form-input" />
                </div>

                <div>
                  <label className="form-label">
                    Phone Number&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input className="form-input phone" />
                </div>

                <div>
                  <label className="form-label">
                    Email&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input className="form-input" />
                </div>

                <div>
                  <label className="form-label">
                    Comment&nbsp;
                    <span className="required">*</span>
                  </label>
                  <textarea className="form-input" />
                </div>

                <button type="submit" className="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
