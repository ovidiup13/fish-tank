import React from 'react';
import FishTank from './FishTank';
import { render } from '@testing-library/react';
import { CAPACITY } from '../../constants';

const fishBuilder = (fish) => ({
  id: 0,
  name: 'Guppy',
  species: 'Guppy',
  dob: new Date(),
  lifetime: {
    value: 10,
    unit: 'minutes',
  },
  ...fish,
});

const testFish = [
  fishBuilder(),
  fishBuilder({
    id: 1,
    name: 'Molly',
    species: 'Molly',
  }),
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

  test('displays add more fish button if the tank is not full', () => {
    const testFish = new Array(CAPACITY - 1).fill(null).map((_, i) =>
      fishBuilder({
        id: i,
      })
    );

    const { getByTestId } = render(<FishTank fish={testFish} />);

    expect(getByTestId('add-fish-button')).toBeInTheDocument();
  });

  test('does not display add more fish button if the tank is full', () => {
    const testFish = new Array(CAPACITY).fill(null).map((_, i) =>
      fishBuilder({
        id: i,
      })
    );

    const { queryByTestId } = render(<FishTank fish={testFish} />);

    expect(queryByTestId('add-fish-button')).not.toBeInTheDocument();
  });
});
