import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import styles from './FishLifetime.module.css';

const FishLifetime = ({ dob, lifetime, onFlush }) => {
  const [percentage, setPercentage] = useState(undefined);

  useEffect(() => {
    // Set up an interval that calculates the health bar every 1 second.
    const intervalId = setInterval(() => {
      const birthday = dayjs(dob);
      const flushday = birthday.add(lifetime.value, lifetime.unit);
      const total = flushday - birthday;
      const remaining = flushday - dayjs();

      const percent = Math.round((remaining * 100) / total);
      setPercentage(percent);

      if (percent < 0) {
        onFlush();
        clearInterval(intervalId);
      }
    }, 100);

    // Clear the interval when the effect is cleaned up.
    return () => clearInterval(intervalId);
  }, [dob, lifetime, onFlush]);

  return (
    <div className={styles.lifetime}>
      <Filler percentage={percentage} />
    </div>
  );
};

const Filler = ({ percentage }) => {
  if (!percentage || percentage < 0) {
    return null;
  }

  const backgroundColor = getBackgroundColor(percentage);

  return (
    <div
      className={styles.filler}
      data-testid={`filler-${backgroundColor}`}
      style={{
        width: `${percentage}%`,
        backgroundColor,
      }}
    />
  );
};

const getBackgroundColor = (percentage) => {
  if (percentage > 50) {
    return 'green';
  } else if (percentage > 20) {
    return 'orange';
  }

  return 'red';
};

export default FishLifetime;
