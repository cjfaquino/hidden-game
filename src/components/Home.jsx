import React from 'react';
import { Link } from 'react-router-dom';
import levels from './levels';

function Home() {
  return (
    <div className='home'>
      {levels.map((level) => {
        const { name, imgUrl } = level;

        return (
          <div className='level-card' key={crypto.randomUUID()}>
            <div className='home-img-container'>
              <Link to={`level/${name}`} state={level}>
                <img src={imgUrl} alt={name} />
              </Link>
            </div>
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
