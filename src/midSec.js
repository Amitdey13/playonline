import React, { Component } from 'react'
import SideNav from './SideNav'
import Elements from './Elements'
import Clock from './Header/Clock'
import './midsec.css'

export class midSec extends Component {
    render() {
        const {menu, step} = this.props
        const {handleChange} = this.props
        return (
            <div className = "midSec">
                { (menu) ? <SideNav handleChange = {handleChange} step = {step} /> : (null) }
                <div className = "main-sec">
                    <Clock className = "clock" />
                    <Elements className = "element" handleChange = {handleChange} step = {step} />
                </div>
            </div>
        )
    }
}

export default midSec
