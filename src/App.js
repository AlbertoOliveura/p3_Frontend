import React, { Component } from 'react';
import  './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainNav from './componentes/MainNav';
import Releases from './componentes/Releases.js';
import Init from './componentes/init.js';

import './App.css';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Init} exact />
                        <Route path="/Task" component={Releases} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;