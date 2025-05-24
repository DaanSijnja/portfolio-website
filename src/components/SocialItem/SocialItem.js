import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./SocialItem.css"


const SocialItem = ({
    data
}
) => {
    const [hover, setHover]  = useState(false)

  return (
        <Link to={data.link} className='social--button' style={ hover ? {backgroundColor: data.fadeColor, transition: "all 0.3s ease-in"} : {backgroundColor: data.backgroundColor} } onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}   >
            {data.icon}        
        </Link>
  )
}

export default SocialItem