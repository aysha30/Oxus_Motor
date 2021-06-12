import React, { useState } from "react";
import { 
    Grid, 
    Typography, 
    MenuItem, 
    Container,
    FormControl,
    useMediaQuery,
    Card, 
    Paper,
    CardActionArea,
    CardMedia,
    CardContent} from '@material-ui/core';
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
    
    
}))

export default function CarScroll() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <div>
            <Paper square elevation={0}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="car1"
                    height="150"
                    image={carArray[0].src}
                    title={carArray[0].name}
                    />
                <CardContent>
                    <Typography>
                    {carArray[0].name}
                    </Typography>
                    {carArray[0].fullPrice}
                </CardContent>
                </CardActionArea>
            </Paper>
            <Paper square elevation={0}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="car1"
                    height="150"
                    image={carArray[1].src}
                    title={carArray[1].name}
                    />
                <CardContent>
                    <Typography>
                    {carArray[1].name}
                    </Typography>
                    {carArray[1].fullPrice}
                </CardContent>
                </CardActionArea>
            </Paper>
            <Paper square elevation={0}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="car1"
                    height="150"
                    image={carArray[2].src}
                    title={carArray[2].name}
                    />
                <CardContent>
                    <Typography>
                    {carArray[2].name}
                    </Typography>
                    {carArray[2].fullPrice}
                </CardContent>
                </CardActionArea>
            </Paper>
            
        </div>
    );
}