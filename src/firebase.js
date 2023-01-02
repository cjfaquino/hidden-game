// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2ap-iuoCH7QUFZhAZqn67tCOOmMRTAuE',
  authDomain: 'hidden-game-e99c9.firebaseapp.com',
  projectId: 'hidden-game-e99c9',
  storageBucket: 'hidden-game-e99c9.appspot.com',
  messagingSenderId: '204569333422',
  appId: '1:204569333422:web:6bd8e3b1155fa6901f273f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
