import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import usePopupSize from '../utils/usePopupSize';

function Popup({
  items,
  checkCoords,
  coords,
  setPopupBoundaries,
  setItemFound,
}) {
  const popupRef = useRef();
  const popupSize = usePopupSize(popupRef);
  const handleClick = (item) => () => {
    const { name } = item;
    if (checkCoords(name, coords)) {
      setItemFound(name);
    }
  };

  const { x, y } = setPopupBoundaries(popupSize, coords);
  const styles = {
    top: `${y}%`,
    left: `${x}%`,
  };

  return (
    <div className='popup' style={styles} ref={popupRef}>
      <ul>
        {items.map(
          (item) =>
            !item.found && (
              <li key={crypto.randomUUID()}>
                <button type='button' onClick={handleClick(item)}>
                  {item.name}
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
  setPopupBoundaries: PropTypes.func.isRequired,
  setItemFound: PropTypes.func.isRequired,
  coords: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Popup;
