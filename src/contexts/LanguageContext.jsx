import React, { createContext, useState, useContext } from 'react';

// Amazina y'indimi n'udukode twazo
const languages = {
    kiny: 'Kinyarwanda',
    en: 'English',
    fr: 'Français',
};

// Inkuru z'urubuga mu ndimi zose (Zose ziri hano hasi)
const translations = {
    kiny: {
        appName: "Irembo", // Nahinduye izina hano
        home: "Ahabanza",
        submit: "Tanga Ikibazo",
        track: "Kurikirana",
        admin: "Admin",
        homeTitle: "Platform yo Gutanga Ibibazo by'Abaturage",
        homeSubtitle: "Uburyo bworoshye kandi bwihuse bwo kuvugana n'abayobozi b'inzego zibanze.",
        ctaButton: "Tanga Ikibazo Ubu",
        howItWorks: "Uko Bikora",
        card1Title: "Andika Ikibazo",
        card1Desc: "Wuzuza ifishi isobanutse, ugaragaza izina ryawe, aho ubarizwa, n'umuyobozi ubishinzwe.",
        card2Title: "Gukurikirana",
        card2Desc: "Haboneka nimero y'ikibazo, bigatuma uba ufite ubushobozi bwo kugikurikirana.",
        card3Title: "Kubona Igisubizo",
        card3Desc: "Umuyobozi asubiza ikibazo, nawe ukabona igisubizo kuri platform.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        newsletter: "Newsletter Subscribe",
        newsletterPlaceholder: "Email Address yawe",
        copyright: "Irembo Platform. Uburenganzira bwose burabitswe.",

        // New keys for pages ... (ibi ntibyahindutse)
        formCitizenName: "Izina ry'umuturage",
        formLocation: "Aho ubarizwa (Akagari/Umudugudu)",
        formLeaderName: "Izina ry'Ubuyobozi/Umuyobozi",
        formLeaderRole: "Icyo ashinzwe / Aho akorera",
        formDetails: "Ikibazo cyangwa igitekerezo",
        formSubmitBtn: "Ohereza Ikibazo",
        formSuccessTitle: "Ikibazo cyawe cyakiriwe neza!",
        formSuccessBody: "Numero yo kugikurikirana ni:",
        formSubmitAnother: "Tanga ikindi kibazo",
        formErrorFillAll: "Please fill in all fields.",
        
        trackPageTitle: "Kurikirana Ikibazo",
        trackInputPlaceholder: "Shyiramo Nimero y'Ikibazo",
        trackSearchBtn: "Shakisha",
        trackErrorNotFound: "Nta kibazo kibonetse kuri iyo nomero. Ongera ugenzure.",
        trackStatus: "Status",
        trackDate: "Igihe cyatangiwe",
        trackIssue: "Ikibazo cyatanzwe",
        trackAdminResponse: "Igisubizo cy'ubuyobozi",
        statusPending: "Pending",
        statusResolved: "Resolved",

        adminTitle: "Admin Dashboard",
        adminTotal: "Ibibazo byatanzwe byose",
        adminFrom: "Kuva kuri",
        adminLocation: "Aho aturuka",
        adminTo: "Werekeje kuri",
        adminIssue: "Ikibazo",
        adminRespondBtn: "Subiza Ikibazo",
        adminResponseText: "Igisubizo",
        adminModalTitle: "Subiza Ikibazo",
        adminModalPlaceholder: "Andika igisubizo cyawe hano...",
        adminModalSend: "Ohereza Igisubizo",
        adminModalClose: "Funga",

    },
    en: {
        appName: "Irembo", // Nahinduye izina hano
        home: "Home",
        submit: "Submit Issue",
        track: "Track Issue",
        admin: "Admin",
        homeTitle: "Platform for Citizen Complaints",
        homeSubtitle: "An easy and fast way to communicate with local leadership.",
        ctaButton: "Submit Issue Now",
        howItWorks: "How It Works",
        // ✅ AYA MAGAMBO NAYA ONGEWEMO (Card Translations)
        card1Title: "Write Down the Issue",
        card1Desc: "Fill a clear form indicating your name, location, and the responsible leader.",
        card2Title: "Tracking",
        card2Desc: "A tracking number is provided, allowing you to follow up on the status.",
        card3Title: "Receive a Response",
        card3Desc: "The leader responds to the issue, and you receive the answer on the platform.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        newsletter: "Newsletter Subscribe",
        newsletterPlaceholder: "Your Email Address",
        copyright: "Irembo Platform. All rights reserved.",


        formCitizenName: "Citizen's Name",
        formLocation: "Location (Cell/Village)",
        formLeaderName: "Leader's/Authority's Name",
        formLeaderRole: "Role / Workplace",
        formDetails: "Issue or suggestion",
        formSubmitBtn: "Submit Complaint",
        formSuccessTitle: "Your complaint was received successfully!",
        formSuccessBody: "Your tracking number is:",
        formSubmitAnother: "Submit another complaint",
        formErrorFillAll: "Please fill in all fields.",

        trackPageTitle: "Track Complaint",
        trackInputPlaceholder: "Enter Complaint ID",
        trackSearchBtn: "Search",
        trackErrorNotFound: "No complaint found with that number. Please check again.",
        trackStatus: "Status",
        trackDate: "Date Submitted",
        trackIssue: "Issue Details",
        trackAdminResponse: "Administration Response",
        statusPending: "Pending",
        statusResolved: "Resolved",

        adminTitle: "Admin Dashboard",
        adminTotal: "Total complaints submitted",
        adminFrom: "From",
        adminLocation: "Location",
        adminTo: "Directed to",
        adminIssue: "Issue",
        adminRespondBtn: "Respond to Issue",
        adminResponseText: "Response",
        adminModalTitle: "Respond to Complaint",
        adminModalPlaceholder: "Write your response here...",
        adminModalSend: "Send Response",
        adminModalClose: "Close",
    },
    fr: {
        appName: "Irembo", // Nahinduye izina hano
        home: "Accueil",
        submit: "Soumettre Problème",
        track: "Suivre Problème",
        admin: "Admin",
        homeTitle: "Plateforme de plaintes des citoyens",
        homeSubtitle: "Un moyen simple et rapide de communiquer avec les dirigeants locaux.",
        ctaButton: "Soumettre un problème maintenant",
        howItWorks: "Comment ça marche",
         // ✅ AYA MAGAMBO NAYA ONGEWEMO (Card Translations)
        card1Title: "Écrire le problème",
        card1Desc: "Remplissez un formulaire clair indiquant votre nom, votre localisation et le responsable concerné.",
        card2Title: "Suivi",
        card2Desc: "Un numéro de suivi est fourni, vous permettant de suivre l'état d'avancement.",
        card3Title: "Recevoir une réponse",
        card3Desc: "Le responsable répond au problème, et vous recevez la réponse sur la plateforme.",
        quickLinks: "Liens rapides",
        contactUs: "Contactez-nous",
        newsletter: "Abonnez-vous",
        newsletterPlaceholder: "Votre adresse e-mail",
        copyright: "Irembo Platform. Tous droits réservés.",


        formCitizenName: "Nom du citoyen",
        formLocation: "Localisation (Cellule/Village)",
        formLeaderName: "Nom du responsable/autorité",
        formLeaderRole: "Rôle / Lieu de travail",
        formDetails: "Problème ou suggestion",
        formSubmitBtn: "Soumettre la plainte",
        formSuccessTitle: "Votre plainte a été reçue avec succès!",
        formSuccessBody: "Votre numéro de suivi est:",
        formSubmitAnother: "Soumettre une autre plainte",
        formErrorFillAll: "Veuillez remplir tous les champs.",

        trackPageTitle: "Suivre la plainte",
        trackInputPlaceholder: "Entrez le numéro de plainte",
        trackSearchBtn: "Rechercher",
        trackErrorNotFound: "Aucune plainte trouvée avec ce numéro. Veuillez vérifier à nouveau.",
        trackStatus: "Statut",
        trackDate: "Date de soumission",
        trackIssue: "Détails du problème",
        trackAdminResponse: "Réponse de l'administration",
        statusPending: "En attente",
        statusResolved: "Résolue",
        
        adminTitle: "Tableau de bord Admin",
        adminTotal: "Total des plaintes soumises",
        adminFrom: "De",
        adminLocation: "Emplacement",
        adminTo: "Adressé à",
        adminIssue: "Problème",
        adminRespondBtn: "Répondre au problème",
        adminResponseText: "Réponse",
        adminModalTitle: "Répondre à la plainte",
        adminModalPlaceholder: "Écrivez votre réponse ici...",
        adminModalSend: "Envoyer la réponse",
        adminModalClose: "Fermer",
    },
};


const LanguageContext = createContext(undefined); 

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('kiny'); 
    
    const changeLanguage = (langCode) => {
        if (languages[langCode]) {
            setLanguage(langCode);
        }
    };

    const t = (key) => {
        // Genzura neza ko ikiyingiro cy'ururimi n'urufunguzo biboneka
        return translations[language]?.[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
