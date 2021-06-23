// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

// export default function Navbar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar position="static" >
//                 <Toolbar>

//                     <Typography variant="h6" className={classes.title}>
//                         OXUS
//                     </Typography>
//                     <Button color="inherit">Home</Button>
//                     <Button color="inherit">Inventory</Button>
//                     <Button color="inherit">About</Button>
//                     <Button color="inherit">Contact</Button>
//                     <Button color="inherit">Oxus Car Care</Button>
//                     <Button color="inherit">Search</Button>

//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import OxusCare from "./oxusCare.js";
import logo from "../../assets/logo-big.png";

const useStyles = makeStyles((theme) => ({
   navmenu: {
      marginRight: theme.spacing(6),
   },
   grow: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "block",
      },
   },
   search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(3),
         width: "auto",
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   inputRoot: {
      color: "inherit",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
   sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
         display: "flex",
      },
   },
   sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
         display: "none",
      },
   },
}));

export default function Navbar() {
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   const [openCare, setOpenCare] = React.useState(false);

   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
   };

   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
   };

   const menuId = "primary-search-account-menu";
   // const renderMenu = (
   //     <Menu
   //         anchorEl={anchorEl}
   //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
   //         id={menuId}
   //         keepMounted
   //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
   //         open={isMenuOpen}
   //         onClose={handleMenuClose}
   //     >

   //     </Menu>
   // );

   const mobileMenuId = "primary-search-account-menu-mobile";
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{ vertical: "top", horizontal: "right" }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <Link underline="none" href="/">
            <MenuItem>
               <p>Home</p>
            </MenuItem>
         </Link>
         <Link underline="none" href="/Inventory">
            <MenuItem>
               <p>Inventory</p>
            </MenuItem>
         </Link>
         <Link underline="none" href="/About">
            <MenuItem>
               <p>About</p>
            </MenuItem>
         </Link>
         <Link underline="none" href="/Contact">
            <MenuItem>
               <p>Contact</p>
            </MenuItem>
         </Link>
         <Link underline="always" href="#">
            <MenuItem>
               <p>Oxus Car Care</p>
            </MenuItem>
         </Link>
         <MenuItem>
            <SearchIcon />
         </MenuItem>
      </Menu>
   );

   return (
      <div className={classes.grow}>
         <AppBar>
            <Toolbar>
               <Typography variant="h6" noWrap>
                  <img src={logo} 
                  height="30" 
                  alt="OXUS" />
               </Typography>

               <div className={classes.grow} />
               <div className={classes.sectionDesktop}>
                  <Typography className={classes.navmenu}>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        underline="hover"
                        color="inherit"
                        href="/"
                     >
                        {" "}
                        Home{" "}
                     </Link>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        underline="hover"
                        color="inherit"
                        href="/Inventory"
                     >
                        {" "}
                        Inventory{" "}
                     </Link>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        underline="hover"
                        color="inherit"
                        href="/About"
                     >
                        {" "}
                        About{" "}
                     </Link>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        underline="hover"
                        color="inherit"
                        href="/Contact"
                     >
                        {" "}
                        Contact{" "}
                     </Link>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        underline="always"
                        color="inherit"
                        onClick={() => setOpenCare(true)}
                     // href="#"
                     >
                        {" "}
                        Oxus Car Care{" "}
                     </Link>
                     <Link
                        className={classes.navmenu}
                        variant="string"
                        color="inherit"
                        href="#"
                     >
                        {" "}
                        <SearchIcon />{" "}
                     </Link>
                  </Typography>
               </div>
               <div className={classes.sectionMobile}>
                  <IconButton
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     aria-haspopup="true"
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
         {renderMobileMenu}
         {/* {renderMenu} */}
         <OxusCare
            openCare={openCare}
            setOpenCare={setOpenCare} >

         </OxusCare>
      </div>

   );
}
