import React from 'react'
import rps from './img/rps_icon.jpg'
import ttt from './img/tictactoe.png'
import toss from './img/toss.png'

function Home(props){
            const { handleChange } = props
            return(
                <div className = "home-list">
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "sps"
                    className = "btn"
                    name = "step"
                    value = "1" />
                  <label className = "home-bttn" htmlFor = "sps">
                        <img src={rps} alt='rps logo' className="home-icon" />
                        Rock Paper Scissor</label></li>
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "ttt"
                    className = "btn"
                    name = "step"
                    value = "2" />
                  <label className = "home-bttn" htmlFor = "ttt">
                    <img src={ttt} alt='tictactoe logo' className="home-icon" />
                    Tic Tac Toe</label></li>
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "dr"
                    className = "btn"
                    name = "step"
                    value = "3" />
                  <label className = "home-bttn" htmlFor = "dr">
                    Dino Run</label></li>
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "tc"
                    className = "btn"
                    name = "step"
                    value = "4" />
                  <label className = "home-bttn" htmlFor = "tc">
                    <img src={toss} alt='toss logo' className="home-icon" />
                    Toss Coin</label></li>
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "cal"
                    className = "btn"
                    name = "step"
                    value = "5" />
                  <label className = "home-bttn" htmlFor = "cal">
                    Calculation
                    </label></li>
                {/* <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "youplayer"
                    className = "btn"
                    name = "step"
                    value = "6" />
                  <label className = "home-bttn" htmlFor = "youplayer">
                    Youplayer</label></li>
                <li><input 
                    type = "button"
                    onClick = {handleChange}
                    id = "notes"
                    className = "btn"
                    name = "step"
                    value = "7" />
                  <label className = "home-bttn" htmlFor = "notes">
                    Notes</label></li> */}
                </div>
            )
        }

export default Home