import React, { createContext, useState, useContext, useEffect } from 'react';

const translations = {
    kiny: {
        // --- NAVBAR & GLOBAL ---
        appName: "Citizen Complaint",
        home: "Ahabanza",
        submit: "Tanga Ikibazo",
        track: "Kurikirana",
        admin: "Ubuyobozi",
        
        // --- LANDING PAGE ---
        homeTitle: "Vugana n'Abayobozi bawe mu buryo bworoshye",
        homeSubtitle: "Uburyo bwizewe kandi bukorera mu mucyo bwo guhuza abaturage n'abayobozi b'inzego zibanze kugira ngo duteze imbere imibereho yacu.",
        ctaButton: "Tanga Raporo Ubu",
        howItWorks: "Uko Bikora",
        card1Title: "Andika Raporo",
        card1Desc: "Tanga ubusobanuro bw'ikibazo n'umuyobozi ubishinzwe kugira ngo gisuzumwe.",
        card2Title: "Kurikirana",
        card2Desc: "Koresha nimero wahawe kugira ngo urebe aho ikibazo cyawe kigeze gikemurwa.",
        card3Title: "Gikemuke",
        card3Desc: "Habona igisubizo cy'abayobozi kandi wemeze niba ikibazo cyakemuwe neza.",
        
        // --- SUBMIT FORM PAGE ---
        formTitle: "Tanga Raporo Nshya",
        formCitizenName: "Izina ryawe Ryose",
        formLocation: "Aho ubarizwa (Intara/Akarere/Umurenge)",
        formLeaderName: "Izina ry'Umuyobozi",
        formLeaderRole: "Icyo ashinzwe (Urugero: Meya, Umukuru w'Umudugudu)",
        formDetails: "Andika ikibazo mu buryo bw'incamake",
        formSubmitBtn: "Ohereza Raporo",
        formSuccessTitle: "Raporo yakiriwe neza!",
        formSuccessBody: "Nimero yo kugikurikirana (ID) ni:",
        formSubmitAnother: "Tanga indi Raporo",
        formErrorFillAll: "Nyamuneka wuzuza imyanya yose isabwa.",

        // --- TRACKING PAGE ---
        trackPageTitle: "Kurikirana aho ikibazo kigeze",
        trackInputPlaceholder: "Shyiramo Nimero (ID) y'ikibazo",
        trackSearchBtn: "Shakisha",
        trackErrorNotFound: "Nta kibazo cyabonetse kuri iyo nimero. Ongera ugenzure.",
        trackStatus: "Imiterere y'ikibazo",
        trackDate: "Igihe cyatangiwe",
        trackIssue: "Ikibazo cyatanzwe",
        trackAdminResponse: "Igisubizo cy'Ubuyobozi",
        statusPending: "Kiracyasuzumwa",
        statusResolved: "Byakemutse",

        // --- ADMIN DASHBOARD ---
        adminTitle: "Dashboard y'Ubuyobozi",
        adminTotal: "Raporo zose zakiriwe",
        adminPending: "Izigeregerejwe",
        adminResolved: "Izyakemuwe",
        adminRespondBtn: "Subiza",
        adminResponseText: "Igisubizo cy'Ubuyobozi",

        // --- FOOTER ---
        quickLinks: "Imiyoboro y'Ibwangu",
        contactUs: "Twandikire",
        newsletter: "Iyandikishe ku Makuru",
        newsletterPlaceholder: "Email yawe hano",
        copyright: "Uburenganzira bwose burabitswe.",
    },
    en: {
        // --- NAVBAR & GLOBAL ---
        appName: "Citizen Complaint",
        home: "Home",
        submit: "Submit Issue",
        track: "Track Issue",
        admin: "Admin",

        // --- LANDING PAGE ---
        homeTitle: "Voice Your Concerns Directly to Leaders",
        homeSubtitle: "A secure and transparent bridge connecting citizens with local authorities for a better and stronger community.",
        ctaButton: "Start Reporting",
        howItWorks: "How It Works",
        card1Title: "Submit Report",
        card1Desc: "Provide details about the issue and the specific leader responsible.",
        card2Title: "Track Status",
        card2Desc: "Use your unique ID to follow the resolution process in real-time.",
        card3Title: "Get Resolution",
        card3Desc: "Receive official feedback and confirm when the issue is fixed.",

        // --- SUBMIT FORM PAGE ---
        formTitle: "Submit a New Report",
        formCitizenName: "Your Full Name",
        formLocation: "Location (Province/District/Sector)",
        formLeaderName: "Leader's Name",
        formLeaderRole: "Leader's Role (e.g. Mayor, Chief)",
        formDetails: "Describe the issue in detail",
        formSubmitBtn: "Send Report",
        formSuccessTitle: "Report Submitted Successfully!",
        formSuccessBody: "Your tracking ID is:",
        formSubmitAnother: "Submit Another Report",
        formErrorFillAll: "Please fill in all required fields.",

        // --- TRACKING PAGE ---
        trackPageTitle: "Track Your Report Status",
        trackInputPlaceholder: "Enter Tracking ID (e.g. 1001)",
        trackSearchBtn: "Track Now",
        trackErrorNotFound: "No report found with that ID. Please check and try again.",
        trackStatus: "Current Status",
        trackDate: "Date Submitted",
        trackIssue: "Reported Issue",
        trackAdminResponse: "Official Response",
        statusPending: "Pending",
        statusResolved: "Resolved",

        // --- ADMIN DASHBOARD ---
        adminTitle: "Admin Dashboard",
        adminTotal: "Total Reports",
        adminPending: "Pending Review",
        adminResolved: "Resolved Cases",
        adminRespondBtn: "Respond",
        adminResponseText: "Official Response",

        // --- FOOTER ---
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        newsletter: "Newsletter",
        newsletterPlaceholder: "Your Email Address",
        copyright: "All rights reserved.",
    },
    fr: {
        // --- NAVBAR & GLOBAL ---
        appName: "Citizen Complaint",
        home: "Accueil",
        submit: "Signaler",
        track: "Suivre",
        admin: "Admin",

        // --- LANDING PAGE ---
        homeTitle: "Exprimez vos préoccupations aux dirigeants",
        homeSubtitle: "Un pont sécurisé et transparent reliant les citoyens aux autorités locales pour une communauté meilleure.",
        ctaButton: "Commencer le rapport",
        howItWorks: "Comment ça marche",
        card1Title: "Soumettre",
        card1Desc: "Fournissez des détails sur le problème et le responsable concerné.",
        card2Title: "Suivi",
        card2Desc: "Utilisez votre ID pour suivre le processus de résolution en temps réel.",
        card3Title: "Résolution",
        card3Desc: "Recevez des commentaires officiels et confirmez la résolution.",

        // --- SUBMIT FORM PAGE ---
        formTitle: "Soumettre un nouveau rapport",
        formCitizenName: "Votre nom complet",
        formLocation: "Localisation (Province/District/Secteur)",
        formLeaderName: "Nom du dirigeant",
        formLeaderRole: "Rôle du dirigeant (ex: Maire, Chef)",
        formDetails: "Décrivez le problème en détail",
        formSubmitBtn: "Envoyer le rapport",
        formSuccessTitle: "Rapport soumis avec succès!",
        formSuccessBody: "Votre ID de suivi est:",
        formSubmitAnother: "Soumettre un autre",
        formErrorFillAll: "Veuillez remplir tous les champs obligatoires.",

        // --- TRACKING PAGE ---
        trackPageTitle: "Suivre l'état de votre rapport",
        trackInputPlaceholder: "Entrez l'ID de suivi",
        trackSearchBtn: "Rechercher",
        trackErrorNotFound: "Aucun rapport trouvé avec cet ID. Veuillez vérifier.",
        trackStatus: "Statut actuel",
        trackDate: "Date de soumission",
        trackIssue: "Problème signalé",
        trackAdminResponse: "Réponse officielle",
        statusPending: "En attente",
        statusResolved: "Résolu",

        // --- ADMIN DASHBOARD ---
        adminTitle: "Tableau de bord Admin",
        adminTotal: "Total des rapports",
        adminPending: "En attente",
        adminResolved: "Cas résolus",
        adminRespondBtn: "Répondre",
        adminResponseText: "Réponse officielle",

        // --- FOOTER ---
        quickLinks: "Liens Rapides",
        contactUs: "Contactez-nous",
        newsletter: "Newsletter",
        newsletterPlaceholder: "Votre adresse e-mail",
        copyright: "Tous droits réservés.",
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Gusoma ururimi rwaherukaga gukoreshwa cyangwa 'kiny' niba ari ubwa mbe
    const [language, setLanguage] = useState(localStorage.getItem('userLang') || 'kiny');

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('userLang', lang); // Kubika ururimi umukiriya yahisemo
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
