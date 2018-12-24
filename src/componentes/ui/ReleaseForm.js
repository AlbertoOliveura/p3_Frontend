import React, { Component } from 'react';
import axios from 'axios';
import Modal2 from "../modal2";

class TableRow extends Component {
    handleRemove (movie) {
        const url = `http://localhost:3030/task_deletar/${movie}`;
        axios
            .delete(url)
            .then(response => {
                window.location.reload();
                console.log(response);
        }) .catch(function (error) {
            console.log(error);
        })

    };

    render() {

        return (
            <tr>
                <td>
                    {this.props.obj.id_task}
                </td>
                <td>
                    {this.props.obj.descricao}
                </td>
                <td type="date">
                    {this.props.obj.data_inicio}
                </td>
                <td type="date">
                    {this.props.obj.data_fim}
                </td>
                <td>
                    <div id="app">
                </div>
                    <button type="button"  onClick={this.handleRemove.bind(this, this.props.obj.id_task)}className="btn btn-danger"><b>Delete TASK</b></button>
                </td>
                <td>
                    <div id="app">
                        <Modal2 text={this.props.obj.descricao}/>
                    </div>
                </td>

            </tr>
        );
    }
}

export default TableRow;