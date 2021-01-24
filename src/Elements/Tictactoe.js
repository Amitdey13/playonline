import React, { Component } from 'react'


class TicTacToe extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

        render(){
            return(
            <div>
                <h2>TIC TAC TOE</h2>
                <Board />
                </div>
            )
        }
    }
    function Square(props) {
        return(
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
        )
    }
    
    class Board extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                mode: '0',
                play: false,
                squares: Array(9).fill(null),
                XisNext: true,
                status: 'X\'s Turn',
                step: 0,
                winner: null
            }
            this.handleClick = this.handleClick.bind(this)
            this.onClick = this.onClick.bind(this)
            this.reset = this.reset.bind(this)
            this.winnerCalculate = this.winnerCalculate.bind(this)
        }
        onClick(event){
            const {name, value} = event.target
            this.setState({
                [name]: value,
                play: true
            })
            setTimeout(()=>{if(this.state.mode === '2')
            this.setState({
                squares: Array(16).fill(null)
            })},100)
            
        }
        reset(){
            this.setState({
                mode: '0',
                play: false,
                squares: Array(9).fill(null),
                XisNext: true,
                status: 'X\'s Turn',
                step: 0,
                winner: null
            })
        }
        handleClick(i){ 
            const squares = this.state.squares.slice()
            if(this.state.winner === null && squares[i] === null){
            squares[i] = (this.state.XisNext)?'X':'O'
            this.setState(p => ({
                squares: squares,
                XisNext: !p.XisNext,
                step: p.step+1
            }))
            setTimeout(()=>{this.winnerCalculate()},100)
            setTimeout(()=>{
                if(this.state.winner){
            this.setState({
                    status: 'Game Over'
                })}
            else{
            const turn = (this.state.XisNext)?'X':'O'
            this.setState({
                status: turn + '\'s Turn'
            })
            }
            },100)
        } 
        } 
        renderSquare(i){
            const {squares, winner} = this.state
            return(
                <div>
                    <Square winner={winner} value = {squares[i]} onClick={() => this.handleClick(i)}/>
                </div>
            )
        }
        winnerCalculate(){
            const {squares,mode,step} = this.state
            if(mode === '1' && step > 3){
               const win = [
                    
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [0,1,2],
                    [2,4,6]
                ]

             for(let i=0;i<win.length;i++){
                const [a,b,c] = win[i]
                if(squares[a] === squares[b] && squares[b] === squares[c] && squares[a] !== null)   
                this.setState({
                    winner: squares[a]
                })
            }
            }
            else if(mode === '2' && step > 6){
                const win = [
                    [0,1,2,3],
                    [4,5,6,7],
                    [8,9,10,11],
                    [12,13,14,15],
                    [0,4,8,12],
                    [1,5,9,13],
                    [2,6,10,14],
                    [3,7,11,15],
                    [0,5,10,15],
                    [3,6,9,12]
                ]
                for(let i=0;i<win.length;i++){
                    const [a,b,c,d] = win[i]
                    if(squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[d] && squares[a]!==null)
                    this.setState({
                        winner: squares[a]
                    })
                } 
            }
        }
        render() {
            const {play, mode} = this.state
            return (
                <div>
                   { (play)?(
                       <div>
                    Status: {this.state.status}
                    {(mode === "1")?(<div>
                <div className="board-row">
                    {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)} {this.renderSquare(4)} {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)} {this.renderSquare(7)} {this.renderSquare(8)}
                </div></div>):(<div>
                    <div className="board-row">
                    {this.renderSquare(0)} {this.renderSquare(1)} {this.renderSquare(2)} {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)} {this.renderSquare(5)} {this.renderSquare(6)} {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)} {this.renderSquare(9)} {this.renderSquare(10)} {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)} {this.renderSquare(13)} {this.renderSquare(14)} {this.renderSquare(15)}
            </div>
                </div>)}
                {(this.state.winner===null)?(
                <input type = "button" value='Reset' onClick={this.reset} />):(
                    <div>
                        {this.state.winner} is winner  <input type = "button" value='Replay' onClick={this.reset} />
                    </div>
                )}
                </div>):(<div>
                Choose a mode:
                    <input className="btn" name="mode" id="mode1" type = "button" value='1' onClick={this.onClick} /><br />
                    <label htmlFor="mode1" className='mode'>3X3</label>
                    <input className="btn" name="mode" id="mode2" type = "button" value='2' onClick={this.onClick} />
                    <label htmlFor="mode2" className='mode'>4X4</label>
                    </div>
                )}
                </div>
            )
        }
    }
    
    

export default TicTacToe