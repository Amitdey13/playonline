import React from 'react'

class Calculation extends React.Component{
    constructor(){
        super()
        this.state = {
            type : 0 
        }
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event){
        const {name , value} = event.target
        this.setState({
            [name] : value
        })
    }

        render(){
            return(
            <div>
               {/* ---- Option Section ---- */}
              <div>
                <h2>CALCULATION</h2>
                    <br></br>
                    <br></br>
                    <button name = "type" value = "1" onClick = {this.handleChange}>Calculator</button>
                    <button name = "type" value = "2" onClick = {this.handleChange}>Temperature</button>
                    <button name = "type" value = "3" onClick = {this.handleChange}>Age</button>
                    <br></br>
                </div>
               {
                 (parseInt(this.state.type) === 1)?
                    ( 
                     <Calculator />
                    ):
                 (parseInt(this.state.type) === 2)?
                    (
                     <Temperature />
                    ):
                 (parseInt(this.state.type) === 3)?
                    (
                     <Age />
                    ):
                 (<div></div>)
                }
    
            </div>)
        }
    }

class Calculator extends React.Component {
    constructor(){
        super()
        this.state = { 
            name:'input1',
            int : true,
            input1:'0',
            input2:'',
            operator:'',
            result:''     
        }
        this.handleChange = this.handleChange.bind(this)
        this.numberClick = this.numberClick.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.allCrear = this.allCrear.bind(this)
        this.Back = this.Back.bind(this)
        this.result = this.result.bind(this)
    }

    handleChange(event){
        const {name , value} = event.target
        if(this.state.result !== ''){
        this.setState(p => ({
            input1 : p.result,
            input2 : '',
            result : '',
        }))
    }
        this.setState({
            [name] : value,
            name : 'input2',
            int : true,
        })
    }
    numberClick(e){
        let {name,value} = e.target
        if(value === '.')
        this.setState({
            int : false
        })
        if(!this.state.int && value === '.')
        value = ''

        if(this.state.name === "input1"){
        this.setState(prestate => ({
            [name] : prestate.input1 + value
        }))}
        else
        this.setState(prestate => ({
            [name] : prestate.input2 + value
        }))
        if(this.state.int){
        if(name === 'input1'&&(value === '0'||value === '00'
        ||value === '1'||value === '2'||value === '3'
        ||value === '4'||value === '5'||value === '6'
        ||value === '7'||value === '8'||value === '9'))
        this.setState(p => ({
            input1 : parseFloat(p.input1),
        }))
        else if(name === 'input2'&&(value === '0'||value === '00'
        ||value === '1'||value === '2'||value === '3'
        ||value === '4'||value === '5'||value === '6'
        ||value === '7'||value === '8'||value === '9'))
        this.setState(p => ({
            input1 : parseFloat(p.input1),
        }))
    }
    }
    handleFocus(e){
        const {name} = e.target
        this.setState({
            name : name
        })
    }
   
    allCrear(){
        this.setState({
            name : 'input1',
            input1 : '0',
            input2 : '',
            operator : '',
            result : ''
        })
    }
    Back(){
        if(this.state.name === "input1"){
            this.setState(prestate => ({
                input1 : parseInt(parseInt(prestate.input1)/10)
            }))}
        else if(this.state.name === "input2")
            this.setState(prestate => ({
                input2 : parseInt(parseInt(prestate.input2)/10)
            }))
    }
    result(){
        const {operator} = this.state
        this.setState({
            name : ''
        })
        if(operator === '+')
        this.setState(prestate => ({
            result:parseFloat(prestate.input1) + parseFloat(prestate.input2)
        }))
        else if(operator === '-')
        this.setState(prestate => ({
            result:parseFloat(prestate.input1) - parseFloat(prestate.input2)
        }))
        else if(operator === 'x')
        this.setState(prestate => ({
            result:parseFloat(prestate.input1) * parseFloat(prestate.input2)
        }))
        else if(operator === '/')
        this.setState(prestate => ({
            result:parseFloat(prestate.input1) / parseFloat(prestate.input2)
        }))
        else if(operator === '%')
        this.setState(prestate => ({
            result:(parseFloat(prestate.input1) / 100)*parseFloat(prestate.input2)
        }))
    }

        render(){
            const {name, input1, input2, operator, result} = this.state
            return(
                <div className="Calculator">
                    <h4>Calculator</h4>
                        <input className = 'display' name = "input1" value = {input1} pattern = "[0-9]" />
                        <input className = 'display' name = "input2" value = {input2} pattern = "[0-9]" />
                        {input1} {operator} {input2}<br></br>
                        {result}
                        <div className="switch">
                            <input type="button" value="AC" onClick = {this.allCrear} />
                            <input type="button" value="C" onClick = {this.Back} />
                            <input type="button" name="operator" value="%" onClick = {this.handleChange} />
                            <input type="button" name="operator" value="/" onClick = {this.handleChange} />
                            <input type="button" name={name} value="7" onClick = {this.numberClick} />
                            <input type="button" name={name} value="8" onClick = {this.numberClick} />
                            <input type="button" name={name} value="9" onClick = {this.numberClick} />
                            <input type="button" name="operator" value="x" onClick = {this.handleChange} />
                            <input type="button" name={name} value="4" onClick = {this.numberClick} />
                            <input type="button" name={name} value="5" onClick = {this.numberClick} />
                            <input type="button" name={name} value="6" onClick = {this.numberClick} />
                            <input type="button" name="operator" value="-" onClick = {this.handleChange} />
                            <input type="button" name={name} value="1" onClick = {this.numberClick} />
                            <input type="button" name={name} value="2" onClick = {this.numberClick} />
                            <input type="button" name={name} value="3" onClick = {this.numberClick} />
                            <input type="button" name="operator" value="+" onClick = {this.handleChange} />
                            <input type="button" name={name} value="00" onClick = {this.numberClick} />
                            <input type="button" name={name} value="0" onClick = {this.numberClick} />
                            <input type="button" name={name} value="." onClick = {this.numberClick} />
                            <input type="button" value="=" onClick = {this.result} />                 
                        </div>
                </div>
                )
        }
}

class Temperature extends React.Component {
    constructor(){
        super()
        this.state = { 
            data:0
        }
    }

        render(){
            return(
                <div>
                        <h4>Temperature</h4>
                        <br></br>
                        <p>
                            Celsius :  
                                <input 
                                    name = "celsius" 
                                    pattern = "^[0-9]"
                                    value = {this.state.celsius} 
                                    type = "text"
                                    onChange = {this.onChange}
                                >
                            </input>
                        </p>
                        <br></br>
                        <p>
                           Fahrenheit :  
                                <input 
                                    name ="fahrenheit" 
                                    value = {this.state.fahrenheit} 
                                    type = "text"
                                    onChange = {this.onChange1}
                                >                          
                            </input>
                        </p>
                </div>
                )
        }
}

 class Age extends React.Component {
     constructor(){
         super()
         this.state = {
             from: '',
             dob: '',
             to: '',
             to_n: '',
             years: '',
             months: '',
             days: '',
             week: '',
             hours: '',
             min: ''
         }
         this.handleDate = this.handleDate.bind(this)
         this.age = this.age.bind(this)
         this.tick = this.tick.bind(this)
     }
     componentDidMount(){
        setInterval(() => this.age(), 1000);
     }
     tick(){
        this.setState({date: new Date()});
    }
     handleDate(e){
         const {name, value} = e.target
         this.setState({
             [name] : value,
         })
         
         this.setState(e => ({
            from : e.dob,
            to : e.to_n
        }))
        for(let c=1;c<3;c++){
            this.setState(e => ({
                from: e.from.replace("-" , "") ,
                to: e.to.replace("-" , "") 
            }))
        }
        }
    age(){
        const {from, to} = this.state
        let years = parseInt(to/10000) - parseInt(from/10000)
        let to_day = 0,from_day = 0
        let to_month = parseInt(to/100)%100 , from_month = parseInt(from/100)%100
        switch(to_month){
            case 1:
                to_day = 0
                break
            case 2:
                to_day = 31
                break
            case 3:
                to_day = 59
                break
            case 4:
                to_day = 90
                break
            case 5:
                to_day = 120
                break
            case 6:
                to_day = 151
                break
            case 7:
                to_day = 181
                break
            case 8:
                to_day = 212 
                break
            case 9:
                to_day = 243
                break
            case 10:
                to_day = 273
                break
            case 11:
                to_day = 304
                break
            case 12:
                to_day = 335
                break
            default:
                to_day = 0       
        }
        if(parseInt(to/10000)%4 === 0 && to_month >= 2)
        to_day += 1

        switch(from_month){
            case 1:
                from_day = 0
                break
            case 2:
                from_day = 31
                break
            case 3:
                from_day = 59
                break
            case 4:
                from_day = 90
                break
            case 5:
                from_day = 120
                break
            case 6:
                from_day = 151
                break
            case 7:
                from_day = 181
                break
            case 8:
                from_day = 212
                break 
            case 9:
                from_day = 243
                break
            case 10:
                from_day = 273
                break
            case 11:
                from_day = 304
                break
            case 12:
                from_day = 334
                break    
            default:
                to_day = 0   
        }
        if(parseInt(from/10000)%4 === 0 && from_month >= 2)
        from_day += 1

        let days = parseInt(to)%100 - parseInt(from)%100 + years*365 + parseInt(years/4) + to_day - from_day
        let week = parseInt(days/7)
        let hours = days*24
        let min = hours*60
        years = parseInt(days/365)
        days = days%365
        days -= parseInt(years/4) 
        let months = parseInt(days/30)
        days = days%30

        this.setState({
            years: years,
            months: months,
            days: days,
            week: week,
            hours: hours,
            min: min
        })
    }
    render() {
        const {years, dob, to_n, months, days, week, hours, min} = this.state
        return (
            <div>
               Date-of-Birth: <input name="dob" type="date" value={dob} onChange={this.handleDate} />
               To: <input name="to_n" type="date" value={to_n} onChange={this.handleDate} /><br />
               <div> Age: {(isNaN(years) || years === '')?(null):(<span>{years}Years</span>) } 
               {(isNaN(months) || months === '')?(null):(<span>{months}Months</span>)} 
               {(isNaN(days) || days === '')?(null):(<span>{days}Days</span>)} 
               </div>
               {(isNaN(week) || week === '')?(null):(<span>{week}Weeks</span>)}  
               {(isNaN(hours) || hours === '')?(null):(<span>{hours}Hours</span>)}
               {(isNaN(min) || min === '')?(null):(<span>{min}Minutes</span>)}
            </div>
        )
    }
}


export default Calculation