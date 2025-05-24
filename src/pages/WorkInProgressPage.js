import React from 'react'
import { BsGearWide, BsGearWideConnected} from "react-icons/bs";
import { socialLinks } from '../data/socials';
import "./WorkInProgressPage.css"
import SocialItem from '../components/SocialItem/SocialItem';

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
                    {
                        socialLinks.map((socialLink) => {
                            return(
                                <SocialItem data={socialLink} key={socialLink.id} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default WorkInProgressPage