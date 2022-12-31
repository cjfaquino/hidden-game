import React from 'react';
import PropTypes from 'prop-types';

const Popup = React.forwardRef(
  ({ items, checkCoords, coords, setItemFound }, ref) => {
    const handleClick = (item) => () => {
      const { name } = item;
      if (checkCoords(name, coords)) {
        setItemFound(name);
      }
    };

    const { x, y } = coords;
    const styles = {
      top: `${y}%`,
      left: `${x}%`,
    };

    return (
      <div className='popup' style={styles} ref={ref}>
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
);

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
  }).isRequired,
};

export default Popup;
