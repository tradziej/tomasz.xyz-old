import React, { Component } from 'react';

import { DataListElement, Details } from '@components';

class Resume extends Component {
  render() {
    const { query, animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Endomondo</strong>:
        </div>
        <Details>
          {query.distance_km > 0
            ? `I run ${Number(query.distance_km).toFixed(2)}km this week`
            : "I didn't run this week"}
        </Details>
      </DataListElement>
    );
  }
}

export default Resume;
