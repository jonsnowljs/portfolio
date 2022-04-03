import React from 'react';
import './About.css';
import avatar from '../../../assets/img/avatar.svg';
import SocialContents from '../../common/contacts/SocialContents';
import Typist from 'react-typist';
import './Typist.css';
import AvatarIcon from './AvatarIcon';

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <Typist cursor={{ blink: true, element: '⌨️' }}>
            Hi👋, I am
            <br /> <span className="info-name">Jiasheng Lu</span>
            <br />
            I'm a front
            <Typist.Backspace count={5} delay={10} />
            back
            <Typist.Backspace count={4} delay={10} />
            full-stack developer.
          </Typist>
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
