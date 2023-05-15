import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUa1X__0qQzjmQcMyC7FPsavPgL8fyldk",
    authDomain: "newsmyapp-4045e.firebaseapp.com",
    projectId: "newsmyapp-4045e",
    storageBucket: "newsmyapp-4045e.appspot.com",
    messagingSenderId: "10466505832",
    appId: "1:10466505832:web:d4e07371dad21eabb6b7dd",
    measurementId: "G-EMV29GL13E"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export { firebase };