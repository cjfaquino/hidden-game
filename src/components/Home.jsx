import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImg from './ProgressiveImg';
import levels from './levels';

function Home() {
  return (
    <>
      <header>
        <h1>Level select</h1>
      </header>
      <div className='home'>
        {levels.map((level) => {
          const { name, thumbUrl, thumbLoadingUrl } = level;

          return (
            <div className='home-img-container' key={`home-${name.long}`}>
              <Link to={`${name.short}`} state={level}>
                <ProgressiveImg
                  placeholderSrc={thumbLoadingUrl}
                  src={thumbUrl}
                  alt={name.long}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
