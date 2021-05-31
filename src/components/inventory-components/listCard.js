import React from 'react';
import { Box, Select, Toolbar, IconButton, Grid, Typography, CssBaseline, useMediaQuery, Container, InputLabel } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

export default function ListCard() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            card 1
        </div>
    )
}