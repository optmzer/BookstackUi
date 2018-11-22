// import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
// import { NearMe } from "@material-ui/icons";
import * as React from "react";
import { Glyphicon } from 'react-bootstrap';
// import * as service from "../services/servicesAPI";
// import "./SmallWeather.css";

class BookListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { bookId } = this.props
        return(
            <div>
                <p>bookId {bookId}</p>
                <Glyphicon glyph="glyphicon glyphicon-chevron-right" size={100}/>
                <p>Basic BookListItem tile</p>
            </div>
        ); // return()
    } // render()
}// class

export default BookListItem;