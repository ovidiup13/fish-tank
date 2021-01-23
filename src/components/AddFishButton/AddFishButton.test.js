import React from 'react';
import { render } from '@testing-library/react';

import AddFishButton from './AddFishButton';

describe('AddFishButton', () => {
  test('displays a button to add more fish', () => {
    const { getByText } = render(<AddFishButton />);

    expect(getByText(/add fish/i)).toBeInTheDocument();
  });
});
