export const species = [
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

export const fish = species.slice(0, 15).map((s, i) => ({
  id: i,
  name: species[i],
  species: species[i],
  dob: new Date(),
  lifetime: {
    value: 10,
    unit: 'minutes', // seconds, minutes, hours, days, weeks, months, years
  },
}));
