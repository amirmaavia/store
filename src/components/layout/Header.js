import React from 'react'
import { Typography, AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: "black"
    },
    nav: {
        color: "black",
        backgroundColor: "blue",
    },
    logo: {
        fontWeight: "bold",
        fontFamily: "'Yellowtail', cursive",
        flexGrow: 1,
        color: "white",
        textDecoration: "none",
        
    },
    navLink: {
        fontFamily: "'Ubuntu', sans-serif",
        color: "white",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "bold",
        // color: "white",
        paddingRight: "1rem",
        cursor: "pointer",
        "&:hover": {
            fontWeight: "bolder",
            color: "white",
            textDecoration: "none",
            transform: "rotate(-10deg)"
        }
    },
    navIcon: {
        cursor: "pointer",
        color: "white",
        "&:hover": {
            transform: "rotate(-10deg)",
        }
    }
}))


function Header() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <AppBar className={classes.nav} position="sticky">
                <Toolbar>
                    <Link className={classes.logo} to="/">                    
                        <Typography className={classes.logo} variant="h5">
                           <img src="https://scontent.fkhi21-1.fna.fbcdn.net/v/t1.0-9/118624167_106547451183497_7613659949066219436_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGSPsWPbXpKPo35Pcbd4zaaDxO0b4HNOPcPE7Rvgc049wB6MsR8MXmytmEFXK_FiozWCHtbCQE4JgX5z0gC3jbd&_nc_ohc=zECX0m0QTKYAX9S6Jba&_nc_ht=scontent.fkhi21-1.fna&oh=0f9604929dfeae9d65bbb17879935d4a&oe=601B782C" alt="logo" style={{height:"55px"}} />
                        </Typography>
                    </Link>
                    <Typography>
                        <Link to="/" className={classes.navLink} component="button"></Link>{" "}
                        {/* <Link to="/products" className={classes.navLink} component="button">Products</Link>{" "} */}
                        {/* <Link to="/about" className={classes.navLink} component="button">About</Link> */}
                    </Typography>
                    <Link to="/cart" className={classes.navLink} component="button"> 
                    <ShoppingCartIcon className={classes.navIcon} />
                    </Link>
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Header
