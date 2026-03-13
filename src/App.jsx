import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ComplaintProvider } from './contexts/ComplaintContext'; 
import { AdminAuthProvider } from './contexts/AdminAuthContext'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SubmitComplaintPage from './pages/SubmitComplaintPage'; 
import TrackComplaintPage from './pages/TrackComplaintPage';   
import AdminPage from './pages/AdminPage';                   

function App() {
    return (
        <Router>
            <LanguageProvider>
                <ComplaintProvider> 
                    <AdminAuthProvider>
                        <div className="App">
                            <Navbar />
                            <main>
                                <Routes>
                                    <Route path="/" element={<LandingPage />} />
                                    <Route path="/submit" element={<SubmitComplaintPage />} />
                                    <Route path="/track" element={<TrackComplaintPage />} />
                                    <Route path="/admin" element={<AdminPage />} />
                                </Routes>
                            </main>
                            <Footer />
                        </div>
                    </AdminAuthProvider>
                </ComplaintProvider>
            </LanguageProvider>
        </Router>
    );
}

export default App;
