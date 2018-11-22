// import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
// import { NearMe } from "@material-ui/icons";
import * as React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import BookListItem from 'src/BookListItem/BookListItem';
import * as _bookService from 'src/Services/BookService';

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
                    <div>SHOW LOADER</div>
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
