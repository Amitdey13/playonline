import React from 'react';
import Container from './container';
import './App.css';




class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isloading:true
    }
  }
  componentDidMount(){
    this.setState({
        isloading : false
    })
}

  render() {
    return(
     <div>
      <Container />
    </div>
  );
  
}
}

export default App;
