import React from 'react';
import "./Footer.css";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <p>© 2026 Kanan | All Rights Reserved</p>
                <div className="social-icons">

                    <a href="https://github.com/kanan" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/kanan" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/kanan" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;