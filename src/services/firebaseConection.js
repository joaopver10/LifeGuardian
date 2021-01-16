import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyC3DhpK2HzGE7eGLO9V1GsOQcaWCXFgJJk",
  authDomain: "lifeguardian-72f64.firebaseapp.com",
  databaseURL: "https://lifeguardian-72f64.firebaseio.com",
  projectId: "lifeguardian-72f64",
  storageBucket: "lifeguardian-72f64.appspot.com",
  messagingSenderId: "701708110732",
  appId: "1:701708110732:web:a445193ed16aa5ee2ce4a9"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase