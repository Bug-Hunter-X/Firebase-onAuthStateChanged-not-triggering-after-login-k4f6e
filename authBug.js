const unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;
  console.log(uid);
  // ...
} else {
  // User is signed out
  // ...
}
});

// unsubscribe from the listener when no longer needed
// unsubscribe();