import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import scoreConverter from './scoreConverter';

const addToScoresDB = async (score, levelName) => {
  try {
    const docRef = collection(
      db,
      'leaderboard',
      levelName,
      'scores'
    ).withConverter(scoreConverter);

    await addDoc(docRef, score);
    return true;
  } catch (e) {
    console.error('Error adding document: ', e);
    return false;
  }
};

export default addToScoresDB;
