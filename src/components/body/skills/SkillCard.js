import React from 'react';
import './SkillCard.css';
 
function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt={skill.name} className="skill-icon" />
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
