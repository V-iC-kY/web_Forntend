importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCeKeFvpKq5_gTCaoMhZmjFPg9PaUn4Ji0",
    authDomain: "pushnotification-db52c.firebaseapp.com",
    projectId: "pushnotification-db52c",
    storageBucket: "pushnotification-db52c.appspot.com",
    messagingSenderId: "587471097345",
    appId: "1:587471097345:web:b5154c1c45210aa6cbfa00",
    measurementId: "G-M76XECZN9H"
});
const messaging = firebase.messaging();