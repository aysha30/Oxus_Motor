import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
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
    Slider,
    ButtonGroup,
    Link,
    Switch,
    FormControlLabel } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab';
import axios from 'axios';

import { InventoryContext } from '../../Context/InventoryContext/inventoryContext';
import { WholeContext } from '../../App';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
    },
    closeButton:{
        height: 50,
        // backgroundColor: "#ffd1d1",
        color: "#f70707",
        borderRadius: 50, 
        margin: 20, 
        border: 5,
    },
    searchButton: {
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        height: "50px",
        width: "150px",
        borderRadius: 0,
    },
    searchField: {
        width: 500,
        padding: 10,
        // display: "flex"

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    rootSlider: {
        width: "260px",

    },
    rootButtonGrp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    colbtn1:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#ffffff",
    },
    colbtn2:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#010101",
    },
    colbtn3:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#bdbdbd",
    },
    colbtn4:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#424955",
    },
    colbtn5:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#e81f2a",
    },
    colbtn6:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#c4c4c3",
    },
    colbtn7:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#010101",
    },
    colbtn8:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#27351b",
    },
    colbtn9:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#c4a472",
    },
    colbtn10:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#d5d5ec",
    },
    colbtn11:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#5d4827",
    },
    colbtn12:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "60px",
        },
        backgroundColor: "#c4c4c3",
    },
    
}))



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
};
}

function valuePriceText(priceValue) {
    return (`${priceValue}K`);
}
function valueDayText(dayValue) {
    return (`${dayValue}`);
}

export default function AdvSearch( props ) {
    const classes = useStyle();
    const theme = useTheme();

    const {
        listItems, setListItems,
        make, setMake,
        model, setModel,
        trim, setTrim,
        year, setYear,
        priceValue, setPriceValue,
        mileageValue, setMileageValue,
        dayValue, setDayValue,
        cylinder, setCylinder,
        cylinderType, setCylinderType,
        condition, setCondition,
        extColor, setExtColor,
        intColor, setIntColor,
        extColType, setExtColType,
        photo, setPhoto,
        sort,
        advFilter, setAdvFilter} = useContext(InventoryContext);
    const { openAdvSch, setOpenAdvSch } = props;
// console.log(openAdvSch)
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => {
        if(newValue != null)
        setValue(newValue);
    };
// console.log(make, model, trim, year, 
//     priceValue[0]*1000 ,priceValue[1]*1000, mileageValue[0]*1000, 
//     mileageValue[1]*1000, cylinder, cylinderType, condition, 
//     extColor, intColor, extColType, sort);

let cancelToken
    const handleFilter = async (e) => {
        e.preventDefault();
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.")
        }
        cancelToken = axios.CancelToken.source()
        var url = `/inventory/advance-search/${make}/${model}/${trim}/${year}/${priceValue[0]*1000}/${priceValue[1]*1000}/${mileageValue[0]*1000}/${mileageValue[1]*1000}/${dayValue[0]}/${dayValue[1]}/${cylinder}/${cylinderType}/${condition}/${extColor}/${intColor}/${extColType}/${sort}`;
        
        try {
            const results = await axios.get(url,
                { cancelToken: cancelToken.token }
            )
                // console.log(`http://localhost:3000/inventory/advance-search/${make}/${model}/${trim}/${year}/${priceValue[0]*1000}/${priceValue[1]*1000}/${mileageValue[0]*1000}/${mileageValue[1]*1000}/${dayValue[0]}/${dayValue[1]}/${cylinder}/${cylinderType}/${condition}/${extColor}/${intColor}/${extColType}/${sort}`)
                setListItems(results.data.data)
            
        } 
        catch (error) {
            console.log(error)
        }
        setAdvFilter(true);
        setOpenAdvSch(false);
    }
        
    
    


    return(
        <div className={classes.root} >
        <Dialog open={openAdvSch} maxWidth="md" >
            <DialogTitle>
                <div style={{display: "flex"}}>
                <Typography variant="h4" 
                    align="center" 
                    color="textPrimary"
                    style={{flexGrow: 1}}
                    >
                    <Box fontWeight="fontWeightBold" m={1} md={4}>
                        Advance Search
                    </Box>
                    <Typography 
                        variant="h5"
                        align="center" >
                        Inventory
                    </Typography>

                </Typography>
                
                <Button 
                className={classes.closeButton}
                onClick={() => setOpenAdvSch(false)}>
                    <CloseIcon />
                </Button>
                </div>
                
                <Grid container 
                    style={{position : "relative"}}
                    justify="center" >
                    <input 
                        className={classes.searchField}
                        placeholder="Find a Car..."    
                    />
                    <Button
                        className={classes.searchButton}
                    >
                        Search
                    </Button>
                </Grid>
            </DialogTitle>
            <DialogContent>
            <form onSubmit={handleFilter}>
                <Container style={{flexGrow:1, height: 450}}>
                <Grid container>
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Make</InputLabel>
                        <Select
                        value={make}
                        onChange={(make) => { setMake(make.target.value)}}
                        label="Make"
                        >
                        
                        <MenuItem value={"Toyota"}>Toyota</MenuItem>
                        <MenuItem value={"BMW"}>BMW</MenuItem>
                        <MenuItem value={"Tata"}>Tata</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item   md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Model</InputLabel>
                        <Select
                        value={model}
                        onChange={(model) => setModel(model.target.value)}
                        label="Model"
                        >
                        
                        <MenuItem value={"CH-R"}>CH - R</MenuItem>
                        <MenuItem value={"X7"}>X7</MenuItem>
                        <MenuItem value={"Harrier"}>Harrier</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Trim</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={trim}
                        onChange={(trim) => { setTrim(trim.target.value)}}
                        label="Trim"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="XLE">XLE</MenuItem>
                        <MenuItem value="XLA">TLE</MenuItem>
                        <MenuItem value="MLE">MLE</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={year}
                        onChange={(year) => { setYear(year.target.value)}}
                        label="Year"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                </Grid>
                <Grid container p={5}>
                    <Grid container justify="center">
                    <div position="static" fullWidth color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        >
                        <Tab label="Basic" {...a11yProps(0)} />
                        <Tab label="Customization" {...a11yProps(1)} />
                        <Tab label="Documents" {...a11yProps(2)} />
                        </Tabs>
                    </div>
                    </Grid>
                    
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChange}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction} 
                            style={{width: "100%"}} 
                            >
                                <Grid container
                                    direction="row"
                                    justify="center"
                                    alignItems="center" spacing={5} style={{paddingTop: "20px", display: "flex"}}>
                                    <Grid item p={2} sm={4} >
                                        <div className={classes.rootSlider}>
                                        <Typography id="range-slider" gutterBottom>
                                            Price <Typography variant="body2" color="textSecondary">
                                                ($1000 to $50,000)
                                            </Typography>
                                        </Typography>
                                        <Slider
                                            value={priceValue}
                                            min={1}
                                            step={1}
                                            max={50}
                                            // scale={(x) => x * 50}
                                            onChange={(event, newValue) => { setPriceValue(newValue); }}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuePriceText}
                                            valueLabelFormat={valuePriceText}
                                        />
                                        </div>
                                    </Grid>
                                    <Grid item p={2} sm={4} >
                                        <div className={classes.rootSlider}>
                                        <Typography id="range-slider" gutterBottom>
                                            Mileage<Typography variant="body2" color="textSecondary">
                                                (0 Miles to 10,000)
                                            </Typography>
                                        </Typography>
                                        <Slider
                                            value={mileageValue}
                                            min={0}
                                            step={0.5}
                                            max={10}
                                            // scale={(x) => x * 50}
                                            onChange={(event, newValue) => { setMileageValue(newValue); }}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuePriceText}
                                            valueLabelFormat={valuePriceText}
                                        />
                                        </div>
                                    </Grid>
                                    <Grid item p={2} sm={4} >
                                        <div className={classes.rootSlider}>
                                        <Typography id="range-slider" gutterBottom>
                                            Days on Oxus<Typography variant="body2" color="textSecondary">
                                                (0 Days to 200 Days)
                                            </Typography>
                                        </Typography>
                                        <Slider
                                            value={dayValue}
                                            min={0}
                                            step={5}
                                            max={200}
                                            // scale={(x) => x * 50}
                                            onChange={(event, newValue) => { setDayValue(newValue); }}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valueDayText}
                                            valueLabelFormat={valueDayText}
                                        />
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Cylinders</Typography>
                                    <ToggleButtonGroup
                                        value={cylinder}
                                        exclusive
                                        onChange={(event, newValue) => { setCylinder(newValue); }}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value={4} aria-label="left aligned" style={{ borderRadius: 50, border: 0 }}>
                                            4
                                        </ToggleButton>
                                        <ToggleButton value={6} aria-label="centered" style={{ borderRadius: 50, border: 0 }}>
                                            6
                                        </ToggleButton>
                                        <ToggleButton value={8} aria-label="right aligned" style={{ borderRadius: 50, border: 0 }}>
                                            8
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Cylinders</Typography>
                                    <ToggleButtonGroup
                                        value={cylinderType}
                                        exclusive
                                        onChange={(event, newValue) => { setCylinderType(newValue); }}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="Any" style={{ borderRadius: 50, border: 0 }}>
                                            Any
                                        </ToggleButton>
                                        <ToggleButton value="Auto" style={{ borderRadius: 50, border: 0 }}>
                                            Auto
                                        </ToggleButton>
                                        <ToggleButton value="Manual" style={{ borderRadius: 50, border: 0 }}>
                                            Manual
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Condition</Typography>
                                    <ToggleButtonGroup
                                        value={condition}
                                        exclusive
                                        onChange={(event, newValue) => { setCondition(newValue); }}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="New" style={{ borderRadius: 50, border: 0 }} >
                                            New
                                        </ToggleButton>
                                        <ToggleButton value="Used" style={{ borderRadius: 50, border: 0 }}>
                                            Used
                                        </ToggleButton>
                                        <ToggleButton value="Salvage" style={{ borderRadius: 50, border: 0 }}>
                                            Salvage
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container
                                direction="row"
                                justify="center"
                                alignItems="center" spacing={5} style={{paddingTop: "20px", width: "100%"}}>
                                <Grid item md={6}  >
                                <Typography>Exterior Color</Typography>
                                <ButtonGroup >
                                    
                                    <Button variant="contained" className={classes.colbtn1} 
                                    onClick={()=> {setExtColor("White")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn2} 
                                    onClick={()=> {setExtColor("Black")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn3} 
                                    onClick={()=> {setExtColor("Lightgrey")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn4} 
                                    onClick={()=> {setExtColor("Darkgrey")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn5} 
                                    onClick={()=> {setExtColor("Red")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn6} 
                                    onClick={()=> {setExtColor("Any")}} >?</Button>
                                    
                                </ButtonGroup>
                                </Grid>
                                <Grid item md={6}  >
                                <Typography>Interior Color</Typography>
                                <ButtonGroup >
                                    
                                    <Button variant="contained" className={classes.colbtn7} 
                                    onClick={()=> {setIntColor("Black")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn8} 
                                    onClick={()=> {setIntColor("Green")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn9} 
                                    onClick={()=> {setIntColor("Lightbrown")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn10} 
                                    onClick={()=> {setIntColor("Grey")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn11} 
                                    onClick={()=> {setIntColor("Brown")}} ></Button>

                                    <Button variant="contained" className={classes.colbtn12} 
                                    onClick={()=> {setIntColor("Any")}} >?</Button>
                                    
                                </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "20px 0px 20px"}} >
                                <Grid item>
                                <Typography>Exterior Color</Typography>
                                <ToggleButtonGroup
                                        value={extColType}
                                        exclusive
                                        onChange={(event, newValue) => { setExtColType(newValue) }}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="Convertible" style={{ borderRadius: 50, border: 0 }} >
                                            Convertible
                                        </ToggleButton>
                                        <ToggleButton value="Sedan" style={{ borderRadius: 50, border: 0 }}>
                                            Sedan
                                        </ToggleButton>
                                        <ToggleButton value="Hatchback" style={{ borderRadius: 50, border: 0 }}>
                                            Hatchback
                                        </ToggleButton>
                                        <ToggleButton value="Sports" style={{ borderRadius: 50, border: 0 }}>
                                            Sports
                                        </ToggleButton>
                                        <ToggleButton value="Trucks" style={{ borderRadius: 50, border: 0 }}>
                                            Trucks
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                
                                </Grid>
                            </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <Grid container justify="center">
                                <FormControlLabel
                                    value="start"
                                    control={<Switch checked={photo} 
                                    onChange={(event, newValue) => { setPhoto(newValue) }} 
                                    inputProps={{ 'aria-label': 'primary checkbox' }} />}
                                    label="Has Photos Attached"
                                    labelPlacement="start"
                                    />
                                </Grid>
                            </TabPanel>
                        </SwipeableViews>
                </Grid>
                <Grid container justify="center">
                    <Button 
                        type='submit'
                        variant="contained" 
                        style={{height: 50, width: 200, padding: "2px"}}
                        color="primary"  >
                        Filter
                    </Button>
                </Grid>
                </Container>
                </form>
            </DialogContent>
        </Dialog>
        </div>
    );
}