import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAfiebrYInA_3STqe7yInkLisOPVlG9e-s",
    authDomain: "bedtime-stories-999e9.firebaseapp.com",
    databaseURL: "https://bedtime-stories-999e9.firebaseio.com",
    projectId: "bedtime-stories-999e9",
    storageBucket: "bedtime-stories-999e9.appspot.com",
    messagingSenderId: "193929658512",
    appId: "1:193929658512:web:8502fbcc71474921ee9815"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
