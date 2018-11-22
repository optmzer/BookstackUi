import * as React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
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
                    <IndexLinkContainer to="/">
                        <NavItem eventKey={10}> 
                            <Glyphicon glyph="glyphicon glyphicon-home" style={{fontSize: "1.5em"}}/>
                        </NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/AddBook">
                        <NavItem eventKey={20}> 
                            <Glyphicon glyph="glyphicon glyphicon-plus" style={{fontSize: "1.5em"}}/>
                        </NavItem>
                    </IndexLinkContainer>
                </Nav>
                <Nav pullRight={true}>
                    <NavItem className="headerIcon-github" eventKey={50} href="https://github.com/optmzer">
                        GitHub
                    </NavItem>
                    <NavItem className="headerIcon-twitter" eventKey={60} href="https://www.linkedin.com/in/alexander-frolov-324051148/">
                        LinkedIn
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        ); // return()
    } // render()
}// class

export default Header;