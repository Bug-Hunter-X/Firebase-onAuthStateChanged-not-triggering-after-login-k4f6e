import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  // ... your config
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  console.log('User is signed in:', uid);
  // ...
} else {
  console.log('User is signed out');
  // ...
}
});

// Improved sign-in method with explicit user check after login
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed in successfully:', user.uid);
    // Access user data immediately after successful login

    // ...
  } catch (error) {
    console.error('Sign-in error:', error);
    // ...
  }
};

// unsubscribe from the listener when no longer needed
// unsubscribe();