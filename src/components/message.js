import React, { useState } from 'react';
import { Box, TextField, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Language';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useForm } from 'react-hook-form';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
            width: '30ch',
            height: "auto",
        },
        [theme.breakpoints.down('xs')]:{
            margin: "5px auto",
            width: "70%",
            height: "100%",
        },
        flexGrow: 1,
    },
    grid:{
        width: "100%",
        height: "100%",
        display: "flex",
        
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
        height: "auto",
        [theme.breakpoints.down('xs')]:{
            width: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            width: "40%",
        },
    },
    reachus:{
        padding: "50px 50px 0px 50px",
        width: "100%",
        height: "auto",
    },
    sendus:{
        padding: "50px",
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
            margin: "15px 0px",
            padding: "20px 5px",
            width: "50%",
            height: "auto",
        },
        
    },
    messagefiels:{
        [theme.breakpoints.down('xs')]:{
            width: "100%",
            height: "50px",
        },
        [theme.breakpoints.up('sm')]:{
            margin: "15px 0px",
            padding: "20px 0px",
            width: "100%",
            height: "auto",
        },
    },
    googlemap : {
        align: "flex-end",
        [theme.breakpoints.between("600px", "1000px")]: {
            width:"auto",
            height:"auto",
        },
    }, 
    paper: {
        display: "flex",
        boxShadow: "10px 10px 10px #aaaaaa",
        [theme.breakpoints.down('xs')]:{
            width: "100%",
            marginBottom: "100px"
        },
        [theme.breakpoints.up('sm')]:{
            width: "80%", 
            marginBottom: "100px"
        },
    }

}));

export default function Message() {


    const classes = useStyles();


    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (datas) => {
        const res = await fetch('/contactUs/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: datas.firstName,
                surname: datas.lastName,
                email: datas.email,
                phone: datas.phone,
                message: datas.message
            })
        })
        const data = await res.json();
console.log(data);
        
        // document.getElementById('formsubmit').reset();
    };

    

    

    return(
        <div>
        <Grid container justifyContent="center" alignItems="center" >
            <Paper 
            className={classes.paper}
            align="left" >
            <Grid container direction="row" className={classes.grid} >
            
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
                        <LanguageIcon  /> &nbsp; oxusmotor.com
                    </Typography><br/>
                    
                    <Typography variant="subtitle1" className={classes.wrapIcon}>
                        <CallIcon /> &nbsp; (376)196-3920
                    </Typography><br/>
                    
                    <Typography variant="subtitle1" className={classes.wrapIcon}>
                        <LocationOnIcon />  &nbsp;
                        4787 Blackwell Street, 
                        Sharjah, United Arab Emirates
                    </Typography>
                </Box>
                    <Box className={classes.googlemap} mt={5}>
                    <iframe title="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230818.73494937457!2d55.406180553978885!3d25.319562846321514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1623924574886!5m2!1sen!2sin" 
                    width="100%" height="270" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    
                        </Box>
                        
                </Box>
                <Box 
                    className={classes.sendus} 
                    bgcolor="white" 
                    color="text.primary" 
                    
                >
                    <Typography variant="h6">
                        Send us a message
                    </Typography><hr />
                    <form method="POST" id="formsubmit" onSubmit={handleSubmit(onSubmit)}  >
                        <TextField 
                            // id="standard-size-normal"
                            className={classes.textf}
                            label="First Name"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name="firstName"
                            placeholder="John"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            {...register("firstName", {
                                required: "First Name is required.",
                            })}
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName?.message}

                        /> 
                        <TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Last Name"
                            type="text"
                            name="lastName"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Doe"
                            {...register("lastName", {
                                required: "Last Name is required.",
                            })}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}

                        /> <br/>
                        <TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Email"
                            type="email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="Example@gmail.com"
                            name="email"
                            {...register("email", {
                                required: "Email is required.",
                            })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}

                        /><TextField 
                            id="standard-size-normal"
                            className={classes.textf}
                            label="Phone"
                            type="tel"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="(999 999 9999)"
                            // pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                            // maxlength="12"
                            // name="phone"
                            // title="Ten digits code"
                            {...register("phone", {
                                required: "Phone number is required.",
                                
                            })}
                            error={Boolean(errors.phone)}
                            helperText={errors.phone?.message}
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
                            name="message"
                            {...register("message", {
                                required: "Message is required.",
                            })}
                            error={Boolean(errors.message)}
                            helperText={errors.message?.message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}

                        /><br/>
                        <Button
                            variant="contained"
                            type="submit" 
                            style={{ padding: "10px", width: "100%", height: "auto", marginTop: "40px" }}
                            color="primary"
                            // onClick={createMessage}
                        >
                            Submit Message
                        </Button>
                        

                    </form>
                    
                </Box>
        </Grid>
        </Paper>
        </Grid>
    
        </div>
    )
}