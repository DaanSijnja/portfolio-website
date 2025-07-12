import React from 'react'

import "./HomeInfo.css"
import Skills from '../skills/Skills'
import { greeting_points } from '../../data/greeting-data'
import GreetingBulletpoints from '../greetings/GreetingBulletpoints'

import cad_image from '../../images/portfolio/ledbar/ledbar_cad_LTR.png'
import pcb_image from '../../images/portfolio/ledbar/ledbar_pcb_design.png'
import pcb_3d_image from '../../images/portfolio/ledbar/ledbar_pcb_3D.png'
import code_image from '../../images/portfolio/ledbar/ledbar_code_screenshot.png'

import ImageGrid from '../../components/ImageGrid/ImageGrid'

export const HomeInfo = () => {

  const images = [
    pcb_image,
    pcb_3d_image,
    code_image
  ];



  return (
    <div>
        <h1 className='info--header'>
            What do i do?
        </h1>
        <div className='info--div'>
          <div className='skills--div'>
            <h1 className='sub--header'> 
              General skills
            </h1>
            <Skills/>
            <h1 className='sub--header'> 
              {greeting_points.title}
            </h1>
            <div className='bullet--points--text'>
            <GreetingBulletpoints/>
            </div>
          </div>
          <div className='images--div'>
            <ImageGrid images = {images}/>
          </div>
        </div>
    </div>
  )
}


