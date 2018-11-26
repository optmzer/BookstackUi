import * as React from "react";
import { Badge, Col, ListGroup, ListGroupItem, Nav, NavItem, Panel, Row } from 'react-bootstrap';
import { FacebookIcon, FacebookShareButton, GooglePlusIcon, GooglePlusShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton } from 'react-share';
import CommentListItem from 'src/CommentListItem/CommentListItem';
import * as _bookService from 'src/Services/BookService';
import './Details.css';

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
        const {bookUrl} = this.props
        const {book} = this.state
        
        const shareUrl = _bookService.BOOKS_UI_URI + bookUrl

        if(book){
            return(
                <Panel>
                    <Panel.Heading>
                        <Row>
                            <Col xs={10} sm={9} md={9} lg={10}>
                                <Panel.Title className="bookDetailsItem-Title" componentClass="h2">{book.title}</Panel.Title>
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
                        <Row>
                            <Col sm={12}>
                                <Panel.Title className="bookDetailsItem-Title" componentClass="h6"><b><i>Share this book</i></b></Panel.Title>
                            </Col>
                        </Row>
                        <Row className="social-media-share-buttons button">
                            <Nav bsStyle="pills">
                                <NavItem key={1}>
                                    <FacebookShareButton url={shareUrl}>
                                        <FacebookIcon size={32} round={false}/>
                                    </FacebookShareButton>
                                </NavItem>
                                <NavItem key={2}>
                                    <GooglePlusShareButton url={shareUrl}>
                                        <GooglePlusIcon size={32} round={false}/>
                                    </GooglePlusShareButton>
                                </NavItem>
                                <NavItem key={3}>
                                    <LinkedinShareButton url={shareUrl}>
                                        <LinkedinIcon size={32} round={false}/>
                                    </LinkedinShareButton>
                                </NavItem>
                                <NavItem key={4}>
                                    <TwitterShareButton url={shareUrl}>
                                        <TwitterIcon size={32} round={false}/>
                                    </TwitterShareButton>
                                </NavItem>
                            </Nav>
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