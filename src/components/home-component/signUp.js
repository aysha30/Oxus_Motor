import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Typography,Paper, InputBase,
    IconButton,
} from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        margin: "50px 0 100px 0",
        [theme.breakpoints.down('sm')]: {
            padding: "50px"
        },
        [theme.breakpoints.up('md')]: {
            padding: "50px 400px",

        },
    },
    paper: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: "400px",
        marginTop: "50px",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

function SignUp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box
                className={classes.reachusbox}
                bgcolor="primary.main"
                color="background.paper"
            >
                <Typography variant="h5"
                    align="center"
                >
                    <Box fontWeight="fontWeightBold" style={{ padding: "0px 0px 30px" }} >
                        Sign up to Get Connected
                    </Box>
                </Typography>
                <Typography variant="subtitle2"
                    align="center"
                >
                    <Box alignContent="center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        ever since the
                    </Box>


                </Typography>
                <Grid container justifyContent="center" alignItems="center">
                    <Paper component="form" className={classes.paper}>

                        <InputBase
                            className={classes.input}
                            placeholder="Enter Your Email Address"
                        />
                        <IconButton type="submit" className={classes.iconButton}>
                            <TelegramIcon />
                        </IconButton>
                    </Paper>
                </Grid>

            </Box>

        </div>
    )
}

export default SignUp;
