import React from 'react';
import PropTypes from 'prop-types';

const Availability = ({ available }) => (
  <div>
    <strong>Availability</strong>: {available ? 'available' : 'unavailable'}
  </div>
);

Availability.propTypes = {
  available: PropTypes.bool.isRequired,
};

Availability.defaultProps = {
  available: true,
};

export default Availability;
