// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  // setDoc,
} from 'firebase/firestore';

import Level from './components/Level';
// import levels from './components/levels';

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

const levelConverter = {
  toFirestore: (level) => ({
    name: level.name,
    items: level.items,
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Level(data.name.long, data.name.short, data.items);
  },
};

// const addLevelToDb = async (level) => {
//   try {
//     const ref = doc(db, 'level', level.name.short).withConverter(
//       levelConverter
//     );
//     await setDoc(ref, level);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// };

// levels.forEach((level) => addLevelToDb(level));

export const getLevelFromDb = async (levelName) => {
  const ref = doc(db, 'level', levelName).withConverter(levelConverter);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  // doc.data() will be undefined in this case
  console.log('No such document!');
};
