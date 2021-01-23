import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as NotFoundIcon } from '../../assets/icons/not-found.svg';

import styles from './NotFound.module.css';

const NotFound = () => {
  let history = useHistory();

  return (
    <div className={styles.not_found}>
      <NotFoundIcon width={200} data-testid='not-found-icon' />
      <h1>Not Found</h1>
      <button role='link' onClick={() => history.replace('/')}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
