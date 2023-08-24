
import './App.css';
import React, { Component } from 'react';
import {render} from "@testing-library/react";



class App extends Component{
  constructor(){
    super();
    this.state = {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: "tom"
      }
  }
    render(){
    const propertyElements = [];

    for (let key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        propertyElements.push(
          <p key={key}>
            {this.state[key]}
          </p>
          );
      }
    }

      return <div className="App">{propertyElements}</div>;
  }
}

export default App;
