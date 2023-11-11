import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='my-footer'>
        <p style={{margin: "0"}}>My Socials:</p>
        <div className="footer-icon-container">
            <span className="footer-icons">
                <a href="https://www.linkedin.com/in/bryan-fraschetti/" target="_blank" rel="noopener noreferrer" style={{ margin: "5px 5px 5px 0px" }}>
                    <FaLinkedin size={36} color="white" />
                </a>
                <a href="https://github.com/bryanfraschetti" target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                    <FaGithub size={36} color="white" />
                </a>
                <a href="https://instagram.com/bryanfraschetti" target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                    <FaInstagram size={36} color="white" />
                </a>
                <a href="https://facebook.com/bryan.fraschetti" target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                    <FaFacebookSquare size={36} color="white" />
                </a>
            </span>
        </div>
        <p>frascheb@uwindsor.ca</p>
    </footer>
    )
}

export default Footer