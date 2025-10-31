import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

function Contact() {
  const formRef = useRef();
  const [send, setSend] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = (e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        "service_mv4r4l1",
        "template_y6vrsfh",
        formRef.current,
        "user_0yZtSJfxPy54ztY93BLaQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contactUs">
      <div className="contact-bg"></div>
      <div className="contact-wrap">
        <div className="contact-left">
          <h1 className="contact-title">Meet me</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img className="contact-icon" src={Phone} alt="" />
              +91 6202544517
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              sanjiv2101@gmail.com
            </div>
            <div className="contact-info-item">
              <img
                className="contact-icon"
                src={Github}
                alt=""
                style={{ backgroundColor: "white", borderRadius: "50%" }}
              />

              <a
                href=" https://github.com/sanjivgit"
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
              >
                https://github.com/sanjivgit
              </a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={LinkedIn} alt="" />
              <a
                href="https://www.linkedin.com/in/sanjiv-kumar-96a414224/"
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                }}
              >
                https://www.linkedin.com/in/sanjiv-kumar-96a414224/
              </a>
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Ranchi 834001, Jharkhand
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>What's your story?</b> Get in touch. I m available to work with
            any software company which will lead my carrer to great heights . If
            You Want to Contact me for hiring or having any issues please feel
            free to contact me through the form below.
          </p>
          <form ref={formRef} onSubmit={handleClick}>
            <input
              style={{
                backgroundColor: darkMode && "#222",
                color: darkMode && "white",
              }}
              type="text"
              required
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#222",
                color: darkMode && "white",
              }}
              type="text"
              required
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#222",
                color: darkMode && "white",
              }}
              type="email"
              required
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#222",
                color: darkMode && "white",
              }}
              required
              placeholder="Message"
              name="message"
              rows="5"
            ></textarea>
            <button>Submit</button>
            {send && "Thank you....."}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
