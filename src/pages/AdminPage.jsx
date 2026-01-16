import React, { useState } from 'react';
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAdminAuth } from '../contexts/AdminAuthContext'; // Import nshya
import '../styles/Admin.css'; 
const AdminPage = () => {
    const { complaints, adminRespond } = useComplaints();
    const { t } = useLanguage();
    // Dukoresha useAdminAuth hooks
    const { isAdminAuthenticated, login, logout } = useAdminAuth(); 
    
    const [responseModal, setResponseModal] = useState(null); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    // ... (handleResponseSubmit na getStatusText functions zikomeza kimwe)
    const handleResponseSubmit = (e, complaintId) => {
        e.preventDefault();
        const responseText = e.target.response.value;
        if (responseText.trim()) {
            adminRespond(complaintId, responseText);
            setResponseModal(null); 
        } else {
            alert("Please write a response.");
        }
    };

    const getStatusText = (statusKey) => {
        return t(`status${statusKey}`);
    };

    // Function ya login handler
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (login(username, password)) {
            setLoginError(false);
        } else {
            setLoginError(true);
        }
    };


    // ✅ Hano niho habera itandukaniro rikomeye:
    if (!isAdminAuthenticated) {
        return (
            <div className="admin-login-container">
                <h2>Admin Login</h2>
                <form onSubmit={handleLoginSubmit} className="login-form">
                    <label>
                        Username:
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </label>
                    <button type="submit">Login</button>
                    {loginError && <p className="error-message">Invalid username or password.</p>}
                </form>
            </div>
        );
    }

    // Ibi bigaragara gusa umuntu amaze kwinjira neza (logged in)
    return (
        <div className="admin-container">
            <div className="admin-header-actions">
                <h1>{t('adminTitle')}</h1>
                <button onClick={logout} className="logout-btn">Logout</button>
            </div>
            <p>{t('adminTotal')}: {complaints.length}</p>
            
            <div className="complaint-list">
                {/* ... (ibirimo hano byose birakomeza nkuko byari biri) ... */}
                {complaints.sort((a, b) => b.id - a.id).map((complaint) => (
                    <div key={complaint.id} className={`admin-card ${complaint.status.toLowerCase()}`}>
                        <h3>{t('adminIssue')} #{complaint.id} ({getStatusText(complaint.status)})</h3>
                        <p>{t('adminFrom')}: <strong>{complaint.citizenName}</strong>, {t('adminLocation')}: <strong>{complaint.location}</strong></p>
                        <p>{t('adminTo')}: <strong>{complaint.leaderName}</strong> ({complaint.leaderRole})</p>
                        <p className="details">{t('adminIssue')}: {complaint.details}</p>
                        
                        {complaint.status === 'Pending' ? (
                            <button onClick={() => setResponseModal(complaint.id)}>{t('adminRespondBtn')}</button>
                        ) : (
                            <p className="response-text">{t('adminResponseText')}: {complaint.response}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Response Modal (iguma kimwe) */}
            {responseModal && (
                // ... code ya modal ...
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>{t('adminModalTitle')} #{responseModal}</h2>
                        <form onSubmit={(e) => handleResponseSubmit(e, responseModal)}>
                            <textarea name="response" rows={4} placeholder={t('adminModalPlaceholder')} required></textarea>
                            <div className="modal-actions">
                                <button type="submit">{t('adminModalSend')}</button>
                                <button type="button" onClick={() => setResponseModal(null)}>{t('adminModalClose')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
