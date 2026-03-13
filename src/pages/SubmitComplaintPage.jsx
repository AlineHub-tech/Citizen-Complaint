import React, { useState } from 'react';
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import { FaUser, FaMapMarkerAlt, FaUserTie, FaClipboardList, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import '../styles/Forms.css';

const SubmitComplaintPage = () => {
    const { addComplaint } = useComplaints();
    const { t } = useLanguage();
    
    const [formData, setFormData] = useState({
        citizenName: '', location: '', leaderName: '', leaderRole: '', details: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [trackId, setTrackId] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(field => field.trim() === '')) {
            alert(t('formErrorFillAll') || "Please fill all fields");
            return;
        }
        
        const id = addComplaint(formData); 
        setTrackId(id);
        setSubmissionStatus('success');
        setFormData({ citizenName: '', location: '', leaderName: '', leaderRole: '', details: '' });
    };

    return (
        <div className="form-page-wrapper">
            <div className="form-card">
                {submissionStatus === 'success' ? (
                    <div className="success-container">
                        <div className="success-icon-anim"><FaCheckCircle /></div>
                        <h2>{t('formSuccessTitle') || "Submission Successful!"}</h2>
                        <p>{t('formSuccessBody') || "Your tracking ID is:"}</p>
                        <div className="tracking-id-badge">{trackId}</div>
                        <p className="note">Please save this ID to track your resolution progress.</p>
                        <button className="btn-retry" onClick={() => setSubmissionStatus(null)}>
                            {t('formSubmitAnother') || "Submit Another Report"}
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="form-header">
                            <h1>{t('submit') || "Submit a Report"}</h1>
                            <p>Your voice matters. Fill the form below to reach the authorities.</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="input-row">
                                <div className="input-group">
                                    <label><FaUser /> {t('formCitizenName')}</label>
                                    <input type="text" name="citizenName" placeholder="Your Full Name" value={formData.citizenName} onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label><FaMapMarkerAlt /> {t('formLocation')}</label>
                                    <input type="text" name="location" placeholder="Province, District, Sector" value={formData.location} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="input-row">
                                <div className="input-group">
                                    <label><FaUserTie /> {t('formLeaderName')}</label>
                                    <input type="text" name="leaderName" placeholder="Leader's Name" value={formData.leaderName} onChange={handleChange} required />
                                </div>
                                <div className="input-group">
                                    <label><FaClipboardList /> {t('formLeaderRole')}</label>
                                    <input type="text" name="leaderRole" placeholder="Position (e.g. Mayor, Chief)" value={formData.leaderRole} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="input-group full-width">
                                <label><FaClipboardList /> {t('formDetails')}</label>
                                <textarea name="details" value={formData.details} onChange={handleChange} placeholder="Describe the issue in detail..." rows={5} required />
                            </div>

                            <button type="submit" className="submit-btn-pro">
                                {t('formSubmitBtn') || "Send Report"} <FaPaperPlane />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default SubmitComplaintPage;
