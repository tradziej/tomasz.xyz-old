import React, { Component } from 'react';

import { Details } from '@components';

class Resume extends Component {
  render() {
    const { query } = this.props;

    return (
      <div>
        <div>
          <strong>Endomondo</strong>:
        </div>
        <Details>
          {query.distance_km > 0
            ? `I run ${Number(query.distance_km).toFixed(2)}km this week`
            : "I didn't run this week"}
        </Details>
      </div>
    );
  }
}

export default Resume;
