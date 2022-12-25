import React from 'react';
import { Link } from 'react-router-dom';
import levels from './levels';

function Home() {
  return (
    <div className='home'>
      {levels.map((level) => {
        const { name, thumbUrl } = level;

        return (
          <div className='home-img-container' key={crypto.randomUUID()}>
            <Link to={`level/${name.short}`} state={level}>
              <img src={thumbUrl} alt={name.long} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
