import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="footer-distributed row ">
            <div class="footer-left aligner">
                <h3>
                    lancer
                    <span>Technologies</span>
                </h3>
                <div class="footer-links aligner">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/blog">
                        Blog
                    </Link>
                    <Link to="/services">
                        Services we offer
                    </Link>
                    <Link to="/projects">
                        Our projects
                    </Link>
                    <Link to="/about">
                        About us
                    </Link>
                    <Link to="/contacts">
                        Contacts
                    </Link>
                </div>
            </div>
            <div class="footer-center aligner">
                <div>
                    <address>
                        21 Revolution Street<br />
                        Nairobi, Kenya
                    </address>
                </div>
                <div>

                    <span>
                        <FaPhone />
                    </span>
                    <p>
                        +254 700000000
                    </p>
                </div>
                <div>

                    <span>
                        <FaEnvelope />
                    </span>
                    <p>
                        <a href="mailto:support@company.com">
                            contact@lancertechnologies.com
                        </a>
                    </p>
                </div>
            </div>
            <div class="footer-right aligner">
                <p class="footer-company-about"></p>
                <span>About the company</span>
                {/* <p>lancer Technologies is a sofware company that develops, 
                innovative and creative products and services that provide
                 total communication and information solutions. </p> */}
                <div class="footer-icons">
                    <a href="www.facebook.com">
                        <FaFacebook />
                    </a>
                    <a href="www.twitter.com">
                        <FaTwitter />
                    </a>
                    <a href="www.instagram.com">
                        <FaInstagram />
                    </a>
                    <a href="www.youtube.com">
                        <FaYoutube />
                    </a>
                </div>
                <p class="footer-company-name">&copy;2021 Lancer Technologies</p>

            </div>
        </footer>
    )
}

export default Footer;
