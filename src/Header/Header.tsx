import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

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
                </Nav>
                <Nav pullRight={true}>
                    <NavItem className="headerIcon-github" eventKey={5} href="https://github.com/optmzer">
                        GitHub
                    </NavItem>
                    <NavItem className="headerIcon-twitter" eventKey={6} href="https://www.linkedin.com/in/alexander-frolov-324051148/">
                        LinkedIn
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        ); // return()
    } // render()
}// class

export default Header;