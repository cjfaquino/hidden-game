// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  orderBy,
  limit,
  setDoc,
  doc,
  getDocs,
  query,
} from 'firebase/firestore';

import Level from './components/Level';
import levels from './components/levels';

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
const db = getFirestore(app);

export const addToScoresDB = async (score, levelName) => {
  try {
    const docRef = await addDoc(collection(db, levelName), score);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getScores = async (levelName) => {
  const q = query(
    collection(db, levelName),
    orderBy('score', 'asc'),
    limit(10)
  );

  const scores = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((dc) => {
    // doc.data() is never undefined for query doc snapshots
    scores.push(dc.data());
  });

  return scores;
};

// const levelConverter = {
//   toFirestore: (level) => ({
//     name: level.name,
//     imgUrl: level.imgUrl,
//     thumbUrl: level.thumbUrl,
//     items: level.items,
//   }),
//   fromFirestore: (snapshot, options) => {
//     const data = snapshot.data(options);
//     return new Level(
//       data.name,
//       data.imgUrl,
//       data.thumbUrl,
//       data.items[0],
//       data.items[1],
//       data.items[2]
//     );
//   },
// };

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
