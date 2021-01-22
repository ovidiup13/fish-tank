import PropTypes from 'prop-types';

export const timeUnits = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
];

export const lifetimePropType = PropTypes.exact({
  value: PropTypes.number.isRequired,
  unit: PropTypes.oneOf(timeUnits).isRequired,
});

export const fishPropType = PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  dob: PropTypes.instanceOf(Date).isRequired,
  lifetime: lifetimePropType,
});
