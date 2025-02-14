import React, { useState, useEffect } from 'react';

import { ReactComponent as DeadFish } from '../../assets/icons/dead.svg';

const FishImage = ({ type, alive, ...props }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // There is a bug in webpack with dynamically loading svgs.
    // https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
    import(
      `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/fish/fish-${type}.svg`
    ).then((data) => {
      setIcon(data);
    });
  }, [type]);

  if (!alive) {
    return <DeadFish {...props} />;
  }

  if (!icon) {
    return null;
  }

  const { default: Image } = icon;

  return <Image {...props} />;
};

export default FishImage;
