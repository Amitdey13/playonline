import React, { Component } from 'react'
import Home from './Elements/Home'
import Sps from './Elements/Rps'
import Tictactoe from './Elements/Tictactoe'
import Dinorun from './Elements/DinoRun'
import Toss from './Elements/Toss'
import Calculation from './Elements/Calculation'
// import Youplayer from './Elements/youplayer'
// import Notes from './Elements/Notes'

class Elements extends Component {
    render() {
        const {handleChange, step} = this.props
               switch (parseInt(step)) {
                    case 0:
                        return(<Home handleChange = {handleChange} step = {step}/>)
                    case 1:
                        return(<Sps />)
                    case 2:
                        return(<Tictactoe />)
                    case 3:
                        return(<Dinorun />)
                    case 4:
                        return(<Toss />)    
                    case 5:
                        return(<Calculation />)
                    // case 6:
                    //     return(<Youplayer />)
                    // case 7:
                    //     return(<Notes />)
                    default:
                        return(<p>Error:Page Not Found</p>)
                } 
           }
}

export default Elements
