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
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

    const useStyles = makeStyles((theme) => ({
        root: {
            width: "auto",
            textAlign: "center"
        },
        card: {
            backgroundColor: "#f7f1e4",
            width: "25em"
        },
        formControl: {
            
            backgroundColor: "#f7f1e4",
            minWidth: 500,
            borderRadius: 10,
            border: 0,
        },
        margin: {
            margin: theme.spacing(1),
        },
    }))

    export default function Overview() {
        const classes = useStyles();

        const [creditScore, setCreditScore] = React.useState('');

        const handleCreditScore = (event) => {
            setCreditScore(event.target.value);
        };

        const [loanTerm, setLoanTerm] = React.useState(12);

        const handleLoanTerm = (event) => {
            setLoanTerm(event.target.value);
        };
        const [vehiclePrice, setVehiclePrice] = React.useState(140.000);

        const handleVehiclePrice = (event) => {
            setVehiclePrice(event.target.value);
        };
        const [salesTax, setSalesTax] = React.useState(0);

        const handleSalesTax = (event) => {
            setSalesTax(event.target.value);
        };
        const [apr, setApr] = React.useState("yesApr");

        const handleApr = (event) => {
            setApr(event.target.value);
        };
        return(
            <div>
                <Grid container style={{width: "75%"}}>
                    <Typography variant="h5">
                        <Box fontWeight="fontWeightBold" style={{padding:"20px 0px"}} >
                        Description
                        </Box>
                    </Typography>
                    <Typography paragraph variant="subtitle2" >
                        
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including 
                        versions of Lorem Ipsum. It has survived not only five centuries, but also the 
                        leap into electronic typesetting, remaining essentially unchanged.
                    
                    </Typography>
                </Grid>
                <Grid container display="flex" spacing={3}>
                    <Grid container style={{padding:"20px 10px"}}>
                    <Typography variant="h5">
                            <Box fontWeight="fontWeightBold">
                                Basic Specs
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
                </Grid>
                <Grid container display="flex" spacing={3}>
                    <Grid container style={{padding:"30px 10px"}}>
                        <Typography variant="h5">
                                <Box fontWeight="fontWeightBold">
                                    Expenses Calculator
                                </Box>
                        </Typography>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Credit Score</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Down Payment</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Trade-In Value</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={creditScore}
                        onChange={handleCreditScore}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Loan Term and Estimated APR</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={loanTerm}
                        onChange={handleLoanTerm}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={12}>12 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={24}>24 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={36}>36 Mo (%5.0 APR)</MenuItem>
                        <MenuItem value={48}>48 Mo (%5.0 APR)</MenuItem>
                        </Select>
                    </FormControl>
                        
                    </Grid>
                    <Grid item>
                    <FormControl  className={classes.formControl} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Vehicle Price</InputLabel>
                        <FilledInput
                            style={{height: "55px"}}
                            id="filled-adornment-amount"
                            value={vehiclePrice}
                            onChange={handleVehiclePrice}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    </Grid>
                    <Grid item>
                    <FormControl  className={classes.formControl} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Sales Tax</InputLabel>
                        <FilledInput
                            style={{height: "55px"}}
                            id="filled-adornment-amount"
                            value={salesTax}
                            onChange={handleSalesTax}
                            startAdornment={<InputAdornment position="start">%</InputAdornment>}
                        />
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.formControl} style={{height:"55px", padding:"15px"}}>
                            Estimated Payment $600/mo
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.formControl} style={{height:"55px", padding:"15px"}}>
                            Vehicle Price $140.000
                        </Typography>
                    </Grid>
                    <Grid item>
                    <FormControl component="fieldset" className={classes.formControl} style={{height:"55px", padding:"8px"}}>
                        <RadioGroup row name="Apr" value={apr} onChange={handleApr}>
                            <FormControlLabel value="yesApr" control={<Radio />} label="Estimate my APR" />
                            <FormControlLabel value="noAPR" control={<Radio />} label="I know my APR" />
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            // type="submit" 
                            style={{ padding: "10px", width: "200px", height: "50px", }}
                            color="primary"
                            // onClick={createMessage}
                        >
                            View Option
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }