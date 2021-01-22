import React from 'react';

import styles from './Fish.module.css';
import { fishPropType } from '../../types';

const Fish = ({ fish }) => {
  const { name, species, dob, lifetime } = fish;
  return (
    <div className={styles.fish} data-testid='fish'>
      <div>Name: {name}</div>
      <div>Species: {species}</div>
      {/* TODO: format date and lifetime */}
      <div>Date of birth: {dob.toString()}</div>
      <div>
        Lifetime: {lifetime.value} {lifetime.unit}
      </div>
    </div>
  );
};

Fish.propTypes = {
  fish: fishPropType.isRequired,
};

export default Fish;
