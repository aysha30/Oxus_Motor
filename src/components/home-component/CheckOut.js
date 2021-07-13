import React from 'react'
import Slider from "react-slick";
import {
   Box,
   Typography, Grid,
} from '@material-ui/core';
import { makeStyles} from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import img1 from "./car01.jpg";
import img2 from "./car02.jpg";
import img3 from "./car03.png";
import img4 from "./car04.jpeg";
import './CheckOut.css';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles((theme) => ({
   root: {
      height: "400px",
      [theme.breakpoints.down('sm')]: {
         padding: "50px 20px 100px 20px",
      },
      [theme.breakpoints.up('sm')]: {
         padding: "5px 10px 90px 10px",
         marginBottom: "50px"

      },
   }


}))

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

function CheckOut() {

   const classes = useStyles();

   const NextArrow = ({ onClick }) => {
      return (
         <div className="ar nt" onClick={onClick}>
            <KeyboardArrowRightIcon />
         </div>
      )
   }

   const PrevArrow = ({ onClick }) => {
      return (
         <div className="ar pv" onClick={onClick}>
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
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,
      adaptiveHeight: false,
      // dots: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
      responsive: [
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
            }
         },
         // {
         //    breakpoint: 600,
         //    settings: {
         //       slidesToShow: 2,
         //       slidesToScroll: 1,
         //       initialSlide: 2
         //    }
         // },
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
         <Typography variant="h5"
                  align="center"
                  color="textPrimary">
                  <Box fontWeight={1000} style={{ padding: "0px 0px 30px" }} >
                     Check out Oxus Car Care
                  </Box>
               </Typography>
         <Slider {...settings} style={{height: "auto"}}>
            {images.map((imj, idx) => (
               <div key={uuidv4()} className={idx === imageIndex ? "sli aSlide" : "sli"}>
                  <Grid container alignItems="center" justifyContent="center">
                     <img src={imj} 
                     width="450px" 
                     height="300px"
                     alt={imj} />
                     
                  </Grid>
                  
               </div>
            ))}
         </Slider>
      </div>
   )
}

export default CheckOut;