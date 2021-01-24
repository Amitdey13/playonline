import React, { Component } from 'react'
import Midsec from './midSec'
import './App.css'
import TopNav from './Nav/TopNav'
//import Footer from './Footer'

class container extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu:false,
            step:"0"
        }
        this.onClick = this.onClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    onClick = () => {
        this.setState(prestate => ({
            menu : !prestate.menu
        }));
        
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name] :value
        })
    }

    render() {
        const {menu,step} = this.state
        const values = {menu,step}
        return (
            <div className = "container">
            <div>
                <TopNav 
                onClick = {this.onClick} 
                values = {values}
                handleChange = {this.handleChange}
                 />
            </div>
            <div>
                <Midsec
                onClick = {this.onClick} 
                step = {step}
                menu = {menu}
                handleChange = {this.handleChange}
                 />
            </div>
            {/* <div>
                <Footer />
            </div> */}
            </div>
        )
    }
}

export default container
