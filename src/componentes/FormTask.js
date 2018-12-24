import React from 'react';
import axios from 'axios';
import { Form } from 'antd';

const FormItem = Form.Item;

export default class FormUser extends React.Component {

    state = {
        descricao: '',
        data_inicio: '',
        data_fim: '',

    };

    handleUserIDChange = event => {this.setState({ descricao: event.target.value })}
    handleFullNameChange = event => {this.setState({ data_inicio: event.target.value })}
    handleUserGroupChange = event => {this.setState({ data_fim: event.target.value })}

    handleSubmit = event => {
        event.preventDefault();


        const body = {
            descricao: this.state.descricao,
            data_inicio: this.state.data_inicio,
            data_fim: this.state.data_fim
        };



        const querystring = require('querystring');
        axios.post('http://localhost:3030/task/salvar', querystring.stringify(body));


    };

    refreshPage(){
        window.location.reload();
    }

    render() {
        return (

            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    <label>descricao:  <input type="text" id="descricao" name="descricao" onChange={this.handleUserIDChange} /></label>
                </FormItem>
                <FormItem>
                    <label>data_inicio:  <input type="date" id="calendario1" format="yyyy/MM/dd" name="data_inicio" onChange={this.handleFullNameChange} /></label><br />
                </FormItem>
                <FormItem>
                    <label>data_fim:  <input type="date"format="yyyy/MM/dd" id="calendario2" name="data_fim" onChange={this.handleUserGroupChange} /></label><br />
                </FormItem>
                <button value="Enviar" type="submit" onClick={ this.refreshPage } >Adicionar TASK</button>
            </Form>
        )
    }
}