import React from 'react';
import { Box, TextField, Grid, Typography, Button, useMediaQuery, Container, InputBase } from '@material-ui/core';
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer: {
        [theme.breakpoints.down('xs')]:{
            height: "100px",
        },
        [theme.breakpoints.up('sm')]:{
            padding: "20px",
            height: "90px",
        },
        
    },
    gridSearch: {
        border: 0,
        [theme.breakpoints.down('xs')]:{
            width: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            // marginLeft:"100px",
            width: "50%",
        },
    },
    gridItem: {
        [theme.breakpoints.down('xs')]:{
            width: "300",
        },
        [theme.breakpoints.up('sm')]:{
            // marginLeft:"100px",
            width: "70%",
        },
    },
    gridAdvance: {
        [theme.breakpoints.down('xs')]:{
            padding: "10px 80px",
            width: "100%",

        },
        [theme.breakpoints.up('sm')]:{
            padding: "0px 20px",
            width: "100px",
        },
    },
    textField: {
        padding: "0px 20px",
        height: "100%",
        width: "100%",
        border: 1,
        boxShadow: "1px 1px 10px #aaaaaa",
        borderRadius: 5,
    },
    searchButton: {
        height: "100%",
        width: "auto",
        borderRadius: 0,
        boxShadow: "1px 1px 10px #aaaaaa",
    },
    advanceButton: {
        height: "100%",
        width: "180px",
        borderRadius: 5,
        backgroundColor: "#b59b70",
        boxShadow: "1px 1px 20px #aaaaaa",
        color: "#ffffff"
    },
}))

function SearchBox(props) {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container 
                className={classes.gridContainer}
                direction="row"
                justify="center"
                alignItems="stretch"
                 >
                <Grid container
                    className={classes.gridSearch}
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    style={{ shadow: 5}}
                   >
                   
                    <Grid item
                        className={classes.gridItem}>
                        <input 
                            className={classes.textField}
                            placeholder="Find a Car..."    
                            
                            />
                    </Grid>
                    <Grid item>
                        <Button 
                            className={classes.searchButton}
                            variant="contained" 
                            color="primary"
                            >
                            search
                        </Button>
                    </Grid>
                </Grid>
                <Grid item
                    className={classes.gridAdvance}>
                    <Button 
                            className={classes.advanceButton}
                            variant="contained" 
                            // color="secondary.light"
                            >
                            Advance Search
                        </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default SearchBox;