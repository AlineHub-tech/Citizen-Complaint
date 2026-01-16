import React from 'react';
import { useState } from 'react'; 
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Forms.css';

const SubmitComplaintPage = () => {
    const { addComplaint } = useComplaints();
    const { t } = useLanguage();
    // ✅ IMPINDUKA HANO: twakuyemo 'leaderLocation' kuko itari kuri form
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
        // Validation check for empty fields irahagaze neza ubu
        if (Object.values(formData).some(field => field.trim() === '')) {
            alert(t('formErrorFillAll'));
            return;
        }
        
        // ✅ IMPINDUKA HANO: Guhuza data twohereje muri Context
        // addComplaint ubu yakira object itarimo leaderLocation
        const id = addComplaint(formData); 
        setTrackId(id);
        setSubmissionStatus('success');
        // Reset form fields after successful submission
        setFormData({ citizenName: '', location: '', leaderName: '', leaderRole: '', details: '' });
    };

    return (
        <div className="form-container">
            <h1>{t('submit')}</h1>
            {submissionStatus === 'success' ? (
                <div className="success-message">
                    <p>{t('formSuccessTitle')}</p>
                    <p>{t('formSuccessBody')} <strong>{trackId}</strong></p>
                    <button onClick={() => setSubmissionStatus(null)}>{t('formSubmitAnother')}</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {/* ... (ibindi bice bya form birakomeza nkuko byari biri) ... */}
                    <label>
                        {t('formCitizenName')}:
                        <input type="text" name="citizenName" value={formData.citizenName} onChange={handleChange} required />
                    </label>
                    <label>
                        {t('formLocation')}:
                        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                    </label>
                    <label>
                        {t('formLeaderName')}:
                        <input type="text" name="leaderName" value={formData.leaderName} onChange={handleChange} required />
                    </label>
                    <label>
                        {t('formLeaderRole')}:
                        <input type="text" name="leaderRole" value={formData.leaderRole} onChange={handleChange} required />
                    </label>
                    {/* Nta label ya leaderLocation iri hano, noneho twarayikuyemo hejuru */}
                    <label>
                        {t('formDetails')}:
                        <textarea name="details" value={formData.details} onChange={handleChange} rows={5} required />
                    </label>
                    <button type="submit">{t('formSubmitBtn')}</button>
                </form>
            )}
        </div>
    );
};

export default SubmitComplaintPage;
