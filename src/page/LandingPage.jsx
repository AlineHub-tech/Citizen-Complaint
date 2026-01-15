import React from 'react';
import { FaFileAlt, FaSyncAlt, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext'; // Use Context
import '../styles/Landing.css';

const Card = ({ icon: Icon, title, description }) => (
    <div className="card">
        <Icon className="card-icon" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const LandingPage = () => {
    const { t } = useLanguage(); // Use translation function

    return (
        <div className="landing-page">
            <header className="hero-section">
                <h1>{t('homeTitle')}</h1>
                <p>{t('homeSubtitle')}</p>
                <Link to="/submit" className="main-cta-button">{t('ctaButton')}</Link>
            </header>

            <section className="features-section">
                <h2>{t('howItWorks')}</h2>
                <div className="cards-container">
                    <Card 
                        icon={FaFileAlt} 
                        title={t('card1Title')} 
                        description={t('card1Desc')} 
                    />
                    <Card 
                        icon={FaSyncAlt} 
                        title={t('card2Title')} 
                        description={t('card2Desc')} 
                    />
                    <Card 
                        icon={FaCheckCircle} 
                        title={t('card3Title')} 
                        description={t('card3Desc')} 
                    />
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
