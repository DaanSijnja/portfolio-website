import React from 'react'
import { socialLinks } from '../../data/socials-data'
import SocialItem from '../../components/SocialItem/SocialItem'
import "./Socials.css"

const Socials = () => {
  return (
    <div className='socials--div'>
        {
            socialLinks.map((socialLink) => {
                return(
                    <SocialItem data={socialLink} key={socialLink.id} />
                )
            })
        }
    </div>
  )
}

export default Socials