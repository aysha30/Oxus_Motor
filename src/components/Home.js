import React, { useState } from "react";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../assets/card2.png";
import img2 from "../assets/car3.png";
import img3 from "../assets/car4.png";
import "../App.css";
//import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-elastic-carousel";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
 formControl: {
  margin: theme.spacing(1),
  minWidth: 120,
 },
 selectEmpty: {
  marginTop: theme.spacing(2),
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

 return (
  <React.Fragment>
   <Navbar />
   <Box bgcolor="primary.main" color="white" mt={8}>
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

       {/* <div>
        <img className={classes.img} src={img1} />
        <img className={classes.img} src={img2} />
        <img className={classes.img} src={img3} />
         <img className={classes.img} src={img1} className="sliderimg" /> </div> */}
      </Box>
      <Box p={5}></Box>
      <Box p={5}></Box>
     </Typography>{" "}
    </Container>{" "}
   </Box>
   <Box m={5}>
    <Container>
     <Paper>
      <Grid container> </Grid>
     </Paper>
    </Container>
   </Box>
   <Footer />
  </React.Fragment>
 );
}
