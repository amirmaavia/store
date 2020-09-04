import React from 'react'
import { Container, Typography, Icon } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Icons from "./Icos"
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles({
    root: {
        height: "86vh",
        width: "50%",
        padding: "10px",
        paddingTop: "50px",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    name: {
        color: "blue",
        letterSpacing: "10px",
        marginTop: "30px"
    },
    large: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "200px",
        height: "200px",
        border: "blue 4px solid"
    },
    link:{
textDecoration: "none",
"&:hover": {
    textDecoration: "none"
}
    }
})

function About() {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            
                <Avatar alt="DP" src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-9/p720x720/99295298_2580241465626614_6242239664812457984_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeFp2VbsvJAbrlR0EQScs4ooSfvJQWDtV-JJ-8lBYO1X4hJP28I8AuV5tR2wIBNiKILUHzxtxsmT8_BvHsemYBk5&_nc_ohc=7xZBPk96A4oAX8GqoCF&_nc_ht=scontent.fkhi10-1.fna&_nc_tp=6&oh=8808cc9f1ce6e80d0200f19a4329ac16&oe=5F34CFB1"
                    className={classes.large} />
                <Typography className={classes.name} variant="h3">Amir MaaviYa</Typography>
          
            <Button variant="contained" color="primary"><a style={{textDecoration:"none", color:"white"}} href="https://github.com/amirmaavia/Shopping.git" target="_blank">
        Go to Code
        </a>
        
      </Button>
      <br/>
      <br/>
      <hr />
      <a className={classes.link} href="https://www.facebook.com/profile.php?id=100009223576836" target="_blank">
                <Typography className={classes.name} variant="p"><FacebookIcon /> </Typography>
                </a>
                <a className={classes.link} href="https://twitter.com/amir_maavia" target="_blank">
                <Typography className={classes.name} variant="p"><TwitterIcon  /> </Typography>
                </a>
                <a className={classes.link} href="https://www.instagram.com/amirmaavia231/" target="_blank">
                <Typography className={classes.name} variant="p"><InstagramIcon  /> </Typography>
                </a>
                <a className={classes.link} href="https://www.linkedin.com/in/amir-maavia-3644661a1/" target="_blank">
                <Typography className={classes.name} variant="p"><LinkedInIcon  /> </Typography>
                </a>
        </Container>
    )
}

export default About
