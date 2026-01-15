import React, { createContext, useContext, useState } from 'react';

const AdminAuthContext = createContext(undefined); // undefined by default

// Hano dushyiramo admin username na password bya real
const ADMIN_USER = 'admin';
const ADMIN_PASS = '12345'; // ✅ HINDURA IYI PASSWORD NYUMA UKORE ICYITWA HASHING

export const AdminAuthProvider = ({ children }) => {
    // Tureba niba hari umuntu winjiye muri session storage
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
        const storedAuth = sessionStorage.getItem('adminAuth');
        return storedAuth === 'true';
    });

    const login = (username, password) => {
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            setIsAdminAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true'); // Kwibuka ko yinjiye
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdminAuthenticated(false);
        sessionStorage.removeItem('adminAuth'); // Gusiba amakuru ya session
    };

    return (
        <AdminAuthContext.Provider value={{ isAdminAuthenticated, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};

export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    if (context === undefined) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
};