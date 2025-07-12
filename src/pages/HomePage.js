import React from 'react'
import Greeting from '../containers/greetings/Greeting'
import { HomeInfo } from '../containers/homeinfo/HomeInfo.js'
import "./HomePage.css" 

const HomePage = () => {
  return (
    <div className='main--body'>
        <Greeting/>
        <HomeInfo/>
    </div>
  )
}

export default HomePage