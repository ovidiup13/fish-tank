import React from 'react';

import { ReactComponent as Fish0 } from '../../assets/fish/fish-0.svg';
import { ReactComponent as Fish1 } from '../../assets/fish/fish-1.svg';
import { ReactComponent as Fish2 } from '../../assets/fish/fish-2.svg';
import { ReactComponent as Fish3 } from '../../assets/fish/fish-3.svg';
import { ReactComponent as Fish4 } from '../../assets/fish/fish-4.svg';
import { ReactComponent as Fish5 } from '../../assets/fish/fish-5.svg';
import { ReactComponent as Fish6 } from '../../assets/fish/fish-6.svg';
import { ReactComponent as Fish7 } from '../../assets/fish/fish-7.svg';
import { ReactComponent as Fish8 } from '../../assets/fish/fish-8.svg';
import { ReactComponent as Fish9 } from '../../assets/fish/fish-9.svg';
import { ReactComponent as Fish10 } from '../../assets/fish/fish-10.svg';
import { ReactComponent as Fish11 } from '../../assets/fish/fish-11.svg';
import { ReactComponent as Fish12 } from '../../assets/fish/fish-12.svg';
import { ReactComponent as Fish13 } from '../../assets/fish/fish-13.svg';
import { ReactComponent as Fish14 } from '../../assets/fish/fish-14.svg';
import { ReactComponent as Fish15 } from '../../assets/fish/fish-15.svg';
import { ReactComponent as Fish16 } from '../../assets/fish/fish-16.svg';
import { ReactComponent as Fish17 } from '../../assets/fish/fish-17.svg';
import { ReactComponent as Fish18 } from '../../assets/fish/fish-18.svg';
import { ReactComponent as Fish19 } from '../../assets/fish/fish-19.svg';
import { ReactComponent as Fish20 } from '../../assets/fish/fish-20.svg';
import { ReactComponent as Fish21 } from '../../assets/fish/fish-21.svg';
import { ReactComponent as Fish22 } from '../../assets/fish/fish-22.svg';
import { ReactComponent as Fish23 } from '../../assets/fish/fish-23.svg';
import { ReactComponent as Fish24 } from '../../assets/fish/fish-24.svg';

const images = {
  0: Fish0,
  1: Fish1,
  2: Fish2,
  3: Fish3,
  4: Fish4,
  5: Fish5,
  6: Fish6,
  7: Fish7,
  8: Fish8,
  9: Fish9,
  10: Fish10,
  11: Fish11,
  12: Fish12,
  13: Fish13,
  14: Fish14,
  15: Fish15,
  16: Fish16,
  17: Fish17,
  18: Fish18,
  19: Fish19,
  20: Fish20,
  21: Fish21,
  22: Fish22,
  23: Fish23,
  24: Fish24,
};

const FishImage = ({ type, ...props }) => {
  const FishLogo = images[type];

  if (!FishLogo) {
    return null;
  }

  return <FishLogo {...props} />;
};

export default FishImage;
