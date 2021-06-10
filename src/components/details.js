import React, { useState } from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Carouselcar from './inventory-components/Carouselcar';
import CarScroll from './inventory-components/carScroll';
import Overview from './inventory-components/overview';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Box, 
    Select, 
    Button, 
    Grid, 
    Typography, 
    MenuItem, 
    Container,
    Tabs,
    Tab,
    Paper,
    Slider,
    ButtonGroup,
    AppBar, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"100px 0px",
        width: "100%",
        height: "100%",
    },
    imgContainer: {
        [theme.breakpoints.down(1200)]:{
            padding: "0px 0px",
        },
        [theme.breakpoints.up(1201)]:{
            padding: "0px 70px",
        },
    },
    carouselContainer:{
        
        [theme.breakpoints.down(1200)]:{
            height: "300px",
            width:"100%",
        },
        [theme.breakpoints.up(1201)]:{
            width: "75%",
            height: "700px",
        },
        margin: 0,
        padding: 0,
    },
    carScroll:{
        padding: "10px 10px",
        [theme.breakpoints.down(1200)]:{
            height: "100%",
            width:"100%",
        },
        [theme.breakpoints.up(1201)]:{
            width: "25%",
            height: "700px",
        },
    },
    tabroot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        [theme.breakpoints.down(1200)]:{
            padding: "20px 0px",
        },
        [theme.breakpoints.up(1201)]:{
            padding: "20px 70px",
        },
    },
    
}))

const carArray = [
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz1",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
        name: "Mercedes Benz2",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
        name: "Mercedes Benz3",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://www.nicepng.com/png/detail/936-9365791_free-png-download-car-png-images-background-png.png",
        name: "Mercedes Benz4",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz5",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz6",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz7",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz8",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },

];

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }


export default function Details() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        
        <React.Fragment>
            <Navbar />
            <div className={classes.root}>
                <Grid container display="flex" className={classes.imgContainer} >
                    <Grid item className={classes.carouselContainer}>
                        <Carouselcar />
                    </Grid>

                    <Grid item className={classes.carScroll}>
                        <CarScroll />
                    </Grid>
                </Grid>
                <Grid container>
                    <div className={classes.tabroot}>
                        <div position="static">
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Specifications" {...a11yProps(1)} />
                            </Tabs>
                        </div>
                        <TabPanel value={value} index={0}>
                            
                            <Overview />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                    </div>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    );
}




// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     // { width: 1000 , itemsToShow: 2 },
//     // { width: 768, itemsToShow: 3 },
//     // { width: 1260, itemsToShow: 3 },
// ];

{/* <Carousel itemsToShow={1} focusOnSelect={true}>
                        {carArray.map((item) => (
                            <Box>
                                <img src={item.src} alt={item.name} />
                            </Box>
                        ))}
                    </Carousel> */}