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
    return (
        <div id="router">
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/Details" component={Details} />
                <Route path="/AddBook" component={AddBook} />
                <Route path="/EditBook" component={EditBook} />
                <Route path="/DeleteBook" component={DeleteBook} />
                <Redirect from='*' to='/' />
            </Switch>
            <Footer />
        </div>
    );
}