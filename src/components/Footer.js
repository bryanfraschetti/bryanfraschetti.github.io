import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="my-footer">
        <span className="footer-icons">
            <a href="https://www.linkedin.com/in/bryan-fraschetti/" target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                <FaLinkedin size={32} color="white" />
            </a>
            <a href="https://github.com/bryanfraschetti" target="_blank" rel="noopener noreferrer" style={{ margin: "5px" }}>
                <FaGithub size={32} color="white" />
            </a>
        </span>
    </footer>
    )
}

export default Footer