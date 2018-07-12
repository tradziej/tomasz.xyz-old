import React from 'react';
import PropTypes from 'prop-types';

import { DataListElement } from '@components';

const Availability = ({ available, animation, transitionDelay }) => (
  <DataListElement animation={animation} transitionDelay={transitionDelay}>
    <div>
      <strong>Availability</strong>: {available ? 'available' : 'unavailable'}
    </div>
  </DataListElement>
);

Availability.propTypes = {
  available: PropTypes.bool.isRequired,
};

Availability.defaultProps = {
  available: true,
};

export default Availability;
