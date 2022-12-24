/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Stopwatch from './Stopwatch';
import imgURL from '../assets/n64.jpeg';

function Game() {
  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setDuration((x) => x + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleLoad = () => {
    setIsActive(true);
  };

  return (
    <div className='game'>
      <h1>Game</h1>
      <Stopwatch duration={duration} />
      <div className='img-container'>
        <img id='game-image' src={imgURL} alt='snes' onLoad={handleLoad} />
      </div>
    </div>
  );
}

export default Game;
