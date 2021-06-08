import React, { useState } from 'react';
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
    Paper,
    Slider,
    ButtonGroup,
    AppBar,
    Switch,
    FormGroup,
    FormControlLabel } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import {ToggleButtonGroup, ToggleButton} from '@material-ui/lab';

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
    },
    closeButton:{
        height: 50,
        backgroundColor: "#ffd1d1",
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
        width: "380px",
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
            width: "80px",
        },
        backgroundColor: "#ffffff",
    },
    colbtn2:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#010101",
    },
    colbtn3:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#bdbdbd",
    },
    colbtn4:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#424955",
    },
    colbtn5:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#e81f2a",
    },
    colbtn6:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#c4c4c3",
    },
    colbtn7:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#010101",
    },
    colbtn8:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#27351b",
    },
    colbtn9:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#c4a472",
    },
    colbtn10:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#d5d5ec",
    },
    colbtn11:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
        },
        backgroundColor: "#5d4827",
    },
    colbtn12:{
        [theme.breakpoints.down('xs')]:{
        width: "100%", 
        },
        [theme.breakpoints.up('sm')]:{
            width: "80px",
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
    const [value, setValue] = useState(0);
    // const [ tabValue, setTabValue ] = useState(0);
    const [priceValue, setPriceValue] = useState([10,40]);
    const [millageValue, setMillageValue] = useState([2,8]);
    const [dayValue, setDayValue] = useState([40,160]);

    const [ cylinder, setCylinder ] = useState(4);
    const [ cylinderType, setCylinderType ] = useState("any");
    const [ condition, setCondition ] = useState("new");

    const [ extColor, setExtColor ] = useState("any");
    const [ intColor, setIntColor ] = useState("any");
    const [ extColType, setExtColType ] = useState("Convertible")

    const [ photo, setPhoto ] = useState(true);

    const handlePhotoChange = (event, newValue) => {
        setPhoto(newValue);
    };

    const handleExtColType = (event, newValue) => {
        setExtColType(newValue);
    };

    const handleCylinder = (event, newValue) => {
        setCylinder(newValue);
    };
    const handleCylinderType = (event, newValue) => {
        setCylinderType(newValue);
    };
    const handleCondition = (event, newValue) => {
        setCondition(newValue);
    };


    
    const handlePriceChange = (event, newValue) => {
        setPriceValue(newValue);
    };
    const handleMillageChange = (event, newValue) => {
        setMillageValue(newValue);
    };
    const handleDayChange = (event, newValue) => {
        setDayValue(newValue);
    };
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // const handleTabChange = (event, newValue) => {
    //     setTabValue(newValue);
    // };
    const handleChangeIndex = (index) => {
        setValue(index);
      };
    const { openAdvSch, setOpenAdvSch } = props;

    return(
        <div className={classes.root} >
        <Dialog open={openAdvSch} maxWidth="lg" >
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
                <Container style={{flexGrow:1, padding: 10, height: 450}}>
                <Grid container>
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Make</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Make"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Toyota"}>Toyota</MenuItem>
                        <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                        <MenuItem value={"Ferari"}>Ferari</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item   md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Model</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Mode"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"CH - R"}>CH - R</MenuItem>
                        <MenuItem value={"MT - Q"}>MT - Q</MenuItem>
                        <MenuItem value={"KL - T"}>KL - T</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Trim</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Trim"
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
                    <Grid item  md={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Year"
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
                </Grid>
                <Grid container p={5}>
                    <AppBar position="static" color="default">
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
                    </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction} style={{width: "100%"}} >
                                <Grid container justify="flex-start" style={{paddingTop: "20px"}}>
                                    <Grid item p={2} lg={4} >
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
                                            onChange={handlePriceChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuePriceText}
                                            valueLabelFormat={valuePriceText}
                                        />
                                        </div>
                                    </Grid>
                                    <Grid item lg={4}>
                                        <div className={classes.rootSlider}>
                                        <Typography id="range-slider" gutterBottom>
                                            Millage<Typography variant="body2" color="textSecondary">
                                                (0 Miles to 10,000)
                                            </Typography>
                                        </Typography>
                                        <Slider
                                            value={millageValue}
                                            min={0}
                                            step={0.5}
                                            max={10}
                                            // scale={(x) => x * 50}
                                            onChange={handleMillageChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuePriceText}
                                            valueLabelFormat={valuePriceText}
                                        />
                                        </div>
                                    </Grid>
                                    <Grid item lg={4}>
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
                                            onChange={handleDayChange}
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
                                        onChange={handleCylinder}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value={4} aria-label="left aligned">
                                            4
                                        </ToggleButton>
                                        <ToggleButton value={6} aria-label="centered">
                                            6
                                        </ToggleButton>
                                        <ToggleButton value={8} aria-label="right aligned">
                                            8
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Cylinders</Typography>
                                    <ToggleButtonGroup
                                        value={cylinderType}
                                        exclusive
                                        onChange={handleCylinderType}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="any" aria-label="left aligned">
                                            Any
                                        </ToggleButton>
                                        <ToggleButton value="auto" aria-label="centered">
                                            Auto
                                        </ToggleButton>
                                        <ToggleButton value="manual" aria-label="right aligned">
                                            Manual
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Condition</Typography>
                                    <ToggleButtonGroup
                                        value={condition}
                                        exclusive
                                        onChange={handleCondition}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="new" aria-label="left aligned" >
                                            New
                                        </ToggleButton>
                                        <ToggleButton value="used" aria-label="centered">
                                            Used
                                        </ToggleButton>
                                        <ToggleButton value="salvage" aria-label="right aligned">
                                            Salvage
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            <Grid container
                                direction="row"
                                justify="space-evenly"
                                alignItems="stretch" spacing={8} style={{paddingTop: "20px", width: "100%"}}>
                                <Grid item md={6}  >
                                <Typography>Exterior Color</Typography>
                                <ButtonGroup >
                                    
                                    <Button variant="contained" className={classes.colbtn1} 
                                    onClick={()=> {setExtColor("white")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn2} 
                                    onClick={()=> {setExtColor("black")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn3} 
                                    onClick={()=> {setExtColor("lightgrey")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn4} 
                                    onClick={()=> {setExtColor("darkgrey")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn5} 
                                    onClick={()=> {setExtColor("red")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn6} 
                                    onClick={()=> {setExtColor("any")}} >?</Button>
                                    
                                </ButtonGroup>
                                </Grid>
                                <Grid item md={6}  >
                                <Typography>Interior Color</Typography>
                                <ButtonGroup >
                                    
                                    <Button variant="contained" className={classes.colbtn7} 
                                    onClick={()=> {setIntColor("black")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn8} 
                                    onClick={()=> {setIntColor("green")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn9} 
                                    onClick={()=> {setIntColor("lightbrown")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn10} 
                                    onClick={()=> {setIntColor("lightgrey")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn11} 
                                    onClick={()=> {setIntColor("brown")}} ></Button>
                                    <Button variant="contained" className={classes.colbtn12} 
                                    onClick={()=> {setIntColor("any")}} >?</Button>
                                    
                                </ButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid container style={{padding: "20px 0px 20px"}} >
                                <Grid item>
                                <Typography>Exterior Color</Typography>
                                <ToggleButtonGroup
                                        value={extColType}
                                        exclusive
                                        onChange={handleExtColType}
                                        aria-label="text alignment"
                                        size="large"
                                        >
                                        <ToggleButton value="Convertible" aria-label="left aligned" >
                                            Convertible
                                        </ToggleButton>
                                        <ToggleButton value="Sedan" aria-label="centered">
                                            Sedan
                                        </ToggleButton>
                                        <ToggleButton value="Hatchback" aria-label="right aligned">
                                            Hatchback
                                        </ToggleButton>
                                        <ToggleButton value="Sports" aria-label="right aligned">
                                            Sports
                                        </ToggleButton>
                                        <ToggleButton value="Trucks" aria-label="right aligned">
                                            Trucks
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                
                                </Grid>
                            </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            {/* <FormControl component="fieldset"> */}
                            {/* <FormGroup aria-label="position" row> */}
                                <FormControlLabel
                                value="start"
                                control={<Switch checked={photo} onChange={handlePhotoChange} inputProps={{ 'aria-label': 'primary checkbox' }} />}
                                label="Has Photos Attached"
                                labelPlacement="start"
                                />
                            {/* </FormGroup> */}
                            {/* </FormControl> */}
                            {/* <Switch inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
                            </TabPanel>
                        </SwipeableViews>
                </Grid>
                <Grid container justify="center">
                    <Button 
                        variant="contained" 
                        style={{height: 50, width: 200, padding: "2px"}}
                        color="primary"  >
                        Filter
                    </Button>
                </Grid>
                </Container>
            </DialogContent>
        </Dialog>
        </div>
    )
}