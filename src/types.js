import PropTypes from 'prop-types';
import { TIME_UNITS } from './constants';

export const lifetimePropType = PropTypes.exact({
  value: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(TIME_UNITS).isRequired,
});

export const fishPropType = PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  dob: PropTypes.instanceOf(Date).isRequired,
  lifetime: lifetimePropType,
});
