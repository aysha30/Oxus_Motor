import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import ListCard from './inventory-components/listCard';
import GridCard from './inventory-components/gridCard';
import SearchBox from './inventory-components/searchBox';
import OptionBar from './inventory-components/optionBar';
import { 
    Box, 
    TextField, 
    Grid, 
    Typography, 
    Button, 
    useMediaQuery, 
    Container } from '@material-ui/core';
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Details from './details';
import ChatBot from 'react-simple-chatbot';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        textAlign: "center"
    },
    gridCardContainer: {
        width: "100%",
        height: "100%",
        display: "flex",

    },
    chatFab: {
        position: "fixed",
        bottom: "5%",
        right: "5%",
        zIndex: theme.zIndex.tooltip,
    }
}))
const carArray = [
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz1",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://freepngimg.com/thumb/car/4-2-car-png-hd.png",
        name: "Mercedes Benz2",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png",
        name: "Mercedes Benz3",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://www.nicepng.com/png/detail/936-9365791_free-png-download-car-png-images-background-png.png",
        name: "Mercedes Benz4",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz5",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz6",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz7",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },
    {
        src: "https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png",
        name: "Mercedes Benz8",
        fullPrice: "  $50,000",
        monthly: "  $2,000",
        year: 2020,
        fuel: "Diesel",
        gear: "Full Automatic",
        km: 37400,
        bodyType: "SUV",
        enginePower: "125 hp"
    },

];




function Inventory() {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    const [ listItems, setListImtems ] = useState(carArray);
    const [ listvisible, setListVisible ] = useState(3);
    const moreListItems = () => {
        setListVisible((prevValue)=> prevValue + 3);
    }
    const [ view, setView ] = useState("list");

    

    return (
        <React.Fragment>
            <Navbar />
            <Box 
            className={classes.root}
            >
            <Container style={{ marginTop: "100px"}} >
                    <Typography variant="h5" 
                    align="center" 
                    color="textPrimary"
                    gutterBottom >
                    <Box fontWeight="fontWeightBold" m={1}>
                        Inventory
                    </Box>
                    </Typography>
                    <Typography 
                    align="center" 
                    color="textSecondary" 
                    variant="subtitle2"
                    paragraph >
                    Our company's car inventory
                    </Typography>
                </Container>

                <Grid>
                    <SearchBox />
                </Grid>

                <Grid>
                    <OptionBar passView={view => setView(view)} view={view} />
                </Grid>
                {(view === "list")? 
                    <Grid container
                        direction="column" 
                        justify="center"
                        alignItems="stretch"
                        >
                        {listItems.slice(0, listvisible).map((item) => (
                            <Grid item >
                                <ListCard  carArray={item}  />
                                {/* <Details /> */}
                            </Grid>
                        ))}  
                        
                        <Grid container style={{ width: "100%", margin: "10px 0px 70px"}} justify="center" >
                            <Grid item>
                                <Fab style={{bgcolor:"#e8e8ea"}} aria-label="add" border={1} onClick={moreListItems}  >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                
                :
                    <Container className={classes.gridCardContainer}>
                        <Grid container spacing={5}>
                            {listItems.slice(0, listvisible).map((item) => (
                                <Grid item sm={6} xs={12} md={4}>
                                    <GridCard carArray={item}  />
                                </Grid>
                            ))}
                            <Grid container style={{ width: "100%", margin: "10px 0px 70px"}} justify="center" >
                                <Grid item>
                                    <Fab style={{bgcolor:"#e8e8ea"}} aria-label="add" border={1} onClick={moreListItems}  >
                                        <AddIcon />
                                    </Fab>
                                </Grid>
                            </Grid> 
                            
                            
                        </Grid> 
                    </Container>
                }
                <Fab color="primary" className={classes.chatFab} 
                // onClick={() => { <ChatBot steps={steps} /> }}
                >
                <QuestionAnswerOutlinedIcon />
                </Fab>
                
                
                
            </Box>
            <Footer />
        </React.Fragment>
    );
}
export default Inventory;