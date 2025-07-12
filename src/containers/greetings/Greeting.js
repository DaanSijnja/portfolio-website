import React from 'react'

import "./Greeting.css"
import { greeting } from '../../data/greeting-data'
import Socials from '../socials/Socials.js'
import url from '../../images/portfolio/ledbar/ledbar_cad_LTR.png'
import ImageGrid from '../../components/ImageGrid/ImageGrid.js'

const Greeting = () => {

    


  return (
    <>
    <div className='greeting--main'>

        <div className='greeting--text-div'>
            <h1 className='greeting--text--title'>
                {greeting.title}
            </h1>
            { greeting.nickname ? (
                <h2 className='greeting--text--nickname'>
                    {greeting.nickname}
                </h2>
                ) : null 
            }
            <p className='greeting--text--subtext'>
                {greeting.subText}
            </p>

            <div >
                <div className='media--resume--div'>
                <Socials/>
                </div>

                {/* <div className='media--resume--div'>
                    <button className='resume--button'>
                        My Resume
                    </button>
                </div> */}
            </div>
        </div>

        <div className='greeting--image--div'>
            <ImageGrid images={[url]}/>

        </div>
    </div>
    </>
    
  )
}

export default Greeting