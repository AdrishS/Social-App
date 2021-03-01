import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTt4eX6s87X8C6df4kSU1XRq3nayw25QI",
    authDomain: "vidly-socialapp.firebaseapp.com",
    projectId: "vidly-socialapp",
    storageBucket: "vidly-socialapp.appspot.com",
    messagingSenderId: "772137429251",
    appId: "1:772137429251:web:8ce0638203052a085aa136"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};