import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDlZlOfEoa9_znbuh6zNUtsBa1F-s0xi3o",
    authDomain: "fir-9c3a1.firebaseapp.com",
    projectId: "fir-9c3a1",
    storageBucket: "fir-9c3a1.appspot.com",
    messagingSenderId: "229828935020",
    appId: "1:229828935020:web:92e852d1e85a9737904749",
    measurementId: "G-WF6FF6EJ70"
  };

export default firebase.initializeApp(firebaseConfig)