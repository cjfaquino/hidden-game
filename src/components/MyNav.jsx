import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stopwatch from './Stopwatch';

function MyNav({ duration, items }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/' className='home-link'>
              Home
            </Link>
          </li>
          {items.map((item) => (
            <li
              className={!item.found ? '' : 'found'}
              key={crypto.randomUUID()}
            >
              {item.name}
            </li>
          ))}
          <li>{duration !== null && <Stopwatch duration={duration} />}</li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

MyNav.propTypes = {
  duration: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

MyNav.defaultProps = {
  duration: null,
  items: [],
};

export default MyNav;
