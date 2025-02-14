import React from 'react';
import PropTypes from 'prop-types';

import styles from './FishTank.module.css';

import FishList from '../../components/FishList/FishList';
import AddFishButton from '../../components/AddFishButton/AddFishButton';
import { CAPACITY } from '../../constants';
import { fishPropType } from '../../types';
import { connect } from 'react-redux';

const FishTank = ({ fish }) => {
  const isFull = fish.length === CAPACITY;

  return (
    <div className={styles.tank}>
      {isFull ? null : (
        <>
          <div className={styles.add_fish} data-testid='add-fish-button'>
            <AddFishButton />
          </div>
          {/* <div className={styles.tank_title}>
            {`${fish.length} out of ${CAPACITY} fish`}
          </div> */}
        </>
      )}
      <div className={styles.fish_tank} data-testid='tank'>
        {fish.length === 0 ? (
          'Your fish tank is empty'
        ) : (
          <FishList fish={fish} />
        )}
      </div>
    </div>
  );
};

FishTank.propTypes = {
  fish: PropTypes.arrayOf(fishPropType),
};

const mapStateToProps = ({ alive }) => ({ fish: alive });

export default connect(mapStateToProps)(FishTank);
