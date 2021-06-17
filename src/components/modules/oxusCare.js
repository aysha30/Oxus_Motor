import React from 'react';
import { Dialog, 
    DialogTitle, 
    DialogContent, 
    Button, 
    Grid, 
    Typography, 
    } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
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
        position: "absolute",
        // height: 50,
        backgroundColor: "#ffffff",
        color: "#f70707",
        // borderRadius: 50, 
        // margin: 20, 
        // border: 5,
        top:"5px",
        
        [theme.breakpoints.down('xs')]:{
            left:"230px", 

        },
        [theme.breakpoints.up('sm')]:{
            left:"530px",
        },
    },
    chatBtn: {
        backgroundColor: "#3d4552",
        color: "#ffffff",
        height: 50,
        width: "90%",
    },
    wappBtn: {
        backgroundColor: "#25d567",
        color: "#ffffff",
        height: 50,
        width: "90%",
    },
    fbBtn: {
        backgroundColor: "#3d5b99",
        color: "#ffffff",
        height: 50,
        width: "90%",
    },
    gmailBtn: {
        backgroundColor: "#c42320",
        color: "#ffffff",
        height: 50,
        width: "90%",
    },
    phoneBtn: {
        backgroundColor: "#ffffff",
        height: 50,
        width: "90%",
    },
    DialogContent:{
        [theme.breakpoints.down('xs')]:{
            width: "300px", 

        },
        [theme.breakpoints.up('sm')]:{
            width: "600px",
        },
    }
}))

export default function OxusCare(props) {
    const classes = useStyles();
    const { openCare, setOpenCare } = props;
    return(
        <div className={classes.root}>
        <Dialog open={openCare} >
            <DialogTitle>
                <Button 
                    className={classes.closeButton}
                    onClick={() => setOpenCare(false)}>
                    <CloseIcon />
                </Button>
            </DialogTitle>
            <DialogContent className={classes.DialogContent}>
                <Grid container direction="column" spacing={2} justify="center" >
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