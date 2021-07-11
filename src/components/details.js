import React, { useState, useEffect } from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Carouselcar from './inventory-components/Carouselcar';
import CarScroll from './inventory-components/carScroll';
import Overview from './inventory-components/overview';
import Specification from './inventory-components/specification';
import PropTypes from 'prop-types';
import { makeStyles} from "@material-ui/core/styles";
import {
    Box,  
    Grid, 
    Typography, 
    Tabs,
    Tab } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        padding:"100px 0px",
        width: "100%",
        height: "100%",
    },
    imgContainer: {
        [theme.breakpoints.down(1200)]:{
            padding: "0px 0px",
            width: "100%"
        },
        [theme.breakpoints.up(1201)]:{
            padding: "0px 70px",
        },
    },
    carouselContainer:{
        
        [theme.breakpoints.down(1200)]:{
            height: "400px",
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

function Details() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [ carArray, setCarArray ] = useState(initialCarArray);
    const { id } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    useEffect(()=>{
        loadById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
    const loadById = async () => {
        // console.log("useeffect of details");
        await 
        fetch('http://localhost:3000/cars/'+id)
        .then((res) => res.json())
        .then(res => {
            // console.log("id "+ id);
            // console.log(res.data);
            setCarArray(res.data);
            // console.log(carArray);
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    return(
        
        <React.Fragment>
            <Navbar />
            <div className={classes.root}>
                <Grid container display="flex" className={classes.imgContainer} >
                    <Grid item className={classes.carouselContainer}>
                        <Carouselcar id={id} />
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
                            <Overview carArray={carArray}  />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Specification carArray={carArray} />
                        </TabPanel>
                    </div>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    );
}
export default Details;



// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     // { width: 1000 , itemsToShow: 2 },
//     // { width: 768, itemsToShow: 3 },
//     // { width: 1260, itemsToShow: 3 },
// ];

// {/* <Carousel itemsToShow={1} focusOnSelect={true}>
//                         {carArray.map((item) => (
//                             <Box>
//                                 <img src={item.src} alt={item.name} />
//                             </Box>
//                         ))}
//                     </Carousel> */}