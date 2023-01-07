/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropType from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import addToScoresDB from '../utils/addToScoreDB';
import getCoords from '../utils/getCoords';
import useStopwatch from '../utils/useStopwatch';
import useLevelFromDB from '../utils/useLevelFromDB';
import usePagination from '../utils/usePagination';
import SubmitScorePopup from './SubmitScorePopup';
import ProgressiveImg from './ProgressiveImg';
import Score from './Score';
import MyNav from './MyNav';
import Popup from './Popup';
import Loading from './Loading/Loading';

function Game({ username, setUsername }) {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const [duration, setIsActive] = useStopwatch();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [popup, setPopup] = useState(null);
  const [submitScorePopup, setSubmitScorePopup] = useState(false);
  const [sendingScores, setSendingScores] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [itemsArr, setItemsArr] = useState(undefined);
  const [level, setLevel] = useState(null);
  const [dbLevel, dBlevelLoading] = useLevelFromDB(params.name);
  const [, , currentLevel] = usePagination(params.name);

  const checkIfAllFound = () => itemsArr.every((item) => item.found);

  const submitScore = async () => {
    const score = new Score(duration, username, level.name.short);
    setSendingScores(true);
    const ableToAdd = await addToScoresDB(score, level.name.short);
    setSendingScores(false);
    if (ableToAdd) navigate(`leaderboard`, { state: level });
    else setSubmitError('Could not submit score');
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
    if (dbLevel && isImgLoaded) {
      // when img finished loading && connect to db
      setIsActive(true);
    }
  }, [dBlevelLoading, isImgLoaded]);

  useEffect(() => {
    if (itemsArr && checkIfAllFound()) {
      setIsActive(false);
      showScorePopup();
    }
  }, [itemsArr]);

  useEffect(() => {
    if (!level && location.state !== null) {
      setLevel(location.state);
      setItemsArr(location.state.items);
    }

    if (!level && currentLevel) {
      setLevel(currentLevel);
      setItemsArr(currentLevel.items);
    }
  }, [currentLevel]);

  return (
    <>
      <MyNav duration={duration} items={itemsArr} />
      {!isImgLoaded && (
        <div className='game-loader'>
          <Loading />
        </div>
      )}
      <div className='game'>
        <div className='game-img-container' onClick={handlePopup}>
          {level && (
            <ProgressiveImg
              placeholderSrc={level.loadingUrl}
              src={level.imgUrl}
              alt={level.name.long}
              id='game-image'
              handleLoad={handleLoad}
              dbLevel={dbLevel}
            />
          )}
          {popup}
        </div>
        {submitScorePopup && (
          <SubmitScorePopup
            duration={duration}
            buttonHandlers={{ submitScore, cancelSubmit }}
            name={{ username, setUsername }}
            sendingScores={sendingScores}
            errorHandlers={{ submitError, setSubmitError }}
          />
        )}
      </div>
    </>
  );
}

Game.propTypes = {
  username: PropType.string.isRequired,
  setUsername: PropType.func.isRequired,
};

export default Game;
