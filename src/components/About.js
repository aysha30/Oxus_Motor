import React from "react";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Car1 from "../assets/car1.jpeg";
//import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
 root: {
  maxWidth: 2000,
 },
 media: {
  height: 180,
 },
 img: {
  height: 300,
  width: 400,
 },
}));

export default function About() {
 const classes = useStyles();

 return (
  <React.Fragment>
   <CssBaseline />
   <Navbar />
   <Container>
    <Box m={4} style={{ marginTop: "100px" }}>
     <Typography variant="h5" align="center">
      About Us
     </Typography>
    </Box>
    <Box justifyContent="center" m={0} p={3}>
     <div className={classes.root}>
      <Paper className={classes.paper} elevation={2} xs={12} variant="outlined">
       <Grid container>
        <Box p={2}>
         <Grid item>
          <img className={classes.img} alt="CAR" src={Car1} />
         </Grid>
        </Box>
        {/* <Grid item xs={2} /> */}
        <Grid item xs={8} sm container>
         <Grid item xs container direction="column" spacing={5}>
          <Grid item xs={12}>
           {/* <Typography gutterBottom variant="subtitle1">
            Standard license
           </Typography> */}
           <Box p={2}>
            <Typography variant="body2">
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text
             ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book. It has survived not
             only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s
             with the release of Letraset sheets containing Lorem Ipsum
             passages, and more recently with desktop publishing software like
             Aldus PageMaker including versions of Lorem Ipsum. It has survived
             not only five centuries, but also the leap into electronic
             typesetting, remaining essentially unchanged.
            </Typography>
           </Box>
           <Box p={2}>
            <Typography variant="body2">
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text
             ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book. It has survived not
             only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged.
            </Typography>
           </Box>
          </Grid>
         </Grid>
        </Grid>
       </Grid>
      </Paper>
     </div>
    </Box>
   </Container>
   <Container>
    <Box justifyContent="center" m={0} p={3}>
     <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
       <Grid container>
        {/* <Grid item xs={2} /> */}
        <Grid item xs={8} sm container>
         <Grid item xs container direction="column" spacing={5}>
          <Grid item xs>
           <Box p={2}>
            <Typography variant="body2">
             Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been the industry's standard dummy text
             ever since the 1500s, when an unknown printer took a galley of type
             and scrambled it to make a type specimen book. It has survived not
             only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s
             with the release of Letraset sheets containing Lorem Ipsum
             passages, and more recently with desktop publishing software like
             Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
           </Box>
          </Grid>
         </Grid>
        </Grid>
        <Box p={2}>
         <Grid item>
          <img className={classes.img} alt="CAR" src={Car1} />
         </Grid>
        </Box>
       </Grid>
      </Paper>
     </div>
    </Box>
   </Container>

   <Footer />
  </React.Fragment>
 );
}
