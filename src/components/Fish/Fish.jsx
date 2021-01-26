import React, { useState } from 'react';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { connect } from 'react-redux';

import FishImage from '../FishImage/FishImage';
import FishLifetime from '../FishLifetime/FishLifetime';

import { fishPropType } from '../../types';
import { DATE_FORMAT } from '../../constants';

import styles from './Fish.module.css';
import { removeFishAction } from '../../redux/actions';

const Fish = ({ fish, removeFish }) => {
  const [alive, setAlive] = useState(true);

  if (!fish) {
    return null;
  }

  const { id, avatar, name, species, dob, lifetime } = fish;

  const className = classnames(styles.fish_container, {
    [styles.dead]: !alive,
  });

  return (
    <div className={className} data-testid='fish-container'>
      <div className={styles.avatar}>
        <FishImage type={avatar} alive={alive} width={200} height={200} />
      </div>
      <div className={styles.fish} data-testid='fish'>
        <div className={styles.fish_details}>
          <div className={styles.name}>{name}</div>
          <div className={styles.species}>{species}</div>
        </div>
        <div className={styles.dob}>
          {dayjs(dob).format(DATE_FORMAT).toString()}
        </div>
      </div>
      <div data-testid='fish-lifetime'>
        {alive && (
          <FishLifetime
            dob={dob}
            lifetime={lifetime}
            onFlush={() => {
              console.log('Flushed fish. RIP', { id, name, species });
              setAlive(false);
              setTimeout(() => removeFish(id), 5000);
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

const mapDispatchToProps = (dispatch) => ({
  removeFish: (id) => dispatch(removeFishAction(id)),
});

export default connect(() => {}, mapDispatchToProps)(Fish);
