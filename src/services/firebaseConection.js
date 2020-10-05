import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAM2aa3P4JzO1xkEFixk1BAYqfrvZ-0EPM",
    authDomain: "lifeguardian-a37bc.firebaseapp.com",
    databaseURL: "https://lifeguardian-a37bc.firebaseio.com",
    projectId: "lifeguardian-a37bc",
    storageBucket: "lifeguardian-a37bc.appspot.com",
    messagingSenderId: "789959354469",
    appId: "1:789959354469:web:d11c5ede3fb2b8f3f27e8c",
    measurementId: "G-68X8XPT00D"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase