import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/level'>
          <Route path=':name' element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
