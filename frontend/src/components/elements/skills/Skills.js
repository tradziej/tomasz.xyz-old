import React, { Component } from 'react';
import { Details, ListWithMore } from '@components';

class Skills extends Component {
  render() {
    const { skills } = this.props;
    const normalizedSkills = skills.map(skill => {
      return {
        value: skill,
      };
    });

    return (
      <div>
        <div>
          <strong>Skills</strong>:
        </div>
        <Details>
          <ListWithMore elements={normalizedSkills} max={5} />
        </Details>
      </div>
    );
  }
}

export default Skills;
