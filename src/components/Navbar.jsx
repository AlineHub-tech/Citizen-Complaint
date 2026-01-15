import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaPlusCircle, FaSearch, FaUserShield } from 'react-icons/fa';
// Hano niho hari ikibazo: koresha {} mu gutumira useLanguage
import { useLanguage } from '../contexts/LanguageContext'; 
import '../styles/Navbar.css'; 

// Import your flag images (paths zikomeza kuba correct)
import kinyFlag from '../assets/rwflag.jpeg';
import enFlag from '../assets/ukflag.jpeg';
import frFlag from '../assets/frflag.jpeg';

const Navbar = () => {
    // Error ya ReferenceError yabaga hano, noneho irakora:
    const { language, changeLanguage, t } = useLanguage(); 

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                {t('CitizenComplaint')}
            </Link>
            
            <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
                <NavLink to="/" exact activeClassName="active-link" onClick={toggleMenu}>
                    <FaHome /> {t('home')}
                </NavLink>
                <NavLink to="/submit" activeClassName="active-link" onClick={toggleMenu}>
                    <FaPlusCircle /> {t('submit')}
                </NavLink>
                <NavLink to="/track" activeClassName="active-link" onClick={toggleMenu}>
                    <FaSearch /> {t('track')}
                </NavLink>
                <NavLink to="/admin" activeClassName="active-link" onClick={toggleMenu}>
                    <FaUserShield /> {t('admin')}
                </NavLink>

                {/* Language Switcher using Images */}
                <div className="language-switcher">
                    <img 
                        src={kinyFlag} 
                        alt="Kinyarwanda Flag" 
                        onClick={() => changeLanguage('kiny')} 
                        className={`flag-icon ${language === 'kiny' ? 'active-flag' : ''}`} 
                    />
                    <img 
                        src={enFlag} 
                        alt="English Flag" 
                        onClick={() => changeLanguage('en')} 
                        className={`flag-icon ${language === 'en' ? 'active-flag' : ''}`} 
                    />
                    <img 
                        src={frFlag} 
                        alt="Français Flag" 
                        onClick={() => changeLanguage('fr')} 
                        className={`flag-icon ${language === 'fr' ? 'active-flag' : ''}`} 
                    />
                </div>
            </nav>

            <div className="nav-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </header>
    );
};

export default Navbar;
