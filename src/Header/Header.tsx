import * as React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Header.css';

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
                            <Glyphicon glyph="glyphicon glyphicon-home header-controls" 
                            style={{fontSize: "1.8em"}}/>
                        </NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/AddBook">
                        <NavItem eventKey={20}> 
                            <Glyphicon glyph="glyphicon glyphicon-plus header-controls" 
                            style={{fontSize: "1.8em"}}/>
                        </NavItem>
                    </IndexLinkContainer>
                </Nav>
                <Nav pullRight={true}>
                    <NavItem className="header-controls headerIcon headerIcon-github" eventKey={50} href="https://github.com/optmzer" target="_blank">
                        <SocialIcon style={{height: 32, width: 32}} round={true} url="https://github.com/optmzer" />
                    </NavItem>
                    <NavItem className="header-controls headerIcon headerIcon-twitter" eventKey={60} href="https://www.linkedin.com/in/alexander-frolov-324051148/" target="_blank">
                        <SocialIcon style={{height: 32, width: 32}} round={true} url="https://www.linkedin.com/in/alexander-frolov-324051148/" />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        ); // return()
    } // render()
}// class

export default Header;