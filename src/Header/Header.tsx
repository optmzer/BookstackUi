import * as React from 'react';
import { Button, FormControl, FormGroup, Glyphicon, InputGroup, Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import * as _bookService from '../Services/BookService';
import './Header.css';

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            books: {},
            searchQuery: ""
        }
        
    }

    public onTextChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    public handleSearchClick = () => {
        this.props.handleSearch(this.state.searchQuery)
    }

    public render() {

        const { searchQuery } = this.state
        
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
                <Navbar.Form pullLeft={true}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl 
                                name="searchQuery"
                                id="header-search-bar" 
                                type="text" 
                                placeholder="Search" 
                                value={searchQuery}
                                onChange={this.onTextChange}
                                />
                            <InputGroup.Addon className="search-btn">
                                <Button>
                                    <Glyphicon glyph="glyphicon glyphicon-headphones" 
                                        style={{fontSize: "0.8em"}}/>
                                </Button>
                            </InputGroup.Addon>
                            <InputGroup.Addon className="search-btn" onClick={this.handleSearchClick}>
                                <Button>
                                    <Glyphicon glyph="glyphicon glyphicon-search" 
                                        style={{fontSize: "0.8em"}}/>
                                </Button>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </Navbar.Form>
                <Nav pullRight={true} className="social-right">
                    <li role="presentation" className="header-controls headerIcon headerIcon-github">
                        <SocialIcon style={{height: 32, width: 32}} url="https://github.com/optmzer" />
                    </li>
                    <li role="presentation" className="header-controls headerIcon headerIcon-twitter">
                        <SocialIcon style={{height: 32, width: 32}} url="https://www.linkedin.com/in/alexander-frolov-324051148/" />
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        ); // return()
    } // render()
}// class

export default Header;