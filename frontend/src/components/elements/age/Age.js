import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DataListElement } from '@components';

class Age extends Component {
  constructor(props) {
    super(props);

    this.birthday = new Date(props.birthday).getTime();

    this.state = {
      age: this.calculateAge(),
      animate: '',
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState, props) => {
        return {
          age: this.calculateAge(),
        };
      });
    }, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  calculateAge() {
    const msInYear = 1000 * 60 * 60 * 24 * 365;
    const now = Date.now();

    return (now - this.birthday) / msInYear;
  }

  render() {
    const { animation, transitionDelay } = this.props;

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Age</strong>: {this.state.age.toFixed(9)}
        </div>
      </DataListElement>
    );
  }
}

Age.propTypes = {
  birthday: PropTypes.string.isRequired,
};

export default Age;
