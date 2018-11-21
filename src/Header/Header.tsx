// import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
// import { NearMe } from "@material-ui/icons";
import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

// import * as service from "../services/servicesAPI";
// import "./SmallWeather.css";

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
        <Navbar inverse={true} collapseOnSelect={false}  >
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Bookstack</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <IndexLinkContainer to="/AddBook">
                        <NavItem eventKey={1}>ADD</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/EditBook">
                        <NavItem eventKey={2}>EDIT</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/DeleteBook">
                        <NavItem eventKey={3}>DELETE</NavItem>
                    </IndexLinkContainer>
                    <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Action</MenuItem>
                    <MenuItem eventKey={4.2}>Another action</MenuItem>
                    <MenuItem eventKey={4.3}>Something else here</MenuItem>
                    <MenuItem divider={false} />
                    <MenuItem eventKey={4.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight={false}>
                    <NavItem eventKey={5} href="#">
                    Link Right
                    </NavItem>
                    <NavItem eventKey={6} href="#">
                    Link Right
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        ); // return()
    } // render()
}// class

export default Header;