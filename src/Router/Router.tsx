import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AddBook from 'src/AddBook/AddBook';
import DeleteBook from 'src/DeleteBook/DeleteBook';
import EditBook from 'src/EditBook/EditBook';
import Details from '../Details/Details';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

export const Router: React.StatelessComponent<{}> = () => {
    
    function RouteToDetails(props: any){
        return <Details bookId={props.match.params.bookId}/>
    };

    function RouteToEditBook(props: any){
        return <EditBook bookId={props.match.params.bookId}/>
    };

    function RouteToDeleteBook(props: any){
        return <DeleteBook bookId={props.match.params.bookId}/>
    };

    return (
        <div id="router">
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route 
                    exact={true} path="/Details/:bookId" 
                    component={RouteToDetails} />
                <Route 
                    path="/AddBook" 
                    component={AddBook} />
                <Route 
                    path="/EditBook/:bookId" 
                    component={RouteToEditBook} />
                <Route 
                    path="/DeleteBook/:bookId" 
                    component={RouteToDeleteBook} />
                <Redirect from='*' to='/' />
            </Switch>
            <Footer />
        </div>
    );
}