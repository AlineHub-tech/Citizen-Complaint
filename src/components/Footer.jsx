import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="main-footer">
            <div className="container footer-grid">
                {/* 1. BRAND & ABOUT */}
                <div className="footer-section about">
                    <h2 className="footer-logo">CITIZEN <span>COMPLAINT</span></h2>
                    <p className="footer-desc">
                        {t('homeSubtitle') || "The direct bridge between citizens and leaders. Transparent, fast, and secure reporting for a better community."}
                    </p>
                    <div className="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* 2. QUICK LINKS */}
                <div className="footer-section links">
                    <h3>{t('quickLinks') || "Quick Links"}</h3>
                    <ul>
                        <li><Link to="/">{t('home') || "Home"}</Link></li>
                        <li><Link to="/submit">{t('submit') || "Submit Issue"}</Link></li>
                        <li><Link to="/track">{t('track') || "Track Issue"}</Link></li>
                        <li><Link to="/admin">{t('admin') || "Admin"}</Link></li>
                    </ul>
                </div>

                {/* 3. CONTACT INFO */}
                <div className="footer-section contact">
                    <h3>{t('contactUs') || "Contact Us"}</h3>
                    <div className="contact-item">
                        <FaMapMarkerAlt /> <span>Kigali, Rwanda</span>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt /> <span>+250 788 000 000</span>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope /> <span>support@citizencomplaint.rw</span>
                    </div>
                </div>

                {/* 4. NEWSLETTER */}
                <div className="footer-section newsletter">
                    <h3>{t('newsletter') || "Newsletter"}</h3>
                    <p>Get updates on community progress.</p>
                    <form className="news-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder={t('newsletterPlaceholder') || "Email Address"} required />
                        <button type="submit"><FaPaperPlane /></button>
                    </form>
                </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="footer-bottom">
                <div className="container bottom-flex">
                    <p>&copy; {currentYear} Citizen Complaint. {t('copyright') || "All rights reserved."}</p>
                    <p className="dev-by">
                        Developed by <a href="https://byte-flow-ltd.vercel.app/" className="orange-link">Byteflow Ltd</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
