import React from 'react';
import PropTypes from 'prop-types';

function Popup({ styles, items }) {
  console.log(items);
  return (
    <div className='popup' style={styles}>
      <ul>
        {items.map((item) => (
          <li key={crypto.randomUUID()}>
            <button type='button'>{item.name}</button>
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
};

export default Popup;
