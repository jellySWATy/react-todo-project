import React, { Component } from 'react'
import classes from "./Layout.sass"
import Drawer from '../../components/Navigation/Drawer/Drawer'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'

class Layout extends Component {
    state={
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {

        const {children} = {...this.props}

        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler} 
                />

                <MenuToggle
                    isOpen={this.state.menu}
                    onToggle={this.toggleMenuHandler}
                />

                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout