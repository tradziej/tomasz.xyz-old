import React, { Component } from 'react';
import { DataListElement, Details, ListWithMore } from '@components';

class Skills extends Component {
  render() {
    const { skills, animation, transitionDelay } = this.props;
    const normalizedSkills = skills.map(skill => {
      return {
        value: skill,
      };
    });

    return (
      <DataListElement animation={animation} transitionDelay={transitionDelay}>
        <div>
          <strong>Skills</strong>:
        </div>
        <Details>
          <ListWithMore elements={normalizedSkills} max={5} />
        </Details>
      </DataListElement>
    );
  }
}

export default Skills;
