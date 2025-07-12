import React from 'react'
import { skills } from '../../data/skill-data'
import SkillIcon from '../../components/SkillIcon/SkillIcon'

import "./Skills.css"

const Skills = () => {
  return (
    <div className='skills--container'>
        <ul className='skill--icons'>
            {
                skills.data.map((skill) => {
                    return(
                        <SkillIcon data={skill} key={skill.name} />
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Skills