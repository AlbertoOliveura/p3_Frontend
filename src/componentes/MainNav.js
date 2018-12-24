import React, { Component } from 'react';
import { Navbar, Nav ,NavItem} from 'react-bootstrap';
import Contador from "./Contador";
import Modal from "./Modal";





class MainNav extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/Task">Task</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                        <Navbar.Collapse>
                            <Navbar.Brand>
                            </Navbar.Brand>
                            <Nav pullRight>
                                <Contador text={this.props.text}/>
                                <Modal/>
                            </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNav;


