import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import useLocalStorage from './utils/useLocalStorage';
import Home from './components/Home';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  const [username, setUsername] = useLocalStorage('username', 'Anonymous');

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/:name'
          element={<Game username={username} setUsername={setUsername} />}
        />
        <Route path='/:name/leaderboard' element={<Leaderboard />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;
