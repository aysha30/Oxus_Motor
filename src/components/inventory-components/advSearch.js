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
    AppBar } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';

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
                    gutterBottom >
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
                        // label="Make62"
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
                        // label="Age"
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
                        // label="Age"
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
                        // label="Age"
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
                                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                        <Button>4</Button>
                                        <Button>6</Button>
                                        <Button>8</Button>
                                    </ButtonGroup>
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Cylinders</Typography>
                                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                        <Button>Any</Button>
                                        <Button>Auto</Button>
                                        <Button>Manual</Button>
                                    </ButtonGroup>
                                    </Grid>
                                    <Grid item md={4} className={classes.rootButtonGrp}>
                                    <Typography>Condition</Typography>
                                    <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                        <Button>New</Button>
                                        <Button>Used</Button>
                                        <Button>Salvage</Button>
                                    </ButtonGroup>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                            Item Two
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                            Item Three
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