import React from 'react';
import fancyTime from '../utils/fancyTime';

function Stopwatch({ duration }) {
  const time = fancyTime(duration);

  return <div className='stopwatch'>{time}</div>;
}

export default Stopwatch;
