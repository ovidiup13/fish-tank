import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FishTank from './pages/FishTank/FishTank';
import NotFound from './pages/NotFound/NotFound';
import { INITIAL_FISH } from './constants';

import './App.module.css';
import AddFish from './pages/AddFish/AddFish';

function App() {
  const [fish, setFish] = useState(INITIAL_FISH);

  const addFish = (newFish) => {
    console.log('new fish', newFish);
    setFish([...fish, newFish]);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <FishTank fish={fish} />
          </Route>
          <Route exact path='/add-fish'>
            <AddFish onFishAdded={addFish} />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
