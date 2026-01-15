import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext'; // Use Context
import '../styles/Footer.css'; 

const Footer = () => {
    const { t } = useLanguage(); // Use translation function

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4>{t('quickLinks')}</h4>
                    <ul>
                        <li><Link to="/">{t('home')}</Link></li>
                        <li><Link to="/submit">{t('submit')}</Link></li>
                        <li><Link to="/track">{t('track')}</Link></li>
                        <li><Link to="/admin">{t('admin')}</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>{t('contactUs')}</h4>
                    <ul>
                        <li><FaMapMarkerAlt /> Kigali, Rwanda</li>
                        <li><FaPhoneAlt /> +250 796023452</li>
                        <li><FaEnvelope /> info@CitizenComplaint.com</li>
                    </ul>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>{t('newsletter')}</h4>
                    <form>
                        <input type="email" placeholder={t('newsletterPlaceholder') || "Email Address yawe"} required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;
