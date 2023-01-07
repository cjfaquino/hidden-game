import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyNav from './MyNav';
import useLevelScores from '../utils/useLevelScores';
import usePagination from '../utils/usePagination';
import LeaderboardItem from './LeaderboardItem';
import Loading from './Loading/Loading';

function Leaderboard() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [scores, isScoresLoading] = useLevelScores(params.name);
  const [prevItem, nextItem, currentItem] = usePagination(params.name);

  useEffect(() => {
    if (currentItem !== null && !isScoresLoading) {
      (async () => {
        setLoading(false);
      })();
    }
  }, [currentItem, isScoresLoading]);

  return (
    <>
      <MyNav nextLevel={nextItem} prevLevel={prevItem} />

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
