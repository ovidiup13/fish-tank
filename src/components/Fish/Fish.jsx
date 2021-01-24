import React from 'react';

import styles from './Fish.module.css';
import { fishPropType } from '../../types';
import FishImage from '../FishImage/FishImage';
import FishLifetime from '../FishLifetime/FishLifetime';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../../constants';

const Fish = ({ fish }) => {
  const { id, avatar, name, species, dob, lifetime } = fish;
  return (
    <div className={styles.fish_container} data-testid='fish-container'>
      <div className={styles.fish} data-testid='fish'>
        <div className={styles.fish_logo}>
          <FishImage type={avatar} width={50} />
        </div>

        <div className={styles.fish_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.species}>{species}</div>
        </div>
        <div className={styles.dob}>
          {dayjs(dob).format(DATE_FORMAT).toString()}
        </div>
      </div>
      <div data-testid='fish-lifetime'>
        <FishLifetime
          dob={dob}
          lifetime={lifetime}
          onFlush={() =>
            console.log('Flushed fish. RIP', { id, name, species })
          }
        />
      </div>
    </div>
  );
};

Fish.propTypes = {
  fish: fishPropType.isRequired,
};

export default Fish;
