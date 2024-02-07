import React, { useState } from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-info-container">
        <h2>Contact</h2>
        <p>J.M.C.Niroshana Jayathilaka,</p>
        <p>BSc. Software Engineering,</p>
        <p>CINEC Campus, Malabe,</p>
        <p>Sri Lanka.</p>
      </div>
      <div className="contact-info-container">
        <h2>Contact Information</h2>
        <p>
          <i className="fa fa-mobile"></i> +94757684501
        </p>
        <p>
          <i className="fa fa-envelope"></i>
          <a href="mailto:niroshana.c.n.j@gmail.com">
            niroshana.c.n.j@gmail.com
          </a>
        </p>
        <p>
          <i className="fa fa-linkedin"></i>
          <a href="http://www.linkedin.com/in/chathuranga-niroshana-651122252">
            Chathuranga Niroshana
          </a>
        </p>
        <p>
          <i className="fa fa-github"></i>
          <a href="https://github.com/Chathuranga-Niroshana">
            Chathuranga-Niroshana
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
