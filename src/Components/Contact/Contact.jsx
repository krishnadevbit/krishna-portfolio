import React, { useContext, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name:'',
    email:'',
    message:''
  })

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = 'service_l69mopa';
    const templateId = 'template_0lbunvq';
    const publicKey = '9nep6ZwXqtFOb7_xy';

    const templateParams = {
      from_name: formDetails.name,
      from_email: formDetails.email,
      to_name: 'Krishna Dev',
      message: formDetails.message
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey).then((res)=>{
      console.log("Email Sent Successfully", res);
      setFormDetails({
        name: '',
        email: '',
        message: ''
      })
    }).catch(error=> console.log("Error Sending Email", error))

  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1 "
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formDetails.name}
            onChange={(e)=> setFormDetails({...formDetails, name: e.target.value})}
          />
          <input
            type="email"
            name="email"
            className="user"
            placeholder="Email"
            value={formDetails.email}
            onChange={(e)=> setFormDetails({...formDetails, email: e.target.value})}

          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={formDetails.message}
            onChange={(e)=> setFormDetails({...formDetails, message: e.target.value})}

          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
