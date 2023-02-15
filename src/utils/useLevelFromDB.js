import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import levelConverter from './levelConverter';

const useLevelFromDB = (levelName) => {
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  const getLevel = async () => {
    try {
      setLoading(true);
      const ref = doc(db, 'level', levelName).withConverter(levelConverter);
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        setLevel({ id: docSnap.id, ...docSnap.data() });
      }
      // doc.data() will be undefined in this case
      else console.log('No such document!');
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getLevel();

    return () => {
      setLevel(null);
    };
  }, [levelName]);

  return [level, loading];
};

export default useLevelFromDB;
