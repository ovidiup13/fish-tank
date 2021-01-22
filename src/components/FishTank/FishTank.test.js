import React from 'react';
import FishTank from './FishTank';
import { render } from '@testing-library/react';

const testFish = [
  {
    id: 0,
    name: 'Guppy',
    species: 'Guppy',
    dob: new Date(),
    lifetime: {
      value: 10,
      unit: 'minutes',
    },
  },
  {
    id: 1,
    name: 'Molly',
    species: 'Molly',
    dob: new Date(),
    lifetime: {
      value: 10,
      unit: 'minutes',
    },
  },
];

describe('FishTank', () => {
  test('displays the welcome message', () => {
    const { getByText } = render(<FishTank fish={[]} />);

    expect(getByText(/My Fish Tank/i)).toBeInTheDocument();
  });

  test('displays the fish tank', () => {
    const { getByTestId } = render(<FishTank fish={[]} />);

    expect(getByTestId('tank')).toBeInTheDocument();
  });

  test('displays a message if the fish tank is empty', () => {
    const { getByText } = render(<FishTank fish={[]} />);

    expect(getByText(/Your fish tank is empty/i)).toBeInTheDocument();
  });

  test('displays a list of fish', () => {
    const { getByTestId } = render(<FishTank fish={testFish} />);

    expect(getByTestId('fish-list')).toBeInTheDocument();
  });
});
