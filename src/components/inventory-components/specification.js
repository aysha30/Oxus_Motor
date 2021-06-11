import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Box, 
    Select, 
    FormControl,
    InputLabel,
    Button,
    Grid, 
    Tabs,
    Tab,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    Paper, 
    Typography, 
    MenuItem,
    Divider,
    InputAdornment,
    Card, 
    FilledInput,
    CardActionArea,
    CardContent, } from '@material-ui/core';
    import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
    import EvStationIcon from '@material-ui/icons/EvStation';
    import BuildIcon from '@material-ui/icons/Build';
    import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

    const useStyles = makeStyles((theme) => ({
        card: {
            backgroundColor: "#f7f1e4",
            width: "20em"
        },
    }))

    export default function Overview() {
        const classes = useStyles();
        return(
            <div>
                <Grid container display="flex" spacing={3}>
                    <Grid container style={{padding:"20px 0px 0px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold" p={2}>
                                    Basic Information
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid container style={{padding:"20px 0px 0px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold" p={2}>
                                    Performance
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid container style={{padding:"20px 0px 0px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold" p={2}>
                                    Safety
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid container style={{padding:"20px 0px 0px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold" p={2}>
                                    Entertainment
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <EvStationIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent direction="row">
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <AirportShuttleIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <LocalCarWashIcon/>
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent >
                                    <Grid container alignItems="center" >
                                        <Grid item style={{padding:"15px"}}>
                                            <BuildIcon />
                                        </Grid>
                                        <Divider orientation="vertical" flexItem />
                                        <Grid item style={{padding:"0px 20px"}}>
                                            <Typography>
                                                Mileage <br/>
                                                <Box fontWeight="fontWeightBold">
                                                27 MPG
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }