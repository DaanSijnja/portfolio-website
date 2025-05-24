import React, { useState } from 'react'
import NavBarItem from './NavBarItem'

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import "./NavBar.css"
import { click } from '@testing-library/user-event/dist/click';


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <NavBarItem to="/" itemStyle="navItem--title" >  <span className='title'>./</span>daan-sijnja </NavBarItem>
        <div className='menu' >
            {
                menuOpen ? 
                <>
                    <FaTimes className='icon' onClick={ () =>{setMenuOpen(!menuOpen)}}/>
                </> :
                <>
                    <FaBars className='icon' onClick={ () =>{setMenuOpen(!menuOpen)}}/>
                </>
            }
        </div>
        <ul className={menuOpen ? "open" : ""} onClick={ () => setMenuOpen(false)}>
            
            <li>
                <NavBarItem to="/skill">Skill</NavBarItem>
            </li>
            <li>
                <NavBarItem to="/education">Education</NavBarItem>
            </li>
            <li>
                <NavBarItem to="/experience">Experience</NavBarItem>
            </li>
            <li>
                <NavBarItem to="/portfolio">Portfolio</NavBarItem>
            </li>
            <li>
                <NavBarItem to="/contact">Contact Me</NavBarItem>
            </li>
        </ul>

    </nav>
  )
}

export default NavBar