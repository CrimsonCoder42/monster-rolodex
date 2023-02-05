import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
      super();

      this.state = {
          name: {
              firstName: 'Devin',
              lastName: "Anderson"

          },
          company: 'HRT'
      };
  }


  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello, my name is {this.state.name.firstName}, I work at {this.state.company}.
            </p>
              <button onClick={() => {
                  this.setState(
                      () => {
                      return {
                          name: {firstName: 'Andrei', lastName: "Johnson"}
                      }
                  }, () => {
                          console.log(this.state);
                      });
              }}>
                  Change Name
              </button>
          </header>
        </div>
    );
  }
}

export default App;
