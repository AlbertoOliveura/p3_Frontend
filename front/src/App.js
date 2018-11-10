import React, { Component } from 'react';
import axios from 'axios';
import  './App.css';

import Headapp from './componentes/headapp';

import './App.css';
class App extends Component {
  constructor(props){
    // noinspection JSAnnotator
      super(props);

      axios
          .get('/')
          .then(resultado =>{console.log(resultado)})
      axios
          .get('/tasks')
          .then(resultado =>{console.log(resultado)})
  }


  render() {
    return (
      <div className="App">
            <Headapp/>
      </div>
    );
  }
}

export default App;
