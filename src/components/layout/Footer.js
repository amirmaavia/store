import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "blue",
        padding: "0.2rem",
    },
    footer: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontFamily: "'Ubuntu', sans-serif",
        background:"blue"
    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography className={classes.footer} variant="p">
                Copy Right.......... developed by Amir Maavia
            </Typography>            
        </Box>
    )
}

export default Footer
