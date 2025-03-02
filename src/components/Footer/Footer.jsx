import React from 'react';
import styles from './Footer.module.css'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
    return (
        <div className="container-fluid my-3">
            <div className={styles.footer}>
                <footer className="py-3 px-5 text-center">
                    <h5>Contact Us</h5>
                    <p>📧 For more information or inquiries, reach out to us at <a href="mailto:email@example.com" className={styles.link}>email@example.com</a></p>
                    <p>📞 Call us at <a href="tel:+1234567890" className={styles.link}>[Phone Number]</a></p>

                    <h5 className="mt-4">Follow Us</h5>
                    <p>Stay connected on social media for updates, tips, and more!</p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialLink}><FaFacebookF /> Facebook</a> |
                        <a href="#" className={styles.socialLink}><FaTwitter /> Twitter</a> |
                        <a href="#" className={styles.socialLink}><FaInstagram /> Instagram</a> |
                        <a href="#" className={styles.socialLink}><FaLinkedin /> LinkedIn</a>
                    </div>

                    <hr className="my-3" />

                    <div className={styles.footerBottom}>
                        <p>
                            <a href="#" className={styles.link}>📑 Terms & Conditions</a> |
                            <a href="#" className={styles.link}> 🔒 Privacy Policy</a>
                        </p>
                        <p>© 2025 AIFER EDUCATION. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
