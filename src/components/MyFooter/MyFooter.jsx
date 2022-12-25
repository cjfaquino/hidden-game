import React from 'react';
import './MyFooter.css';
import Logo from './github-mark.png';
import lightLogo from './GitHub-Mark-Light-64px.png';

function MyFooter() {
  return (
    <footer>
      Copyright © 2022 <a href='https://github.com/cjfaquino/'>cjfaquino</a>
      <img src={Logo} alt='github user: cjfaquino' />
    </footer>
  );
}

export default MyFooter;
