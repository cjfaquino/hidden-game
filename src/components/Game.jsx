/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Stopwatch from './Stopwatch';
import Popup from './Popup';

function Game() {
  const location = useLocation();
  const { imgUrl, items } = location.state;

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

  const getCoords = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    return { x, y };
  };

  const checkCoords = (item, position) => () => {
    const { x: itemX, y: itemY } = item;
    const { x, y } = position;
    const distance = 20;
    if (
      x >= itemX - distance &&
      x <= itemX + distance &&
      y >= itemY - distance &&
      y <= itemY + distance
    )
      return true;
    return false;
  };

  const handlePopup = (e) => {
    const { x, y } = getCoords(e);
    const coords = { x, y };
    const styles = {
      top: y,
      left: x,
    };
    const div = (
      <Popup
        styles={styles}
        items={items}
        checkCoords={checkCoords}
        coords={coords}
      />
    );

    if (popup === null) setPopup(div);
    else if (popup) setPopup(null);
  };

  return (
    <div className='game'>
      <h1>Game</h1>
      <Stopwatch duration={duration} />
      <div className='game-img-container' onClick={handlePopup}>
        <img id='game-image' src={imgUrl} alt='snes' onLoad={handleLoad} />
        {popup}
      </div>
    </div>
  );
}

export default Game;
