import React from 'react';
import PropTypes from 'prop-types';

import Fish from '../Fish/Fish';
import { fishPropType } from '../../types';

import styles from './FishList.module.css';

const FishList = ({ fish }) => {
  console.log('fish list', { fish });
  return (
    <div className={styles.fish_list} data-testid='fish-list'>
      {fish.map((f) => (
        <Fish key={f.id} fish={f} />
      ))}
    </div>
  );
};

FishList.propType = {
  fish: PropTypes.arrayOf(fishPropType).isRequired,
};

export default FishList;
