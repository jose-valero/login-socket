import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBZf55G4G7-mvelrkhqUaEw-6fdFzrVQgE',
  authDomain: 'wispro-app.firebaseapp.com',
  projectId: 'wispro-app',
  storageBucket: 'wispro-app.appspot.com',
  messagingSenderId: '18017429156',
  appId: '1:18017429156:web:0ec62e27ac4960a9306831',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
export default firebase;
