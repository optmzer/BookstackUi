import * as React from "react";
import { Badge, Col, ListGroup, ListGroupItem, Panel, Row } from 'react-bootstrap';
import CommentListItem from 'src/CommentListItem/CommentListItem';
import * as _bookService from 'src/Services/BookService';
import './Details.css'

class Details extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            book: {}
        };
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

    public render() {

        const {book} = this.state
        console.log("L35 Details this.props = ", this.state);
        
        if(book){
            return(
                <Panel>
                    <Panel.Heading>
                        <Row>
                            <Col xs={10} sm={9} md={9} lg={10}>
                                <Panel.Title className="bookDetailsItem-Title" componentClass="h3">{book.title}</Panel.Title>
                            </Col>
                        </Row>
                    </Panel.Heading>
                    <Panel.Body>
                        <img src={book.coverUrl} className="thumbnail col-xs-12 col-sm-10 col-md-10 col-lg-8" />
                    </Panel.Body>
                    <Panel.Heading>
                        <Row>
                            <Col xs={10} sm={9} md={9} lg={10}>
                                <Panel.Title className="bookDetailsItem-Title" componentClass="h4">{book.author}</Panel.Title>
                            </Col>
                            <Col xs={2} sm={1} md={1} lg={1}>
                                Rating: <Badge>{book.bookRating}</Badge>
                            </Col>
                        </Row>
                    </Panel.Heading>
                    <Panel.Body>{book.bookReview}</Panel.Body>
                    
                    <Panel.Footer>
                    <Panel.Title className="bookDetailsItem-CommentsHeader" componentClass="h3">Comments</Panel.Title>
                        <ListGroup>
                            {
                                book.listComments
                                &&
                                book.listComments.map(
                                    (comment: any, index: number) => {
                                        return (
                                            <ListGroupItem key={comment.id}>
                                                <CommentListItem comment={comment} />
                                            </ListGroupItem>
                                        );
                                    }
                                )

                            }
                        </ListGroup>
                    </Panel.Footer>
                </Panel>
            ); // return()
        }else{
            return(
                <div>LOADING</div>
            );
        }
    } // render()
}// class

export default Details;