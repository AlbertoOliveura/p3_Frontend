import React, { Component } from 'react';
import  './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Releases from './componentes/Releases.js';
import Init from './componentes/init.js';
import FormTask from './componentes/FormTask.js';


class App extends Component {




    render() {


        return (


            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Init} exact />
                        <Route path="/Task" component={Releases} exact />
                        {/*<Route path="/formulario_inclusao_task" component={FormTask} exact />*/}

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;








