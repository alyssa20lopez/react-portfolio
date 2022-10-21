import React from "react";
import styled from "styled-components";
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding-right: 4rem;
  .text {
    font-size: 1.5rem;
  }
  .contact_wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 2rem;
    justify-content: space-between;
    position: relative;
  }
  .contact_wrapper::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 75%;
    background-color: #708090;
    left: 50%;
    top: 20%
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
    padding-left: 50px;
  }
  .right {
    width: 100%;
    max-width: 500px;
  }
  @media only screen and (max-width: 768px) {
    .contact_wrapper {
      flex-direction: column
    }
    .contact_wrapper::after {
      display: none
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Contact" subheading="Get in touch!" />
        <div className="contact_wrapper">
          <div className="left">
            <ContactInfo icon={<MdLocalPhone />} text="(772) 302-0824" />
            <ContactInfo icon={<MdEmail />} text="alyssa20lopez@gmail.com" />
            <ContactInfo text="Raleigh, North Carolina" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
