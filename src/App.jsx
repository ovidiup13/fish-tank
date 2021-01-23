import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FishTank from './pages/FishTank/FishTank';
import NotFound from './pages/NotFound/NotFound';
import { fish } from './constants';

import './App.module.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <FishTank fish={fish} />
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
