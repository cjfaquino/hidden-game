import React from 'react';
import PropTypes from 'prop-types';

function Popup({ styles }) {
  return (
    <div className='popup' style={styles}>
      <ul>
        <li>
          <button type='button'>test1</button>
        </li>
        <li>
          <button type='button'>test2</button>
        </li>
        <li>
          <button type='button'>test3</button>
        </li>
      </ul>
    </div>
  );
}

Popup.propTypes = {
  styles: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Popup;
