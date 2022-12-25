import React from 'react';
import PropTypes from 'prop-types';

function Popup({ styles, items, checkCoords, coords }) {
  return (
    <div className='popup' style={styles}>
      <ul>
        {items.map((item) => (
          <li key={crypto.randomUUID()}>
            <button type='button' onClick={checkCoords(item, coords)}>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Popup.propTypes = {
  styles: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      x: PropTypes.number,
      y: PropTypes.number,
    })
  ).isRequired,
  checkCoords: PropTypes.func.isRequired,
  coords: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Popup;
