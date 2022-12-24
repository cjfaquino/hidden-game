/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Stopwatch from './Stopwatch';
import Popup from './Popup';
import imgURL from '../assets/n64.jpeg';

function Game() {
  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [popup, setPopup] = useState(null);

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

  const handlePopup = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    const styles = {
      top: y,
      left: x,
    };
    const div = <Popup styles={styles} />;

    if (popup === null) setPopup(div);
    else if (popup) setPopup(null);
  };

  return (
    <div className='game'>
      <h1>Game</h1>
      <Stopwatch duration={duration} />
      <div className='img-container' onClick={handlePopup}>
        <img id='game-image' src={imgURL} alt='snes' onLoad={handleLoad} />
        {popup}
      </div>
    </div>
  );
}

export default Game;
