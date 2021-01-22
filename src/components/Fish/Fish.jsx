import React from 'react';

import styles from './Fish.module.css';
import { fishPropType } from '../../types';
import FishImage from '../FishImage/FishImage';

const Fish = ({ fish }) => {
  const { id, name, species, dob, lifetime } = fish;
  return (
    <div className={styles.fish_container} data-testid='fish-container'>
      <div className={styles.fish} data-testid='fish'>
        <div className={styles.fish_logo}>
          <FishImage type={id} width={50} />
        </div>

        <div className={styles.fish_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.species}>{species}</div>
        </div>
        <div className={styles.dob}>
          {new Intl.DateTimeFormat('en-GB', {
            month: 'long',
            day: '2-digit',
          }).format(dob)}
        </div>
      </div>
      {/* TODO: format lifetime as a progress bar */}
      <div className={styles.lifetime}>
        Lifetime: {lifetime.value} {lifetime.unit}
      </div>
    </div>
  );
};

Fish.propTypes = {
  fish: fishPropType.isRequired,
};

export default Fish;
