import React from 'react';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Message from './message';
import { Box, useMediaQuery, Typography, Container } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        textAlign: "center"
    }
}));


export default function Contact() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <React.Fragment>
            <Navbar />
            <h1 >"  "</h1>
            <Box className={classes.root}>
            <Container style={{marginBottom: 20, marginTop: "40px"}} >
                    <Typography variant="h4" 
                    align="center" 
                    color="textPrimary"
                    mt={9} gutterBottom >
                    <Box fontWeight="fontWeightBold">
                    Contact Us
                    </Box>
                        
                    </Typography>
                    <Typography 
                    className="pa4"
                    align="center" 
                    color="textSecondary" 
                    variant={matches ? "body2": "h6"}
                    paragraph >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non purus dapibus, mattis enim eu, 
                        efficitur velit. Fusce magna lacus, tincidunt sit amet semper nec,
                        laoreet at nunc. Suspendisse venenatis, 
                        tortor quis gravida molestie, urna arcu fermentum lectus
                    
                    </Typography>
                </Container>
            <Message />
            </Box>
            <Footer />
        </React.Fragment>
    );
}