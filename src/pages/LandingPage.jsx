import React from 'react';
import { FaPaperPlane, FaSearch, FaCheckCircle, FaUserShield, FaBullhorn, FaQuoteLeft, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Landing.css';

const LandingPage = () => {
    const { t } = useLanguage();

    return (
        <div className="landing-clean">
            {/* 1. HERO SECTION - PURE WHITE */}
            <header className="hero-simple">
                <div className="container">
                    <span className="pro-badge-simple">Official Platform</span>
                    <h1>{t('homeTitle') || "Voice Your Concerns Directly to Leaders"}</h1>
                    <p>{t('homeSubtitle') || "A secure and transparent bridge connecting citizens with local authorities for a better community."}</p>
                    <div className="hero-cta-group">
                        <Link to="/submit" className="btn-main-dark">{t('ctaButton') || "Start Reporting"}</Link>
                        <Link to="/track" className="btn-link-simple">{t('track') || "Track Progress"} <FaSearch /></Link>
                    </div>
                </div>
            </header>

            {/* 2. HOW IT WORKS - MINIMALIST CARDS */}
            <section className="how-it-works-clean">
                <div className="container">
                    <div className="clean-section-header">
                        <h2>{t('howItWorks') || "How It Works"}</h2>
                        <p>Three simple steps to resolve community issues.</p>
                    </div>
                    
                    <div className="clean-grid">
                        <div className="clean-card">
                            <div className="card-num">01</div>
                            <h3>{t('card1Title') || "Submit Report"}</h3>
                            <p>{t('card1Desc') || "Provide details about the issue and the specific leader responsible."}</p>
                        </div>
                        <div className="clean-card active-card">
                            <div className="card-num">02</div>
                            <h3>{t('card2Title') || "Track Status"}</h3>
                            <p>{t('card2Desc') || "Use your unique ID to follow the resolution process in real-time."}</p>
                        </div>
                        <div className="clean-card">
                            <div className="card-num">03</div>
                            <h3>{t('card3Title') || "Get Resolution"}</h3>
                            <p>{t('card3Desc') || "Receive official feedback and confirm when the issue is fixed."}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE BENEFITS SECTION */}
            <section className="benefits-section">
                <div className="container grid-2-clean">
                    <div className="benefit-content">
                        <span className="gold-tag">Our Commitment</span>
                        <h2>Transparency at Every Level</h2>
                        <div className="benefit-item">
                            <FaUserShield className="b-icon" />
                            <div>
                                <h4>Data Privacy</h4>
                                <p>Your personal information is handled with the highest level of security.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <FaBullhorn className="b-icon" />
                            <div>
                                <h4>Public Accountability</h4>
                                <p>Hold leaders accountable through public resolution tracking.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <FaHandshake className="b-icon" />
                            <div>
                                <h4>Community Growth</h4>
                                <p>Active participation leads to faster development in your local area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="benefit-visual">
                        {/* Ifoto cyangwa Icon nini y'isuku */}
                        <div className="visual-circle">
                            <FaPaperPlane />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TESTIMONIAL (SUCCESS STORY) */}
            <section className="testimonial-simple">
                <div className="container">
                    <FaQuoteLeft className="quote-mark" />
                    <blockquote>
                        "This platform helped our village get the clean water issue resolved in just 3 days after reporting to the Mayor."
                    </blockquote>
                    <cite>— Citizen from Gasabo District</cite>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
