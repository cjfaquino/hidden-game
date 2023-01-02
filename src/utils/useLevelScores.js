import { useEffect, useState } from 'react';
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const useLevelScores = (levelName) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const q = query(
      collection(db, 'leaderboard', levelName, 'scores'),
      orderBy('score', 'asc'),
      limit(10)
    );

    (async () => {
      const tempArr = scores.slice();
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((dc) => {
        // doc.data() is never undefined for query doc snapshots
        tempArr.push(dc.data());
        setScores(tempArr);
      });
      setLoading(false);
    })();
  }, []);

  return [scores, loading];
};

export default useLevelScores;
