import React from 'react'
import { BsGearWide, BsGearWideConnected} from "react-icons/bs";
import { socialLinks } from '../data/socials-data';
import "./WorkInProgressPage.css"
import SocialItem from '../components/SocialItem/SocialItem';
import Socials from '../containers/socials/Socials';

const WorkInProgressPage = () => {
  return (
    <div className='main--body'>
        <div className='container'>
            <div className='box'>
                <div className='text--box'>
                    <div className='gear--box'>
                        <BsGearWide className='gear--big' />
                        <BsGearWideConnected className='gear--small' />
                    </div>
                    <div className='text'>
                        <h5>This page is currently being worked on...</h5>
                        <p>But please follow me on my socials below!</p>
                    </div>
                </div>
                <div className='socials--box'>
                    <Socials />
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default WorkInProgressPage