import React, { useState } from 'react';
import { Box, TextField, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Language';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '30ch',
            height: "auto",
        },
        [theme.breakpoints.down('xs')]:{
            margin: "5px auto",
            width: "80%",
            height: "100%",
        },
        flexGrow: 1,
      },
    grid:{
        margin: "0px",
        width: "100%",
        height: "100%",
        
    },
    wrapIcon: {
        margin: "5px auto",
        verticalAlign: 'middle',
        display: 'inline-flex',
        [theme.breakpoints.down('xs')]:{
            variant: "subtitle1",
        },
        [theme.breakpoints.up('sm')]:{
            variant: "subtitle1",
        },
    },
    reachusbox:{
        height: "100%",
        [theme.breakpoints.down('xs')]:{
            width: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            width: "40%",
        },
    },
    reachus:{
        padding: "20px",
        width: "100%",
        height: "auto",
    },
    sendus:{
        [theme.breakpoints.down('xs')]:{
            width: "100%",
            height: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            width: "60%",
            height: "auto",
            
        },
    },
    textf: {
        [theme.breakpoints.down('xs')]:{
            width: "100%",
            height: "50px",
        },
        [theme.breakpoints.up('sm')]:{
            margin: "10px 0px",
            padding: "10px",
            width: "40%",
            height: "70px",
        },
        
    },
    messagefiels:{
        [theme.breakpoints.down('xs')]:{
            width: "100%",
            height: "50px",
        },
        [theme.breakpoints.up('sm')]:{
            padding: "10px", 
            width: "80%", 
            height: "70px" ,
        },
    },
    googlemap : {
        align: "flex-end",
        [theme.breakpoints.between("600px", "1000px")]: {
            width:"100%",
            height:"100%",
          },
    }

}));

export default function Message() {


    const classes = useStyles();
    const theme = useTheme();

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
        height: "200px",
        width: "100%"};
      
    const defaultCenter = {
        lat: 25.348766, lng: 55.405403
      }

    return(
        <div>
        <article 
            className="flex-justify shadow ma5" 
            align="left" >
        <Grid container={true} className={classes.grid} >
            
            <Box 
                className={classes.reachusbox}
                bgcolor="primary.main" 
                color="background.paper"
            >
                <Box
                    className={classes.reachus} >
                    <Typography variant="h6">
                        Reach us
                    </Typography><hr color="white" />
                    
                    <Typography  className={classes.wrapIcon}>
                        <LanguageIcon  />  oxusmotor.com
                    </Typography><br/>
                    
                    <Typography variant="subtitle1" className={classes.wrapIcon}>
                        <CallIcon />  (376)196-3920
                    </Typography><br/>
                    
                    <Typography variant="subtitle1" className={classes.wrapIcon}>
                        <LocationOnIcon />  
                        4787 Blackwell Street, 
                        Sharjah, United Arab Emirates
                    </Typography>

                </Box>
                    <Box className={classes.googlemap} mt={5}>
                            <LoadScript
                            googleMapsApiKey='AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI'>
                                <GoogleMap
                                mapContainerStyle={mapStyles}
                                zoom={15}
                                center={defaultCenter}
                                />
                            </LoadScript>
                        </Box>
                        
                </Box>
            
            
            
                <Box 
                    className={classes.sendus} 
                    bgcolor="white" 
                    color="text.primary" 
                    p={5} pr={5}
                >
                    <Typography variant="h6">
                        Send us a message
                    </Typography><hr />
                    <form  display="flex" autoComplete="off" >
                        <TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="John"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            

                        />
                        <TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Surname"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Doe"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}

                        /> <br/>
                        <TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Example@gmail.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}

                        /><TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Phone"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="(999 9999 999)"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}

                        /><br />
                        <TextField 
                            id="standard-size-normal"
                            className={classes.messagefiels}
                            label="Message"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Write your message here"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}

                        /><br/>
                        <Button
                            variant="contained" 
                            style={{ padding: "10px", width: "80%", height: "50px", }}
                            color="primary"
                            onClick={createMessage}
                        >
                            Submit Message
                        </Button>
                        

                    </form>
                    
                </Box>
        </Grid>
        </article>
        </div>
    )
}