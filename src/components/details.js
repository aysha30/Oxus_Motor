import React, { useState } from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Carouselcar from './inventory-components/Carouselcar';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Dialog, 
    DialogTitle, 
    DialogContent, 
    Box, 
    Select, 
    Button, 
    Grid, 
    Typography, 
    MenuItem, 
    Container,
    FormControl,
    InputLabel,
    Tabs,
    Tab,
    Paper,
    Slider,
    ButtonGroup,
    AppBar,
    Switch,
    FormGroup,
    FormControlLabel } from '@material-ui/core';
import Carousel from "react-elastic-carousel";

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"100px 0px",
        width: "100%",
        height: "100%",
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


export default function Details() {
    const classes = useStyles();
    // const { openDetail, setOpenDetail } = props;
    return(
        
        <React.Fragment>
            <Navbar />
            <div className={classes.root}>
                <Container display="flex" >
                
                <Paper className={classes.carouselContainer}>
                <Carouselcar />
                </Paper>
                <Grid>
                    
                </Grid>
                
                
                </Container>
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