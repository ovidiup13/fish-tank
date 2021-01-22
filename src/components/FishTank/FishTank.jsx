import React from 'react';
import PropTypes from 'prop-types';

import styles from './FishTank.module.css';
import { fishPropType } from '../../types';

import FishList from '../FishList/FishList';

const FishTank = ({ fish }) => {
  return (
    <>
      <h2 className={styles.tank_title}>My Fish Tank</h2>
      <div className={styles.tank} data-testid='tank'>
        <div className={styles.fish}>
          {fish.length === 0 ? (
            'Your fish tank is empty'
          ) : (
            <FishList fish={fish} />
          )}
        </div>
      </div>
    </>
  );
};

FishTank.propTypes = {
  fish: PropTypes.arrayOf(fishPropType),
};

export default FishTank;
