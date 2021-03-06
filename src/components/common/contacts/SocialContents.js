import React from 'react';
import { SocialData } from '../../../assets/data/SocialData';
import './SocialContents.css';
import UseAnimations from 'react-useanimations';
import linkedin from 'react-useanimations/lib/linkedin';
import github from 'react-useanimations/lib/github';
import archive from 'react-useanimations/lib/archive';

function SocialContents() {
  const data = SocialData;
  return (
    <div className="social-contact">
      <a href={data[0].link}>
        <div className=" social-icon">
          <UseAnimations
            animation={linkedin}
            size={60}
            strokeColor={'#0072B1'}
            loop="loop"
            wrapperStyle={{ margin: 3 }}
          />
        </div>
      </a>
      <a href={data[1].link}>
        <div className="social-icon">
          <UseAnimations
            animation={github}
            size={60}
            wrapperStyle={{ margin: 3 }}
          />
        </div>
      </a>
      <a href={data[2].link} className="archive-logo">
        <div className="social-icon ">
          <UseAnimations
            animation={archive}
            size={60}
            className="social-icon"
            strokeColor={'#EA4335'}
          />
        </div>
      </a>
    </div>
  );
}

export default SocialContents;
