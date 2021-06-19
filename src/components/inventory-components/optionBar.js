import React, { useState } from 'react';
import { Box, Select, Toolbar, FormControl, 
    Grid, MenuItem, InputLabel } from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
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
        // width: "100%",
        // alignItems: "center",
    },
    carItem: {
        height: 70,
        [theme.breakpoints.down(1200)]:{
        // padding: "0px 20px",
        // padding: "10px 0px",
        width: "100%", 
        },
        [theme.breakpoints.up(1201)]:{
            width: 600,
        },
    },
    toolbar:{
        width: "100%",
        display: "flex",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))

function OptionBar(props) {

    const [ car, setCar ] = useState("luxury");
    const [ sort, setSort ] = useState("");
    // const [ view, setView ] = useState("list");
    // let view = "grid";

    const handleCar = (event, newCar) => {
        if ( newCar != null ){
            setCar(newCar);
        }
    };

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const handleView = (event, newView) => {
        if ( newView != null ){
            // view = newView;
            props.passView(newView);
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
                justify="center" >
                <Grid item container alignItems="flex-end"
                justify="flex-start" className={classes.carItem}>
                    <ToggleButtonGroup
                        // className={classes.carItem}
                        value={car}
                        exclusive
                        variant="text"
                        // fullwidth="true"
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
                    <Box 
                    // style={{ width: 240}}
                    >
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        onChange={handleSort}
                        >
                        
                        <MenuItem value={"Recently Added"} >  Recently Added</MenuItem>
                        <MenuItem value={"Price: Low to High"}>  Price: Low to High</MenuItem>
                        <MenuItem value={"Price: High to Low"}>  Price: High to Low</MenuItem>
                        <MenuItem value={"Newest Arrival"}>  Newest Arrival</MenuItem>
                        
                        </Select>
                    </FormControl>
                    
                    </Box>
                </Grid>
                <Grid item >
                    <div >
                    <ToggleButtonGroup
                        value={props.view}
                        exclusive
                        variant="text"
                        onChange={handleView}
                        br={2}
                    >
                        <ToggleButton 
                        value="list"
                            // onClick={value="list"}
                            style={{ borderRadius: 50, margin: 10, border: 2 }} >
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

export default OptionBar;
// OptionBar.propTypes = {
//     car: PropTypes.object,

// }