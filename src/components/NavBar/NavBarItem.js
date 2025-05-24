import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavBarItem.css"

const STYLES = ['navItem--page','navItem--title']

const NavBarItem = ({
  children,
  to,
  itemStyle
}) => {
  const checkNavBarItemStyle = STYLES.includes(itemStyle)
  ? itemStyle
  : STYLES[0];

  return (
    <>
        <NavLink to={to} className={`navitem ${checkNavBarItemStyle}`}>
            {children}
        </NavLink>
    </>
  )
}

export default NavBarItem