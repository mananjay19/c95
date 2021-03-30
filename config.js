import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAmllL-6OaGOX3vu4ARHBMV_896nK2FLgo",
    authDomain: "bibleverse-a726b.firebaseapp.com",
    projectId: "bibleverse-a726b",
    storageBucket: "bibleverse-a726b.appspot.com",
    messagingSenderId: "806061352568",
    appId: "1:806061352568:web:16e842c1c1e5fd6fdfaf8d"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
