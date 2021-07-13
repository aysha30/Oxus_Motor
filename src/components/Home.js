import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Link, MenuItem, Typography } from "@material-ui/core";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import deals from "../assets/deals.png";
import RecentInOxus from "./home-component/recent";
import ExploreCar from "./exploreCar";
import Brands from './home-component/brands';
import SignUp from './home-component/signUp';
import LatestNews from './home-component/latestNews';
import CheckOut from './home-component/CheckOut';
import SedanInOxus from './home-component/sedanInOxus';
import SUVInOxus from './home-component/suvInOxus';
import LuxuryInOxus from './home-component/luxuryInOxus';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { InventoryContext } from "../Context/InventoryContext/inventoryContext";
import { WholeContext } from "../App";


const useStyles = makeStyles((theme) => ({
   formControlBtn: {
      margin: theme.spacing(3),
      minWidth: 170,
      minHeight: 50,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
   diffPaper: {
      margin: theme.spacing(2),
   },
   formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
   },
}));

const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 3 },
   { width: 1260, itemsToShow: 3 },
];

export default function Home() {
   const classes = useStyles();
   const myStyle = {
      height: "100",
      width: "100",
   };


   const [ make, setMake ] = useState('Toyota');
   const [ model, setModel ] = useState('CH-R');
   const [ trim, setTrim ] = useState('XLE'); 
   const [ year, setYear ] = useState(2019);
      // console.log(make, model, trim, year);
   const {setOpenAdvSch} = useContext(WholeContext)

   const settings = {
      infinite: true,
      lazyload: true,
      speed: 300,
      slideToShow: 3,
      centerMode: true,
      centerPadding: 0,
   }

   return (
      <React.Fragment>
      <InventoryContext.Provider 
            value={{
               make, setMake, 
               model, setModel,
               trim, setTrim,
               year, setYear,
            }}>
         <Navbar />
         <Box bgcolor="primary.main" style={{ height: "600px", marginTop: "60px", color:"#fff" }}>
            <Container maxWidth="lg">
               <Typography variant="h4" align="center">
                  <Grid container>
                     <Grid item xs={12} sm={3}></Grid>
                     <Grid item xs={12} sm={6}>
                        <Box pt={3} fontWeight="fontWeightBold">
                           {" "}
                           Cars Dealing Experience.
                        </Box>
                        <Box p={0.5} fontWeight="fontWeightBold">
                           Redefined
                        </Box>
                        <Box pt={3}>
                           <Button variant="contained">
                              <Typography color="inherit" variant="button">
                                 Explore Cars
                              </Typography>
                           </Button>
                        </Box>{" "}
                     </Grid>
                     <Grid item xs={12} sm={3}></Grid>
                  </Grid>
                  <Box >
                     <ExploreCar />
                  </Box>
                  <Box p={5}></Box>
                  <Box p={5}></Box>
               </Typography>
            </Container>
         </Box>
         <Box p={2} mt={7}>
            <Container>
               <Paper elevation={2}>
                  <Grid container>
                     <Grid item xs={12} sm={12}>
                        <Typography>
                           <Box pl={5} pt={2} fontSize="h5.fontSize">
                              Find Your Car
                              <Box fontSize="subtitle1.fontSize">(Advanced Search)</Box>
                           </Box>
                        </Typography>
                     </Grid>
                     <Grid item xs={12} sm>
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
                     <Grid item xs={12} sm>
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
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Trim</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={trim}
                        onChange={(trim) => { setTrim(trim.target.value)}}
                        label="Trim"
                        >
                        <MenuItem value="XLE">XLE</MenuItem>
                        <MenuItem value="XLA">TLE</MenuItem>
                        <MenuItem value="MLE">MLE</MenuItem>
                        </Select>
                     </FormControl>
                     </Grid>
                     <Grid item xs={12} sm>
                     <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={year}
                        onChange={(year) => { setYear(year.target.value)}}
                        label="Year"
                        >
                        <MenuItem value={2019}>2019</MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        </Select>
                     </FormControl>
                     </Grid>
                     
                        <Grid item xs={12} sm>
                           <NavLink to="/Inventory">
                           <Button
                              onClick={() => setOpenAdvSch(true)}
                              type='submit'
                              variant="contained" 
                              style={{height: 50, width: 150, padding: "2px", margin:"10px" }}
                              color="primary"  >
                              Search
                           </Button>
                           </NavLink>
                        
                        </Grid>
                     
                  </Grid>
               </Paper>
            </Container>
         </Box>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               What Makes Us Different ?
            </Box>
         </Typography>
         <Box m={2}>
            <Container>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Best Deals In Town"
                                 height="180"
                                 image={deals}
                                 title="Best Deals In Town"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Best Deals In Town
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Best Deals In Town"
                                 height="180"
                                 image={deals}
                                 title="Best Deals In Town"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Exports Experts
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Paper elevation={3} className={classes.diffPaper}>
                        <Card className={classes.root}>
                           <div>
                              <CardMedia
                                 component="img"
                                 alt="Extensive Support"
                                 height="180"
                                 image={deals}
                                 title="Extensive Support"
                              />
                              <CardContent>
                                 <Typography gutterBottom align="center" variant="h5" component="h2">
                                    Extensive Support
                                 </Typography>
                                 <Typography
                                    variant="body1"
                                    align="center"
                                    color="textSecondary"
                                    component="p"
                                 >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                 </Typography>
                              </CardContent>
                           </div>
                        </Card>
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
         </Box>
         <Box>
            <Container>
               <Paper elevation={4} style={{ backgroundColor: '#ddd' }}>
                  <Box m={7} pt={4}>
                     <Typography gutterBottom align="center" variant="h5" component="h2">
                        About Us
                     </Typography>
                  </Box>
                  <Box m={4}>
                     <Typography
                        variant="body1"
                        align="center"
                        color="textSecondary"
                        component="p"
                     >
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except AntarcticaLizards are a
                        widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except AntarcticaLizards are a widespread group of
                        squamate reptiles, with over 6,000 species, ranging across all
                        continents except AntarcticaLizards are a widespread group of squamate
                        reptiles, with over 6,000 species, ranging across all continents except
                        Antarctica
                     </Typography>
                  </Box>
                  <Box align="center" p={5}>
                     <Button variant="contained" color="primary">
                        Read More
                     </Button>
                  </Box>
               </Paper>
            </Container>
         </Box>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Recent in Oxus
            </Box>
         </Typography>
         <RecentInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>

         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Browse by brand
            </Box>
         </Typography>
         <Brands/>


         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Sedans in Oxus
            </Box>
         </Typography>
         <SedanInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               SUV's in Oxus
            </Box>
         </Typography>
         <SUVInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box component={Link}
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <Typography variant="h5" align="center">
            <Box m={3} p={3} fontWeight="fontWeightBold">
               Luxury in Oxus
            </Box>
         </Typography>
         <LuxuryInOxus />
         <Grid container fullwidth='true' justifyContent="center" style={{marginTop: "90px"}} >
            <Grid item>
            <Typography >
            <NavLink to="/Inventory" >
               <Box
               fontWeight="fontWeightBold"
               underline="hover"
               color="#000"
               >
                  View all <ExpandMoreIcon />
               </Box></NavLink>
            </Typography>
            
            </Grid>
         </Grid>
         <SignUp />
         <LatestNews />
         <CheckOut/>
         <Footer />
         </InventoryContext.Provider>
      </React.Fragment>
   );
}
