/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SubmitScorePopup from './SubmitScorePopup';
import MyNav from './MyNav';
import Popup from './Popup';

import { addToScoresDB, getLevelFromDb } from '../firebase';

function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.state === null) navigate('/');

  const level = location.state;
  const { imgUrl, items } = level;

  const [duration, setDuration] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [popup, setPopup] = useState(null);
  const [submitScorePopup, setSubmitScorePopup] = useState(false);
  const [username, setUsername] = useState('Anonymous');
  const [itemsArr, setItemsArr] = useState(items);
  const [dbLevel, setDbLevel] = useState(null);

  useEffect(() => {
    getLevelFromDb(level.name.short).then((data) => setDbLevel(data));
  }, []);

  useEffect(() => {
    let interval;
    if (isActive && dbLevel) {
      interval = setInterval(() => {
        setDuration((x) => x + 1);
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, dbLevel]);

  const checkIfAllFound = () => itemsArr.every((item) => item.found);

  const submitScore = () => {
    // const score = new Score(duration, username);
    const score = {
      date: new Date(),
      user: username,
      score: duration,
      level: level.name.short,
    };

    addToScoresDB(score, level.name.short);

    navigate(`leaderboard`, { state: level });
  };

  const cancelSubmit = () => {
    setSubmitScorePopup(false);
  };

  const changeUsername = (input) => {
    setUsername(input);
  };

  const showScorePopup = () => {
    setSubmitScorePopup(true);
  };

  useEffect(() => {
    if (checkIfAllFound()) {
      setIsActive(false);
      showScorePopup();
    }
  }, [itemsArr]);

  const handleLoad = () => {
    setIsActive(true);
  };

  const getCoords = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    const xPerc = (x / e.currentTarget.clientWidth) * 100;
    const yPerc = (y / e.currentTarget.clientHeight) * 100;

    return { x: xPerc, y: yPerc };
  };

  const setItemFound = (name) => {
    const newArr = itemsArr.map((item) => {
      if (name === item.name) return { ...item, found: true };
      return item;
    });
    setItemsArr(newArr);
  };

  const checkCoords = (itemName, position) => {
    if (dbLevel === null)
      return console.error('Coult not connect to firestore');

    const { items: dbItems } = dbLevel;
    const [dbItem] = dbItems.filter((it) => it.name === itemName);
    const { x: itemX, y: itemY } = dbItem;
    const { x, y } = position;
    const distance = 3; // target area free play
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
      top: `${y}%`,
      left: `${x}%`,
    };
    const div = (
      <Popup
        styles={styles}
        items={itemsArr}
        checkCoords={checkCoords}
        setItemFound={setItemFound}
        coords={coords}
      />
    );

    if (popup === null) setPopup(div);
    else if (popup) setPopup(null);
  };

  return (
    <>
      <MyNav duration={duration} items={itemsArr} />
      <div className='game'>
        <div className='game-img-container' onClick={handlePopup}>
          <img id='game-image' src={imgUrl} alt='snes' onLoad={handleLoad} />
          {popup}
        </div>
        {submitScorePopup && (
          <SubmitScorePopup
            duration={duration}
            buttonHandlers={{ submitScore, cancelSubmit }}
            name={{ username, changeUsername }}
          />
        )}
      </div>
    </>
  );
}

export default Game;
