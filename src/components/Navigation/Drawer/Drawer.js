import React, {Component, Fragment} from 'react'
import "./Drawer.sass"
import Dropdown from '../../UI/Dropdown/Dropdown'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

const childLinks = [
    {to: '/tasklist/:1', label: 'Work', color: "#EF233C", exact: false},
    {to: '/tasklist/:2', label: 'Home', color: "#247BA0", exact: false},
    {to: '/tasklist/:3', label: 'Frontend', color: "#F3FFBD", exact: false}
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
        return links.map((link, index) => {
            if (link.children) {
                return <Dropdown link={link} onClose={this.clickHandler} key={index} />
            } else {
                return (
                    <li key={index}>
                        <NavLink 
                            to={link.to}
                            exact={link.exact}
                            onClick={this.clickHandler}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                )
            }
        })
    }

    render() {
        const {isOpen} = this.props
        const cls = ["Drawer"]
        
        if (!isOpen) {
            cls.push("close")
        }

        const links = [
            {to: '/', label: 'All Tusks', exact: true},
            {to: '/project-list', label: 'Project list', exact: false},
            {to: '/auth', label: 'Authentication', exact: false},
            {label: 'Task Lists', children: childLinks}
        ]

        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <div className="logo">ToDo &#10003;</div>
                    <ul>
                        
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {isOpen ? <Backdrop onClick={this.clickHandler} /> : null}
            </Fragment>
        )

    }
}

export default Drawer