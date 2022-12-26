import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/level'>
          <Route path=':name' element={<Game />} />
          <Route path='leaderboard' element={<Leaderboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
