import * as React from "react";
import { Col, Glyphicon, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import BookListItem from 'src/BookListItem/BookListItem';
import * as _bookService from 'src/Services/BookService';
import './Home.css';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            error_msg: ""
        }
    }

    public render() {
        console.log("L49 Home this.props.books = ", this.props.books);
        
        const {books} = this.props

        if(books){
            return(
                <ListGroup>
                    {
                        books.map(
                            (book: any, index: number) => {
                                return (
                                    <ListGroupItem key={book.id}>
                                        <BookListItem book={book} />
                                    </ListGroupItem>
                                );
                            }
                        )
                    }
                </ListGroup>
            )
        }else {
            return(
                <ListGroup>
                    <ListGroupItem key={1}>
                        <Row>
                            <Col sm={12}>
                                <Glyphicon glyph="glyphicon glyphicon-cog handmade-spinner"/>
                            </Col>
                            <Col sm={12}>
                                LOADING...
                            </Col>
                        </Row>    
                    </ListGroupItem>
                </ListGroup>
            ); // return()
        }
    } // render()
}// class

export default Home;
