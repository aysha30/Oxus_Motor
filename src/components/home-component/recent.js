import React from 'react'
import Slider from "react-slick";
import './recent.css';
import {
   Box,
   Typography,
   Paper,
   CardActionArea,
   Grid,
   CardContent,
   useMediaQuery,
   CardHeader
} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import img1 from "./card2.png";
import img2 from "./car3.png";
import img3 from "./car4.png";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      height: "400px",
      // paddingBottom: "50px",
      alignContent: "center"
   },
   paper: {
      borderRadius: 10,
   },

}))

const images = [img1, img2, img3, img1, img2, img3];

function RecentInOxus() {

   const classes = useStyles();
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down(700));

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
      slidesToShow: 5,
      speed: 300,
      autoplay: false,
      autoplaySpeed: 3000,
      lazyLoad: true,
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
         {
            breakpoint: 600,
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
      <div className='recent'>
         <Slider {...settings}>
            {images.map((img, idx) => (
               <div key={uuidv4()} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                  {/* <img src={img} alt={img} /> */}
                  <Paper className={classes.paper}>
                     <CardActionArea>
                        <CardHeader title={
                           <Typography align="center" variant="h5" >
                              <Box fontWeight="fontWeighBold" >
                                 BMW Car
                              </Box>
                           </Typography>
                        } />
                        {/* <CardMedia image={img}  /> */}
                        <CardContent>
                           <img src={img} alt={img} />
                           <Box display="flex">
                              <Grid item container justify="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Full Price&nbsp;</Typography>
                                 </Box>
                                 <Box >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}> $1025.25</Typography>
                                 </Box>
                              </Grid>
                              <Grid item container justify="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Monthly&nbsp; </Typography>
                                 </Box>
                                 <Box>
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>$1025.25</Typography>
                                 </Box>
                              </Grid>
                           </Box>
                           {(idx === imageIndex) ?
                              <Grid container justify="center">
                                 <Typography align="center" variant={matches ? 'subtitle1': 'caption'}>
                                    View details
                                 </Typography>
                              </Grid>
                              : ""}
                        </CardContent>
                     </CardActionArea>
                  </Paper>

               </div>
            ))}
         </Slider>
      </div>
   )
}

export default RecentInOxus;