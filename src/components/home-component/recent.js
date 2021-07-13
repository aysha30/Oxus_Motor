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
   CardHeader,
   Divider
} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, generatePath } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      width: "100%",
      height: "400px",
      // paddingBottom: "50px",
      // alignContent: "center"
   },
   paper: {
      borderRadius: 10,
      margin: 0,
      padding: 0,
   },
   img: {
      height: 200,
      [theme.breakpoints.down(840)]:{
         width: "100%",
      },
      [theme.breakpoints.up('sm')]:{
         width: 300,
      },
   },
}))





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
   
   const [ id, setId ] = useState();
   const history = useHistory();

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
         <Slider {...settings} style={{width: "100vw", margin:"0px"}}>
            {list.map((item, idx) => (
               <div key={uuidv4()} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                  <Grid container justifyContent="center" alignItems="center" >
                     <Paper className={classes.paper}>
                     <CardActionArea>
                        <CardHeader title={
                           <Typography align="center" variant="h6" >
                              <Box fontWeight="fontWeighBold"  >
                                 {item.company}{" "}{item.model}
                              </Box>
                           </Typography>
                        } />
                        <Divider />
                        <CardContent>
                           <img className={classes.img} src={item.images[0]} alt={item.company} />
                        </CardContent>
                        
                        <Divider/>
                        
                        <CardContent>
                           
                           <Box display="flex">
                              <Grid item container justifyContent="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Full Price&nbsp;</Typography>
                                 </Box>
                                 <Box >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}> ${item.price}</Typography>
                                 </Box>
                              </Grid>
                              <Grid item container justifyContent="center">
                                 <Box fontWeight="fontWeightMedium" >
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>Monthly&nbsp; </Typography>
                                 </Box>
                                 <Box>
                                    <Typography variant={matches ? 'subtitle1': 'caption'}>${item.price}</Typography>
                                 </Box>
                              </Grid>
                           </Box>
                           {(idx === imageIndex) ?
                              <Grid container justifyContent="center">
                                 <Typography align="center" variant={matches ? 'subtitle1': 'caption'}
                                 onClick={()=> {
                                    setId(item._id)
                                    id && history.push(generatePath("/cars/:id", { id }))}}
                                 >
                                    View details
                                 </Typography>
                              </Grid>
                              : ""}
                        </CardContent>
                     </CardActionArea>
                  </Paper>

                  </Grid>
                  
               </div>
            ))}
         </Slider>
      </div>
   )
}

export default RecentInOxus;