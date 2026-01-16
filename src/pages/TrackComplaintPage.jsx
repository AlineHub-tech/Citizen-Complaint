import React from 'react';
import { useState } from 'react'; 
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Forms.css';
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
        const foundComplaint = getComplaintById(trackId);
        if (foundComplaint) {
            setComplaint(foundComplaint);
        } else {
            setComplaint(null);
            setError(t('trackErrorNotFound'));
        }
    };

    // Helper function to get translated status text
    const getStatusText = (statusKey) => {
        return t(`status${statusKey}`);
    };

    return (
        <div className="form-container">
            <h1>{t('trackPageTitle')}</h1>
            <form onSubmit={handleSearch}>
                <label>
                    {t('trackInputPlaceholder')}:
                    <input type="number" value={trackId} onChange={(e) => setTrackId(e.target.value)} required />
                </label>
                <button type="submit">{t('trackSearchBtn')}</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {complaint && (
                <div className={`complaint-status-card ${complaint.status.toLowerCase()}`}>
                    <h2>{t('trackIssue')} # {complaint.id}</h2>
                    <p><strong>{t('trackStatus')}:</strong> {getStatusText(complaint.status)}</p>
                    <p><strong>{t('trackDate')}:</strong> {new Date(complaint.date).toLocaleString()}</p>
                    <p><strong>{t('trackIssue')}:</strong> {complaint.details}</p>
                    {complaint.response && (
                        <div className="admin-response">
                            <strong>{t('trackAdminResponse')}:</strong>
                            <p>{complaint.response}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TrackComplaintPage;
