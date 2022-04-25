import React from 'react';
import './App.css';
import { Component } from 'react';



class App extends Component{
    state = {
      showState: true,
      person:{
      fullName: 'Barry Allen',
      bio:'The Flash',
      imgSrc: './theFlash.jpg',
      profession: 'forensic scientist'
    }
  };

  render(){
    return (

      <div className='App'>
        <h2>Profile</h2>
        <img src= {this.state.imgSrc} alt='users-profile'  />
        <p>Fullname: {this.state.person.fullName}</p>
        <p>Bio: {this.state.person.bio}</p>
        <p>Professon : {this.state.person.profession}</p>

        <button onClick={this.clickFunc}>Show Profile</button>
      </div>
    )
  }
}


export default App;
