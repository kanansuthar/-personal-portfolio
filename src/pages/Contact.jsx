import React from 'react';
import './Contact.css';
import Footer from '../components/Footer';
function Contact(props) {
    return (
       
       <section id="contact">

            <h2>Contact Me</h2>

            <p>Email: kanansuthar6@gmail.com</p>

        <div className="contact-container">
            <a href="https://github.com/kanansuthar" className="contact-btn" target="_blank">
                GitHub
            </a>

            <a href="https://linkedin.com/in/kanansuthar" className="contact-btn linkedIn-btn" target="_blank">
                LinkedIn
            </a>
            
            <a href="mailto:kanansuthar6@gmail.com" className="contact-btn" target='_blank'>
                Email Me
            </a>
        </div>
        <Footer />
       </section>
       
    );
}

export default Contact;