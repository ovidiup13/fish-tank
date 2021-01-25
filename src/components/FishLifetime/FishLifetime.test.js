import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import FishLifetime from './FishLifetime';
import dayjs from 'dayjs';

/**
 * TODO: find a better way to test setInterval in React hooks
 */
describe.skip('FishLifetime', () => {
  afterEach(cleanup);

  test('displays a green health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime
        dob={dayjs().unix() * 1000}
        lifetime={{ unit: 'seconds', value: 1000 }}
        onFlush={() => {}}
      />
    );

    await waitFor(() =>
      expect(getByTestId('filler-green')).toBeInTheDocument()
    );
  });

  test('displays an orange health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime
        dob={dayjs().unix() * 1000}
        lifetime={{ unit: 'seconds', value: 3 }}
        onFlush={() => {}}
      />
    );

    await waitFor(
      () => expect(getByTestId('filler-orange')).toBeInTheDocument(),
      {
        timeout: 1500,
      }
    );
  });

  test('displays a red health bar', async () => {
    const { getByTestId } = render(
      <FishLifetime
        dob={dayjs().unix() * 1000}
        lifetime={{ unit: 'milliseconds', value: 1500 }}
        onFlush={() => {
          console.log('flused');
        }}
      />
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
