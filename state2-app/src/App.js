import React from 'react';
import './App.css';
 


export default class App extends React.Component {
  state = {
    Person: {
      fullName: "Write Your Name PLEASE!",
      bio: "A short bio for your profile :)",
      imgSrc: "./UserPic.png",
      profession: "Your Profession!"
    },
    show: true,
     date: new Date()
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="App-header">
        {this.state.show && (
          <div>
            <img src={this.state.Person.imgSrc} width="180" height="170" alt="UserPic"/>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <h1>{this.state.Person.profession}</h1>
           
          </div>
        )}

        <button onClick={this.handleShowPerson}>Show State</button>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}