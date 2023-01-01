/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { addToScoresDB, getLevelFromDb } from '../firebase';
import useStopwatch from '../utils/useStopwatch';
import SubmitScorePopup from './SubmitScorePopup';
import Score from './Score';
import MyNav from './MyNav';
import Popup from './Popup';

function Game({ username, changeUsername }) {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.state === null) navigate('/');

  const level = location.state;
  const { imgUrl, items } = level;

  const [duration, isActive, setIsActive] = useStopwatch(false);
  const [popup, setPopup] = useState(null);
  const [submitScorePopup, setSubmitScorePopup] = useState(false);
  const [itemsArr, setItemsArr] = useState(items);
  const [dbLevel, setDbLevel] = useState(null);

  const checkIfAllFound = () => itemsArr.every((item) => item.found);

  const submitScore = () => {
    const score = new Score(duration, username, level.name.short);

    addToScoresDB(score, level.name.short);

    navigate(`leaderboard`, { state: level });
  };

  const cancelSubmit = () => {
    setSubmitScorePopup(false);
  };

  const showScorePopup = () => {
    setSubmitScorePopup(true);
  };

  const handleLoad = () => {
    // when img finishes loading
    setIsActive(true);
  };

  const getCoords = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    const xPerc = (x / e.currentTarget.clientWidth) * 100;
    const yPerc = (y / e.currentTarget.clientHeight) * 100;

    return {
      x: xPerc,
      y: yPerc,
      clientWidth: e.currentTarget.clientWidth,
      clientHeight: e.currentTarget.clientHeight,
      clientY: e.clientY,
    };
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

  const setPopupBoundaries = (popupSize, coords) => {
    const popXPerc = (popupSize.x / coords.clientWidth) * 100;
    const popYPerc = (popupSize.y / window.innerHeight) * 100;
    const clientYPerc = (coords.clientY / window.innerHeight) * 100;

    let newCoords = coords;
    if (popupSize.x && popupSize.y) {
      if (coords.x + popXPerc > 100) {
        const newX = coords.x - popXPerc;
        newCoords = { ...newCoords, x: newX };
      }
      if (clientYPerc + popYPerc > 100) {
        const newY = coords.y - (popupSize.y / coords.clientHeight) * 100;
        newCoords = { ...newCoords, y: newY };
      }
    }

    return newCoords;
  };

  const handlePopup = (e) => {
    const coords = getCoords(e);

    const div = (
      <Popup
        items={itemsArr}
        checkCoords={checkCoords}
        setItemFound={setItemFound}
        coords={coords}
        setPopupBoundaries={setPopupBoundaries}
      />
    );

    if (!popup) setPopup(div);
    else if (popup) setPopup(null);
  };

  useEffect(() => {
    getLevelFromDb(level.name.short).then((data) => setDbLevel(data));
  }, []);

  useEffect(() => {
    if (isActive && dbLevel) {
      setIsActive(true);
    }
  }, [isActive, dbLevel]);

  useEffect(() => {
    if (checkIfAllFound()) {
      setIsActive(false);
      showScorePopup();
    }
  }, [itemsArr]);

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

Game.propTypes = {
  username: PropType.string.isRequired,
  changeUsername: PropType.func.isRequired,
};

export default Game;
