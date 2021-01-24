export const CAPACITY = 15;

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

export const fish = SPECIES.slice(0, CAPACITY - 1).map((s, i) => ({
  id: i,
  name: SPECIES[i],
  species: SPECIES[i],
  dob: new Date(),
  lifetime: {
    value: Math.round(Math.random() * 1000),
    unit: TIME_UNITS[0],
  },
}));
