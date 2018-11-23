import * as React from "react";
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Glyphicon, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';
import * as _bookService from '../Services/BookService';
import './DeleteBook.css';

class DeleteBook extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            book: {}
        }
        this.getBookById(this.props.bookId)
    }

    public  getBookById = (bookId: number) => {
        _bookService.getBookById(bookId)
        .then(
            (res) => {
            // Put data into state log
            this.setState({
                book: res
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

    public handleFormSubmit = (event: any) => {
        const {id} = this.state.book
        event.preventDefault()

        _bookService.deleteBook(id)
        .then(
            (res) => {
            // Put data into state log
            console.log("L41 DeleteBook. Book, ", res);
            
            this.setState({
                book: res
            });
            location.replace("/")
          })
          .catch(
            (err) => {
              this.setState({
                error_msg: err.message,
              });
            },
          );
    }

    public render() {

        const {book} = this.state

        if(book){
            return(
                <Panel>
                    <Panel.Heading>
                        <Row>
                            <Col xs={10} sm={9} md={9} lg={10}>
                                <Panel.Title className="bookDetailsItem-Title" componentClass="h2">DELETE BOOK</Panel.Title>
                            </Col>
                        </Row>
                    </Panel.Heading>
                    <Panel.Body>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <img id="delete-book-img" src={book.coverUrl} className="thumbnail col-xs-12 col-sm-7 col-md-6 col-lg-6" />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <Form horizontal={true} onSubmit={this.handleFormSubmit}>
                                    <FormGroup controlId="formHorizontalTitle" >
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Title
                                        </Col>
                                        <Col sm={9} className="delete-form-static-text">
                                        <FormControl.Static>{book.title}</FormControl.Static>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalAuthor" >
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Author
                                        </Col>
                                        <Col sm={9} className="delete-form-static-text">
                                            <FormControl.Static>{book.author}</FormControl.Static>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalYear" >
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Year
                                        </Col>
                                        <Col sm={9} className="delete-form-static-text">
                                            <FormControl.Static>{book.yearPublished}</FormControl.Static>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalISBN" >
                                        <Col componentClass={ControlLabel} sm={2}>
                                            ISBN
                                        </Col>
                                        <Col sm={9} className="delete-form-static-text">
                                            <FormControl.Static>{book.isbn}</FormControl.Static>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup controlId="formHorizontalRatings" >
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Rating
                                        </Col>
                                        <Col sm={9} className="delete-form-static-text">
                                            <FormControl.Static>{book.bookRating}</FormControl.Static>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col smOffset={2} sm={9} className="addBook-submit">
                                            <Button type="submit" bsStyle="danger">Delete</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </Row>
                    </Panel.Body>
                </Panel>
            ); // return()
        }else{
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
            );
        }
    } // render()
}// class

export default DeleteBook;