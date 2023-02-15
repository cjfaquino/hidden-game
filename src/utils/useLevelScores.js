import { useEffect, useState } from 'react';
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import scoreConverter from './scoreConverter';

const useLevelScores = (levelName) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  const getScores = async () => {
    try {
      const q = query(
        collection(db, 'leaderboard', levelName, 'scores').withConverter(
          scoreConverter
        ),
        orderBy('score', 'asc'),
        limit(10)
      );

      const querySnapshot = await getDocs(q);

      const temp = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(0),
      }));
      setScores(temp);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    getScores();

    return () => {
      setScores([]);
    };
  }, [levelName]);

  return [scores, loading];
};

export default useLevelScores;
