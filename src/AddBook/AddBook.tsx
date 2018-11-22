import * as React from "react";
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import './AddBook.css';

class AddBook extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <Form horizontal={true}>
                    <FormGroup controlId="formHorizontalTitle" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={9}>
                        <FormControl type="text" placeholder="Book Title" required={true}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalAuthor" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Author
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="Author"  required={true}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalYear" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Year
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="Year Published" required={true}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalISBN" >
                        <Col componentClass={ControlLabel} sm={2}>
                            ISBN
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="ISBN" required={true}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalTags" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Tags
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="Tags Comma Separated" required={true}/>
                        </Col>
                    </FormGroup>
                    
                    <FormGroup controlId="formControlsReview">
                        <Col componentClass={ControlLabel} sm={2}>
                            Review
                        </Col>
                        <Col sm={9}>
                            <FormControl componentClass="textarea" placeholder="textarea" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsFile" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Cover
                        </Col>
                        <Col sm={9}>
                            <InputGroup>
                                <InputGroup.Addon><FormControl type="file" required={true} /></InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={9} className="addBook-submit">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        ); // return()
    } // render()
}// class

export default AddBook;