import React from 'react';
import AthletesPreview from './AthletesPreview';
import athletes from '../data/athletes';

export default class IndexPage extend React.Component {
  render () {
    return (
      <div className='home'>
        <div className='athletes-selector'>
          {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
      </div>
    );
  };
};
