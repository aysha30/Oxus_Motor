import React, { useState } from "react";
// import "./Carouselcar.css";
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
    useMediaQuery,
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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
    carousel :{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
    },
    carouselInner: {
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
    },
    left: {
        flex: "15%",
        height: "100%",
        /* background-color: rgb(0, 0, 0, 0.6); */
        display: "grid",
        placeItems: "center",
        color: "white",
        cursor: "pointer",
        padding: "15px",
        // borderRadius: 50
    },
    center : {
        flex: "80%",
        height: "100%",
        display: "flex",
        // placeItems: "center",
        // font-family: Arial, Helvetica, sans-serif;
        textAlign: "justify",
        textAlignLast: "center",
        [theme.breakpoints.down(1200)]:{
            paddingBottom: "5px",
        },
        [theme.breakpoints.up(1201)]:{
            paddingBottom: "50px",
        },
    },
    right: {
        flex: "15%",
        /* padding-right: 20px; */
        height: "100%",
        /* background-color: rgb(0, 0, 0, 0.6); */
        display: "grid",
        placeItems: "center",
        color: "white",
        cursor: "pointer",
    },
    getContactBtn: {
        backgroundColor: "primary.main",
        // opacity: 0.6,
        // color: "white",
    },
    carName: {
        color: "white",
        
    }
    
}))

function Carouselcar() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className={classes.carousel}>
        <div
            className={classes.carouselInner}
            style={{ backgroundImage: `url(${carArray[currImg].src})` }}
        >
            <div
                className={classes.left}
                onClick={() => {
                    currImg > 0 && setCurrImg(currImg - 1);
                }}
                >
                    <ArrowBackIosIcon style={{ fontSize: 30 }} />
            </div>
            <div className={classes.center}>
                <Grid
                container
                display="flex"
                direction="row"
                justify="center"
                alignItems="flex-end"
                gutterBottom>
                    <Grid item> 
                        <Typography className={classes.carName} variant={(matches) ? "button" : "h4"}  align="left" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                            {carArray[currImg].year} {carArray[currImg].name}
                            </Box> 
                        </Typography>
                        <Typography className={classes.carName} variant={(matches) ? "button" : "h4"} align="left" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                            {carArray[currImg].fullPrice}
                            </Box> 
                        </Typography>
                    </Grid>
                    <Grid item gutterbottom>
                        <Button className={classes.getContactBtn} variant="contained" >
                            Get Contact
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div
                className={classes.right}
                onClick={() => {
                    currImg < carArray.length - 1 && setCurrImg(currImg + 1);
                }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
        </div>
        </div>
    );
}

export default Carouselcar;