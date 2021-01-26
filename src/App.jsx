import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FishTank from './pages/FishTank/FishTank';
import NotFound from './pages/NotFound/NotFound';
import AddFish from './pages/AddFish/AddFish';

import './App.module.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <FishTank />
          </Route>
          {/* TODO: add fish graveyard */}
          {/* <Route exact path='/flushed'>
            <FishTank fish={fish.dead} />
          </Route> */}
          <Route exact path='/add-fish'>
            <AddFish />
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
