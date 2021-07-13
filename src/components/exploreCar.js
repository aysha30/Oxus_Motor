import React from 'react'
import Slider from "react-slick";
import {
   Box,
   Grid,
   Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import './explore.css';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useState, useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      paddingTop: "1rem",
      height: "600px"
   }
}))

function ExploreCar() {

   const classes = useStyles();

   const NextArrow = ({ onClick }) => {
      return (
         <div className="arr nxt" onClick={onClick}>
            <KeyboardArrowRightIcon />
         </div>
      )
   }

   const PrevArrow = ({ onClick }) => {
      return (
         <div className="arr prv" onClick={onClick}>
            <KeyboardArrowLeftIcon />
         </div>
      )
   }

   const [imageIndex, setImageIndex] = React.useState(0);

   const [ list, setList ] = useState([]);

   useEffect(() => {
      var url = `/home/recent`;
      axios
      .get(url)
      .then(res => {
         // console.log(res.data.data);
         setList(res.data.data);
      })
      .catch(err => {
         console.log(err)
      }) 
   }, []);

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
            breakpoint: 1024,
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
         <Slider {...settings} style={{height: "400px"}}>
            {list.map((item, idx) => (
               <div key={uuidv4()} className={idx === imageIndex ? "sld acSld" : "sld"}>
                  <Grid container justifyContent="center" alignItems="center" >
                  <img className="image" src={item.images[0]} alt={item.company} />
                  
                  </Grid>
                  {(idx === imageIndex) ? 
                        <Typography align="center">
                        <Box fontWeight="fontWeightBold"> {item.company}{" "}{item.model} <br/> {item.year}</Box>
                        
                        </Typography>
                     : ""}
               </div>
            ))}
         </Slider>
      </div>
   )
}

export default ExploreCar;