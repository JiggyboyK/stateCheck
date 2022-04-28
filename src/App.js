import React from 'react';
import './App.css';
import { Component } from 'react';
import pic from "./theFlash.jpg";



class App extends Component{
    state = {
      showState: false,
      person:{
      fullName: 'Barry Allen',
      bio:'The Flash',
      imgSrc: './theFlash.jpg',
      profession: 'forensic scientist'
    }
  };
      clickFunc =()=> {
        this.setState((prevstate) => ({...prevstate, showState : !prevstate.showState}))  
      }

  
  render(){
    return (

      <div className='App'>
        <h2>Profile</h2>
        {this.state.showState && (
        <div>
          <img src= {pic} className= "barry"  alt='users-profile' />
          <p>Fullname: {this.state.person.fullName}</p>
          <p>Biography: {this.state.person.bio}</p>
          <p>Profession : {this.state.person.profession}</p>
        </div>
)} 
        

        <button onClick={this.clickFunc}>Show Profile</button>
      </div>
    )
  }
}


export default App;
