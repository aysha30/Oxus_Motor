import React, { useState } from 'react'
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import { makeStyles } from "@material-ui/core/styles";
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Language';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);
const WhiteLanguageIcon = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(LanguageIcon);
  const WhiteCallIcon = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(CallIcon);
  const WhiteLocationOnIcon = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(LocationOnIcon);

const useStyles = makeStyles((theme) => ({}));

export default function Contact() {
    const classes = useStyles();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState(0);
    const [ message, setMessage ] = useState('');

    const createMessage = () => {
        let newMessage = {
            "Name": firstName, 
            "Surname": lastName,
            "Email": email,
            "Phone": phone,
            "Message": message
        };
        return newMessage;
    }
    const mapStyles = {        
        height: "30vh",
        width: "100%"};
      
    const defaultCenter = {
        lat: 25.348766, lng: 55.405403
      }

    return (
        <React.Fragment>
            <Navbar />
            <h1>Contact </h1>
            <div >
                <Container maxWidth="sm" >
                    <Typography variant="h3" align="center" color="textPrimary" gutterBottom >
                        Contact Us
                    </Typography>
                    <Typography align="center" color="textSecondary" paragraph >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus non purus dapibus, mattis enim eu, 
                        efficitur velit. Fusce magna lacus, tincidunt sit amet semper nec,
                        laoreet at nunc. Suspendisse venenatis, 
                        tortor quis gravida molestie, urna arcu fermentum lectus
                    
                    </Typography>
                </Container>
                <article className="cf ma6 flex shadow ">
                    <Box className="w-30" bgcolor="primary.main">
                        <Box className="pa5">
                            <WhiteTextTypography variant="h6" gutterBottom>
                                Reach us
                            </WhiteTextTypography><hr color="white" />
                            <Grid container >
                                <Grid item xs={2}>
                                    <WhiteLanguageIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <WhiteTextTypography variant="body2" >
                                    oxusmotor.com
                                    </WhiteTextTypography>
                                </Grid><br />
                                <Grid item xs={2}>
                                    <WhiteCallIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <WhiteTextTypography variant="body2" >
                                    (376)196-3920
                                    </WhiteTextTypography>
                                </Grid>
                                <Grid item xs={2}>
                                    <WhiteLocationOnIcon />
                                </Grid>
                                <Grid item xs={10}>
                                    <WhiteTextTypography variant="body2" >
                                    4787 Blackwell Street, 
                                    Sharjah, United Arab Emirates
                                    </WhiteTextTypography>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        <Box>
                            <LoadScript
                            googleMapsApiKey='AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI'>
                                <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={10}
                                center={defaultCenter}
                                />
                            </LoadScript>
                        </Box>
                    </Box>
                    <Box className="w-70 bg-white pa5 flex-justify">
                        <Typography variant="h6" gutterBottom>
                            Send us a message
                        </Typography>
                        <hr/>
                        <Textfield 
                            style={{ marginRight: 80 }}
                            label='Name' 
                            type='text' 
                            placeholder="John"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <Textfield 
                            style={{ marginRight: 80 }}
                            label='Surname' 
                            type='text' 
                            placeholder="Doe"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        /><br />
                        <Textfield 
                            style={{ marginRight: 80 }}
                            label='Email' 
                            type='email' 
                            placeholder="Example@gmail.com"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Textfield 
                            style={{ marginRight: 80 }}
                            label='Phone' 
                            type='text'
                            placeholder="(999-9999-999)" 
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            
                        /><br />
                        <Textfield 
                            style={{ marginTop: 2 }}
                            label='Message' 
                            multiline
                            placeholder="Write Your message here"
                            type='text' 
                            rowsMax={4}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        /><br/>
                        <Button 
                            style={{ marginTop: 50 }}
                            variant="contained" 
                            bgcolor="primary.main"
                            fullWidth
                            type="submit"
                            onClick={createMessage}
                        >Submit Message</Button>
                    </Box>
                </article>
                
            </div>
            <Footer />
        </React.Fragment>
    );
}

