import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FishTank from './pages/FishTank/FishTank';
import NotFound from './pages/NotFound/NotFound';
import { fish } from './constants';

import './App.module.css';
import AddFish from './pages/AddFish/AddFish';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <FishTank fish={fish} />
          </Route>
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
