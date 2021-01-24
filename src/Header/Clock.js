import React from 'react';
import './clock.css'

class Clock extends React.Component {
     constructor(props){
         super(props)
         this.state = {
             date : new Date(),
             day : new Date()
         };
         this.tick = this.tick.bind(this)
         this.Day = this.Day.bind(this)
        }
        componentDidMount() {
            this.intervalID = setInterval(() => this.tick(), 1000);
            this.day = setInterval(() => this.Day(),1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalID);
        }

        tick(){
            this.setState({date: new Date()});
        }

        Day(){
            this.setState({day : new Date()});
        }

    render() {
    return(
        <p className = "clock">
            <span className = "date">{this.state.day.toDateString()}</span>
            <br></br>
            <span className = "time">{this.state.date.toLocaleTimeString()}</span>
            </p>
    );
    }
}

export default Clock;