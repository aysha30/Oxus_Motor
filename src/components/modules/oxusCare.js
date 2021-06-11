import React, { useState } from 'react';
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
    AppBar,
    Switch,
    FormGroup,
    FormControlLabel } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
    },
    closeButton:{
        
        // height: 50,
        backgroundColor: "#ffffff",
        color: "#f70707",
        // borderRadius: 50, 
        // margin: 20, 
        // border: 5,
        top:"5%",
        left:"90%",
    },
    chatBtn: {
        backgroundColor: "#3d4552",
        color: "#ffffff",
        height: 50,
        width: 400,
    },
    wappBtn: {
        backgroundColor: "#25d567",
        color: "#ffffff",
        height: 50,
        width: 400,
    },
    fbBtn: {
        backgroundColor: "#3d5b99",
        color: "#ffffff",
        height: 50,
        width: 400,
    },
    gmailBtn: {
        backgroundColor: "#c42320",
        color: "#ffffff",
        height: 50,
        width: 400,
    },
    phoneBtn: {
        backgroundColor: "#ffffff",
        height: 50,
        width: 400,
    },
}))

export default function OxusCare(props) {
    const classes = useStyles();
    const { openCare, setOpenCare } = props;
    return(
        <div className={classes.root}>
        <Dialog open={openCare} maxWidth="md">
            <DialogTitle>
                <Button 
                    className={classes.closeButton}
                    onClick={() => setOpenCare(false)}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent>
                <Grid container direction="column" spacing={2} style={{padding: "20px 100px"}}>
                    <Grid item>
                        <Button className={classes.chatBtn} >
                        <QuestionAnswerOutlinedIcon /> &nbsp;
                        <Typography variant="button">
                            Start Chatting
                        </Typography>
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button className={classes.wappBtn} >
                        <WhatsAppIcon /> &nbsp;
                        <Typography variant="button">
                            Chat on WhatsApp
                        </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.fbBtn}>
                        <FacebookIcon /> &nbsp;
                        <Typography variant="button">
                            Chat on FaceBook
                        </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.gmailBtn}>
                        <MailOutlineOutlinedIcon /> &nbsp;
                        <Typography variant="button">
                            Send an Email
                        </Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.phoneBtn}>
                        <PhoneIcon /> &nbsp;
                        <Typography variant="button">
                            Copy Phone Number
                        </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
        </div>
    );
}