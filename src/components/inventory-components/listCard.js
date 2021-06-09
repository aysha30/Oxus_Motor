import React, { useState } from 'react';
import { Box, Grid, Container, Typography, Paper, Button, Link, CardActionArea } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardAction } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Details from '../details';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        paddingTop: theme.spacing(2),
        flexGrow: 1,
        [theme.breakpoints.down(1200)]:{
            height:"auto",
        },
        [theme.breakpoints.up(1201)]:{
            height: "300px",
        },
    },
    img: {
        height: 260,
        backgroundColor: "#eae9ea",
        [theme.breakpoints.down(840)]:{
            // padding: "10px",
            width: "auto",
        },
        [theme.breakpoints.up('sm')]:{
            width: 400,
        },
    },
    favBox: {
        [theme.breakpoints.down("xs")]:{
            // padding: "10px",
            width: "100%",
            display:"flex",
            position: "relative",
            paddingLeft: "100px",
        },
        [theme.breakpoints.up('sm')]:{
            width: "400",
        },
    }
}))

// const carArray = [
//     {
//         src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
//         name: "Mercedes benz",
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

function ListCard({ carArray }) {

    const [ selected, setSelected ] = useState(false);
    
    // const [ openDetail, setOpenDetail ] = useState(false);
    const gotoDetails = () =>{
        <Details carArray={carArray} />
    }

    const classes = useStyles();

    return(
        <div className={classes.root} >
            <Container >
                <Box>
                <div className={classes.root} >
                    <Paper component={Box}  xs={2}
                    bgcolor="#fcfafc"
                    // onClick={()=> setOpenDetail(true)}
                    >
                        <CardActionArea 
                        // component={Link}
                        //  href="#"
                        >
                            <Grid container >
                                <Box>
                                    <Grid item>
                                        <img className={classes.img} alt="CAR" src={carArray?.src} />
                                    </Grid>
                                </Box>
                                <Grid item xs={12} sm={6} container direction="column">
                                    <Box p={2} >
                                        <Typography variant="h5" >
                                            <Box fontWeight="fontWeightBold">
                                            {carArray?.name}
                                            </Box>
                                        </Typography>
                                        
                                    </Box>
                                    <Box display="flex" container direction="row" pt={3} >
                                        {/* <Grid container direction="row" > */}
                                            <Box display="flex"  pl={1}>
                                            {/* <Typography variant="body1" > */}
                                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                                    Full Price :
                                                </Box>
                                                <Box color="#ceba97" > 
                                                    {carArray?.fullPrice} 
                                                </Box>
                                            {/* </Typography> */}
                                            </Box>
                                            <Box display="flex" pl={10} >
                                            {/* <Typography variant="body1" > */}
                                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                                Monthly :
                                                </Box>
                                                <Box color="#ceba97"> 
                                                {carArray?.monthly} 
                                                </Box>
                                            {/* </Typography> */}
                                            </Box>
                                            
                                        {/* </Grid> */}
                                    </Box>
                                    <Box display="flex"
                                        container 
                                        direction="row" 
                                        flexWrap="nowrap"
                                        alignContent="center"
                                        pt={5}>
                                        <Grid item  component={Box} p={1}>
                                            <Typography variant="subtitle1" >
                                            <Box fontWeight="fontWeightBold"> Year</Box> {carArray?.year}
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold"> Fuel</Box> {carArray?.fuel}
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Gear</Box> {carArray?.gear}
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Km</Box> {carArray?.km}
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Body Type </Box>{carArray?.bodyType}
                                            </Typography>
                                        </Grid>
                                        <Grid item component={Box} p={1}>
                                            <Typography variant="subtitle1">
                                            <Box fontWeight="fontWeightBold">Engine Power</Box>{carArray?.enginePower}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                                <Box className={classes.favBox} container p={3}  direction="row" >
                                
                                <ToggleButton
                                        value="check"
                                        selected={selected}
                                        variant="contained"
                                        onChange={() =>{
                                            setSelected(!selected)
                                        }}
                                        style={{ borderRadius: 50, margin: 10, border: "5" }}
                                        >
                                        <FavoriteBorderIcon />
                                    </ToggleButton>
                                    <Link 
                                    href="/Details"
                                    // to={<Details />} 
                                    onClick={()=> { <Details carArray={carArray}></Details>}}
                                    >
                                        <Typography ><Box color="#ceba97" pt={2} >See More Details</Box></Typography>
                                    </Link>
                                
                                </Box>
                            </Grid>
                        </CardActionArea>
                </Paper>
                </div>
                </Box>
            </Container>
            
        </div>
    )
}

export default ListCard;