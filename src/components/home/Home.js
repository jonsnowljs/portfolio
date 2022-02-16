import React from 'react';
import './Home.css';
import Header from '../header/Header';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import About from '../body/about/About';
import Separator from '../common/separator/Separator';
import ProjectTimeline from '../body/projects/ProjectTimeline';
import Skill from '../body/skills/Skill';
import Contact from '../body/contact/Contact';

function Home() {
  return (
    <div className="home">
      <div className='page-one vh-100'>
        <Header/>
        <About/>
        <Separator/>
      </div>
      <div className='page-two'>
        <ProjectTimeline/>
      </div>
      <div className='page-three vh-100'>
        <Skill/>
      </div>
      <div className='page-four vh-100'>
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
