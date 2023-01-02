import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import levelConverter from './levelConverter';

const useLevelFromDB = (levelName) => {
  const [level, setLevel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = doc(db, 'level', levelName).withConverter(levelConverter);

    (async () => {
      try {
        setLoading(true);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
          setLevel(docSnap.data());
        }
        // doc.data() will be undefined in this case
        else console.log('No such document!');

        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return [level, loading];
};

export default useLevelFromDB;
