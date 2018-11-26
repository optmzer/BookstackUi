import * as React from "react";
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Panel, Row } from 'react-bootstrap';
import * as _bookService from '../Services/BookService';
import './EditBook.css';

class EditBook extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            book: {},
            // uploadFileList: null
        }
        this.getBookById(this.props.bookId)
    }
    
    public  getBookById = (bookId: number) => {
        _bookService.getBookById(bookId)
        .then(
            (res) => {
                // Put data into state log
                const book = res
                this.setState({
                    book
                });
                this.setFormValues(book)
            })
            .catch(
            (err) => {
                this.setState({
                error_msg: err.message,
                });
            },
        );
    }

    public setFormValues = (book: any) => {

        const titleInput = document.getElementById("formHorizontalTitle") as HTMLInputElement
        const authorInput = document.getElementById("formHorizontalAuthor") as HTMLInputElement
        const yearPublishedInput = document.getElementById("formHorizontalYear") as HTMLInputElement
        const isbnInput = document.getElementById("formHorizontalISBN") as HTMLInputElement
        const ratigsInput = document.getElementById("formHorizontalRatings") as HTMLInputElement
        const reviewInput = document.getElementById("formControlsReview") as HTMLInputElement
        const imageFile = document.getElementById("formControlsFile") as HTMLInputElement
        
        if(titleInput === null 
            || authorInput === null
            || yearPublishedInput === null
            || isbnInput === null
            || ratigsInput === null
            || reviewInput === null
            || imageFile === null 
            ) {
                return
            };

        if(book){
            titleInput.value = book.title
            authorInput.value = book.author
            yearPublishedInput.value = book.yearPublished
            isbnInput.value = book.isbn
            ratigsInput.value = book.bookRating
            reviewInput.value = book.bookReview
            imageFile.value = book.coverUrl
        }
    }

    // // Gets file from form input
    // public handleFileUpload = (fileList: any) => {
    //     this.setState({
    //         uploadFileList: fileList.target.files
    //     })
    // }// handleFileUpload()

    public handleFormSubmit = (event: any) => {
        const { book } = this.state

        event.preventDefault()
        const titleInput = document.getElementById("formHorizontalTitle") as HTMLInputElement
        const authorInput = document.getElementById("formHorizontalAuthor") as HTMLInputElement
        const yearPublishedInput = document.getElementById("formHorizontalYear") as HTMLInputElement
        const isbnInput = document.getElementById("formHorizontalISBN") as HTMLInputElement
        const ratigsInput = document.getElementById("formHorizontalRatings") as HTMLInputElement
        const reviewInput = document.getElementById("formControlsReview") as HTMLInputElement
        const imageFile = document.getElementById("formControlsFile") as HTMLInputElement

        if(titleInput === null 
            || authorInput === null
            || yearPublishedInput === null
            || isbnInput === null
            || ratigsInput === null
            || reviewInput === null
            || imageFile === null 
            ) {
                return
            };

        const title = titleInput.value  
        const author = authorInput.value 
        const year = yearPublishedInput.value 
        const isbn = isbnInput.value 
        const ratings = ratigsInput.value 
        const review = reviewInput.value 
        const coverUrl = imageFile.value

        // Create form data to send to API
        const editedBook = {
            "Author": author,
            "BookRating": ratings,
            "BookReview": review,
            "ISBN": isbn,
            "YearPublished": year,
            "bookTags": book.bookTags,
            "coverUrl": coverUrl,
            "created": book.created,
            "id": book.id,
            "listComments": book.listComments,
            "title": title,
        };
        

        _bookService.editBook(editedBook)
        .then((response: any) => {
            if(!response.ok){
                // Rise an error
                alert(response.statusText)
            }else{
                // then redirect to /Details/:bookId
                location.replace("/Details/" + this.state.book.id)
            }
        })
    }

    public render() {

        const { book } = this.state
        
        if(book){
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
                            <FormControl type="text"  required={true}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalAuthor" >
                            <Col componentClass={ControlLabel} sm={2}>
                                Author
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text"   required={true}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalYear" >
                            <Col componentClass={ControlLabel} sm={2}>
                                Year
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text"  required={true}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalISBN" >
                            <Col componentClass={ControlLabel} sm={2}>
                                ISBN
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text"  required={true}/>
                            </Col>
                        </FormGroup>
                        
                        <FormGroup controlId="formHorizontalRatings" >
                            <Col componentClass={ControlLabel} sm={2}>
                                Rating
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" required={true}/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formControlsReview">
                            <Col componentClass={ControlLabel} sm={2}>
                                Review
                            </Col>
                            <Col sm={9}>
                                <FormControl componentClass="textarea" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formControlsFile" >
                            <Col componentClass={ControlLabel} sm={2}>
                                Cover
                            </Col>
                            <Col sm={9}>
                                <FormControl type="text" required={true}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={9} className="addBook-submit">
                                <Button type="submit" >Edit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            ); // return()
        }else{
            return(
                <div>LOADING</div>
            );
        }
    } // render()
}// class

export default EditBook;