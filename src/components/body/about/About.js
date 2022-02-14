import React from 'react'
import './About.css'
import avatar from '../../../assets/img/avatar.svg'
import SocialContents from '../../common/contacts/SocialContents'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There, I am
          <br /> <span className="info-name">Jiasheng Lu</span>
          <br />
          I'm a full-stack developer.
        </div>
        <div className="about-photo">
          <img src={avatar} alt="My avatar" className="picture" />
          
          
        </div>
      </div>
      <SocialContents />
    </div>
  );
}

export default About