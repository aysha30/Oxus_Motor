import React, { useState } from 'react';
import { Box, Grid, Container, Typography, Paper, Button, Link, CardActionArea, CardHeader } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardAction } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleButton from '@material-ui/lab/ToggleButton';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        paddingTop: theme.spacing(2),
        flexGrow: 1,
        height: "auto",
        // [theme.breakpoints.down(1200)]:{
        //     height:"auto",
        // },
        // [theme.breakpoints.up(1201)]:{
        //     height: "30",
        // },
    },
    img: {
        height : "300px", 
        width: "100%", 
        backgroundColor: "#eae9ea",
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


function GridCard({ carArray }) {

    // const { carArray } = props.carArray;

    const classes = useStyles();

    const [ selected, setSelected ] = useState(false);

    return(
        
        <div >
            {/* <Card> */}
            
                <CardActionArea>
                <CardHeader 
                    title={carArray?.name}
                    action={
                        <ToggleButton
                            value={selected}
                            selected={selected}
                            // variant="contained"
                            onChange={() =>{
                                setSelected(!selected)
                            }}
                            style={{ borderRadius: 50, margin: 10, border: "5" }}
                            >
                                <FavoriteBorderIcon />
                        </ToggleButton>
                    } />
                    <CardMedia image={carArray?.src} 
                    className={classes.img} />
                        <CardContent>
                            <Box display="flex" 
                            // container 
                            direction="row" pt={3} >
                            <Box display="flex"  pl={1}>
                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                    <Typography>Full Price</Typography> 
                                </Box>
                                <Box color="#ceba97" > 
                                    {carArray?.fullPrice} 
                                </Box>
                            </Box>
                            <Box display="flex" pl={3} >
                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                <Typography>Monthly </Typography>
                                </Box>
                                <Box color="#ceba97"> 
                                {carArray?.monthly} 
                                </Box>
                            </Box>
                            </Box>
                        </CardContent>
                </CardActionArea>
            {/* </Card> */}
        </div>
    )
}

export default GridCard;