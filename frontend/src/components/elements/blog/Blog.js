import React, { Component } from 'react';
import pluralize from 'pluralize';

import { StyledLink } from '@components';

class Resume extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <strong>Blog</strong>: <StyledLink to="/blog">here</StyledLink> ({count}{' '}
        {pluralize('post', count)})
      </div>
    );
  }
}

export default Resume;
