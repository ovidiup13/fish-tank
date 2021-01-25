import React from 'react';
import FishList from './FishList';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';

const testFish = [
  {
    id: 0,
    avatar: 0,
    name: 'Guppy',
    species: 'Guppy',
    dob: dayjs().unix() * 1000,
    lifetime: {
      value: 10,
      unit: 'minutes',
    },
  },
  {
    id: 1,
    avatar: 1,
    name: 'Molly',
    species: 'Molly',
    dob: dayjs().unix() * 1000,
    lifetime: {
      value: 10,
      unit: 'minutes',
    },
  },
];

describe('FishList', () => {
  test('displays a list of fish', () => {
    const { getAllByTestId } = render(<FishList fish={testFish} />);

    expect(getAllByTestId('fish')).toHaveLength(testFish.length);
  });
});
