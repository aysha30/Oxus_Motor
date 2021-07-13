import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import ListCard from './inventory-components/listCard';
import GridCard from './inventory-components/gridCard';
import SearchBox from './inventory-components/searchBox';
import OptionBar from './inventory-components/optionBar';
import { 
    Box, 
    Grid, 
    Typography,  
    Container } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

import axios from 'axios';
import { InventoryContext } from '../Context/InventoryContext/inventoryContext';

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


function Inventory() {

    const classes = useStyles();
    // const matches = useMediaQuery(theme.breakpoints.down("xs"));

    const [ listItems, setListItems ] = useState([]);
    const [ listvisible, setListVisible ] = useState(3);
    const moreListItems = () => {
        setListVisible((prevValue)=> prevValue + 3);
    }
    const [ view, setView ] = useState("list");
    const [ sort, setSort ] = useState(1);
    const [ bodyStyle, setBodyStyle ] = useState("Luxury");
    const [ searchfield, setSearchfield ] = useState('');

    //Adv search 
    const [ make, setMake ] = useState('Toyota');
    const [ model, setModel ] = useState('CH-R');
    const [ trim, setTrim ] = useState('XLE'); 
    const [ year, setYear ] = useState(2019);

    const [priceValue, setPriceValue] = useState([10,40]);
    const [mileageValue, setMileageValue] = useState([2,8]);
    const [dayValue, setDayValue] = useState([40,160]);

    const [ cylinder, setCylinder ] = useState(4);
    const [ cylinderType, setCylinderType ] = useState("Any");
    const [ condition, setCondition ] = useState("New");

    const [ extColor, setExtColor ] = useState("Any");
    const [ intColor, setIntColor ] = useState("Any");
    const [ extColType, setExtColType ] = useState("Convertible");

    const [ photo, setPhoto ] = useState(true);

    const [ advFilter, setAdvFilter ] = useState(false);
    

    useEffect(() => {
        var url = `/inventory/`;
        const apiUrl = (url) => {
        
            if(searchfield.length)
            {
                url = url + `company/${searchfield}/`;
            }
            else {
                url = url + `body_style/${bodyStyle}/`;
            }
            url = url + `${sort}`;
            return url;
        };
        if(!advFilter) {
            axios
            .get(apiUrl(url))
            .then(res => {
                setListItems(res.data.data);
            })
            .catch(err => {
                console.log(err)
            }) 
        }
        
    }, [bodyStyle, searchfield, sort, advFilter]);

    return (
        <React.Fragment>
            <Navbar />
            <InventoryContext.Provider 
            value={{
                listItems, setListItems,
                make, setMake, 
                model, setModel,
                trim, setTrim,
                year, setYear,
                priceValue, setPriceValue,
                mileageValue, setMileageValue,
                dayValue, setDayValue,
                cylinder, setCylinder,
                cylinderType, setCylinderType,
                condition, setCondition,
                extColor, setExtColor,
                intColor, setIntColor,
                extColType, setExtColType, 
                photo, setPhoto,
                sort,
                advFilter, setAdvFilter,
            }}>
            <Box 
            className={classes.root}
            >
            <Container style={{ marginTop: "100px"}} >
                    <Typography variant="h4" 
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
                    variant="h6"
                    paragraph >
                    Our company's car inventory
                    </Typography>
                </Container>

                <Grid>
                    <SearchBox searchChange={(e)=>setSearchfield(e.target.value)} />
                </Grid>

                <Grid>
                    <OptionBar passView={view => setView(view)} view={view} 
                    passBodyStyle={bodyStyle => setBodyStyle(bodyStyle)} bodyStyle={bodyStyle} 
                    passSort={sort => setSort(sort)} sort={sort}
                    />
                </Grid>
                {(view === "list")? 
                    <Grid container
                        direction="column" 
                        justify="center"
                        alignItems="stretch"
                        >
                        {listItems.slice(0, listvisible).map((item) => (
                            <Grid item key={item._id} >
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
                                <Grid item sm={6} xs={12} md={4} key={item._id}>
                                    <GridCard carArray={item}   />
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
            </InventoryContext.Provider>
            <Footer />
        </React.Fragment>
    );
}
export default Inventory;