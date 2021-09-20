import React from "react";
import "./Contact.css";
import Nav from "./Nav";
import img from "./assets/contact-img.jpg";
import emailjs from "emailjs-com";
import key from "./email.js";

function Contact({ setCurrent, current }) {
  const [email, setEmail] = React.useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    comment: "",
    patient: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setEmail({
      ...email,
      [evt.target.name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(key.SERVICE_ID, key.TEMPLATE_ID, e.target, key.USER_ID)
      .then((res) => {
        alert("Message Sent");
      });
  };
  return (
    <div>
      <div className="content-container">
        <div className="content-wrapper">
          <Nav setCurrent={setCurrent} current={current} />
          <div className="content contact-content">
            <div>
              <div className="img-container">
                <img src={img} alt="skiing" />
              </div>
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
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="form-label">
                    Name&nbsp;
                    <span className="required">*</span>
                  </label>
                  <div className="row">
                    <div className="col-md-4 first-name">
                      <input
                        className="form-input"
                        required
                        value={email.first}
                        onChange={handleChange}
                        name="first"
                      />
                      <label className="sublabel">First</label>
                    </div>
                    <div className="col-md-4 last-name">
                      <input
                        className="form-input"
                        required
                        value={email.last}
                        onChange={handleChange}
                        name="last"
                      />
                      <label className="sublabel">Last</label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Are you currently a client?&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    className="form-input"
                    required
                    value={email.patient}
                    onChange={handleChange}
                    name="patient"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Phone Number&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-input phone"
                    required
                    placeholder="000-000-0000"
                    value={email.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Email&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    value={email.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>

                <div>
                  <label className="form-label">
                    Comment&nbsp;
                    <span className="required">*</span>
                  </label>
                  <textarea
                    className="form-input"
                    required
                    value={email.comment}
                    onChange={handleChange}
                    name="comment"
                  />
                </div>

                <input type="submit" className="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
