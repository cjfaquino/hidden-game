import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name' element={<Game />} />
        <Route path='/:name/leaderboard' element={<Leaderboard />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
