import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import FishLifetime from './FishLifetime';

describe('FishLifetime', () => {
  afterEach(cleanup);

  test('displays a green health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime
        dob={new Date()}
        lifetime={{ unit: 'seconds', value: 1000 }}
      />
    );

    await waitFor(() =>
      expect(getByTestId('filler-green')).toBeInTheDocument()
    );
  });

  test('displays an orange health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime dob={new Date()} lifetime={{ unit: 'seconds', value: 2 }} />
    );

    await waitFor(
      () => expect(getByTestId('filler-orange')).toBeInTheDocument(),
      {
        timeout: 2000,
      }
    );
  });

  test('displays a red health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime dob={new Date()} lifetime={{ unit: 'seconds', value: 1 }} />
    );

    await waitFor(() => expect(getByTestId('filler-red')).toBeInTheDocument(), {
      timeout: 1000,
    });
  });

  test('does not display a health bar if the fish is dead', async () => {
    const { queryByTestId } = render(
      <FishLifetime dob={new Date()} lifetime={{ unit: 'seconds', value: 0 }} />
    );

    expect(queryByTestId(/filler-/i)).not.toBeInTheDocument();
  });
});
