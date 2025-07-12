import React from 'react'
import { greeting_points } from '../../data/greeting-data'
import "./GreetingBulletpoints.css"


const GreetingBulletpoints = () => {
  return (
    <>
        {greeting_points.list.map((item) => {
                return(
                    <p className='greeting--bulletpoint'>
                        {item}
                    </p>
                )
            })
        }
    </>
  )
}

export default GreetingBulletpoints