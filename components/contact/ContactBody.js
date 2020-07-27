import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import GoogleMapComponent from "./GoogleMapComponent";
import "isomorphic-fetch";

export default () => {
 const [status, setStatus] = useState({
  submitted: false,
  submitting: false,
  info: { error: false, msg: null },
 });

 const [inputs, setInputs] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
 });

 const handleResponse = (status, msg) => {
  if (status === 200) {
   setStatus({
    submitted: true,
    submitting: false,
    info: { error: false, msg: msg },
   });
   setInputs({
    name: "",
    email: "",
    phone: "",
    message: "",
   });
  } else {
   setStatus({
    info: { error: true, msg: msg },
   });
  }
 };

 const handleOnChange = (e) => {
  e.persist();
  setInputs((prev) => ({
   ...prev,
   [e.target.id]: e.target.value,
  }));
  setStatus({
   submitted: false,
   submitting: false,
   info: { error: false, msg: null },
  });
 };

 const handleOnSubmit = async (e) => {
  e.preventDefault();
  setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
  const res = await fetch("/api/send", {
   method: "POST",
   headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
   },
   body: JSON.stringify(inputs),
  });
  const text = await res.text();
  handleResponse(res.status, text);
 };

 const onHideSuccess = () => {
  setStatus({ submitted: false });
 };

 return (
  <React.Fragment>
   <section className="contact-area ptb-80">
    <div className="container">
     <div className="section-title">
      <h2>Anything On your Mind. We are Be Glad To Assist You!</h2>
      <div className="bar"></div>
      <p>
       Don't let technology hold you back. Break free and discover how our
       company can help your business grow exponentially.
      </p>
     </div>
    </div>
   </section>

   <section className="contact-info-area pt-80">
    <div className="container">
     <div className="row">
      <div className="col-lg-4 col-md-4">
       <div className="contact-info-box">
        <div className="icon">
         <Icon.Mail />
        </div>
        <h3>Mail Us</h3>
        <p>
         <Link href="mailto:contact@pixelstocode.com">
          <a>contact@pixelstocode.com</a>
         </Link>
        </p>
       </div>
      </div>

      <div className="col-lg-4 col-md-4">
       <div className="contact-info-box">
        <div className="icon">
         <Icon.Map />
        </div>
        <h3>Face-to-Face Chit-Chat</h3>
        <p>Cluj-Napoca, Romania</p>
       </div>
      </div>

      <div className="col-lg-4 col-md-4">
       <div className="contact-info-box">
        <div className="icon">
         <Icon.Facebook />
        </div>
        <h3>Social</h3>
        <Link href="https://www.facebook.com/hello.pixelstocode">
         <a>@hello.pixelstocode</a>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </section>

   <GoogleMapComponent />
  </React.Fragment>
 );
};
