import React from 'react';
import './SkillCard.css';
import {WebpackIcon} from 'react-webtech-animated-icons';
 
function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <WebpackIcon firstColor="#1C78C0" secondColor="#8ED6FB" size={32} duration={1} />
      <img src={skill.icon} alt={skill.name} className="skill-icon" />
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
