import React, { Component } from 'react'
import './Nav/nav.css'
                                                         
class SideNav extends Component {

    render() {
        const {handleChange,step} = this.props
        return (
            <div className = "list">
                { (step !== "0")?(
                <div className = "menu-list">
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "sps"
                    className = "btn"
                    name = "step"
                    value = "1" />
                  <label className="bttn" htmlFor = "sps">
                         ROCK PAPER SCISSOR</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "ttt"
                    className = "btn"
                    name = "step"
                    value = "2" />
                  <label className="bttn" htmlFor = "ttt">
                    TIC TAC TOE</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "dr"
                    className = "btn"
                    name = "step"
                    value = "3" />
                  <label className="bttn" htmlFor = "dr">
                    DINO RUN</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "tc"
                    className = "btn"
                    name = "step"
                    value = "4" />
                  <label className="bttn" htmlFor = "tc">
                    TOSS COIN</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "cal"
                    className = "btn"
                    name = "step"
                    value = "5" />
                  <label className="bttn" htmlFor = "cal">
                    CALCULATION</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "youplayer"
                    className = "btn"
                    name = "step"
                    value = "6" />
                  <label className="bttn" htmlFor = "youplayer">
                    YOUPLAYER</label></li>
                <li className="bttn"><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "notes"
                    className = "btn"
                    name = "step"
                    value = "7" />
                  <label className="bttn" htmlFor = "notes">
                    NOTES</label></li>
                </div>):(null) }
                <div className = "theme">
                {/* <li className="bttn"><input 
                    type = "button"
                    id = "dark"
                    className = "btn"
                     />
                  <label className="bttn" htmlFor = "dark">
                    DARK MODE</label></li> */}
                    </div>
            </div>
        )
    }
}

export default SideNav



