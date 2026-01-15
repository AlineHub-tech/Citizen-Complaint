import React, { createContext, useContext, useState, useEffect } from 'react';

const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
    // Tureba muri localStorage niba hari ibibazo byasigaye (persist data)
    const [complaints, setComplaints] = useState(() => {
        const localData = localStorage.getItem('citizenComplaints');
        return localData ? JSON.parse(localData) : [];
    });

    // Tubika ibibazo muri localStorage buri gihe bihindutse
    useEffect(() => {
        localStorage.setItem('citizenComplaints', JSON.stringify(complaints));
    }, [complaints]);

    const addComplaint = (complaintData) => {
        const newComplaint = {
            id: Date.now(), // ID idahinduka byoroshye
            ...complaintData,
            status: 'Pending', // Status y'ibanze
            response: null,
            date: new Date().toISOString(),
        };
        setComplaints((prevComplaints) => [...prevComplaints, newComplaint]);
        return newComplaint.id; // Dusubiza ID kugira ngo umuturage abashe gukurikirana
    };

    const getComplaintById = (id) => {
        return complaints.find(c => c.id === parseInt(id));
    };

    const adminRespond = (id, responseText) => {
        setComplaints(prevComplaints =>
            prevComplaints.map(complaint =>
                complaint.id === parseInt(id)
                    ? { ...complaint, response: responseText, status: 'Resolved' }
                    : complaint
            )
        );
    };

    return (
        <ComplaintContext.Provider value={{ complaints, addComplaint, getComplaintById, adminRespond }}>
            {children}
        </ComplaintContext.Provider>
    );
};

export const useComplaints = () => useContext(ComplaintContext);
