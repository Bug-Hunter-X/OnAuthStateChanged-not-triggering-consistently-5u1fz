import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // ... your firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User is signed in:', uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }  
});

// unsubscribe from the listener when no longer needed
// unsubscribe();
// this should be called when component unmounts