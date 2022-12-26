import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import levels from './levels';
import MyNav from './MyNav';

function Leaderboard() {
  const params = useParams();
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(null);

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
    return () => {};
  }, []);

  return (
    <>
      <MyNav />
      <div>Leaderboard</div>

      {currentItem && (
        <div className='board-img-container'>
          <img src={currentItem.thumbUrl} alt={currentItem.name.long} />
        </div>
      )}
    </>
  );
}

export default Leaderboard;
