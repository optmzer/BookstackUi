// import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
// import { NearMe } from "@material-ui/icons";
import * as React from "react";
import { Col, Glyphicon, Grid, Panel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookListItem.css';

class BookListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { book } = this.props

        return(
            <Grid>
                <Row>
                    <Link
                        to={`/Details/${book.id}`}
                        title="Open Book Post"
                    >
                        <Col xs={10} sm={3} md={2} lg={2}>
                            {
                                book.coverUrl === "undefined"
                                ?
                                <Glyphicon glyph="glyphicon glyphicon-picture" style={{fontSize: "3em"}}/>
                                :
                                <img src={book.coverUrl} className="thumbnail col-xs-12 col-sm-10 col-md-10 col-lg-8" />
                            }
                        </Col>
                        <Col xs={10} sm={8} md={9} lg={9}>
                            <Panel className="bookListItem-Panel">
                                <Panel.Heading>
                                    <Row>
                                        <Col xs={10} sm={9} md={9} lg={10}>
                                            <Panel.Title className="bookListItem-Title" componentClass="h3">{book.title}</Panel.Title>
                                            <Panel.Title className="bookListItem-Title" componentClass="h4">{book.author}</Panel.Title>
                                        </Col>
                                    </Row>
                                </Panel.Heading>
                                <Panel.Body className="bookListItem-review">{book.bookReview}</Panel.Body>
                            </Panel>
                        </Col>
                    </Link>
                    <Col xs={10} sm={1} md={1} lg={1} className="bookListItem-editTools">
                        <Link
                            to={`/EditBook/${book.id}`}
                            title="Edit Book Post"
                        >
                            <Col xs={6} sm={12} md={12} lg={12}>
                                <Glyphicon glyph="glyphicon glyphicon-edit" style={{fontSize: "1.5em"}}/>
                            </Col>
                        </Link>
                        <Link
                            to={`/DeleteBook/${book.id}`}
                            title="Delete Book Post"
                        >
                            <Col xs={6} sm={12} md={12} lg={12}>
                                <Glyphicon glyph="glyphicon glyphicon-trash" style={{fontSize: "1.5em"}}/>
                            </Col>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        ); // return()
    } // render()
}// class

export default BookListItem;