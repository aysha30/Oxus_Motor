import React from "react";
import Navbar from "./modules/Navbar";
import Footer from "./modules/Footer";
import ListCard from "./inventory-components/listCard";
import SearchBox from "./inventory-components/searchBox";
import OptionBar from "./inventory-components/optionBar";
import {
 Box,
 TextField,
 Grid,
 Typography,
 Button,
 useMediaQuery,
 Container,
} from "@material-ui/core";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
<<<<<<< HEAD
import SearchIcon from "@material-ui/icons/Search";
=======
import Pagination from '@material-ui/lab/Pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}))
>>>>>>> e09e15b75ef6c16fa55b13e65dbd131040375e74

const useStyles = makeStyles((theme) => {});

export default function Inventory() {
 const classes = useStyles();
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down("xs"));

 return (
  <React.Fragment>
   <Navbar />
   <Box className="flex-justify">
    <Container style={{ marginTop: "100px" }}>
     <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
      <Box fontWeight="fontWeightBold" m={1}>
       Inventory
      </Box>
     </Typography>
     <Typography
      align="center"
      color="textSecondary"
      variant="subtitle2"
      paragraph
     >
      Our company's car inventory
     </Typography>
    </Container>

    <Grid>
     <SearchBox />
    </Grid>

    <Grid>
     <OptionBar />
    </Grid>

<<<<<<< HEAD
    <Grid container direction="column">
     <Grid item bgcolor="secondary.light">
      <ListCard />
     </Grid>
     <Grid item bgcolor="secondary.light">
      <ListCard />
     </Grid>
    </Grid>
   </Box>
   <Footer />
  </React.Fragment>
 );
}
=======
                <Grid container 
                direction="column" 
                justify="center"
                alignItems="stretch"
                >
                    <Grid item >
                        <ListCard />
                    </Grid>
                    <Grid item >
                        <ListCard />
                    </Grid>
                    <Grid item >
                        <ListCard />
                    </Grid>
                    <Grid item style={{ width: "100vw", margin: "10px 0px 70px"}} container justify="center" >
                        <Fab color="#e8e8ea" aria-label="add" border={1} >
                            <AddIcon />
                        </Fab>
                    </Grid>
                    {/* <Pagination count={5} shape="rounded" /> */}
                </Grid>
            </Box>
            <Footer />
        </React.Fragment>
    );
}
>>>>>>> e09e15b75ef6c16fa55b13e65dbd131040375e74
