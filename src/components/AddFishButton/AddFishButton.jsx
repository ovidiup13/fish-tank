import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as AddFishIcon } from '../../assets/icons/new-fish.svg';

import styles from './AddFishButton.module.css';

const AddFishButton = () => {
  const history = useHistory();

  return (
    <button
      className={styles.button}
      role='link'
      onClick={() => history.push('/add-fish')}
    >
      <div className={styles.contents}>
        <AddFishIcon width={50} />
        <div className={styles.text}>Add Fish</div>
      </div>
    </button>
  );
};

export default AddFishButton;
