import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
      <div>
        <ContactSection heading="Contact" subheading="Get in touch!" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfo />
          </div>
          <div className="right">
            Contact Form
          </div>
        </div>
      </div>
  );
};

export default Contact;
