import React, { Component } from 'react';
import pluralize from 'pluralize';

import { DataListElement, StyledLink } from '@components';

class Resume extends Component {
  render() {
    const { count, animation, transitionDelay } = this.props;
    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Blog</strong>: <StyledLink to="/blog">here</StyledLink> ({
            count
          }{' '}
          {pluralize('post', count)})
        </div>
      </DataListElement>
    );
  }
}

export default Resume;
