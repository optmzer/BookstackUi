import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddBook from 'src/AddBook/AddBook';
import DeleteBook from 'src/DeleteBook/DeleteBook';
import EditBook from 'src/EditBook/EditBook';
import Details from '../Details/Details';
import Header from '../Header/Header';
import Home from '../Home/Home';
import * as _bookService from '../Services/BookService'

class Router extends React.Component<any, any>{
    
    constructor(props: any) {
        super(props);
        this.state = {
            books: [],
            error_msg: "",
            searchQuery: ""
        }
        // this.getAllBooks()
    }
    
    public componentDidMount() {
        this.handleSearch(this.state.searchQuery)
    }

    public handleSearch = (searchQuery: string) => {

        if(!searchQuery){
            this.getAllBooks()
        } else {
            _bookService.getBookByTitle(searchQuery)
            .then(
                (res) => {
                    this.setState({
                        books: res
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

    }

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

    public render(){
        console.log("L66 Router location", location);
        
        return (
            <div id="router">
                <Header handleSearch={this.handleSearch}/>
                <Switch>
                    <Route 
                        exact={true} path="/" 
                        component={this.RouteToHome} />
                    <Route 
                        exact={true} path="/Details/:bookId" 
                        component={this.RouteToDetails} />
                    <Route 
                        path="/AddBook" 
                        component={AddBook} />
                    <Route 
                        path="/EditBook/:bookId" 
                        component={this.RouteToEditBook} />
                    <Route 
                        path="/DeleteBook/:bookId" 
                        component={this.RouteToDeleteBook} />
                    <Redirect from='*' to='/' />
                </Switch>
            </div>
        );
    }

    public RouteToHome = (props: any) => {
        return <Home 
                    books={this.state.books}
                />
    }

    public RouteToDetails = (props: any) => {
        // console.log("L14 Router props.match = ", props.match);
        return <Details 
                    bookUrl={props.match.url}
                    bookId={props.match.params.bookId}/>
    };

    public RouteToEditBook = (props: any) => {
        return <EditBook bookId={props.match.params.bookId}/>
    };

    public RouteToDeleteBook = (props: any) => {
        return <DeleteBook bookId={props.match.params.bookId}/>
    };


}// class

export default Router;