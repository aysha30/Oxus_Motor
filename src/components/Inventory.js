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
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => { });

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
