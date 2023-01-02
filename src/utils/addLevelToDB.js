import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import levelConverter from './levelConverter';
import levels from '../components/levels';

const addLevelToDb = async (level) => {
  try {
    const ref = doc(db, 'level', level.name.short).withConverter(
      levelConverter
    );
    await setDoc(ref, level);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

//      set levels for DB reading
//      make sure to change firestore rules to allow writing
// levels.forEach((level) => addLevelToDb(level));

export default addLevelToDb;
