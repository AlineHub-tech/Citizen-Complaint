import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaPlusCircle, FaSearch, FaUserShield, FaLandmark } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext'; 
import '../styles/Navbar.css'; 

// Import flags
import kinyFlag from '../assets/rwflag.jpeg';
import enFlag from '../assets/ukflag.jpeg';
import frFlag from '../assets/frflag.jpeg';

const Navbar = () => {
    const { language, changeLanguage, t } = useLanguage(); 
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="main-navbar">
            <div className="nav-container">
                {/* LOGO SECTION - CITIZEN COMPLAINT */}
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <div className="logo-icon-bg"><FaLandmark /></div>
                    <div className="logo-text">
                        <span className="logo-main">CITIZEN</span>
                        <span className="logo-sub">COMPLAINT PORTAL</span>
                    </div>
                </Link>

                {/* NAVIGATION LINKS */}
                <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <div className="nav-links-list">
                        <NavLink to="/" exact activeClassName="active-link" onClick={closeMenu}>
                            <FaHome className="nav-i" /> {t('home')}
                        </NavLink>
                        <NavLink to="/submit" activeClassName="active-link" onClick={closeMenu}>
                            <FaPlusCircle className="nav-i" /> {t('submit')}
                        </NavLink>
                        <NavLink to="/track" activeClassName="active-link" onClick={closeMenu}>
                            <FaSearch className="nav-i" /> {t('track')}
                        </NavLink>
                        <NavLink to="/admin" activeClassName="active-link" onClick={closeMenu}>
                            <FaUserShield className="nav-i" /> {t('admin')}
                        </NavLink>
                    </div>

                    {/* LANGUAGE SWITCHER */}
                    <div className="language-bar">
                        <img 
                            src={kinyFlag} 
                            alt="Kiny" 
                            onClick={() => { changeLanguage('kiny'); closeMenu(); }} 
                            className={`flag-img ${language === 'kiny' ? 'active-f' : ''}`} 
                        />
                        <img 
                            src={enFlag} 
                            alt="English" 
                            onClick={() => { changeLanguage('en'); closeMenu(); }} 
                            className={`flag-img ${language === 'en' ? 'active-f' : ''}`} 
                        />
                        <img 
                            src={frFlag} 
                            alt="French" 
                            onClick={() => { changeLanguage('fr'); closeMenu(); }} 
                            className={`flag-img ${language === 'fr' ? 'active-f' : ''}`} 
                        />
                    </div>
                </nav>

                {/* MOBILE TOGGLE */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
        </header>
    );
};

export default Navbar;
