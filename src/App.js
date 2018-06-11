import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> {/*Here User child component is functional component*/}
        <User />
      </div>
    );
  }
}

const User = () => {
  return(
    <div>
      <h1>User List</h1>
      <Users name="Swetha" age="24"/> {/*Here Users child component is Class component*/}
      <Users name="Pavani" age="25"/>
      <Users name="Divya" age="23"/>
    </div>
  );
}

class Users extends Component {
  render(pros) {
    return (
      <div>
        Name: {this.props.name}, Age: {this.props.age} {/*Accessing the data from functional components to class components using props*/}
      </div>
    );
  }
}

export default App;
