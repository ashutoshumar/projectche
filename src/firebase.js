import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBE1bwXKjxG9zBpkN2dFpw9dn2C2vLVjqQ",
    authDomain: "cheashu-e195e.firebaseapp.com",
    databaseURL: "https://cheashu-e195e.firebaseio.com",
    projectId: "cheashu-e195e",
    storageBucket: "cheashu-e195e.appspot.com",
    messagingSenderId: "853806904314",
    appId: "1:853806904314:web:c5af2f587fb81a9ac8aa43"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()