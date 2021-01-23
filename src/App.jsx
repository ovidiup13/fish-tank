import React from 'react';

import FishTank from './components/FishTank/FishTank';
import { fish } from './constants';
import './App.module.css';

function App() {
  return (
    <div className='App'>
      <FishTank fish={fish} />
    </div>
  );
}

export default App;
