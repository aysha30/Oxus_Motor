import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Typography, CardContent,
    Button, Paper, CardActionArea, CardActions, Container,
    IconButton,
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import img1 from "./card2.png";
import img2 from "./car3.png";
import img3 from "./car4.png";
import Slider from "react-slick";
import './latest.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            padding: "50px 20px 100px 20px",
        },
        [theme.breakpoints.up('sm')]: {
            padding: "5px 100px 100px 100px",

        },
    },
    paper: {
        width: "100%"
    }

}));

const images = [img1, img2, img3, img1, img2, img3];

function LatestNews() {
    const classes = useStyles();
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <KeyboardArrowRightIcon />
            </div>
        )
    }

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <KeyboardArrowLeftIcon />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = React.useState(0);

    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        lazyLoad: true,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={classes.root}>
            <Typography variant="h6"
                align="center"
                color="textPrimary">
                <Box fontSize={12}>Articles from blogs</Box>

                <Box fontWeight="fontWeightBold" style={{ padding: "0px 0px 30px" }} >
                    Our Latest News
                </Box>
            </Typography>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slides actSlide" : "slides"}>
                        <Paper className={classes.paper} square elevation={idx === imageIndex ? 7 : 1} >

                            {/* <img src={img}height="200px" alt={img} /> */}
                            <CardContent>
                                <div className="container">
                                    <img src={img} alt={img} />
                                    <IconButton className="btn" size="small" ><FavoriteBorderIcon /></IconButton>
                                </div>
                                <Typography variant="body2">
                                    <Box fontWeight="fontWeightBold">
                                        Car Name
                                    </Box>
                                    Date
                                </Typography>
                            </CardContent>
                            <CardActionArea >
                                <Grid container spacing={2} alignItems="center" justify="center" style={{ marginBottom: "20px" }} >
                                    <Button startIcon={<LocalOfferOutlinedIcon />}> <Box fontSize={15}>Cars</Box></Button>
                                    <Button startIcon={<LocalOfferOutlinedIcon />}> <Box fontSize={15}>News</Box></Button>
                                    <Button startIcon={<LocalOfferOutlinedIcon />}> <Box fontSize={15}>Fermentum</Box></Button>
                                </Grid>
                            </CardActionArea>
                        </Paper>
                    </div>


                ))}
            </Slider>
        </div>
    )
}

export default LatestNews
