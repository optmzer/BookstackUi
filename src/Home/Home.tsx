import * as React from "react";
import { Col, Glyphicon, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import BookListItem from 'src/BookListItem/BookListItem';
import * as _bookService from 'src/Services/BookService';
import './Home.css';

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            books: [],
            error_msg: ""
        }
        this.getAllBooks();
    }

    public render() {
        console.log("L35 this.state.books = ", this.state.books);
        
        const {books} = this.state

        return(
            <div>
                {
                    books.size === 0
                    ?
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
                    :
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
                }
            </div>
        ); // return()
    } // render()

    public getAllBooks = () => {
        _bookService.getAllBooks()
        .then(
            (res) => {
            this.setState({
                books: res
            });
          })
          .catch(
            (err) => {
              this.setState({
                error_msg: err.message,
              });
            },
          );
    }
}// class

export default Home;
