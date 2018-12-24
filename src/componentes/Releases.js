import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './ui/ReleaseForm';
import MainNav from "./MainNav";
import Contador from "./Contador";
import {Nav} from "react-bootstrap";


export default class Index extends Component {


constructor(props) {
        super(props);
        this.state = {serverports: [] , contador: 0};

    }

    estilos = {
        fontSize: 40,
        fontWeight: "normal"


    };

    componentDidMount(){
        axios.get('http://localhost:3030/tasks')
            .then(response => {
                this.setState({  serverports: response.data.task ,contador:  response.data.task.length});
            })
            .catch(function (error) {
                console.log(error);
            })


    }
    tabRow2(){
        return this.state.contador
    }

       tabRow(){
        return this.state.serverports.map(function(object, i){
            return <TableRow obj={object} key={i} />;

        });

    }




    render() {

           return (

            <div>

                <MainNav />
                <React.Fragment>

        <span style={this.estilos} className="badge badge-pill badge-warning">
          {this.tabRow2()}
        </span>

                </React.Fragment>
                <div className="container">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Task</td>
                        <td>DATA INICIO</td>
                        <td>DATA FIM</td>
                        <td>Excluir</td>
                        <td>VER TASK</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

