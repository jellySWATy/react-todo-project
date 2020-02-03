import React from 'react'
import { NavLink } from 'react-router-dom'
import "./DropdownItem.sass"

function DropdownItem({link, onClick}) {
    const {to, label, color, exact} = link
    return (
        <li className="DropdownItem">
            <NavLink 
                to={to}
                exact={exact}
                onClick={onClick}
            >
                <span style={{backgroundColor: color}}></span>
                {label}
            </NavLink>
        </li>
    )
}

export default DropdownItem