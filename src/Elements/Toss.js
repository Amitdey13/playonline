import React from 'react'

class Toss extends React.Component{
    constructor(){
        super()
        this.state = {
            toss : ''
        }
        this.toss = this.toss.bind(this)
    }

    toss(){
        let t = Math.floor(Math.random() * 2)
        if(t === 1){
            this.setState({toss : 'Head'})
        }
        else{
            this.setState({toss : 'Tail'})
        }
    }

        render(){
            return(
            <div>
                <h2>TOSS COIN</h2>
                <br></br>
                <br></br>
                <p>{this.state.toss}</p>
                <br></br>
                <button onClick = {this.toss}>Toss</button>
                </div>
            )
        }
    }

export default Toss