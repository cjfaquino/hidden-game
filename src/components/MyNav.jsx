import React from 'react';
import {
  Outlet,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Stopwatch from './Stopwatch';

function MyNav({ duration, items }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  return (
    <>
      <nav>
        <ul>
          <li className='home-link'>
            <Link to='/'>Home</Link>
          </li>

          {items.map((item) => (
            <li
              className={!item.found ? 'nav-item' : 'nav-item found'}
              key={crypto.randomUUID()}
            >
              {item.name}
            </li>
          ))}
          <li className='nav-time'>
            {duration !== null && <Stopwatch duration={duration} />}
          </li>

          <li className='leaderboard-link'>
            {!location.pathname.endsWith('leaderboard') && (
              <Link to={`/${params.name}/leaderboard`}>Leaderboard</Link>
            )}
            {location.pathname.endsWith('leaderboard') && (
              <button type='button' onClick={() => navigate(-1)}>
                Retry
              </button>
            )}
          </li>
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
