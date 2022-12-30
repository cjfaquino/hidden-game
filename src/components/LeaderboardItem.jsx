import React from 'react';
import PropType from 'prop-types';
import fancyTime from '../utils/fancyTime';
import formatDate from '../utils/formatDate';

function LeaderboardItem({ obj, index }) {
  const {
    user,
    score,
    date: { seconds },
  } = obj;

  return (
    <>
      <div>{index + 1}.</div>
      <div className='scoreboard-user'>{user}</div>
      {score > 0 && <div className='scoreboard-score'>{fancyTime(score)}s</div>}
      {seconds > 0 && (
        <div className='scoreboard-date'>{formatDate(seconds)}</div>
      )}
    </>
  );
}

LeaderboardItem.propTypes = {
  obj: PropType.shape({
    user: PropType.string,
    score: PropType.number,
    date: PropType.shape({
      seconds: PropType.number,
      nanoseconds: PropType.number,
    }),
    level: PropType.string,
  }),
  index: PropType.number.isRequired,
};

LeaderboardItem.defaultProps = {
  obj: {
    user: '',
    score: 0,
    date: { seconds: 0, nanoseconds: 0 },
  },
};

export default LeaderboardItem;
