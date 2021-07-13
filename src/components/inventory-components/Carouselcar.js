import React, { useState, useEffect } from "react";
// import "./Carouselcar.css";
import {  
    Box,  
    Button, 
    Grid, 
    Typography, 
    useMediaQuery } from '@material-ui/core';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import axios from 'axios';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


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
        backgroundColor: theme.palette.primary.main,
        // opacity: 0.6,
        color: "white",
        padding: "10px 20px 10px 20px"
    },
    carName: {
        color: "white",
        
    }
    
}))
const initialCarArray = {
    "images": [
        "https://i.pinimg.com/originals/5d/4d/b6/5d4db6e517a689e87c4266f61d77f803.png",
        "https://freepngimg.com/thumb/car/6-2-car-png-file.png"
    ],
    "_id": "60c864a5ae911b029c443070",
    "name": "initial CAr",
    "price": "$200.000",
    "description": "This is BMW car",
    "basic_specs": [
        {
            "_id": "60c864a5ae911b029c443071",
            "mileage": "27 MPG",
            "engine": "RU I-4, 2.0L",
            "drive_train": "FWD",
            "style_name": "Tacoma TRD Sport",
            "body_style": "SUV",
            "brake_type": "4-Wheel Disc",
            "air_bags": "All Seats",
            "night_vision": "No",
            "passanger_capacity": 5,
            "abs_brake": "4-Wheel",
            "backup_cam": "Yes",
            "stereo_sound": "Yes",
            "traction_control": "Yes",
            "parking_assistant": "Yes",
            "mp3_player": "Yes"
        }
    ],
    "__v": 0
}

function Carouselcar({ id }) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    const [currImg, setCurrImg] = useState(0);
    const [ carArray, setCarArray ] = useState(initialCarArray);

    // console.log(id);
    
    // console.log("inicar" + carArray);

    useEffect(()=>{
        loadById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



    const loadById = async () => {
        // console.log("useeffect of carousel");
        await axios
        .get('/cars/'+id)
        .then(res => {
            // console.log("id "+ id);
            // console.log(res.data.data);
            setCarArray(res.data.data);
        })
        .catch(err => {
            console.log(err)
        }) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    return (
        <div className={classes.carousel}>
        <div
            className={classes.carouselInner}
            style={{ backgroundImage: `url(${carArray?.images[currImg]})` }}
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
                justify="space-between"
                alignItems="flex-end"
                >
                    <Grid item> 
                        <Typography className={classes.carName} variant={(matches) ? "button" : "h4"}  align="left" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                            {carArray.company}{" "}{carArray.model}
                            </Box> 
                        </Typography>
                        <Typography className={classes.carName} variant={(matches) ? "button" : "h4"} align="left" gutterBottom>
                            <Box fontWeight="fontWeightBold">
                            ${carArray.price}
                            </Box> 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button className={classes.getContactBtn} variant="contained" >
                            <MailOutlineIcon />&nbsp; Get Contact
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <div
                className={classes.right}
                onClick={() => {
                    currImg < carArray.images.length - 1 && setCurrImg(currImg + 1);
                }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }} />
            </div>
        </div>
        </div>
    );
}

export default Carouselcar;