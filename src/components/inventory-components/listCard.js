import React from 'react';
import { Box, IconButton, Grid, Container, Typography, Paper } from '@material-ui/core';
import { Card, CardMedia, CardContent, CardAction } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        paddingTop: theme.spacing(2),
        flexGrow: 1,
    },
    img: {
        height: 260,
        [theme.breakpoints.down(840)]:{
            // padding: "10px",
            width: "inherit",
        },
        [theme.breakpoints.up('sm')]:{
            width: 400,
        },
    },
}))

const carArray = [
    {
        src: "https://dummyimage.com/400x250/000000/fff.png&text=Car++1+",
        name: "Car 1",
        fullPrice: "$50,000",
        monthly: "$2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    }
];

export default function ListCard() {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Container >
                <Box
                 >
                <div className={classes.root}>
                <Paper component={Box}  xs={2}
                bgcolor="#eae9eb" >
                <Grid container >
                    <Box>
                        <Grid item>
                            <img className={classes.img} alt="CAR" src={carArray[0].src} />
                        </Grid>
                    </Box>
                    <Grid item xs={12} sm={6} container direction="column">
                        <Box p={2}>
                            <Typography variant="h5" >
                                {carArray[0].name}
                            </Typography>
                            
                        </Box>
                        <Box p={2} >
                            {/* <Grid container direction="row" > */}
                                <Typography variant="body1" >
                                    Full Price {" "} {carArray[0].fullPrice} 
                                </Typography>
                                <Typography variant="body1" >
                                    Monthly  {carArray[0].monthly} 
                                </Typography>
                            {/* </Grid> */}
                        </Box>
                        <Box display="flex"
                            container 
                            direction="row" 
                            flexWrap="nowrap"
                            alignContent="center"
                            p={1}
                            css={{ maxWidth: 600 }}>
                            <Grid item  component={Box} p={1}>
                                <Typography variant="subtitle1" >
                                    Year {carArray[0].year}
                                </Typography>
                            </Grid>
                            <Grid item component={Box} p={1}>
                                <Typography variant="subtitle1">
                                    Fuel {carArray[0].fuel}
                                </Typography>
                            </Grid>
                            <Grid item component={Box} p={1}>
                                <Typography variant="subtitle1">
                                    Gear {carArray[0].gear}
                                </Typography>
                            </Grid>
                            <Grid item component={Box} p={1}>
                                <Typography variant="subtitle1">
                                    Km {carArray[0].km}
                                </Typography>
                            </Grid>
                            <Grid item component={Box} p={1}>
                                <Typography variant="subtitle1">
                                    Body Type {carArray[0].bodyType}
                                </Typography>
                            </Grid>
                            <Grid item component={Box} p={1}>
                                <Typography variant="subtitle1">
                                    Engine Power {carArray[0].enginePower}
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                </Paper>
                </div>
                </Box>
            </Container>
        </div>
    )
}