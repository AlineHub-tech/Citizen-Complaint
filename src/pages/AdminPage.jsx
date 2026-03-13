import React, { useState } from 'react';
import { useComplaints } from '../contexts/ComplaintContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { 
  FaUserShield, FaLock, FaSignOutAlt, FaInbox, 
  FaCheckCircle, FaClock, FaReply, FaUserTie 
} from 'react-icons/fa';
import '../styles/Admin.css'; 

const AdminPage = () => {
    const { complaints, adminRespond } = useComplaints();
    const { t } = useLanguage();
    const { isAdminAuthenticated, login, logout } = useAdminAuth(); 
    
    const [responseModal, setResponseModal] = useState(null); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);

    const handleResponseSubmit = (e, complaintId) => {
        e.preventDefault();
        const responseText = e.target.response.value;
        if (responseText.trim()) {
            adminRespond(complaintId, responseText);
            setResponseModal(null); 
        }
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!login(username.trim().toLowerCase(), password)) {
            setLoginError(true);
        }
    };

    // --- LOGIN UI ---
    if (!isAdminAuthenticated) {
        return (
            <div className="admin-auth-wrapper">
                <div className="auth-card">
                    <div className="auth-icon"><FaUserShield /></div>
                    <h2>Admin Portal</h2>
                    <p>Secure access for authorized officials only.</p>
                    
                    <form onSubmit={handleLoginSubmit} className="auth-form">
                        <div className="form-group-pro">
                            <label>Username</label>
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Enter admin username"
                                autoCapitalize="none"
                                required 
                            />
                        </div>
                        <div className="form-group-pro">
                            <label>Password</label>
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="••••••••"
                                required 
                            />
                        </div>
                        <button type="submit" className="btn-auth">Login to Dashboard</button>
                        {loginError && <div className="auth-error">Invalid credentials. Please try again.</div>}
                    </form>
                </div>
            </div>
        );
    }

    // --- DASHBOARD UI ---
    const pendingCount = complaints.filter(c => c.status === 'Pending').length;
    const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

    return (
        <div className="admin-dashboard">
            <header className="dash-header">
                <div className="container">
                    <div className="header-left">
                        <h1>{t('adminTitle') || "Admin Dashboard"}</h1>
                        <p>Welcome back, Official Administrator</p>
                    </div>
                    <button onClick={logout} className="btn-logout">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </header>

            <main className="container dash-content">
                {/* STATS SECTION */}
                <section className="stats-grid">
                    <div className="stat-card blue">
                        <FaInbox className="s-icon" />
                        <div><h3>{complaints.length}</h3><p>Total Reports</p></div>
                    </div>
                    <div className="stat-card orange">
                        <FaClock className="s-icon" />
                        <div><h3>{pendingCount}</h3><p>Pending Review</p></div>
                    </div>
                    <div className="stat-card green">
                        <FaCheckCircle className="s-icon" />
                        <div><h3>{resolvedCount}</h3><p>Resolved Cases</p></div>
                    </div>
                </section>

                {/* LIST SECTION */}
                <section className="reports-section">
                    <div className="section-title-pro">
                        <h2>Recent Submissions</h2>
                        <div className="title-line"></div>
                    </div>

                    <div className="reports-list">
                        {complaints.sort((a, b) => b.id - a.id).map((complaint) => (
                            <div key={complaint.id} className="report-card-v2">
                                <div className="card-top">
                                    <span className={`status-pill ${complaint.status.toLowerCase()}`}>
                                        {t(`status${complaint.status}`) || complaint.status}
                                    </span>
                                    <span className="case-id">Case #{complaint.id}</span>
                                </div>
                                
                                <div className="card-body-pro">
                                    <div className="citizen-info">
                                        <FaUserShield className="mini-icon" />
                                        <p><strong>{complaint.citizenName}</strong> from {complaint.location}</p>
                                    </div>
                                    <div className="leader-info">
                                        <FaUserTie className="mini-icon" />
                                        <p>Targeted: <strong>{complaint.leaderName}</strong> ({complaint.leaderRole})</p>
                                    </div>
                                    <p className="issue-desc">"{complaint.details}"</p>
                                </div>

                                <div className="card-footer-pro">
                                    {complaint.status === 'Pending' ? (
                                        <button className="btn-respond" onClick={() => setResponseModal(complaint.id)}>
                                            <FaReply /> {t('adminRespondBtn') || "Respond Now"}
                                        </button>
                                    ) : (
                                        <div className="final-response">
                                            <strong>Official Response:</strong>
                                            <p>{complaint.response}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* MODAL WINDOW */}
            {responseModal && (
                <div className="modal-overlay-pro">
                    <div className="modal-card-pro animate-pop">
                        <div className="modal-header">
                            <h3>Responding to Case #{responseModal}</h3>
                            <button className="close-x" onClick={() => setResponseModal(null)}>&times;</button>
                        </div>
                        <form onSubmit={(e) => handleResponseSubmit(e, responseModal)}>
                            <textarea 
                                name="response" 
                                placeholder="Type the official resolution or feedback here..." 
                                required
                            ></textarea>
                            <div className="modal-btns">
                                <button type="button" className="btn-cancel" onClick={() => setResponseModal(null)}>Cancel</button>
                                <button type="submit" className="btn-submit-response">Submit Resolution</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
