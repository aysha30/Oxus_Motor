import React, { useState } from "react";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Typography } from "@material-ui/core";
//import "react-alice-carousel/lib/alice-carousel.css";

import "../App.css";
//import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
//import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import deals from "../assets/deals.png";
import bg from "../assets/bg.jpg";
import img1 from "../assets/card2.png";
import img2 from "../assets/car3.png";
import img3 from "../assets/car4.png";
import Slider from "react-slick"
import CssBaseline from "@material-ui/core/CssBaseline";
import RecentInOxus from "./recent";

const images = [img1, img2, img3, deals]

const useStyles = makeStyles((theme) => ({
   formControl: {
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

   const [make, setMake] = React.useState("");
   const handleCh1 = (e) => setMake(e.target.value);

   const [model, setModel] = React.useState("");
   const handleCh2 = (e) => setModel(e.target.value);

   const [trim, setTrim] = React.useState("");
   const handleCh3 = (e) => setTrim(e.target.value);
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
         <Navbar />
         <Box bgcolor="primary.main" color="white" mt={7}>
            <Container maxWidth="lg">
               <Typography variant="h4" align="center">
                  <Grid container>
                     <Grid item xs={12} sm={3}></Grid>
                     <Grid item xs={12} sm={6}>
                        <Box mt={3} fontWeight="fontWeightBold">
                           {" "}
                           Cars Dealing Experience.
                        </Box>
                        <Box p={0.5} fontWeight="fontWeightBold">
                           Redefined
                        </Box>
                        <Box mt={3}>
                           <Button variant="contained">
                              <Typography color="white" variant="button">
                                 Explore Cars
                              </Typography>
                           </Button>
                        </Box>{" "}
                     </Grid>
                     <Grid item xs={12} sm={3}></Grid>
                  </Grid>
                  <Box p={6}>
                     <Carousel breakPoints={breakPoints}>
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img1}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img2}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img3}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img1}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img2}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img3}
                        />
                        <img
                           className={classes.img}
                           style={{ height: "200px", width: "300px" }}
                           src={img1}
                        />
                     </Carousel>
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
                        <Box>
                           <FormControl className={classes.formControl}>
                              <InputLabel>Make</InputLabel>
                              <Select native onChange={handleCh1}>
                                 <option aria-label="None" value="" />
                                 <option value={1}>Toyota</option>
                                 <option value={2}>Maserati</option>
                                 <option value={3}>Porsche</option>
                                 <option value={4}>Tesla</option>
                              </Select>
                           </FormControl>
                        </Box>{" "}
                     </Grid>
                     <Grid item xs={12} sm>
                        <Box>
                           <FormControl className={classes.formControl}>
                              <InputLabel>Model</InputLabel>
                              <Select native onChange={handleCh2}>
                                 <option aria-label="None" value="" />
                                 <option value={1}>A</option>
                                 <option value={2}>B</option>
                                 <option value={3}>C</option>
                                 <option value={4}>D</option>
                              </Select>
                           </FormControl>
                        </Box>{" "}
                     </Grid>
                     <Grid item xs={12} sm>
                        <Box>
                           <FormControl className={classes.formControl}>
                              <InputLabel>Trim</InputLabel>
                              <Select native onChange={handleCh3}>
                                 <option aria-label="None" value="" />
                                 <option value={1}>1</option>
                                 <option value={2}>2</option>
                                 <option value={3}>3</option>
                                 <option value={4}>4</option>
                              </Select>
                           </FormControl>
                        </Box>
                     </Grid>
                     <Grid item xs={12} sm>
                        <Box>
                           {" "}
                           <FormControl className={classes.formControl}>
                              <InputLabel htmlFor="stp-native-select">Year</InputLabel>
                              <Select native defaultValue="" id="stp-native-select">
                                 <option aria-label="None" disabled value="" />
                                 <option value={1}>Option 1</option>
                                 <option value={2}>Option 2</option>
                                 <option value={3}>Option 3</option>
                                 <option value={4}>Option 4</option>
                              </Select>
                           </FormControl>
                        </Box>
                     </Grid>
                     <Box>
                        <Grid item xs={12} sm>
                           <Box>
                              <FormControl className={classes.formControl}>
                                 <Button variant="contained" color="primary">
                                    <Typography color="white" variant="button">
                                       Search
                                    </Typography>
                                 </Button>
                              </FormControl>
                           </Box>
                        </Grid>
                     </Box>
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
         <Box m={5} p={3}>
            <Container>
               <Paper elevation={4} style={{ backgroundImage: `url(${bg})` }}>
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
               Recent In Oxus
            </Box>
         </Typography>
<RecentInOxus />
         {/* <Box p={5} m={3}>
            <Slider>
               <img src={img1} width="200" height="100" alt={img1} />
               <img src={img2} width="200" height="100" alt={img2} />
               <img src={img3} width="200" height="100" alt={img3} />

            </Slider>
         </Box> */}

         <Footer />
      </React.Fragment>
   );
}
