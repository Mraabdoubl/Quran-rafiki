// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const db = firebase.database();

document.getElementById('language').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const translations = {
        ar: {
            headerTitle: "بسم الله الرحمان الرحيم",
            welcomeMessage: "مرحبا بك، اختر صورة لملفك الشخصي",
            importantLinks: "روابط هامة",
            footerText: "صلوا على النبي",
            channelTitle: "قنوات دينية"
        },
        en: {
            headerTitle: "In the name of Allah, the Most Gracious, the Most Merciful",
            welcomeMessage: "Welcome, choose a profile picture",
            importantLinks: "Important Links",
            footerText: "Send blessings upon the Prophet",
            channelTitle: "Religious Channels"
        },
        fr: {
            headerTitle: "Au nom de Dieu, le Tout Miséricordieux, le Très Miséricordieux",
            welcomeMessage: "Bienvenue, choisissez une photo de profil",
            importantLinks: "Liens Importants",
            footerText: "Envoyez des bénédictions sur le Prophète",
            channelTitle: "Chaînes Religieuses"
        }
    };

    document.getElementById('header-title').innerText = translations[selectedLanguage].headerTitle;
    document.getElementById('welcome-message')?.innerText = translations[selectedLanguage].welcomeMessage;
    document.getElementById('important-links')?.innerText = translations[selectedLanguage].importantLinks;
    document.getElementById('footer-text').innerText = translations[selectedLanguage].footerText;
    document.getElementById('channel-title')?.innerText = translations[selectedLanguage].channelTitle;
});

document.getElementById('credit-link')?.addEventListener('click', function() {
    alert('متى تستسلم ياكلب وتعود الى صديقك');
});

const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

sendBtn?.addEventListener('click