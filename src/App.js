import React, { Component } from 'react';
import  './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from "axios";

import LoginPage from './componentes/ui/User.js';
import Releases from './componentes/Releases.js';
import Init from './componentes/init.js';

import './App.css';

axios.get('http://localhost:3030/tasks')
    .then(function (response) {
        console.log('aqui');

        console.log(response);
    });


axios.post('http://localhost:3030/tasks/formulario_inclusao_task', {
    data_fim: "2018-12-19T02:00:00.000Z",
    data_inicio: "2018-12-11T02:00:00.000Z",
    descricao: "Ede Teste",
    id_task: 877
});

class App extends Component {




    render() {


        return (


            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Init} exact />
                        <Route path="/Task" component={Releases} exact />
                        <Route path="/signup" component={LoginPage} exact />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;








