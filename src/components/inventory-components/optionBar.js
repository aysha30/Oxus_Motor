import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Select, Toolbar, Button, Grid, Typography, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
import ListIcon from '@material-ui/icons/List';
import AppsIcon from '@material-ui/icons/Apps';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { propTypes } from 'react-bootstrap/esm/Image';


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
        height: 70,
        [theme.breakpoints.down('xs')]:{
        // padding: "0px 20px",
        padding: "10px 0px",
        width: "100vw", 
        },
        [theme.breakpoints.up('sm')]:{
            width: 600,
        },
    },
    toolbar:{
        width: "100vw"
    }
}))

export default function OptionBar() {

    const [ car, setCar ] = useState("luxury");
    const [ sort, setSort ] = useState("Recently Added");
    const [ view, setView ] = useState("list");

    const handleCar = (event, newCar) => {
        if ( newCar != null ){
            setCar(newCar);
        }
    };

    const handleSort = (event, newSort) => {
        setSort(newSort);
    };

    const handleView = (event, newView) => {
        if ( newView != null ){
            setView(newView);
        }
    };


    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Toolbar >
            <Grid container 
            className={classes.toolbar}
                direction="row"
                alignItems="center"
                justify="space-around" >
                <Grid item container justify="center">
                    <ToggleButtonGroup
                        className={classes.carItem}
                        value={car}
                        exclusive
                        variant="text"
                        fullwidth="true"
                        onChange={handleCar}
                    >
                        <ToggleButton  value="luxury" style={{ borderRadius: 50, margin: 5, border: 2 }}  >
                            Luxury
                        </ToggleButton>
                        <ToggleButton value="suv" style={{ borderRadius: 50, margin: 5, border: 2 }} >
                            SUV
                        </ToggleButton>
                        <ToggleButton value="sedan" style={{ borderRadius: 50, margin: 5, border: 2 }} >
                            Sedan
                        </ToggleButton>
                        <ToggleButton value="sport" style={{ borderRadius: 50, margin: 5, border: 2 }} >
                            Sport
                        </ToggleButton>
                        <ToggleButton value="coupe" style={{ borderRadius: 50, margin: 5, border: 2 }} >
                            Coupe
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item className={classes.toggleContainer}  >
                    <Box style={{ width: 240}}>
                    <Typography>Sort by:</Typography>
                    {/* <InputLabel id="sort-by">Sort by: </InputLabel> */}
                    <Select
                        labelId="sort-by"
                        native
                        value={sort}
                        label="Sort by: "
                        onChange={handleSort}
                        
                        >
                        <option value={"Recently Added"} >  Recently Added</option>
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
                        variant="text"
                        onChange={handleView}
                        br={2}
                    >
                        <ToggleButton value="list" style={{ borderRadius: 50, margin: 10, border: 2 }} >
                        <ListIcon />
                        </ToggleButton>
                        <ToggleButton value="grid" style={{ borderRadius: 50, margin: 10, border: 2 }} >
                        <AppsIcon/>
                        </ToggleButton>
                        
                    </ToggleButtonGroup>
                    </div>
                </Grid>
                
            </Grid>
            </Toolbar>
        </div>
    )
}

// OptionBar.propTypes = {
//     car: PropTypes.object,

// }