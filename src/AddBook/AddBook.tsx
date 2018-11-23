import * as React from "react";
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup, Panel, Row } from 'react-bootstrap';
import * as _bookService from '../Services/BookService';
import './AddBook.css';

class AddBook extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            uploadFileList: null
        }
    }

    // Gets file from form input
    public handleFileUpload = (fileList: any) => {
        this.setState({
            uploadFileList: fileList.target.files
        })
    }// handleFileUpload()

    public handleFormSubmit = (event: any) => {
        event.preventDefault()
        // console.log("L36 Form Event", event.target);
        
        const titleInput = document.getElementById("formHorizontalTitle") as HTMLInputElement
        const authorInput = document.getElementById("formHorizontalAuthor") as HTMLInputElement
        const yearPublishedInput = document.getElementById("formHorizontalYear") as HTMLInputElement
        const isbnInput = document.getElementById("formHorizontalISBN") as HTMLInputElement
		const tagsInput = document.getElementById("formHorizontalTags") as HTMLInputElement
        const ratigsInput = document.getElementById("formHorizontalRatings") as HTMLInputElement
        const reviewInput = document.getElementById("formControlsReview") as HTMLInputElement
        const imageFile = this.state.uploadFileList[0]

        if(titleInput === null 
            || authorInput === null
            || yearPublishedInput === null
            || isbnInput === null
            || tagsInput === null
            || ratigsInput === null
            || reviewInput === null
            || imageFile === null ) {
                return
            };

        const title = titleInput.value  
        const author = authorInput.value 
        const year = yearPublishedInput.value 
        const isbn = isbnInput.value 
        const tags = tagsInput.value 
        const ratings = ratigsInput.value 
        const review = reviewInput.value 

        // Create form datat to send to API
        const formData = new FormData()
        formData.append("Title", title)
        formData.append("Author", author)
        formData.append("YearPublished", year)
        formData.append("ISBN", isbn)
        formData.append("BookReview", review)
        formData.append("BookRating", ratings)
        formData.append("tags", tags)
        formData.append("Image", imageFile)
        
        _bookService.submitBook(formData)
        .then((response: any) => {
            console.log("L80 AddBook Responce = ", response);
			if(!response.ok){
				// Rise an error
				alert(response.statusText)
			}else{
                // Redirect to Home Page.
                location.replace("/")
			}
		})
        // then redirect to /Details/:bookId
    }

    public render() {
        return(
            <Panel>
                <Panel.Heading>
                    <Row>
                        <Col xs={10} sm={9} md={9} lg={10}>
                            <Panel.Title className="bookDetailsItem-Title" componentClass="h2">ADD BOOK</Panel.Title>
                        </Col>
                    </Row>
                </Panel.Heading>
                <Form horizontal={true} onSubmit={this.handleFormSubmit}>
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
                    
                    <FormGroup controlId="formHorizontalRatings" >
                        <Col componentClass={ControlLabel} sm={2}>
                            Rating
                        </Col>
                        <Col sm={9}>
                            <FormControl type="text" placeholder="Book Ratings" required={true}/>
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
                                <InputGroup.Addon>
                                    <FormControl 
                                        type="file" 
                                        required={true}
                                        onChange={this.handleFileUpload}
                                    />
                                </InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={9} className="addBook-submit">
                            <Button type="submit" >Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Panel>
        ); // return()
    } // render()
}// class

export default AddBook;