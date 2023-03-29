
import React, { Component } from 'react';
import './App.css';
import imgSrc from './image/PHOTO2.jpeg';

class App extends Component {
  state = {
    Person: {
      fullName: 'Haggui Rakia',
      bio: 'Networking',
      profession: 'Administrator Networking',
      imgSrc: imgSrc,
    },
  };

  render() {
    return (
      <div className="App">
        <h1> PERSONAL INFORMATION</h1>
        <h2>{this.state.Person.fullName}</h2> <br />
        <h3>{this.state.Person.bio}</h3> <br />
        <h4>{this.state.Person.profession}</h4> <br />
        <img src={this.state.Person.imgSrc} alt="profile" />
      </div>
    );
  }
}

export default App;





