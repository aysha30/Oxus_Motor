import React, { useState } from 'react';
import { Box, Typography, CardActionArea, CardHeader } from '@material-ui/core';
import { Grid, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useHistory, generatePath } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        paddingTop: theme.spacing(2),
        flexGrow: 1,
        height: "auto",
        // [theme.breakpoints.down(1200)]:{
        //     height:"auto",
        // },
        // [theme.breakpoints.up(1201)]:{
        //     height: "30",
        // },
    },
    img: {
        height: 260,
        backgroundColor: "#eae9ea",
        [theme.breakpoints.down(840)]:{
            // padding: "10px",
            width: "100%",
        },
        [theme.breakpoints.up('sm')]:{
            width: 400,
        },
    },
    // img: {
    //     height : "300px", 
    //     width: "100%", 
    //     backgroundColor: "#eae9ea",
    //     objectFit: "scale-down",
    // }
}))


function GridCard({ carArray }) {

    // const { carArray } = props.carArray;

    const classes = useStyles();

    const [ selected, setSelected ] = useState(false);
    const [ id, setId ] = useState();
    const history = useHistory();

    return(
        
        <div >
            {/* <Card> */}
            
                <CardActionArea 
                onClick={()=> {
                    setId(carArray._id)
                    id && history.push(generatePath("/cars/:id", { id }))}}>
                <CardHeader 
                    title={`${carArray?.company} ${carArray?.model}`}
                    action={
                        <ToggleButton
                            value={selected}
                            selected={selected}
                            // variant="contained"
                            onChange={() =>{
                                setSelected(!selected)
                            }}
                            style={{ borderRadius: 50, margin: 10, border: "5" }}
                            >
                                <FavoriteBorderIcon />
                        </ToggleButton>
                    } />
                    {/* <CardMedia image={carArray?.images[0]} 
                    className={classes.img} /> */}
                        <CardContent>
                            <Box>
                                <Grid item>
                                    <img className={classes.img} alt="CAR" src={carArray?.images[0]} />
                                </Grid>
                            </Box>
                            <Box display="flex" 
                            container 
                            direction="row" pt={3} >
                            <Box display="flex"  pl={1}>
                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                    <Typography>Full Price</Typography> 
                                </Box>
                                <Box color="#ceba97" > 
                                {carArray?.price} 
                                </Box>
                            </Box>
                            <Box display="flex" pl={3} >
                                <Box color="#919296" fontWeight="fontWeightMedium" >
                                <Typography>Monthly </Typography>
                                </Box>
                                <Box color="#ceba97"> 
                                {carArray?.price}
                                </Box>
                            </Box>
                            </Box>
                        </CardContent>
                </CardActionArea>
            {/* </Card> */}
        </div>
    )
}

export default GridCard;