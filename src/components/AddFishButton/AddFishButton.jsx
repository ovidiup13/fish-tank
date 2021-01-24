import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as AddFishIcon } from '../../assets/icons/new-fish.svg';
import Button from '../Button/Button';

import styles from './AddFishButton.module.css';

const AddFishButton = () => {
  const history = useHistory();

  return (
    <Button role='link' onClick={() => history.push('/add-fish')}>
      <div className={styles.contents}>
        <AddFishIcon width={50} />
        <div className={styles.text}>Add Fish</div>
      </div>
    </Button>
  );
};

export default AddFishButton;
