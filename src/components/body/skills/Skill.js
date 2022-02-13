import React from 'react'
import Separator from '../../common/separator/Separator'
import './Skill.css'
import {SkillData} from '../../data/SkillData'
import SkillCard from './SkillCard'
function Skill() {
  const data = SkillData

  return (
    <div className='skills'>
      <Separator/>
      <label className='section-title'>
        <div className='skills-container'>
          {data.map((item)=> {
            <div className='skills-section'>
              <label className='skills-section-title'>{item.type}</label>
              <div className='skills-list'>
                {item.list.map((skill)=>{
                  return(
                    <SkillCard skill={skill}/>
                  )
                })}
              </div>
            </div>
          })}
        </div>
      </label>
    </div>
  )
}

export default Skill