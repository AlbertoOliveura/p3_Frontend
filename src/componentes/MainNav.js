import React, { Component } from 'react';
import { Navbar, Nav, NavItem, LinkContainer, MenuItem,NavDropdown } from 'react-bootstrap';
import App2 from "./modal2";
import ClassComponent from "./Contador";





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
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNav;


