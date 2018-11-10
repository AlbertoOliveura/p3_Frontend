import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
// const Jumbotron = ReactBootstrap.Jumbotron;
// const Button = ReactBootstrap.Button;
const Table = ReactBootstrap.Table;


const  Headapp = props => {
    return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </Table>
    )


};

export  default  Headapp