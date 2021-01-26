import { load } from './persist';
import { SPECIES } from '../constants';
import dayjs from 'dayjs';

const defaultState = {
  alive: SPECIES.slice(0, 5).map((s, i) => ({
    id: i,
    avatar: Math.floor(Math.random() * 25),
    name: SPECIES[i],
    species: SPECIES[i],
    dob: dayjs().unix() * 1000,
    lifetime: {
      value: Math.round(Math.random() * 100),
      unit: 'seconds',
    },
  })),
  dead: [],
};

const initialState = load('fish', defaultState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FISH': {
      const fish = action.fish;
      const { alive } = state;
      return {
        ...state,
        alive: [fish, ...alive],
      };
    }

    case 'REMOVE_FISH': {
      const id = action.id;
      const { alive, dead } = state;
      const fish = alive.find((f) => f.id === id);
      return {
        alive: alive.filter((f) => f.id !== id),
        dead: [...dead, fish],
      };
    }

    default:
      return state;
  }
};

export default reducer;
