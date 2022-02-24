import React from 'react';
import './Skill.css';
import { SkillData } from '../../../assets/data/SkillData';
import SkillCard from './SkillCard';

function Skill() {
  const data = SkillData;

  return (
    <div className="skills">
      <div className="skills-container">
        {data.map((item) => {
          return (
            <>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-section">
                <div className="skills-list" >
                  {item.list.map((skill) => {
                    return <SkillCard skill={skill} key={skill.name}/>;
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>

    </div>
  );
}

export default Skill;
