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
import { ContentCopy } from '@mui/icons-material';
import metaThumbnail from '../../assets/img/avatar.svg';

const content = require("../../assets/data/content.json")

function Home() {

  return (
    <div className="home">
      <MetaDecorator
        description={content}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
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
