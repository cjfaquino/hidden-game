import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import usePopupSize from '../utils/usePopupSize';

function Popup({ items, checkCoords, coords, setItemFound }) {
  const [styles, setStyles] = useState({});
  const popupRef = useRef();
  const currentPopupSize = usePopupSize(popupRef);

  const handleClick = (item) => () => {
    const { name } = item;
    if (checkCoords(name, coords)) {
      setItemFound(name);
    }
  };

  const setPopupBoundaries = (popupSize, currentCoords) => {
    const popXPerc = (popupSize.x / currentCoords.clientWidth) * 100;
    const popYPerc = (popupSize.y / window.innerHeight) * 100;
    const clientYPerc = (currentCoords.clientY / window.innerHeight) * 100;

    let newCoords = currentCoords;
    if (popupSize.x && popupSize.y) {
      if (currentCoords.x + popXPerc > 100) {
        const newX = currentCoords.x - popXPerc;
        newCoords = { ...newCoords, x: newX };
      }
      if (clientYPerc + popYPerc > 100) {
        const newY =
          currentCoords.y - (popupSize.y / currentCoords.clientHeight) * 100;
        newCoords = { ...newCoords, y: newY };
      }
    }

    return newCoords;
  };

  useEffect(() => {
    const { x, y } = setPopupBoundaries(currentPopupSize, coords);
    const newStyles = {
      top: `${y}%`,
      left: `${x}%`,
    };
    setStyles(newStyles);
  }, [currentPopupSize]);

  return (
    <div className='popup' style={styles} ref={popupRef}>
      <ul>
        {items.map(
          (item) =>
            !item.found && (
              <li key={crypto.randomUUID()}>
                <button
                  type='button'
                  onClick={handleClick(item)}
                  className='popup-btn'
                >
                  <div className='popup-img-container'>
                    <img src={item.iconUrl} alt={item.name} />
                  </div>
                  <div className='popup-item-name'>{item.name}</div>
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

Popup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ).isRequired,
  checkCoords: PropTypes.func.isRequired,
  setItemFound: PropTypes.func.isRequired,
  coords: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    clientWidth: PropTypes.number,
    clientHeight: PropTypes.number,
    clientY: PropTypes.number,
  }).isRequired,
};

export default Popup;
