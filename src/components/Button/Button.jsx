import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

const Button = ({ className, ...props }) => {
  const buttonClass = classnames(
    {
      [styles.button]: true,
    },
    className
  );

  return <button className={buttonClass} {...props} />;
};

export default Button;
