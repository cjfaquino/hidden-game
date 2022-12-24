import React from 'react';
import PropTypes from 'prop-types';
import fancyTime from '../utils/fancyTime';

function Stopwatch({ duration }) {
  const time = fancyTime(duration);

  return <div className='stopwatch'>{time}</div>;
}

Stopwatch.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Stopwatch;
