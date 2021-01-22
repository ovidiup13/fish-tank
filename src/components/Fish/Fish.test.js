import React from 'react';
import { render } from '@testing-library/react';
import Fish from './Fish';

const testFish = {
  id: 0,
  name: 'Arnold',
  species: 'Guppy',
  dob: new Date(),
  lifetime: {
    value: 1,
    unit: 'seconds',
  },
};

describe('Fish', () => {
  test('displays a fish details', () => {
    const { getByText } = render(<Fish fish={testFish} />);

    expect(getByText(/Arnold/)).toBeInTheDocument();
    expect(getByText(/Guppy/)).toBeInTheDocument();
  });

  test('displays the lifetime bar', () => {
    const { getByTestId } = render(<Fish fish={testFish} />);

    expect(getByTestId('fish-lifetime')).toBeInTheDocument();
  });
});
