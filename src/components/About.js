

import React from "react";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { 
    Box, 
    Grid, 
    Typography, 
    Button,  
    Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "100px 0px",
        [theme.breakpoints.up(1201)]:{
            padding: "100px 150px 150px ",
        }
    },
    paraCont: {
        margin: "30px 0px",
        height: "auto",
        
    },
    imgCont: {
        [theme.breakpoints.down('md')]:{
            width: "100%",
        },
        [theme.breakpoints.up('md')]:{
            width: "40%"
        },
    },
    img: {
        // height: 350,
        // backgroundColor: "#eae9ea",
        [theme.breakpoints.down('md')]:{
            width: "100%",
            height: "100%",
            // margin: "0px 15px",
        },
        [theme.breakpoints.up('md')]:{
            width: "100%",
        },
    },
    para: {
        padding: "20px",
        [theme.breakpoints.down('md')]:{
            width: "",
        },
        [theme.breakpoints.up('md')]:{
            width: "60%",
            // display:"flex",
        },
    },
    icon: {
        height: "100px",
        width: "auto",
        borderBlockColor: "black",
    }
}));

export default function About() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Navbar />
            <div className={classes.root}> 
                <Container >
                    <Typography variant="h4" 
                    align="center" 
                    color="textPrimary">
                    <Box fontWeight="fontWeightBold" style={{padding: "0px 0px 30px"}} >
                        About Us
                    </Box>
                    </Typography>
                </Container>
                <Grid container spacing={3} >
                <Grid item container direction="row" className={classes.paraCont}>
                    <Grid item className={classes.imgCont} >
                        <img 
                        className={classes.img} 
                        src="https://thumbs.dreamstime.com/b/image-empty-car-dealership-showroom-interior-paris-france-oct-wide-angle-view-empty-car-dealership-showroom-interior-169124184.jpg"
                        alt="car"  />
                    </Grid>
                    <Grid item className={classes.para} >
                        <Typography variant="subtitle2">
                            <Box lineHeight={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            
                            </Box>

                        </Typography>
                        

                    </Grid>
                </Grid>
                <Grid item container direction="row" className={classes.paraCont}>
                    
                    <Grid item className={classes.para} >
                        <Typography variant="h5" 
                        align="left" 
                        color="primary">
                        <Box fontWeight="fontWeightBold" style={{padding: "0px 0px 30px"}} >
                            Suspendisse Pharetra
                        </Box>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Box lineHeight={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            
                            </Box>

                        </Typography>
                        <Button
                            variant="contained"
                            // type="submit" 
                            style={{ padding: "10px", width: "200px", height: "50px",margin: "20px 0px" }}
                            color="primary"
                            // onClick={createMessage}
                        >
                            Read more ...
                        </Button>
                    </Grid>
                    <Grid item className={classes.imgCont} >
                        <img 
                        className={classes.img}
                        src="https://thumbs.dreamstime.com/b/image-empty-car-dealership-showroom-interior-paris-france-oct-wide-angle-view-empty-car-dealership-showroom-interior-169124184.jpg"
                        alt="car"  />
                    </Grid>
                </Grid>
                </Grid>
            <Grid container spacing={3} >
                <Grid item sm={6} container direction="row" justify="center">
                    <Grid item>
                        <Box border={4} borderRadius={10} borderColor="#ceba96" p={3}>
                            <img className={classes.icon} 
                            src="https://png.pngitem.com/pimgs/s/510-5107145_user-check-list-icon-hd-png-download.png"
                            alt="experience" />
                        </Box>
                    </Grid>
                    <Grid item sm={8} > 
                    <Typography variant="h6"
                        align="left" 
                        color="primary">
                        <Box fontWeight="fontWeightBold" style={{padding: "5px 15px"}} >
                            Experienced
                        </Box>
                    </Typography>
                    <Typography variant="subtitle2">
                        <Box lineHeight={1.5} p={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an un
                        </Box>
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} container direction="row" justify="center">
                    <Grid item>
                        <Box border={4} borderRadius={10} borderColor="#ceba96" p={3}>
                            <img className={classes.icon} 
                            src="https://png.pngitem.com/pimgs/s/510-5107145_user-check-list-icon-hd-png-download.png"
                            alt="experience" />
                        </Box>
                    </Grid>
                    <Grid item sm={8}> 
                    <Typography variant="h6"
                        align="left" 
                        color="primary">
                        <Box fontWeight="fontWeightBold" style={{padding: "5px 15px"}} >
                            Extensive Support
                        </Box>
                    </Typography>
                    <Typography variant="subtitle2">
                        <Box lineHeight={1.5} p={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an un
                        </Box>
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} container direction="row" justify="center">
                    <Grid item>
                        <Box border={4} borderRadius={10} borderColor="#ceba96" p={3}>
                            <img className={classes.icon} 
                            src="https://png.pngitem.com/pimgs/s/510-5107145_user-check-list-icon-hd-png-download.png"
                            alt="experience" />
                        </Box>
                    </Grid>
                    <Grid item sm={8}> 
                    <Typography variant="h6"
                        align="left" 
                        color="primary">
                        <Box fontWeight="fontWeightBold" style={{padding: "5px 15px"}} >
                            Client Oriented
                        </Box>
                    </Typography>
                    <Typography variant="subtitle2">
                        <Box lineHeight={1.5} p={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an un
                        </Box>
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} container direction="row" justify="center">
                    <Grid item>
                        <Box border={4} borderRadius={10} borderColor="#ceba96" p={3}>
                            <img className={classes.icon} 
                            src="https://png.pngitem.com/pimgs/s/510-5107145_user-check-list-icon-hd-png-download.png"
                            alt="experience" />
                        </Box>
                    </Grid>
                    <Grid item sm={8}> 
                    <Typography variant="h6"
                        align="left" 
                        color="primary">
                        <Box fontWeight="fontWeightBold" style={{padding: "5px 15px"}} >
                            Export Experts
                        </Box>
                    </Typography>
                    <Typography variant="subtitle2">
                        <Box lineHeight={1.5} p={2}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an un
                        </Box>
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
            </div>
            <Footer />
        </React.Fragment>
    );
}