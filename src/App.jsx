import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import './App.css';
import MyNav from './components/MyNav';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/level' element={<MyNav />}>
          <Route path=':name' element={<Game />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
