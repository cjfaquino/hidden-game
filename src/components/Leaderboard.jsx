import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import levels from './levels';
import MyNav from './MyNav';
import { getScores } from '../firebase';
import fancyTime from '../utils/fancyTime';
import formatDate from '../utils/formatDate';

function Leaderboard() {
  const params = useParams();
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(null);
  const [scores, setScores] = useState([]);

  const getLevel = (name) => {
    const [filtered] = levels.filter((level) => level.name.short === name);
    return filtered;
  };

  // get scores from firebase

  useEffect(() => {
    if (location.state !== null) {
      const level = location.state;
      setCurrentItem(level);
    } else {
      const level = getLevel(params.name);
      if (typeof level === 'object') setCurrentItem(level);
    }
  }, []);

  useEffect(() => {
    if (currentItem !== null) {
      (async () => {
        const scoresArr = await getScores(currentItem.name.short);
        setScores(scoresArr);
      })();
    }
  }, [currentItem]);

  return (
    <>
      <MyNav />
      <div>Leaderboard</div>

      {currentItem && (
        <div className='board-img-container'>
          <img src={currentItem.thumbUrl} alt={currentItem.name.long} />
        </div>
      )}

      {scores.length > 0 &&
        scores.map((obj) => {
          const {
            user,
            score,
            date: { seconds },
          } = obj;

          return (
            <div key={crypto.randomUUID()} className='scoreboard'>
              <div className='scoreboard-user'>{user}</div>
              <div className='scoreboard-score'>{fancyTime(score)}s</div>
              <div className='scoreboard-date'>{formatDate(seconds)}</div>
            </div>
          );
        })}
    </>
  );
}

export default Leaderboard;
