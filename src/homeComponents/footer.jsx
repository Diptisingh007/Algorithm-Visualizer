import React from "react";
import {FaLinkedin, FaGithub } from "react-icons/fa"; 
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {currentYear} Dipti singh</p>
        </div>

        <div className="footer-socials" aria-label="Social media links">
          <a href="https://www.linkedin.com/in/dipti-singh-0b8a9a28b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Diptisingh007" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
