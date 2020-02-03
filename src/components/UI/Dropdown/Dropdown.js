import React from 'react'
import "./Dropdown.sass"
import DropdownItem from "../DropdownItem/DropdownItem"

class Dropdown extends React.Component {
    state = {
        isOpen: false
    }
    toggleList = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render () {
        const {label, children} = this.props.link
        const cls = [
            "fas",
            this.state.isOpen ? "fa-sort-up" : "fa-sort-down"
        ]
        return (
            <li className="Dropdown">
                <button onClick={this.toggleList}>{label} <i className={cls.join(" ")} /></button>
                {this.state.isOpen ?
                    <ul>
                        {children.map((child, index) => <DropdownItem link={child} key={index} onClick={this.props.onClose} />)}
                    </ul>
                    :
                    null
                }
            </li>
        )
    }
}

export default Dropdown