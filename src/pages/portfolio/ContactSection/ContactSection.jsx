import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section container">
      <h2 className="section-title">Contact</h2>
      <p className="description">
        I'm deeply committed to designing flawless and visually captivating user
        experiences, and I'm equally excited to connect with you. Your feedback,
        inquiries, and ideas are not only welcome but also essential in igniting
        my creativity.
      </p>

      <div className="social-links">
        <Link
          to="https://instagram.com/dipak__gohil__?igshid=MzMyNGUyNmU2YQ=="
          className="link"
          target="_blank"
        >
          <AiOutlineInstagram />
        </Link>

        <Link
          to="mailto:gohildipak106@gmail.com"
          className="link"
          target="_blank"
        >
          <AiOutlineMail />
        </Link>

        <Link
          to="https://www.linkedin.com/in/dipak-gohil-7286b2238/"
          className="link"
          target="_blank"
        >
          <BiLogoLinkedin />
        </Link>

        <Link
          to="https://github.com/DipakGohil007"
          className="link"
          target="_blank"
        >
          <AiOutlineGithub />
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
