import React from 'react'
import '../App.css'
import { useParams } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import data from "../data/data"
import { Link } from "react-router-dom"
import { Container, Typography, CardMedia, Card } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function ProductDetail() {

    const useStyles = makeStyles({
        root: {
            margin: "10px",
        },
        card: {
            width: "70%",
            margin: "5px",
            "&:hover": {
                backgroundColor: "none",
            },
        },
        CardMedia: {
            width: "100%",
            height: "100%",
        },
        title: {
            color: "Blue",
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: "bold",
            fontSize: "2rem",
            textDecoration: "none",
            "&:hover": {
                textDecoration: "none",
            }
        },
        price: {
            fontFamily: "'Ubuntu', sans-serif",
            color: "Black",
            fontWeight: "bold"
        },
        Button:{
            float: "right"
        },
        a:{
            textDecoration: "none",
            background: "Black"
        },
        "@media screen and (min-width: 0px) and (max-width: 600px)": {
            CardMedia: {
                width: "100%",
                height: "100%",
            }   
        }
    });

    const classes = useStyles()

    const { slug } = useParams()
    console.log(slug)
    const shoe = data.shoes[slug]

    if (!shoe) {
        return (
        <div className="productNotFount"><h1>Product Not Found</h1></div>
        )
    }
    const { name, img, price } = shoe
    return (
        <>
            <Link to="/">Back</Link>
            <Container>
                <Card>
                    <Typography className={classes.title} variant="h4" component="h4">{name}</Typography>
                    <CardMedia className={classes.CardMedia} component="img" alt={name} height="140" image={img} title={name} />
                    
                    <Typography className={} variant="h4" component="h4">
                   <Grid container  >
                   {/* <Grid item xs={12} sm={6} ><h1>{price}</h1></Grid> */}
                   <Grid item xs={12} sm={12} > <Button   variant="contained" style={{float:"right" , top:"2px"}} color="primary"><a href="https://forms.gle/34WaiLVTMPRh8px3A" ><ShoppingCartIcon className={classes.navIcon} /></a></Button></Grid>
                    </Grid>
                    </Typography>
                    
                </Card>
               
                
            </Container>
        </>
    )
}

export default ProductDetail
