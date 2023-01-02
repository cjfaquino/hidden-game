/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getLevelFromDb } from '../firebase';
import addToScoresDB from '../utils/addToScoreDB';
import getCoords from '../utils/getCoords';
import useStopwatch from '../utils/useStopwatch';
import SubmitScorePopup from './SubmitScorePopup';
import ProgressiveImg from './ProgressiveImg';
import Score from './Score';
import MyNav from './MyNav';
import Popup from './Popup';

function Game({ username, changeUsername }) {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.state === null) navigate('/');

  const level = location.state;
  const { imgUrl, items, loadingUrl } = level;

  const [duration, setIsActive] = useStopwatch();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
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
    setIsImgLoaded(true);
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
    const coords = getCoords(e);

    const div = (
      <Popup
        items={itemsArr}
        checkCoords={checkCoords}
        setItemFound={setItemFound}
        coords={coords}
      />
    );

    if (!popup) setPopup(div);
    else if (popup) setPopup(null);
  };

  useEffect(() => {
    getLevelFromDb(level.name.short).then((data) => setDbLevel(data));
  }, []);

  useEffect(() => {
    if (dbLevel && isImgLoaded) {
      // when img finished loading && connect to db
      setIsActive(true);
    }
  }, [dbLevel, isImgLoaded]);

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
          <ProgressiveImg
            placeholderSrc={loadingUrl}
            src={imgUrl}
            alt={level.name.long}
            id='game-image'
            handleLoad={handleLoad}
            dbLevel={dbLevel}
          />
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
