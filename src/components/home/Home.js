import React from 'react';
import './Home.css';
import Header from '../header/Header';
import About from '../body/about/About';
import Separator from '../common/separator/Separator';
import Skill from '../body/skills/Skill';
import Contact from '../body/contact/Contact';
import Projects from '../body/projects/Projects';
import Title from '../common/title/Title';
import MetaDecorator from 'components/util/MetaDecorator';
import metaThumbnail from '../../assets/img/avatar.svg';
import Particles from 'react-tsparticles';
import particlesOptions from "../../assets/data/practicles.json"
// import NavigationBar from 'components/Navbar/NavigationBar';

const content = require("../../assets/data/content.json")

function Home() {
    
    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

  return (
    <div className="home">
      <MetaDecorator
        description={content}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
      />
      {/* <NavigationBar/> */}
      {/* load the praticles config from practicles.json */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
        style
      />
      <div className="page-one vh-100">
        <Header />
        <About />
        <Separator />
      </div>
      <div className="page-two" id="projects">
        <Title title="My Projects" />
        <Projects />
        <Separator />
      </div>
      <div className="page-three vh-100" id="skills">
        <Title title="Skills" />
        <Skill />
        <Separator />
      </div>
      <div className="page-four vh-100" id="contact">
        <Title title="Contact" />
        <Contact />
        <Separator />
      </div>
    </div>
  );
}

export default Home;
