import React, { useState } from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import ListCard from './inventory-components/listCard';
import GridCard from './inventory-components/gridCard';
import SearchBox from './inventory-components/searchBox';
import OptionBar from './inventory-components/optionBar';
import { Box, TextField, Grid, Typography, Button, useMediaQuery, Container } from '@material-ui/core';
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    gridCardContainer: {
        width: "100vw",
        height: "100%",
        display: "flex",

    }
}))
// const carArray = [
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes Benz",
//         fullPrice: "  $50,000",
//         monthly: "  $2,000",
//         year: 2020,
//         fuel: "Diesel",
//         gear: "Full Automatic",
//         km: 37400,
//         bodyType: "SUV",
//         enginePower: "125 hp"
//     }
// ];


function Inventory() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    
    const [ view, setView ] = useState("list");
    // const handleView = (event, newView) => {
    //     if ( newView != null ){
    //         setView(newView);
    //     }
    // };
// console.log(view);

    return (
        <React.Fragment>
            <Navbar />
            <Box className="flex-justify">
            <Container style={{ marginTop: "100px"}} >
                    <Typography variant="h5" 
                    align="center" 
                    color="textPrimary"
                    gutterBottom >
                    <Box fontWeight="fontWeightBold" m={1}>
                        Inventory
                    </Box>
                    </Typography>
                    <Typography 
                    align="center" 
                    color="textSecondary" 
                    variant="subtitle2"
                    paragraph >
                    Our company's car inventory
                    </Typography>
                </Container>

                <Grid>
                    <SearchBox />
                </Grid>

                <Grid>
                    <OptionBar passView={view => setView(view)} view={view} />
                </Grid>
                {(view === "list")? 
                    <Grid container
                        direction="column" 
                        justify="center"
                        alignItems="stretch"
                        >   
                        <Grid item >
                            <ListCard />
                        </Grid>
                        <Grid item >
                            <ListCard />
                        </Grid>
                        <Grid item >
                            <ListCard />
                        </Grid>
                    
                    </Grid>
                
                :
                    <Container className={classes.gridCardContainer}>
                        <Grid container spacing={5}>
                            <Grid item sm={6} xs={12} md={4}>
                                <GridCard  />
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                <GridCard />
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                <GridCard />
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                <GridCard />
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                <GridCard />
                            </Grid>
                            {/* <Grid item sm={6} xs={12} md={4}>
                                <GridCard />
                            </Grid> */}
                        </Grid> 
                    </Container>
                }
                
                <Grid container style={{ width: "100vw", margin: "10px 0px 70px"}} container justify="center" >
                    <Grid item>
                        <Fab style={{bgcolor:"#e8e8ea"}} aria-label="add" border={1} >
                            <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </React.Fragment>
    );
}
export default Inventory;