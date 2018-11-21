// import { Button, ButtonBase, CircularProgress, Grid, Paper, Typography } from "@material-ui/core";
// import { NearMe } from "@material-ui/icons";
import * as React from "react";
import BookListItem from 'src/BookListItem/BookListItem';
// import * as service from "../services/servicesAPI";
// import "./SmallWeather.css";

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div>
                <p>Basic Home Page It will have a list of tiles</p>
                <BookListItem />
            </div>
        ); // return()
    } // render()
}// class

export default Home;
