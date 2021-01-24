import dayjs from 'dayjs';

export const CAPACITY = 15;

export const DATE_FORMAT = 'DD/MM/YYYY';

export const TIME_UNITS = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
];

export const SPECIES = [
  'Guppy',
  'Platy',
  'Molly',
  'Swordtail',
  'Cory',
  'Bristlenose Pleco',
  'Gourami',
  'Angelfish',
  'Tetras',
  'Rasbora',
  'Betta',
  'Siamese',
  'Otocinclus',
  'Danios',
  'Rainbowfish',
  'Clown Loaches',
  'African Cichlids',
  'Ram Cichlids',
  'Killifish',
  'Discus',
  'Goldfish',
  'Oscar',
  'Dwarf Puffer',
  'Rainbow Kribs',
  'Barb',
];

export const INITIAL_FISH = SPECIES.slice(0, 1).map((s, i) => ({
  id: i,
  avatar: Math.floor(Math.random() * 25),
  name: SPECIES[i],
  species: SPECIES[i],
  dob: dayjs().unix() * 1000,
  lifetime: {
    value: Math.round(Math.random() * 1000),
    unit: TIME_UNITS[0],
  },
}));
