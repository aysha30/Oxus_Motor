import React, { useState } from 'react';
import { Box, Select, Toolbar, IconButton, Grid, Typography, CssBaseline, useMediaQuery, Container, InputLabel } from '@material-ui/core';
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toggleContainer: {
        margin: theme.spacing(2, 0),
        width: "100",
        alignItems: "center",
      },
    carItem: {
        [theme.breakpoints.down('xs')]:{
        padding: "10px 0px",
        },
        [theme.breakpoints.up('sm')]:{
            padding: "0px 200px",
        },
    },
}))

export default function OptionBar() {

    const [ car, setCar ] = useState("luxury");
    const [ sort, setSort ] = useState("Recently Added");
    const [ view, setView ] = useState("list");

    const handleCar = (event, newCar) => {
        setCar(newCar);
        
    };

    const handleSort = (event, newSort) => {
        setSort(newSort);
    };

    const handleView = (event, newView) => {
        setView(newView);
    };


    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Toolbar >
            <Grid container
                direction="row"
                alignItems="center"
                justify="space-around" >
                <Grid item >
                    <div className={classes.carItem}>
                    <ToggleButtonGroup
                        value={car}
                        exclusive
                        onChange={handleCar}
                    >
                        <ToggleButton value="luxury" >
                        Luxury
                        </ToggleButton>
                        <ToggleButton value="suv" >
                        SUV
                        </ToggleButton>
                        <ToggleButton value="sedan" >
                        Sedan
                        </ToggleButton>
                        <ToggleButton value="sport" >
                        Sport
                        </ToggleButton>
                        <ToggleButton value="coupe" >
                        Coupe
                        </ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                </Grid>
                <Grid item className={classes.toggleContainer}  >
                    <Box style={{ width: 200}}>
                    <InputLabel id="sort-by">Sort by: </InputLabel>
                    <Select
                        labelId="sort-by"
                        native
                        value={sort}
                        label="Sort by: "
                        onChange={handleSort}
                        
                        >
                        <option value={"Recently Added"}>  Recently Added</option>
                        <option value={"Price: Low to High"}>  Price: Low to High</option>
                        <option value={"Price: High to Low"}>  Price: High to Low</option>
                        <option value={"Newest Arrival"}>  Newest Arrival</option>
                    </Select>
                    </Box>
                </Grid>
                <Grid item >
                    <div >
                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleView}
                    >
                        <ToggleButton value="list" >
                        <ListIcon />
                        <Typography >List</Typography>
                        </ToggleButton>
                        <ToggleButton value="grid" >
                        <AppsIcon/>
                        Grid
                        </ToggleButton>
                        
                    </ToggleButtonGroup>
                    </div>
                </Grid>
                
            </Grid>
            </Toolbar>
        </div>
    )
}