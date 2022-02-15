import React from 'react';
import SeparatorBottom from '../../common/separator/SeparatorBottom'
import './Skill.css';
import { SkillData } from '../../../assets/data/SkillData';
import SkillCard from './SkillCard';

function Skill() {
  const data = SkillData;

  return (
    <div className="skills">
      <SeparatorBottom />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-section">
                <div className="skills-list">
                  {item.list.map((skill) => {
                    return <SkillCard skill={skill} />;
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
