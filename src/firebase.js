import firebase from 'firebase';
import { firebaseConfig } from './env';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); // for database... firestore
const auth = firebaseApp.auth(); // for authentication...
const provider = new firebase.auth.GoogleAuthProvider(); // provider... like passport OAuth0

// EXPORTS
export { auth, provider };
export default db;
