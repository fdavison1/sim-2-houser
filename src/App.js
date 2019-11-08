import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Dash from './components/Dash'
import House from './components/House'
import Wiz from './components/Wiz'



export default class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }
    
    
  }
   render(){

     return (
       <div className="App">

    App.js
    <Header />
    <Dash />
    <House />
    <Wiz />


    </div>
  );
}
} 

// export default App;
