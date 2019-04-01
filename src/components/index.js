import React, { Component } from 'react';
import logo from './../logo.svg';
import './index.css';
import Read from './beer/read/index';

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Electron with React
          </a>
        </header>
        <Read />
      </div>
    );
  }
}

export default Index;

//https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c
//https://github.com/csepulv/electron-with-create-react-app
//https://github.com/electron-react-boilerplate/electron-react-boilerplate
//https://medium.com/@brockhoff/using-electron-with-react-the-basics-e93f9761f86f
////https://medium.com/@joshuakylesmall/electron-with-react-redux-ce26fee86f9e

//Electron Server Side
//https://fabiofranchino.com/blog/use-electron-as-local-webserver/
//https://medium.com/wavelength-company/spawn-mongodb-with-electron-js-9bdba6257ec9