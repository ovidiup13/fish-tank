import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { Router, Switch, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

describe('NotFound', () => {
  let notFoundComponent;

  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/404');
    notFoundComponent = render(
      <Router history={history}>
        <Switch>
          <Route exact path='/'>
            Home
          </Route>
          <Route exact path='/404'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  });

  afterEach(cleanup);

  test('displays the not found icon', () => {
    const { getByTestId } = notFoundComponent;

    expect(getByTestId('not-found-icon')).toBeInTheDocument();
  });

  test('displays the not found text', () => {
    const { getByText } = notFoundComponent;

    expect(getByText(/not found/i)).toBeInTheDocument();
  });

  test('displays the go back button', () => {
    const { getByText } = notFoundComponent;

    expect(getByText(/go back/i)).toBeInTheDocument();
  });

  test('clicking on go back button redirects to home page', async () => {
    userEvent.click(screen.getByRole('link'));

    expect(await screen.findByText('Home')).toBeInTheDocument();
  });
});
