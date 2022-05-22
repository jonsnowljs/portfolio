import React from 'react';
import './About.css';
import avatar from '../../../assets/img/avatar.svg';
import SocialContents from '../../common/contacts/SocialContents';

import AvatarIcon from './AvatarIcon';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-name">Jiasheng Lu</span>
          <span className='info-desc'>Full stack Developer</span>
        </div>
        <div className="about-photo">
          {/* <img src={avatar} alt="My avatar" className="picture" /> */}
          <AvatarIcon />
        </div>
      </div>
      <SocialContents />
    </div>
  );
}

export default About;
