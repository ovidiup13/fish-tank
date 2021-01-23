import React from 'react';

import { ReactComponent as AddFishIcon } from '../../assets/icons/new-fish.svg';

import styles from './AddFishButton.module.css';

const AddFishButton = () => {
  return (
    <button className={styles.button} role='link'>
      <div className={styles.contents}>
        <AddFishIcon width={50} />
        <div className={styles.text}>Add Fish</div>
      </div>
    </button>
  );
};

export default AddFishButton;
