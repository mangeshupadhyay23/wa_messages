import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as Mui from '@material-ui/core'
import Navbar from './Navbar';


const useStyles = makeStyles((theme) => ({
    hero: {
      backgroundImage: `linear-gradient(#EDF4F8, #FFF)`,
      height: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em"
      }
    },
    heroText:{ 
        color: "#000",
        fontFamily: "'Raleway',sans-serif", 
        fontSize: "62px",
        fontWeight: "600",
        lineHeight: "72px",
        margin: "0 0 24px",
        textAlign: "center", 
        textTransform: "uppercase",
        textShadow: "2px 2px 5px #fff",
        marginTop:"-20vh"
    }
  }));


export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar logo={"WA messages"} page={"home"}/>
            <Mui.Box className={classes.hero}>
                <Mui.Box className={classes.heroText}>
                    WA messages
                    <br/>
                    <Mui.Button variant="contained" color="primary"><a href="/signup" style={{textDecoration:"none",color:"white"}}>Sign Up For Free</a></Mui.Button>
                </Mui.Box>
            </Mui.Box>
            
        </div>
    )
}
