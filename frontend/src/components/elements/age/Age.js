import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      this.setState(() => {
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
    return (
      <div>
        <strong>Age</strong>: {this.state.age.toFixed(9)}
      </div>
    );
  }
}

Age.propTypes = {
  birthday: PropTypes.string.isRequired,
};

export default Age;
