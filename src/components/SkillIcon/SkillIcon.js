import React from 'react'
import "./SkillIcon.css"
import Tooltip from '../tooltip/Tooltip'


 const SkillIcon = ({
    data
}) => {
   return (
     <il className="skill--icon"  name={data.name} > 
         <Tooltip text={data.name}>
            <span style={{color: data.color}}>
            {data.icon}
            </span>
         </Tooltip>
     </il>
        
   )
 }
 
 export default SkillIcon