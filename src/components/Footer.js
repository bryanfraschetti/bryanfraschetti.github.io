import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='my-footer'>
        <div className="footer-icon-container">
            <span className="footer-icons">
                <a href="https://www.linkedin.com/in/bryan-fraschetti/" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 0px" }}>
                    <FaLinkedin size={36} alt="LinkedIn" color="white" />
                </a>
                <a href="https://github.com/bryanfraschetti" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 5px" }}>
                    <FaGithub size={36} alt="Github" color="white" />
                </a>
                <a href="https://instagram.com/bryanfraschetti" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 5px" }}>
                    <FaInstagram size={36} alt="Instagram" color="white" />
                </a>
                <a href="https://facebook.com/bryan.fraschetti" target="_blank" rel="noreferrer" style={{ margin: "0px 5px 5px 5px" }}>
                    <FaFacebookSquare size={36} alt="Facebook" color="white" />
                </a>
            </span>
        </div>
        <p className='footer-text'>frascheb@uwindsor.ca</p>
        <p className='footer-text'>Copyright &#169; Bryan Fraschetti 2023</p>

    </footer>
    )
}

export default Footer