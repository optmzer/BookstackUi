import * as React from "react";
import { Col, Panel, Row } from 'react-bootstrap';
import './CommentListItem.css'

class CommentListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {

        const { comment } = this.props

        if(comment){
            return(
                <Panel>
                        <Panel.Heading>
                            <Row>
                                <Col xs={10} sm={9} md={9} lg={10}>
                                    <Panel.Title className="commentListItem-Author" componentClass="h3">{comment.author}</Panel.Title>
                                </Col>
                            </Row>
                        </Panel.Heading>
                        <Panel.Body className="commentListItem-Content">
                            {comment.content}
                        </Panel.Body>
                </Panel>
            ); // return()
        }
        else {
            return (
                <div>LOADING COMMENTS</div>
            );
        }
    } // render()
}// class

export default CommentListItem;