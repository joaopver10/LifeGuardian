import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "",
  authDomain: "lifeguardian-72f64.firebaseapp.com",
  databaseURL: "https://lifeguardian-72f64.firebaseio.com",
  projectId: "lifeguardian-72f64",
  storageBucket: "lifeguardian-72f64.appspot.com",
  messagingSenderId: "701708110732",
  appId: ""
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase
