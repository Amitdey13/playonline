import React, { Component } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaHome } from 'react-icons/fa'
import './nav.css'

class TopNav extends Component {
    

    render() {
        const {onClick , handleChange} = this.props
        return (
            <div className = "topnav">
                <div className = "menu">
                    <GiHamburgerMenu onClick = {onClick} />
                </div>
                <div className = "home">
                    <input 
                    type = "button"
                    onClick = {handleChange}
                    id = "home"
                    name = "step"
                    value = "0" />
                    <label htmlFor = "home">
                      <FaHome className = "Home" />
                    </label>
                </div>
            
            </div>
        )
    }
}

export default TopNav
