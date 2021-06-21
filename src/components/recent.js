import React from 'react'
import Slider from "react-slick";
import '../recent.css';
import { 
    Box, 
    Typography, 
    Card,
    CardActionArea, 
    CardMedia, 
    CardContent ,
    useMediaQuery,
    CardHeader } from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import img1 from "../assets/card2.png";
import img2 from "../assets/car3.png";
import img3 from "../assets/car4.png";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100%",
        paddingBottom: "100px"
    }
}))

const images = [img1, img2, img3, img1, img2, img3];

function RecentInOxus() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <KeyboardArrowRightIcon />
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <KeyboardArrowLeftIcon />
            </div>
        )
    }

    const [ imageIndex, setImageIndex ] = React.useState(0);

    var settings = {
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 5,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 1000,
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
                slidesToScroll: 3,
                infinite: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
            <Slider {...settings}>
            {images.map((img, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img} alt={img} />
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default RecentInOxus;