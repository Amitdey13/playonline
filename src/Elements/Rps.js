import React from 'react'

class Sps extends React.Component{
    constructor(){
        super()
        this.state = {
            Play : false,
            jMove : 'ready...',
            userMove : 'ready...',
            winner : '',
            PlayMode : 0,
            check : 0,
            points : false,
            jPoints : 0,
            userPoints : 0
        }
        this.jarvesMove = this.jarvesMove.bind(this);
        this.PointsUpdate = this.PointsUpdate.bind(this);
        this.reset = this.reset.bind(this);
        this.play = this.play.bind(this)
        this.Update = this.Update.bind(this)
        this.end = this.end.bind(this)
    }

    jarvesMove(event) {
        let move = 'ready...'
        if(this.state.Play){        
            let num = Math.floor(Math.random()*3)
            const {name, value} = event.target
            switch(num){
                case 0:
                    move = 'stone';
                    break;
                case 1:
                    move = 'paper';
                    break;
                case 2:
                    move = 'scissor';
                    break;
                default :
                    move = 'ready'    
            }

            this.setState(state => ({check : state.check + 1}))

            this.setState({
                jMove : move,
                [name] : value,
                points : true
            })
        }

    }

    Update(){
        if(parseInt(this.state.PlayMode) === 3){
            if(parseInt(this.state.PlayMode) === this.state.check || this.state.jPoints === 2 || this.state.userPoints === 2){
                if(this.state.jPoints > 0 || this.state.userPoints > 0){
                    if(this.state.jPoints > this.state.userPoints){
                        this.setState({winner : 'Winner is Jarves'})
                    }
                    else if(this.state.jPoints < this.state.userPoints){
                        this.setState({winner : 'Winner is You'})
                    }
                    else{
                        this.setState({winner : 'Draw'})
                    }
                }
                this.setState({
                    Play : false,
                    PlayMode : 0,
                    jMove : 'ready...',
                    userMove : 'ready...',
                    check : 0,
                    jPoints : 0,
                    userPoints : 0,
                })
            }
        }
        else if(parseInt(this.state.PlayMode) === 5){
            if(parseInt(this.state.PlayMode) === this.state.check || this.state.jPoints >= 3 || this.state.userPoints >= 3){
                if(this.state.jPoints > 0 || this.state.userPoints > 0){
                    if(this.state.jPoints > this.state.userPoints){
                        this.setState({winner : 'Winner is Jarves'})
                    }
                    else if(this.state.jPoints < this.state.userPoints){
                        this.setState({winner : 'Winner is You'})
                    }
                    else{
                        this.setState({winner : 'Draw'})
                    }
                }
                this.setState({
                    Play : false,
                    PlayMode : 0,
                    jMove : 'ready...',
                    userMove : 'ready...',
                    check : 0,
                    jPoints : 0,
                    userPoints : 0,
                })
            }
        }
        else{
            if(parseInt(this.state.PlayMode) === this.state.check){
                if(this.state.jPoints > 0 || this.state.userPoints > 0){
                    if(this.state.jPoints > this.state.userPoints){
                        this.setState({winner : 'Winner is Jarves'})
                    }
                    else if(this.state.jPoints < this.state.userPoints){
                        this.setState({winner : 'Winner is You'})
                    }
                    else{
                        this.setState({winner : 'Draw'})
                    }
                }
                this.setState({
                    Play : false,
                    PlayMode : 0,
                    jMove : 'ready...',
                    userMove : 'ready...',
                    check : 0,
                    jPoints : 0,
                    userPoints : 0,
                })
            }
        }
    }

    PointsUpdate(){
        if(this.state.points && this.state.Play){
            if(this.state.jMove === this.state.userMove){
                this.setState(state => ({jPoints : state.jPoints + 0}))
            }
            else if(this.state.jMove === 'stone' && this.state.userMove === 'scissor'){
                this.setState(state => ({jPoints : state.jPoints + 1}))
            }
            else if(this.state.jMove === 'scissor' && this.state.userMove === 'paper'){
                this.setState(state => ({jPoints : state.jPoints + 1}))
            }
            else if(this.state.jMove === 'paper' && this.state.userMove === 'stone'){
                this.setState(state => ({jPoints : state.jPoints + 1}))
            }
            else{
                this.setState(state => ({userPoints : state.userPoints + 1}))
            }
            this.setState({points : false})
        }
    }

    play(event){
        this.setState({
            Play : true,
            winner : ''
        })
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    end(){
        if(this.state.jPoints > this.state.userPoints){
            this.setState({winner : 'Winner is Jarves'})
        }
        else if(this.state.jPoints < this.state.userPoints){
            this.setState({winner : 'Winner is You'})
        }
        else{
            this.setState({winner : 'Draw'})
        }
        this.setState({
            Play : false,
            jMove : 'ready...',
            userMove : 'ready...',
            PlayMode : 0,
            check : 0,
            points : false,
            jPoints : 0,
            userPoints : 0
        })
    }

    componentDidMount(){
       this.PU = setInterval(() => this.PointsUpdate(),1)
       this.U = setInterval(() => this.Update(),1)
    }
    componentWillUnmount(){
        clearInterval(this.PU)
        clearInterval(this.U)
    }
    reset(){
        this.setState({
            Play : false,
            jMove : 'ready...',
            userMove : 'ready...',
            winner :'',
            PlayMode : 0,
            check : 0,
            points : false,
            jPoints : 0,
            userPoints : 0
        })
    }

    render(){  
        return(
            <div className = "sps">
            <div>
                <h2>ROCK PAPER SCISSOR</h2>
                        <br></br>
            </div>
            
            {(this.state.Play)?(
                (parseInt(this.state.PlayMode) < 6)?
                (<div>
                    You = {this.state.userPoints}
                    <p>Points : <br></br> 
                            <br></br>
                            Jarves = {this.state.jPoints}
                    </p>
                    <p>Jarves move : {this.state.jMove}</p>
                    <br></br>
                    <p>Your move : {this.state.userMove}</p>
                    <input
                      type = "button" 
                      className = "button stone"
                      id = "stone" 
                      name = "userMove" 
                      value = "stone" 
                      onClick = {this.jarvesMove} />
                    <button 
                      className = "button paper"
                      name = "userMove" 
                      value = "paper" 
                      onClick = {this.jarvesMove}>
                          paper
                    </button>
                    <button 
                      className = "button scissor"
                      name = "userMove" 
                      value = "scissor" 
                      onClick = {this.jarvesMove}>
                          scissor
                    </button>
                    <br></br>
                    <br></br>
                    <button onClick = {this.reset}>RESET</button>
                </div>):(
                    <div>
                        <p>Points : <br></br> 
                            You = {this.state.userPoints}
                            <br></br>
                            Jarves = {this.state.jPoints}
                        </p>
                        <p>Jarves move : {this.state.jMove}</p>
                        <br></br>
                        <p>Your move : {this.state.userMove}</p>
                        <button name = "userMove" value = "stone" onClick = {this.jarvesMove}>stone</button>
                        <button name = "userMove" value = "paper" onClick = {this.jarvesMove}>paper</button>
                        <button name = "userMove" value = "scissor" onClick = {this.jarvesMove}>scissor</button>
                        <br></br>
                        <button onClick = {this.end}>End</button>
                        <br></br>
                        <button onClick = {this.reset}>RESET</button>
                    </div>
                )
            ):(
                <div>
                    <p>Choose an option:</p>
                    <button name = "PlayMode" value = "3" onClick = {this.play}>Best of 3</button>
                    <button name = "PlayMode" value = "5" onClick = {this.play}>Best of 5</button>
                    <button name = "PlayMode" value = "1000" onClick = {this.play}>Endless</button> 
                    <p>{this.state.winner}</p>                  
                </div>
            )}
            </div>
        )   
    }
}


export default Sps