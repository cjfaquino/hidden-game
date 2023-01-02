import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import levels from './levels';
import MyNav from './MyNav';
import useLevelScores from '../utils/useLevelScores';
import LeaderboardItem from './LeaderboardItem';
import Loading from './Loading/Loading';

function Leaderboard() {
  const params = useParams();
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scores, isScoresLoading] = useLevelScores(params.name);

  const getLevel = (name) => {
    const [filtered] = levels.filter((level) => level.name.short === name);
    return filtered;
  };

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
    if (currentItem !== null && !isScoresLoading) {
      (async () => {
        setLoading(false);
      })();
    }
  }, [currentItem, isScoresLoading]);

  return (
    <>
      <MyNav />

      <div className='leaderboard'>
        {currentItem && (
          <div className='board-img-container'>
            <img src={currentItem.thumbUrl} alt={currentItem.name.long} />
          </div>
        )}
        {loading && <Loading />}
        {!loading && (
          <div className='top10'>
            <h2>Top 10 Scores</h2>
            <div className='scoreboard-grid'>
              <div className='scoreboard-item'>
                <div className='label-scoreboard-rank'>#</div>
                <div className='label-scoreboard-user'>Name</div>
                <div className='label-scoreboard-score'>Duration</div>
                <div className='label-scoreboard-date'>Date</div>
              </div>

              {scores.map((obj, index) => (
                <LeaderboardItem
                  key={crypto.randomUUID()}
                  obj={obj}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Leaderboard;
