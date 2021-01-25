import React, { useState } from 'react';

import styles from './Fish.module.css';
import { fishPropType } from '../../types';
import FishImage from '../FishImage/FishImage';
import FishLifetime from '../FishLifetime/FishLifetime';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '../../constants';
import classnames from 'classnames';

const Fish = ({ fish }) => {
  console.log('prop in fish', { fish });
  const { id, avatar, name, species, dob, lifetime } = fish;
  const [alive, setAlive] = useState(true);

  const className = classnames(styles.fish_container, {
    [styles.dead]: !alive,
  });

  return (
    <div className={className} data-testid='fish-container'>
      <div className={styles.fish} data-testid='fish'>
        <div className={styles.fish_logo}>
          <FishImage type={avatar} alive={alive} width={50} height={50} />
        </div>

        <div className={styles.fish_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.species}>{species}</div>
        </div>
        <div className={styles.dob}>
          {dayjs(dob).format(DATE_FORMAT).toString()}
        </div>
      </div>
      {/* TODO: add flush day */}
      <div data-testid='fish-lifetime'>
        {alive && (
          <FishLifetime
            dob={dob}
            lifetime={lifetime}
            onFlush={() => {
              console.log('Flushed fish. RIP', { id, name, species });
              setAlive(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

Fish.propTypes = {
  fish: fishPropType.isRequired,
};

export default Fish;
