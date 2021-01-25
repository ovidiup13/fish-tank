import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import FishTank from './pages/FishTank/FishTank';
import NotFound from './pages/NotFound/NotFound';
import AddFish from './pages/AddFish/AddFish';
import { useLocalStorageState } from './hooks/useLocalStorage';

import './App.module.css';
import { SPECIES, TIME_UNITS } from './constants';
import dayjs from 'dayjs';

const initialState = {
  alive: SPECIES.slice(0, 5).map((s, i) => ({
    id: i,
    avatar: Math.floor(Math.random() * 25),
    name: SPECIES[i],
    species: SPECIES[i],
    dob: dayjs().unix() * 1000,
    lifetime: {
      value: Math.round(Math.random() * 1000),
      unit: TIME_UNITS[0],
    },
  })),
  dead: [],
};

function App() {
  const [fish, setFish] = useLocalStorageState('fish', initialState);

  console.log('initial fish state', { fish });

  const addFish = (newFish) => {
    setFish([...fish, newFish]);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <FishTank fish={fish.alive} />
          </Route>
          {/* TODO: add fish graveyard */}
          {/* <Route exact path='/flushed'>
            <FishTank fish={fish.dead} />
          </Route> */}
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
