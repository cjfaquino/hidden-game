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
import homeIcon from '../assets/svgs/home.svg';
import leaderboardIcon from '../assets/svgs/leaderboard.svg';

function MyNav({ duration, items, prevLevel, nextLevel }) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  return (
    <>
      <nav>
        <ul>
          <li className='home-link'>
            <Link to='/'>
              <img className='nav-link-img' src={homeIcon} alt='Home' />
            </Link>
          </li>

          {prevLevel && (
            <li>
              <Link to={`/${prevLevel.name.short}`} state={prevLevel}>
                Previous Level
              </Link>
            </li>
          )}

          {nextLevel && (
            <li>
              <Link to={`/${nextLevel.name.short}`} state={nextLevel}>
                Next Level
              </Link>
            </li>
          )}

          {/* characters  */}
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
              <Link to={`/${params.name}/leaderboard`} state={location.state}>
                <img
                  className='nav-link-img'
                  src={leaderboardIcon}
                  alt='Leaderboard'
                />
              </Link>
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
  prevLevel: PropTypes.shape({
    name: PropTypes.shape({ long: PropTypes.string, short: PropTypes.string }),
    imgUrl: PropTypes.string,
    thumbUrl: PropTypes.string,
    loadingUrl: PropTypes.string,
    thumbLoadingUrl: PropTypes.string,
    item: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        iconUrl: PropTypes.string,
        found: PropTypes.bool,
      })
    ),
  }),
  nextLevel: PropTypes.shape({
    name: PropTypes.shape({ long: PropTypes.string, short: PropTypes.string }),
    imgUrl: PropTypes.string,
    thumbUrl: PropTypes.string,
    loadingUrl: PropTypes.string,
    thumbLoadingUrl: PropTypes.string,
    item: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        iconUrl: PropTypes.string,
        found: PropTypes.bool,
      })
    ),
  }),
};

MyNav.defaultProps = {
  duration: null,
  items: [],
  prevLevel: null,
  nextLevel: null,
};

export default MyNav;
