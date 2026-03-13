import React, { useState } from 'react';
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import { FaSearch, FaRegClock, FaCheckCircle, FaExclamationCircle, FaUserTie, FaHistory } from 'react-icons/fa';
import '../styles/Tracking.css'; 

const TrackComplaintPage = () => {
    const { getComplaintById } = useComplaints();
    const { t } = useLanguage();
    const [trackId, setTrackId] = useState('');
    const [complaint, setComplaint] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setError('');
        if (!trackId.trim()) return;

        const foundComplaint = getComplaintById(trackId);
        if (foundComplaint) {
            setComplaint(foundComplaint);
        } else {
            setComplaint(null);
            setError(t('trackErrorNotFound') || "Tracking ID not found. Please check and try again.");
        }
    };

    return (
        <div className="track-page-wrapper">
            <div className="track-card-container">
                {/* SEARCH SECTION */}
                <div className="track-header">
                    <div className="icon-bg-circle"><FaHistory /></div>
                    <h1>{t('trackPageTitle') || "Track Your Report"}</h1>
                    <p>Enter your unique Tracking ID to see the current status of your submission.</p>
                </div>

                <form onSubmit={handleSearch} className="modern-track-form">
                    <div className="search-input-group">
                        <FaSearch className="search-icon-inside" />
                        <input 
                            type="text" 
                            placeholder={t('trackInputPlaceholder') || "Enter Tracking ID (e.g. 1001)"} 
                            value={trackId} 
                            onChange={(e) => setTrackId(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn-track-pro">{t('trackSearchBtn') || "Track Status"}</button>
                    </div>
                </form>

                {error && <div className="track-error-box"><FaExclamationCircle /> {error}</div>}

                {/* RESULT SECTION */}
                {complaint && (
                    <div className="status-result-area animate-fade-in">
                        <div className={`status-banner ${complaint.status.toLowerCase()}`}>
                            <div className="status-info">
                                <span>{t('trackStatus') || "Current Status"}:</span>
                                <h3>{t(`status${complaint.status}`) || complaint.status}</h3>
                            </div>
                            <div className="status-icon">
                                {complaint.status === 'Resolved' ? <FaCheckCircle /> : <FaRegClock />}
                            </div>
                        </div>

                        <div className="complaint-details-grid">
                            <div className="detail-item">
                                <label>Case ID</label>
                                <p>#{complaint.id}</p>
                            </div>
                            <div className="detail-item">
                                <label>{t('trackDate') || "Submission Date"}</label>
                                <p>{new Date(complaint.date).toLocaleDateString()}</p>
                            </div>
                            <div className="detail-item full-row">
                                <label>{t('trackIssue') || "Reported Issue"}</label>
                                <p className="issue-text">{complaint.details}</p>
                            </div>
                        </div>

                        {/* LEADER RESPONSE BOX */}
                        {complaint.response ? (
                            <div className="official-response-box">
                                <div className="official-header">
                                    <FaUserTie />
                                    <h4>{t('trackAdminResponse') || "Official Response"}</h4>
                                </div>
                                <p>{complaint.response}</p>
                            </div>
                        ) : (
                            <div className="pending-notice">
                                <FaRegClock /> Our officials are currently reviewing your case. Please check back later.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackComplaintPage;
