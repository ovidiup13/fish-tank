import dayjs from 'dayjs';

export const fishBuilder = (fish) => ({
  id: 0,
  avatar: 0,
  name: 'Guppy',
  species: 'Guppy',
  dob: dayjs().unix() * 1000,
  lifetime: {
    value: 10,
    unit: 'minutes',
  },
  ...fish,
});
